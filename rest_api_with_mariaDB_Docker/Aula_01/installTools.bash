#!/bin/bash

# Função para exibir mensagens coloridas
print_color() {
  local color=$1
  local message=$2
  case $color in
    "green") echo -e "\e[32m$message\e[0m" ;;
    "red") echo -e "\e[31m$message\e[0m" ;;
    "yellow") echo -e "\e[33m$message\e[0m" ;;
    "blue") echo -e "\e[34m$message\e[0m" ;;
    *) echo "$message" ;;
  esac
}

# Função para exibir barras de progresso
progress_bar() {
  local duration=$1
  for ((i=0; i<$duration; i++)); do
    echo -ne "#"
    sleep 0.1
  done
  echo -ne "\n"
}

# Verificação se o script está rodando como root
if [ "$EUID" -ne 0 ]; then
  print_color "red" "Por favor, execute o script como root."
  exit
fi

# Detectar se o sistema tem apt-get instalado
if ! command -v apt-get &> /dev/null
then
  print_color "red" "O apt-get não está instalado no sistema."

  # Pergunta ao usuário se ele deseja instalar o apt-get
  read -p "Deseja instalar o apt-get? (Y/N): " resposta
  case "$resposta" in
    [Ss]|[Ss]im|[Yy]|[Yy]es)
      print_color "yellow" "Tentando instalar o apt-get..."

      # Dependendo da distribuição, a instalação do apt-get pode variar
      # Aqui estamos tentando usar o comando de instalação padrão para pacotes dpkg ou apt
      if command -v dpkg &> /dev/null; then
        print_color "blue" "Instalando apt-get..."
        apt-get update && apt-get install -y apt
        print_color "green" "apt-get instalado com sucesso!"
      else
        print_color "red" "Não foi possível instalar o apt-get. O sistema não é compatível."
        exit 1
      fi
      ;;
    [Nn]|[Nn]ao|[Nn]ão|[Nn]o)
      print_color "red" "O script será cancelado, já que o apt-get é necessário para continuar."
      exit 1
      ;;
    *)
      print_color "red" "Resposta inválida. O script será cancelado."
      exit 1
      ;;
  esac
fi

# Desinstalação do Docker, se já estiver instalado
print_color "yellow" "Verificando se Docker está instalado..."
if [ -x "$(command -v docker)" ]; then
  print_color "blue" "Docker detectado, removendo Docker e seus componentes anteriores..."
  apt-get remove -y docker docker-engine docker.io containerd runc
  apt-get purge -y docker-ce docker-ce-cli containerd.io
  apt-get autoremove -y
  rm -rf /var/lib/docker /etc/docker
  print_color "green" "Docker removido com sucesso!"
else
  print_color "yellow" "Docker não detectado, continuando a instalação..."
fi

# Atualizando o sistema antes da instalação
print_color "blue" "Atualizando sistema..."
progress_bar 30
apt-get update && apt-get upgrade -y
print_color "green" "Sistema atualizado com sucesso!"

# Instalação do Docker
print_color "blue" "Instalando Docker..."
progress_bar 50
apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update
apt-get install -y docker-ce
print_color "green" "Docker instalado com sucesso!"

# Configurando Docker para iniciar automaticamente
systemctl start docker
systemctl enable docker
print_color "green" "Docker configurado para iniciar automaticamente!"

# Solicita o nome do contêiner e senha do MariaDB
read -p "Digite o nome do contêiner MariaDB (padrão: mariadb-container): " MARIADB_CONTAINER
MARIADB_CONTAINER=${MARIADB_CONTAINER:-mariadb-container}

read -p "Digite a senha ROOT do MariaDB (padrão: my-secret-pw): " MARIADB_ROOT_PASSWORD
MARIADB_ROOT_PASSWORD=${MARIADB_ROOT_PASSWORD:-my-secret-pw}

# Configuração e execução do contêiner MariaDB
print_color "blue" "Configurando o contêiner MariaDB..."
docker run --name $MARIADB_CONTAINER -e MYSQL_ROOT_PASSWORD=$MARIADB_ROOT_PASSWORD -p 3306:3306 -d mariadb:latest
print_color "green" "MariaDB configurado e rodando no contêiner $MARIADB_CONTAINER."

# Verifica se o MySQL Workbench está instalado e o instala, se necessário
print_color "blue" "Instalando MySQL Workbench..."
if ! dpkg -l | grep -qw mysql-workbench; then
  apt-get install -y mysql-workbench
  print_color "green" "MySQL Workbench instalado com sucesso!"
else
  print_color "yellow" "MySQL Workbench já está instalado!"
fi

# Verifica se o Insomnia está instalado e o instala, se necessário
print_color "blue" "Instalando Insomnia..."
if ! dpkg -l | grep -qw insomnia; then
  # Adiciona o repositório do Insomnia
  echo "deb https://dl.bintray.com/getinsomnia/Insomnia /" | tee -a /etc/apt/sources.list.d/insomnia.list
  wget --quiet -O - https://insomnia.rest/keys/debian-public.key.asc | apt-key add -
  apt-get update
  apt-get install -y insomnia
  print_color "green" "Insomnia instalado com sucesso!"
else
  print_color "yellow" "Insomnia já está instalado!"
fi

# Atualização final do sistema
print_color "blue" "Finalizando com atualização do sistema..."
progress_bar 30
apt-get update && apt-get upgrade -y
print_color "green" "Processo concluído com sucesso! Docker, Insomnia, Container MariaDB e MySQL Workbench instalados !"
