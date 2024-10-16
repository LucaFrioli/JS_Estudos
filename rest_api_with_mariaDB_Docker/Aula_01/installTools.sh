#!/bin/bash

# Atualiza o sistema
sudo apt update && sudo apt upgrade -y
echo "Pacotes de repositórios atualizados com sucesso, pressione qualquer tecla para continuar :"
read -n 1 -s

# REMOVE VERSÕES ANTERIORES DO DOCKER
sudo apt-get remove --purge \
    docker \
    docker-engine \
    docker.io \
    containerd runc -y
echo "Se existiam versões do docker antigas elas foram removidas, pressione qualquer tecla para continuar :"
read -n 1 -s

# Atualiza a lista de pacotes
sudo apt update
echo "Atualização de reposítórios concluidas, pressione qualquer tecla para continuar :"
read -n 1 -s

# Instala dependências necessárias
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    software-properties-common
echo "Intalado dependências necessárias para a instalação do docker, pressione qualquer tecla para continuar :"
read -n 1 -s

# Adiciona a chave GPG do Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "Adicionada chave do docker, pressione qualquer tecla para continuar :"
read -n 1 -s

# Adiciona o repositório do Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
echo "Adicionado repositório do docker, pressione qualquer tecla para continuar :"
read -n 1 -s

# Atualiza a lista de pacotes novamente
sudo apt update
echo "Atualizando lista de repositórios, pressione qualquer tecla para continuar :"
read -n 1 -s

# Instala o Docker CE
sudo apt install -y docker-ce docker-ce-cli containerd.io
echo "Instalado os componentes do docker, agora iremos reiniciar o serviço e habilitar o docker na inicialização, pressione qualquer tecla para continuar :"
read -n 1 -s

# Reinicia o serviço do Docker
sudo systemctl restart docker

# Habilita o Docker para iniciar na inicialização
sudo systemctl enable docker
echo "Docker habilitado na inicialização do sistema, pressione qualquer tecla para continuar :"
read -n 1 -s


# Adiciona o usuário atual ao grupo docker
sudo usermod -aG docker $USER

echo "Você precisa sair e entrar novamente ou executar 'newgrp docker' para aplicar as mudanças no grupo."

# Verifica a versão do Docker
docker --version
echo "Docker instalado com êxito, pressione qualquer tecla para continuar :"
read -n 1 -s

# Passo 11: Atualiza a lista de pacotes e progrmas instalados
sudo apt update && sudo apt upgrade -y
echo "Pacotes de repositórios atualizados com sucesso, pressione qualquer tecla para continuar :"
read -n 1 -s


# Verifica se o Snap está disponível
if command -v snap &> /dev/null; then
    echo "Snap está disponível. Instalando o MySQL Workbench e Insomnia..."

    # Instala o MySQL Workbench
    sudo snap install mysql-workbench-community

    # Instala o Insomnia
    sudo snap install insomnia
else
    echo "Snap não está disponível. Por favor, instale o Snap ou utilize outro método para instalar o MySQL Workbench e Insomnia."
fi

echo "Instalação concluída. Verifique se todos os serviços estão rodando corretamente."
