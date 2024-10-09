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

# Verificação se o script está rodando como root ou com sudo
check_root() {
  if [ "$(uname)" = "Linux" ] || [ "$(uname)" = "Darwin" ]; then
    if [ "$(id -u)" -ne 0 ]; then
      print_color "red" "Este script precisa ser executado como root ou com sudo."
      if [ "$(uname)" = "Linux" ]; then
        print_color "yellow" "Execute: sudo $0"
      elif [ "$(uname)" = "Darwin" ]; then
        print_color "yellow" "Execute: sudo sh $0"
      fi
      exit 1
    fi
  fi
}

# Chama a função de verificação de root
check_root

# Função para verificar e instalar o gerenciador de pacotes
install_package_manager() {
  local package_manager=""

  # Verifica os gerenciadores de pacotes mais comuns
  if command -v apt-get >/dev/null 2>&1; then
    package_manager="apt-get"
  elif command -v brew >/dev/null 2>&1; then
    package_manager="brew"
  elif command -v yum >/dev/null 2>&1; then
    package_manager="yum"
  elif command -v dnf >/dev/null 2>&1; then
    package_manager="dnf"
  elif command -v pacman >/dev/null 2>&1; then
    package_manager="pacman"
  elif command -v zypper >/dev/null 2>&1; then
    package_manager="zypper"
  elif command -v emerge >/dev/null 2>&1; then
    package_manager="emerge"
  fi

  # Permite que o usuário especifique o gerenciador manualmente
  if [ -z "$package_manager" ]; then
    read -p "Não foi possível detectar o gerenciador de pacotes. Informe o gerenciador a ser utilizado (ex: apt-get, yum, brew, pacman, etc.): " package_manager
  fi

  # Verifica se o gerenciador especificado é válido
  if ! command -v "$package_manager" >/dev/null 2>&1; then
    print_color "red" "O gerenciador de pacotes '$package_manager' não foi encontrado."
    exit 1
  fi

  print_color "green" "Gerenciador de pacotes '$package_manager' detectado!"
  echo "$package_manager"
}

# Função genérica para instalar pacotes em diferentes gerenciadores
install_package() {
  local package_manager=$1
  local package=$2

  case $package_manager in
    apt-get)
      apt-get install -y "$package" || { print_color "red" "Falha ao instalar $package"; exit 1;}
      ;;
    brew)
      brew install "$package" || { print_color "red" "Falha ao instalar $package"; exit 1;}
      ;;
    yum | dnf)
      $package_manager install -y "$package" || { print_color "red" "Falha ao instalar $package"; exit 1;}
      ;;
    pacman)
      pacman -S --noconfirm "$package" || { print_color "red" "Falha ao instalar $package"; exit 1;}
      ;;
    zypper)
      zypper install -y "$package" || { print_color "red" "Falha ao instalar $package"; exit 1;}
      ;;
    emerge)
      emerge "$package" || { print_color "red" "Falha ao instalar $package"; exit 1;}
      ;;
    *)
      print_color "red" "Gerenciador de pacotes '$package_manager' não é suportado."
      exit 1
      ;;
  esac

  print_color "green" "$package instalado com sucesso!"
}

# Função genérica para desinstalar pacotes em diferentes gerenciadores
remove_package() {
  local package_manager=$1
  local package=$2

  case $package_manager in
    apt-get)
      apt-get remove -y "$package" || { print_color "red" "Falha ao remover $package"; exit 1;}
      ;;
    brew)
      brew uninstall "$package" || { print_color "red" "Falha ao remover $package"; exit 1;}
      ;;
    yum | dnf)
      $package_manager remove -y "$package" || { print_color "red" "Falha ao remover $package"; exit 1;}
      ;;
    pacman)
      pacman -Rns --noconfirm "$package" || { print_color "red" "Falha ao remover $package"; exit 1;}
      ;;
    zypper)
      zypper remove -y "$package" || { print_color "red" "Falha ao remover $package"; exit 1;}
      ;;
    emerge)
      emerge -C "$package" || { print_color "red" "Falha ao remover $package"; exit 1;}
      ;;
    *)
      print_color "red" "Gerenciador de pacotes '$package_manager' não é suportado."
      exit 1
      ;;
  esac

  print_color "green" "$package removido com sucesso!"
}

# Função para verificar se um pacote está instalado
is_installed() {
  local package_manager=$1
  local package=$2

  case $package_manager in
    apt-get)
      dpkg -l | grep -w "$package" >/dev/null 2>&1
      ;;
    brew)
      brew list | grep -w "$package" >/dev/null 2>&1
      ;;
    yum | dnf)
      rpm -qa | grep -w "$package" >/dev/null 2>&1
      ;;
    pacman)
      pacman -Q | grep -w "$package" >/dev/null 2>&1
      ;;
    zypper)
      zypper search --installed-only "$package" >/dev/null 2>&1
      ;;
    emerge)
      equery list "$package" >/dev/null 2>&1
      ;;
    *)
      print_color "red" "Verificação de pacotes não suportada para '$package_manager'."
      return 1
      ;;
  esac
}

# Função para atualizar repositórios
update_repositories() {
  local package_manager=$1

  print_color "blue" "Atualizando repositórios..."
  case $package_manager in
    apt-get)
      apt-get update || { print_color "red" "Falha ao atualizar repositórios"; exit 1;}
      ;;
    dnf | yum)
      $package_manager check-update || { print_color "red" "Falha ao atualizar repositórios"; exit 1;}
      ;;
    pacman)
      pacman -Sy || { print_color "red" "Falha ao atualizar repositórios"; exit 1;}
      ;;
    zypper)
      zypper refresh || { print_color "red" "Falha ao atualizar repositórios"; exit 1;}
      ;;
    emerge)
      emerge --sync || { print_color "red" "Falha ao atualizar repositórios"; exit 1;}
      ;;
    brew)
      brew update || { print_color "red" "Falha ao atualizar repositórios"; exit 1;}
      ;;
    *)
      print_color "red" "Atualização de repositórios não suportada para $package_manager."
      exit 1
      ;;
  esac
}


# Função para atualizar pacotes instalados
upgrade_packages() {
  local package_manager=$1

  print_color "blue" "Atualizando pacotes instalados..."
  case $package_manager in
    apt-get)
      apt-get upgrade -y || { print_color "red" "Falha ao atualizar pacotes"; exit 1;}
      ;;
    dnf | yum)
      $package_manager upgrade -y || { print_color "red" "Falha ao atualizar pacotes"; exit 1;}
      ;;
    pacman)
      pacman -Su --noconfirm || { print_color "red" "Falha ao atualizar pacotes"; exit 1;}
      ;;
    zypper)
      zypper update -y || { print_color "red" "Falha ao atualizar pacotes"; exit 1;}
      ;;
    emerge)
      emerge --update --deep @world || { print_color "red" "Falha ao atualizar pacotes"; exit 1;}
      ;;
    brew)
      brew upgrade || { print_color "red" "Falha ao atualizar pacotes"; exit 1;}
      ;;
    *)
      print_color "red" "Atualização de pacotes não suportada para $package_manager."
      exit 1
      ;;
  esac

  print_color "green" "Pacotes atualizados com sucesso!"
}

# Função para instalar o Docker
install_docker() {
  local package_manager=$1

  # Passo 1: Remover versões anteriores do Docker
  print_color "blue" "Removendo versões anteriores do Docker..."
  remove_package "$package_manager" "docker"
  remove_package "$package_manager" "docker-engine"
  remove_package "$package_manager" "docker.io"
  remove_package "$package_manager" "containerd"
  remove_package "$package_manager" "runc"

  # Passo 2: Atualizar os repositórios
  update_repositories "$package_manager"

  # Passo 3: Instalar dependências do Docker
  print_color "blue" "Instalando dependências do Docker..."
  case "$package_manager" in
    apt-get)
      install_package "$package_manager" "apt-transport-https"
      install_package "$package_manager" "ca-certificates"
      install_package "$package_manager" "curl"
      install_package "$package_manager" "gnupg-agent"
      install_package "$package_manager" "software-properties-common"
      ;;
    yum | dnf)
      install_package "$package_manager" "yum-utils"
      install_package "$package_manager" "device-mapper-persistent-data"
      install_package "$package_manager" "lvm2"
      ;;
    pacman | zypper | emerge | brew)
      install_package "$package_manager" "docker"
      ;;
    *)
      print_color "red" "Instalação de dependências não suportada para $package_manager."
      exit 1
      ;;
  esac

  # Passo 4: Adicionar a chave GPG do repositório Docker (apenas para apt-get)
  if [ "$package_manager" = "apt-get" ]; then
    print_color "blue" "Adicionando a chave GPG do repositório Docker..."
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
  fi

  # Passo 5: Adicionar o repositório do Docker
  if [ "$package_manager" = "apt-get" ]; then
    print_color "blue" "Adicionando o repositório do Docker..."
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" -y
  fi

  # Passo 6: Atualizar os repositórios novamente
  update_repositories "$package_manager"

  # Passo 7: Instalar o Docker
  print_color "blue" "Instalando Docker..."
  case "$package_manager" in
    apt-get)
      install_package "$package_manager" "docker-ce"
      install_package "$package_manager" "docker-ce-cli"
      install_package "$package_manager" "containerd.io"
      ;;
    dnf | yum)
      install_package "$package_manager" "docker"
      ;;
    pacman | zypper | emerge | brew)
      install_package "$package_manager" "docker"
      ;;
    *)
      print_color "red" "Instalação do Docker não suportada para $package_manager."
      exit 1
      ;;
  esac
}

# Chama a função para instalar o gerenciador de pacotes
package_manager=$(install_package_manager)
# Chama a função para instalar o Docker
install_docker "$package_manager"

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
  docker ps
  print_color "green" "MariaDB configurado e rodando no contêiner $MARIADB_CONTAINER."
else
  print_color "red" "Falha ao iniciar o contêiner MariaDB."
  exit 1
fi

# Instalação do MySQL Workbench e Insomnia
print_color "blue" "Instalando MySQL Workbench e Insomnia..."
install_package "$package_manager" "mysql-workbench"
install_package "$package_manager" "insomnia"

# Atualização dos repositórios
print_color "blue" "Atualizando repositórios..."
update_repositories "$package_manager"

# Atualização dos pacotes
print_color "blue" "Atualizando pacotes..."
upgrade_packages "$package_manager"

print_color "green" "Processo concluído com sucesso!"
exit 0
