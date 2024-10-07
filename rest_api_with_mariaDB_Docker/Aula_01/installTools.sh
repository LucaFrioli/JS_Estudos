#!/usr/bin/env sh
set -e  # Para garantir que o script pare se algum comando falhar

# Função para exibir mensagens coloridas
print_color() {
  local color=$1
  local message=$2
  case $color in
    "green") echo -e "\033[32m$message\033[0m" ;;
    "red") echo -e "\033[31m$message\033[0m" ;;
    "yellow") echo -e "\033[33m$message\033[0m" ;;
    "blue") echo -e "\033[34m$message\033[0m" ;;
    *) echo "$message" ;;
  esac
}

# Função para exibir barras de progresso (fake progress bar for aesthetic)
progress_bar() {
  local duration=$1
  for i in $(seq 1 $duration); do
    echo -ne "#"
    sleep 0.15
  done
  echo -ne "\n"
}

# Verificação se o script está rodando como root (apenas para Linux)
if [ "$(uname)" = "Linux" ] && [ "$EUID" -ne 0 ]; then
  print_color "red" "Por favor, execute o script como root."
  exit 1
fi

# Função para verificar e instalar apt-get ou brew
install_package_manager() {
  if command -v apt-get >/dev/null 2>&1; then
    print_color "green" "Sistema baseado em Linux com apt-get detectado!"
  elif command -v brew >/dev/null 2>&1; then
    print_color "green" "Sistema macOS detectado com brew!"
  else
    if [ "$(uname)" = "Linux" ]; then
      print_color "red" "O apt-get não está instalado no sistema."
      read -p "Deseja tentar instalar o apt-get? (Y/N): " resposta
      case "$resposta" in
        [Ss]|[Yy])
          print_color "yellow" "Tentando instalar o apt-get..."
          if command -v dpkg &> /dev/null; then
            print_color "blue" "Instalando apt-get..."
            apt-get update && apt-get install -y apt
            print_color "green" "apt-get instalado com sucesso!"
          else
            print_color "red" "Não foi possível instalar o apt-get. O sistema não é compatível."
            exit 1
          fi
          ;;
        [Nn])
          print_color "red" "O script será cancelado, já que o apt-get é necessário para continuar."
          exit 1
          ;;
        *)
          print_color "red" "Resposta inválida. O script será cancelado."
          exit 1
          ;;
      esac
    elif [ "$(uname)" = "Darwin" ]; then
      print_color "red" "Homebrew não encontrado no macOS."
      read -p "Deseja instalar o Homebrew? (Y/N): " resposta
      case "$resposta" in
        [Ss]|[Yy])
          print_color "yellow" "Instalando Homebrew..."
          /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
          print_color "green" "Homebrew instalado com sucesso!"
          ;;
        [Nn])
          print_color "red" "O script será cancelado, já que o Homebrew é necessário para continuar."
          exit 1
          ;;
        *)
          print_color "red" "Resposta inválida. O script será cancelado."
          exit 1
          ;;
      esac
    else
      print_color "red" "Sistema não suportado."
      exit 1
    fi
  fi
}

# Verificação se o apt-get ou brew está instalado
install_package_manager

# Função para instalar pacotes com apt-get ou brew
install_package() {
  local package=$1
  if command -v apt-get >/dev/null 2>&1; then
    apt-get install -y $package
    if [ $? -ne 0 ]; then
      print_color "red" "Falha ao instalar $package."
      exit 1
    fi
  elif command -v brew >/dev/null 2>&1; then
    brew install $package
    if [ $? -ne 0 ]; then
      print_color "red" "Falha ao instalar $package."
      exit 1
    fi
  else
    print_color "red" "Gerenciador de pacotes não suportado."
    exit 1
  fi
}

# Função para verificar se um pacote já está instalado
is_installed() {
  local package=$1
  if command -v apt-get >/dev/null 2>&1; then
    dpkg -l | grep -w "$package" >/dev/null 2>&1
  elif command -v brew >/dev/null 2>&1; then
    brew list | grep -w "$package" >/dev/null 2>&1
  fi
}

# Desinstalação do Docker, se já estiver instalado
print_color "yellow" "Verificando se Docker está instalado..."
if command -v docker >/dev/null 2>&1; then
  print_color "blue" "Docker detectado, removendo Docker e seus componentes anteriores..."
  install_package "docker"
  apt-get remove -y docker docker-engine docker.io containerd runc || brew uninstall --cask docker
  if [ $? -ne 0 ]; then
    print_color "red" "Falha ao remover o Docker."
    exit 1
  fi
  apt-get purge -y docker-ce docker-ce-cli containerd.io || true
  apt-get autoremove -y || true
  rm -rf /var/lib/docker /etc/docker
  print_color "green" "Docker removido com sucesso!"
else
  print_color "yellow" "Docker não detectado, continuando a instalação..."
fi

# Atualizando o sistema antes da instalação
print_color "blue" "Atualizando sistema..."
progress_bar 30
if command -v apt-get >/dev/null 2>&1; then
  apt-get update && apt-get upgrade -y
else
  brew update
fi
print_color "green" "Sistema atualizado com sucesso!"

# Instalação do Docker
print_color "blue" "Instalando Docker..."
progress_bar 50
install_package "docker-ce"
install_package "docker-ce-cli"
install_package "containerd.io"
print_color "green" "Docker instalado com sucesso!"

# Configurando Docker para iniciar automaticamente (Linux)
if [ "$(uname)" = "Linux" ]; then
  systemctl start docker
  systemctl enable docker
  print_color "green" "Docker configurado para iniciar automaticamente!"
fi

# Solicita o nome do contêiner e senha do MariaDB
read -p "Digite o nome do contêiner MariaDB (padrão: mariadb-container): " MARIADB_CONTAINER
MARIADB_CONTAINER=${MARIADB_CONTAINER:-mariadb-container}

read -p "Digite a senha ROOT do MariaDB (padrão: my-secret-pw): " MARIADB_ROOT_PASSWORD
MARIADB_ROOT_PASSWORD=${MARIADB_ROOT_PASSWORD:-my-secret-pw}

# Configuração e execução do contêiner MariaDB
print_color "blue" "Configurando o contêiner MariaDB..."
docker run --restart always -d --name "$MARIADB_CONTAINER" -e MYSQL_ROOT_PASSWORD="$MARIADB_ROOT_PASSWORD" -p 3306:3306 mariadb:latest
if [ $? -eq 0 ]; then
  print_color "green" "MariaDB configurado e rodando no contêiner $MARIADB_CONTAINER."
else
  print_color "red" "Falha ao iniciar o contêiner MariaDB."
  exit 1
fi

# Verifica e instala MySQL Workbench e Insomnia, se ainda não instalados
print_color "blue" "Instalando MySQL Workbench e Insomnia..."
if ! is_installed "mysql-workbench"; then
  install_package "mysql-workbench"
else
  print_color "yellow" "MySQL Workbench já está instalado."
fi

if ! is_installed "insomnia"; then
  install_package "insomnia"
else
  print_color "yellow" "Insomnia já está instalado."
fi
print_color "green" "MySQL Workbench e Insomnia instalados com sucesso!"

# Atualização final do sistema
print_color "blue" "Finalizando com atualização do sistema..."
progress_bar 30
if command -v apt-get >/dev/null 2>&1; then
  apt-get update && apt-get upgrade -y
else
  brew update && brew upgrade
fi
print_color "green" "Processo concluído com sucesso!"
