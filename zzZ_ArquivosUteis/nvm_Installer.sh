#!/bin/bash

# Função para remover o Node.js
function remover_node() {
  # Verifica se o Node.js está instalado
  if [ -d "/usr/local/bin/node" ]; then
    echo "Removendo o Node.js..."

    # Remove os arquivos do Node.js
    sudo apt purge --auto-remove nodejs -y
    sudo rm /etc/apt/sources.list.d/nodesource.list*

    echo "Node.js removido com sucesso!"
  else
    echo "O Node.js não está instalado."
  fi
}

# Função para remover o NVM
function remover_nvm() {
  # Verifica se o NVM está instalado
  if [ -d "$HOME/.nvm" ]; then
    echo "Removendo o NVM..."

    # Remove os arquivos do NVM
    rm -rf "$HOME/.nvm"

    # Remove as linhas do NVM do arquivo de perfil
    sed -i '/nvm/d' "$HOME/.bashrc"
    sed -i '/nvm/d' "$HOME/.zshrc"

    echo "NVM removido com sucesso!"
  else
    echo "O NVM não está instalado."
  fi
}

# Remove o Node.js
remover_node

# Remove o NVM
remover_nvm

# Instala o curl
sudo apt install curl -y

# Instala a última versão do NVM (v0.40.1) troque os números da versão caso seja necessário atualizar
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

echo "NVM instalado com sucesso!"

# Ativa o NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# Verifica a versão do NVM
nvm --version

# Instala a versão mais recente do Node.js (LTS)
nvm install --lts

echo "Versão mais recente do Node.js LTS instalada!"

# Pergunta ao usuário se deseja instalar outras versões do Node.js
read -p "Deseja instalar outras versões do Node.js? (s/n): " resposta

if [ "$resposta" = "s" ] || [ "$resposta" = "S" ]; then
  # Espera até que todas as instalações em andamento sejam concluídas
  while nvm ls-remote | grep -q "downloading"; do
    sleep 1
  done

  # Lista as versões disponíveis do Node.js
  echo "Versões disponíveis do Node.js:"
  nvm ls-remote

  # Solicita ao usuário para escolher as versões a serem instaladas
  read -p "Digite as versões que deseja instalar separadas por espaço: " versoes

  # Instala as versões selecionadas do Node.js
  nvm install $versoes

  # Espera até que todas as instalações em andamento sejam concluídas
  while nvm ls-remote | grep -q "downloading"; do
    sleep 1
  done

  # Mostra todas as versões instaladas localmente 
  nvm ls

  # Pergunta ao usuário qual versão deseja usar
  read -p "Qual versão do Node.js você gostaria de usar? Digite o número da versão: " versao_selecionada

  # Define a versão selecionada como padrão
  nvm use $versao_selecionada

  echo "Versão $versao_selecionada do Node.js está agora em uso!"

fi

echo "Bom desenvolvimento !"

# Fim do programa !


