# Sobre a NPM :

O `npm` é o gerenciador de pacotes do Node.js, Ele permite a instalaçõa e o gerenciamento de dependências de projetos, de uma forma eficiênte e intuitiva.

### 1. **Caso não exista um package.json:**

Antes de qulaquer coisa, devemos averiguar se no projeto já existe um `package.json`. Caso não exista devemos iniciar o gerenciador, dentro do diretório do projeto, para isso utilizamos os eguinte comando dentro do terminal :

~~~bash
npm init #isso gera o arquivo package.json

# caso queira pular toda a etapa de configuração inicial do projeto basta utilizar o seguinte comando ao invés do anterior
npm init -y #isso gera o arquivo package.json de forma mais automática
~~~

Ao utilizar o comando com a flag `-y`, nada irá impedir-nos de configurar algo manualmente;

#### 1.1. **Estrutura do package.json:**

OBS : Os próximos exeplos são apenas exeplos, e não cobrem totalmente o `package.json`, o arquivo não é iniciado com as dependnecias e scripts descritos nos exeplos, eles estão lá apenas para exeplificação ;

O `package.json` é um arquivo que armazena todas as dependências utilizadas dentro de um projeto, além disso ele define quais são dependencias requeridas para funcionamento, e quais dependencias são apenas para desenvolvimento.

~~~json
  "devDependencies": {
    "@babel/cli": "^7.23.4",//a versão é definida como major.minor.patch
    "@babel/core": "^7.23.7",
    "@babel/preset-env": "^7.23.8"
  },
  "dependencies": {
    "core-js": "^3.35.0",
    "regenerator-runtime": "^0.14.1"
  }
~~~

O arquivo também carrega os scripts que a aplicação tem, como o famoso script `dev`, ou `start`. Que podem ser configurados na área `"scripts"` do `package.js`, podemos criar scripts que quisermos.

~~~json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node public/assets/js/bundle.js",//configurado para rodar um arquivo específico
    "dev": "webpack -w"//configurado para rodar o webpack  a flag -w é para permanecer ele em sentinela
  },
~~~

Além destes tópics importantes o arquivo acarrega mais algumas informações como `name`(referente ao nome do pacote), `version`(a versão em que o pacote se encontra), `description`(a descrição do pacote), `main`(o arquivo que desencadeara toda a execução do porgrama "arquivo principal"), `keywords`(uma lista de srtrings para categorização do pacote. OBS: serve mais para quem quer criar um pacote para publicar na npm), `author`(o autor ou autores do pacote) e `license`(a licença de uso do pacote). No momento isso servirá mais como mero adendo e curiosidade, menos o `main`.

~~~json
  "name": "aula_03",
  "version": "1.0.0",
  "description": "O `npm` é o gerenciador de pacotes do Node.js, Ele permite a instalaçõa e o gerenciamento de dependências de projetos, de uma forma eficiênte e intuitiva.",
  "main": "index.js",
  /*scripts aqui*/
  "keywords": [],
  "author": "",
  "license": "ISC",
  /*Dependencias aqui*/
~~~

**O parâmetro main:**

Este parâmetro serve para indicar o ponto de entratada do aplicativo que será desenvolvido, ele é o arquivo que será carregado quando outros módulos ou programas requererem o pacote. Vale ressaltar que o caminho deve ser relativo ao especificar o parâmetro `main`


### 2. **Caso já exista um package.json:**

Caso já seja um projeto em desenvolvimento e exista o `package.json`, basta pedir para instalar as dependências já existentes dentro daquele projeto,
para isso utilizaremos o seguinte comando no Terminal :

~~~bash
npm install
# ou de forma contraida
npm i
~~~

### 3. **Gerenciando pacotes:**

Gerenciar pacotes significa : O processo de organização, instalação, atualização e remoção de bibliotecas, módulos, e ferramentas de software em um ambiente de desenvolvimento.

Um pacote é uma unidade de código que pode incluir funcionalidades específicas, gerencia-los é uma prática fundamental para o desenvolvimento de software.

#### 3.1. **Instalando pacotes:**

Caso queiramos adicionar um pacote em nossas dependências podemos utilizar o `npm i <nome_da_dependencia>`, caso queiramos que esta dependencia seja apenas para desenvolvimento basta adicionar a flag `--save-dev` após a contração `i`. Caso queiramos alguma versão específica da biblioteca basta utilizarmos um `@` após o nome da dependência;

~~~bash
# para instalar uma dependencia de projeto
npm i core-js

#supondo que queiramos adicionar mais de uma optaremos pelo seguinte
npm i core-js regenerator-runtime express@4.12.2 # veja basta adicionar um espaço e o @ indic auma versão específica

# Suponha a vontade de adicionar um modulo de forma global, utilizaremos a flag -g
npm i -g nodemon

#vamos adicionar somente dependencias de desenvolvimento
npm i --save-dev @babel/cli @babel/core @babel/preset-env loadash
~~~

#### 3.2. **Mudando uma dependencia existente para uma dependencia dev e vice-versa:**

Se quisermos trocar uma dependencia já instalads de produção para uma dependencia de desenvolvimento utilizamos a flag `--save-dev`, caso tenhamos o caso contrário utilizamos `--save-prod`, lembre que em ambos os casos utilizamos a flag de uma maneira diferente da instalação, a utilizamos depois do comando ;

~~~bash
#suponhamos que queremos transferir o express para uma dependencia de desenvolvimento
#utilizaremos o seguinte comando
npm install express --save-dev

#agora suponhamos que nos enganamos e devemos voltar ele para as dependencias de produção
# utilizamos o seguinte comando
npm install express --save-prod
~~~

#### 3.3. **Atuallizando pacotes**

Caso queiramos averiguar se existem atualizações a serem feitas podemos utilizar o comando `outdated` :

~~~bash
npm outdated
# ele mostrará caso hoverem atualizações a versão atual, a versão mais atualizada para major usada e a versão mais atualizada do pacote
~~~

Podemos atualizar ou passar uma versão específica para algum pacote já instalado, utilizamos `update` assim ela atualiza o path e o minor, ou podemos passar para uma versão já existente utilizando o `@` que foi citado anteriormente;

~~~bash
#Suponhamos que ao instalar as dependencias de projeto esquecemos que não vamos utilizar a ultima versão do express,
#então rodamos o seguinte comando :
npm i express@2.1.0
#veja que adicionamos uma versão que é insegura e ocasiona erros de segurança
#vamos voltar para a versão especificando que é 4
npm i express@4.x #o `x` indica que deve ser a ultima disponivel dentro da major 4

#Para atualizar um pacote, basta utilizar update mais o nome do pacote
npm update core-js
#Caso queiramos atualizar todos os pacotes basta utilizar
npm update

#Para maior segurança após mecher em versões rode
npm prune --dry-run
#caso estiver tudo nos conformes execute :
npm prune
#O comando npm prune é utilizado para remover módulos não utilizados (ou órfãos). ou seja retira os resquicios que possam ter sobrado de uma desinstalação ou arquivos não utilizados ou listados no package.json, de dentro do diretório node_modules.

~~~

#### 3.4. **Desinstalando pacotes:**

Podemos desinstalar pacotes basta usar a palavra `uninstall` :

~~~bash
#desisnatlando dependencias :
npm uninstall loadash

#desisntalando dependencias globais :
npm uninstall -g nodemon

#Para maior segurança após mecher em versões rode
npm prune --dry-run
#caso estiver tudo nos conformes execute :
npm prune
~~~

#### 3.5. **Realizando auditoria**

O npm contem uma ferramenta de auditoria e segurança chamada `audit`, que averigua as dependências em busca de vunerabilidades, já conhecidas.

~~~bash
#para realizar auditorias e saber os erros ou falhas das dependencias basta utilizar
npm audit #isso gera um relatório com os erros e falhas caso forem existentes
~~~

Além de existir a ferramenta de auditoria, é possível corrigir os erros com `audit fix`, assim o npm instalara as verções mais recentes ou patches mais seguros para as dependencias do projeto, mantendo as restrições de versões do `package.json`. Mesmo assim se erros continuarem persistentes existe hà a possibilidade de utilizar `audit fix --force`, que irá ignorar as restrições de versão do pacotre, e irá corrigir o erro mesmo tendo de atualizar as dependencias.

**OBS : O comando `audit fix --force` pode ser útil em situações específicas, como quando se está ciente das alterações de versão e deseja aplicar as correções de segurança, independentemente das restrições normais. No entanto, faça o uso com cautela, pois forçar atualizações pode levar a problemas de compatibilidade ou quebra de funcionalidades, especialmente se as atualizações introduzirem alterações significativas. Realize testes adequados e rigorosos para garantir que o software ainda funciona como o esperado.**

~~~bash
#para realizar correções sem alteração de versão de dependencia bats utilizar
npm audit fix

#caso necessario e o caso for bem estudado utilizar
npm audit fix --force # esteja bem ciente das alterações de versão de dependencias e o que isso pode vir a ocasionar no projeto
~~~

#### 3.6 **Observando as dependências de projeto :**

Para visualizar as dependencias intaladas do projeto basta utilizar o comando `ls`, caso desejarmos visualizar todas as dependencias, incluindo dependencias de dependencias, podemos utilizar a flag `--all`

~~~bash
#Caso queiramos ver todas as dependencias instaladas do projeto :
npm ls

#caso queiramos ver todas as dependencias reais do projeto :
npm ls --all
~~~

### 4. **Detalhes sintáticos:**

Ao instalar uma dependência e especificar um intervalo de versões com o símbolo `^` (caret), estamos indicando nossa disposição em aceitar atualizações que não introduzam mudanças incompatíveis na API, permitindo correções de bugs (patch) e novas funcionalidades (minor), mas não alterações significativas que afetem a compatibilidade (major).

