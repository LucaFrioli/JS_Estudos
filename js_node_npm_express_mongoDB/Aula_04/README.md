# Atualizando o Node para a ultima Long Time Suported(LTS):

## **Para Usuarios de windows**
Para usuários de windows basta desinstalar a versão atual, ir no [site oficial](https://nodejs.org/en), e baixar o intalador da versão LTS disponivel no momento.

Utilize o Painel de controle.

## **Para usuarios de Mac OS**
Para usuários de Mac OS recomendo utilizar o `nvm`. Para averiguar se ele está instalado primeiramente abriremos o terminal e iremos digitar o seguinte código :

~~~bash
### caso esteja insatlado aparecerá a versão, caso não aparecerá um erro
nvm -v
~~~

### 1. **Caso o nvm não estiver instalado:**

Primeiro iremos precisar instalar a ferramenta, para isso utilizaremos o seguinte comando :

~~~bash
#rode toda a linha de código para instalar o nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

#assim que terminar de rodar deverá aparecer algo similar a isto, algumas nuances podem mudar :
# !!!!!!!!!!!! Copie tudo que estiver a baixo do export que aparecer em seu terminal
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

#após isso cole na linha de execução do terminal(a linha que utilizará para outros comandos) e rode o comando;
~~~

Após isto rode novamente `nvm -v`, agora sim é para aperecer a versão.

### 2. **Quando o nvm estiver instalado:**

#### 2.1. **Atualizando o Node:**
Agora está na hora de atualizar, primeiramente vamos ver em qual versão está nosso node, só para ter certeza que a atualização foi bem sucedida. Após isso rodaremos o nvm para atualiza-lo, após isso irá aparecer para qual versão foi atualizado :

~~~bash
node -v
# Aparece pem qual versão o node está atualmente

##Para atualizar o node
nvm install node

#rodaremos o primeiro comando apenas para averiguar se está tudo certo
node -v
~~~

#### 2.2. **Atualizando o npm**

Para atualizar a npm utilizaremos um processo um pouco diferente do anterior, primeiro iremos averiguar a versão em que a npm está, e depois executar o comando de atualização :

~~~bash
# primeiro averiguaremos a versão atual
npm -v

# rodaremos o comando para atualizar o npm
npm install -g npm

#averiguaremos se tudo ocorreu como o esperado
npm -v
~~~

## **Para usuarios de Linux**

Precisaremos desinstalar e reeinstalar o Node, para isso podemos criar um script `.txt` que ira rodar e realizar toda a instalação automaticamente, para roda-lo basta fazer o seguinte procedimento :

**OBS: antes de começar lembre-se de ter permições administrativas**

~~~bash
# troque a tag pelo caminho real
cd <caminho_da_pasta_em_que_o_script_está>

/bin/bash  nomedoarquivo.txt
~~~

O arquivo `txt` tem o seguinte script :

~~~txt
# REMOVE O NODE ANTERIOR
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*

# INSTALA O CURL
sudo apt install curl -y

# BAIXA E INSTALA O NODE NA VERSÃO DESEJADA
#TROQUE O NUMERO 20 PELA VERSÃO MAIS ATUAL LTS
curl -sL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install nodejs -y

~~~
