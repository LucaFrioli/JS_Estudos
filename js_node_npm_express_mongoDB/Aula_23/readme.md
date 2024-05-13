# Recapitulação dos conteúdos vistos no módulo

Todo o projeto feito com javascript, pode ou não ser feito com ele puro. No caso neste modulo configuramos um boilerplate que engloba o fullstack do desenvolvimento.

Neste módulo, o Node.js foi a estrela principal, abrindo um mundo de possibilidades para o desenvolvimento web completo. Através dele, exploramos:

**Manipulação de dados:**

* Tráfego e manipulação de dados com total liberdade.
* Leitura e escrita em arquivos JSON e de texto com o módulo `fs`.
* Gerenciamento dinâmico e seguro de caminhos na aplicação com o módulo `path`.

**Criação de servidores robustos:**

* Construção de servidores Node.js do zero.
* Abstração da complexidade da criação de servidores com o pacote `express`.
* Otimização do desenvolvimento com o `nodemon`.

**Integração com banco de dados:**

* Conexões com o banco de dados `MongoDB` utilizando o pacote `mongoose`.

**Gerenciamento de ambientes e segurança:**

* Importância do uso de arquivos de ambientes com o `dotenv`.
* Adição de camadas de segurança com os módulos `helmet` e `csurf`.

**Desenvolvimento full-stack:**

* Integração do backend com o frontend seguindo o padrão arquitetural MVC.
* Comparação teórica com outros padrões arquiteturais.

**Conceitos e ferramentas avançadas:**

* Seções e flash messages com ferramentas específicas.
* Middlewares do `express`: aprofundamento e funcionalidades.
* Componentização de HTML com o módulo `ejs`.
* Injeção de conteúdo do servidor na view com a View Engine `ejs`.

**Dominando o Node.js:**

A seguir iremos discorrer sobre toda a teoria vista de uma maneira mais ampla que nas aulas, porém aprofundando em cada tópico.

## Sobre a npm :

Para facilitar alguns processos e gerencia-los da melhor forma, existem então os gerenciadores de pacotes para o ecossistema do nodeJS, o que utilizamos e vamos utilizar é o mais famoso e um dos primeiros, e recomendado isso por vir nativo junto do node, ele se chama Node Package Maneger(NPM), com ele podemos instalar pacotes e módulos para otimizar e gerenciar funcionalidades dentro de uma aplicação.

Conhecemos os principais comandos para utilizar o npm, sendo eles :

-   `npm init -y` para iniciar o projeto;
-   `npm i *nome_do_pacote*` e `npm i --save-dev *nome_do_pacote*` para instalar dependencias de projeto e de desenvolvimento respectivamente;
-   `npm i *nome_do_pacote* --save-prod` para mover uma dependencia de desenvolvimento para uma de projeto;
-   `npm i *nome_do_pacote --save-dev*` para mover uma dependencia de desenvolvimento para uma dependencia de projeto;
-   `npm outdate` para averiguar se existe alguma dependencia necessitando de atualização;
-   `npm update` para atualizar as dependencias;
-   `npm unistall *nome_do_pacote*` para desistalar um pacote;
-   `npm prune --dry-run` para averiguar de modo seguro se tem algum arquivo que não tem mais uso dentro da `node_modules`;
-   `npm prune` para a retirada de arquivos orfãos definitivamente;
-   `npm audit` para averiguar se tem erro graves de segurança nas dependencias;
-   `npm audit fix` para corrigir os erros e vinerabilidades dos modulos sem firçar a mudanças de versões deles;
-   `npm audit fix --force` para corrigir os erros e vunerabilidades porém forçando atualizações se necessário;
-   `npm ls` para ver todas as dependencias instaladas no projeto;
-   `npm ls --all` para averiguar todas as dependencias e subdependencias do projeto;

# Sobre leitura e escrita de arquivos com o FS :

Após conhecer um pouco sobre o gerenciador de pacotes `npm` caimos de cara no código para compreender um pouco mais sobre o nodeJS em si e conecemos dois modulos muito importantes para programação backend, o `fs` e o `path`, que sao muito uteis e importantes para gerenciar logs de erros e afins, o que ajuda a manter um bom ecossistema de desenvolvimento dentro de um site. Com esses dois modulos em conjuntos além de podermos explorar arquivos, fazer contagem deles na raís do projeto, eventualmente criar automatizações,como abastecimento e leitura de planilhas e e documentos, ele ajuda a criar os logs, o que facilita na prevenção de bugs, e é muito útil a longo prazo dentro do ecossistema criado no aplicativo;

Ao utilizar também abos os módulos do nodeJS usamos conceitos já vistos dentro de módulos anteriores, como recursão mútua para iterar sobre diretórios, compreendemos também um pouco sobre expressões regulares para filtragem de buscas. Utilizamos para criação de logs objetos nativos como o objeto Date, além de conceitos avançados de função e delegação de serviços.

## Sobre o módulo path :

Antes de entender melhor a manipulação de arquivos devemos compreender conceitos de caminhos relativos vs. caminhos absolutos.

* Caminho relativo : O caminho relativo é aquele que tem como ponto referencial o arquivo que se está fazendo a chamada, ele geralmente não é tão detalhado pois não contempla toda a raíz da máquina em que o software está rodando, veja um exemplo de caminho relativo :

    * Exeplo linux :
    ~~~bash
    ./arquivo.txt: #Refere-se ao arquivo `arquivo.txt` no mesmo diretório que o script que está sendo executado.
    ../diretorio/arquivo.txt: #Refere-se ao arquivo `arquivo.txt` no diretório pai do diretório atual.
    ~/Documentos/arquivo.txt: #Refere-se ao arquivo `arquivo.txt` no diretório Documentos do usuário atual.
    ~~~

    * Exemplo MacOS :
    ~~~bash
    ./arquivo.txt: #Similar ao Linux.
    ../diretorio/arquivo.txt: #Similar ao Linux.
    ~/Documentos/arquivo.txt: #Similar ao Linux.
    ~~~

    * Exemplo Windows :
    ~~~powershell
    .\arquivo.txt: #Similar ao Linux.
    ..\diretorio\arquivo.txt: #Similar ao Linux, mas com \ como separador de diretórios.
    %USERPROFILE%\Documentos\arquivo.txt: #Similar ao Linux, mas usando a variável de ambiente %USERPROFILE% para o diretório do usuário.
    ~~~

* Caminho absoluto : O caminho absoluto especifica o local exato de um arquivo ou diretório a partir do diretório raiz do sistema, tornando sua referencia categórica, veja um exeplo de caminho absoluto :

    * Exemplo Linux
    ~~~bash
    /home/usuario/Documentos/arquivo.txt: #Refere-se ao arquivo arquivo.txt no diretório Documentos do usuário usuario.
    /etc/passwd: #Refere-se ao arquivo passwd no diretório /etc.
    ~~~

    * Exemplo MacOS
    ~~~bash
    /Users/usuario/Documents/arquivo.txt: #Similar ao Linux.
    /etc/passwd: #Similar ao Linux.
    ~~~

    * Exemplo Windows
    ~~~powershell
    C:\Users\usuario\Documents\arquivo.txt: #Refere-se ao arquivo arquivo.txt no diretório Documents do usuário usuario na unidade C.
    C:\Windows\System32\cmd.exe: #Refere-se ao arquivo cmd.exe no diretório System32 da pasta Windows na unidade C.
    ~~~

***Observações:***

*Os exemplos acima são apenas alguns casos básicos. A sintaxe de caminhos pode variar ligeiramente entre diferentes sistemas operacionais e distribuições.*

*É importante lembrar que os sistemas de arquivos podem ser configurados de diferentes maneiras, o que pode afetar a forma como os caminhos são interpretados.*

*Em geral, é recomendável usar caminhos absolutos quando se precisa ter certeza da localização de um arquivo ou diretório, especialmente em scripts ou programas que podem ser executados em diferentes ambientes.*

### **Compreendendo variaveis nativas do Nodejs sobre arqivos e caminhos :**

As variáveis `__filename` e `__dirname` são variáveis especiais predefinidas dentro do contexto de execução de um script Node.js. Elas fornecem acesso ao nome do arquivo e ao diretório atual do script, respectivamente, facilitando o acesso a informações importantes sobre o ambiente de execução.

**Sobre a variavel `__filename`:**

* Contém o caminho completo do arquivo JavaScript que está sendo executado no momento.
* É útil para:
    * Obter o nome do arquivo para fins de log ou identificação.
    * Carregar outros arquivos JavaScript de forma relativa ao local do script atual.
    * Acessar recursos específicos do sistema relacionados ao arquivo.

**Exemplo:**

~~~javascript
console.log(`Nome do arquivo: ${__filename}`);

const outroArquivo = require(`./outro-arquivo.js`); // Carrega um arquivo relativo

// Acessa um recurso do sistema específico do arquivo
~~~

**Sobre a variavel `__dirname`:**

* Contém o caminho do diretório que contém o arquivo JavaScript que está sendo executado.
* É útil para:
    * Acessar arquivos dentro do mesmo diretório do script atual.
    * Criar novos arquivos em um local específico relativo ao script.
    * Simplificar a manipulação de caminhos de arquivos dentro do script.

**Exemplo:**

~~~javascript
console.log(`Diretório do arquivo: ${__dirname}`);

const arquivoNoDiretorio = require(`./pasta/arquivo.js`); // Carrega um arquivo dentro do diretório

// Cria um novo arquivo no diretório atual
~~~

**Observações:**

* *As variáveis `__filename` e `__dirname` são variáveis globais, acessíveis em qualquer lugar dentro do script.*
* *Elas são predefinidas pelo Node.js e não podem ser modificadas.*
* *O valor de `__dirname` pode ser diferente do diretório de trabalho atual do processo.*

Essas variáveis facilitam o acesso a informações importantes sobre o ambiente de execução e simplificam o desenvolvimento de scripts Node, especialmente ao trabalhar com arquivos e diretórios.

### **Utilizando o módulo path para manipular as variaveis nativas:**

Logo com a ideia de padronizar e reprimir essas grandes diferenças entre declaração de caminhos, foi-se introduzido o módulo `path`, o qual tanto utilizamos ao longo dessa sessão, é um módulo que visa deixar o código fonte escrito o mais portátil possível em relação a declaração e chamadas de caminhos nos diferentes sistemas operacionais. A seguir vamos nos aprofundar um pouco mais sobre ele, sanando a falta de aprofundamento feita anteriormente em prol da simplificação inicial do aprendizado.

**Funcionalidades Essenciais:**

* **Normalização de Caminhos:**

  * `path.normalize(caminho)`: converte um caminho para o formato normalizado do sistema operacional.
  * `path.sep`: caractere separador de diretórios (ex: `/` no Linux e `\` no Windows).

* **Manipulação de Partes do Caminho:**

  * `path.basename(caminho)`: retorna o nome do arquivo (sem a extensão).
  * `path.dirname(caminho)`: retorna o diretório pai do caminho.
  * `path.extname(caminho)`: retorna a extensão do arquivo.

* **Resolução de Caminhos Relativos:**

  * `path.join(caminho1, caminho2, ...)`: junta vários segmentos de caminho em um único caminho.
  * `path.resolve(caminho)`: resolve um caminho relativo em relação ao diretório de trabalho atual.

* **Verificação de Caminhos:**

  * `path.isAbsolute(caminho)`: verifica se um caminho é absoluto ou relativo.
  * `path.isExtensible(caminho)`: verifica se um caminho é extensível (ex: se pode ser criado um novo arquivo).

* **Acesso à Informação do Sistema:**

  * `path.parse(caminho)`: retorna um objeto com informações sobre o caminho (diretório raiz, nome do arquivo, extensão, etc.).

**Exemplos de Uso:**

* Obter o nome do arquivo atual:

~~~javascript
const nomeArquivo = path.basename(__filename);
console.log(nomeArquivo); // script.js
~~~

* Criar um caminho absoluto para um arquivo:

~~~javascript
const caminhoAbsoluto = path.join(__dirname, 'pasta', 'arquivo.txt');
console.log(caminhoAbsoluto); // /home/usuario/pasta/arquivo.txt
~~~

* Verificar se um caminho é absoluto:

~~~javascript
const isAbsoluto = path.isAbsolute('/home/usuario/arquivo.txt');
console.log(isAbsoluto); // true
~~~

## Sobre o módulo fs :

Dentro do módulo `fs` temos varias ações possíveis para manipulação das estruturas e dos arquivos. Antes do NodeJs 10 era preciso trablahar com estruturas de callbacks para evitar o fluxos de dados I/O bloqueantes, apartir da verção 10 foi disponibilizado o módulo `fs.promises`, assim permitindo estruturas assíncronas para as operações que são realizadas, deixando o desenvolvimento mais intuitivo, e menos verboso, sanando os bloqueios criados pelas operações realizadas.

Podemos definir e dividir os métodos em quatro grandes grupos :
**Observações:**
* Para usar o módulo `fs:promises`, você precisa importar o módulo `fs/promises` em ESMoudules ou `('fs').promises` no seu código.
* P.S. : primeiro abordarei a declaração dos parametros de maneira mais generalista em relação o `fs` após deixarei disponivel uma segunda lista para observarmos o comportamento de declaração de paramentros do `fs.promises`

- **Leitura e Escrita**;

* `fs.readFile(path, options)`: Lê o conteúdo de um arquivo.
* `fs.writeFile(path, data, options)`: Escreve dados em um arquivo.
* `fs.appendFile(path, data, options)`: Acrescenta dados ao final de um arquivo.
* `fs.open(path, flags, mode, callback)`: Abre um arquivo e retorna um descritor de arquivo.
* `fs.read(fd, buffer, offset, length, position, callback)`: Lê dados de um arquivo aberto.
* `fs.write(fd, buffer, offset, length, position, callback)`: Escreve dados em um arquivo aberto.
* `fs.close(fd, callback)`: Fecha um arquivo aberto.

- **Operações de Diretórios**;

* `fs.mkdir(path, options, callback)`: Cria um diretório.
* `fs.rmdir(path, callback)`: Exclui um diretório vazio.
* `fs.unlink(path, callback)`: Exclui um arquivo.
* `fs.rename(oldPath, newPath, callback)`: Renomeia um arquivo ou diretório.

- **Operações de Arquivos**;

* `fs.chmod(path, mode, callback)`: Altera o modo de um arquivo ou diretório.
* `fs.chown(path, uid, gid, callback)`: Altera o proprietário e o grupo de um arquivo ou diretório.
* `fs.truncate(path, len, callback)`: Trunca um arquivo para um determinado tamanho.

- **Estatísticas de Arquivo**;

* `fs.stat(path, callback)`: Retorna informações sobre um arquivo ou diretório.
* `fs.fstat(fd, callback)`: Retorna informações sobre um arquivo aberto.
* `fs.lstat(path, callback)`: Retorna informações sobre um link simbólico.

**Lista de comandos e ordem de declaração de parametros do módulo fs:promises:**

* `readFile(path, options)`
* `writeFile(path, data, options)`
* `appendFile(path, data, options)`
* `open(path, flags, mode)`
* `read(fd, buffer, offset, length, position)`
* `write(fd, buffer, offset, length, position)`
* `close(fd)`
* `mkdir(path, options)`
* `rmdir(path)`
* `unlink(path)`
* `rename(oldPath, newPath)`
* `stat(path)`
* `fstat(fd)`
* `lstat(path)`
* `chmod(path, mode)`
* `chown(path, uid, gid)`
* `truncate(path, len)`

### **Aprofundando-se nos comandos principais utilizados :**

A principio e para mantermos o foco de nossos estudos vamos dar uma pequena aprofundada apenas nos comandos utilizados ao longo desta sessão. Vamos criar um programa que cria duas pastas com nomes distintos, e faça uma leitura de um arquivo em uma terciera pasta, e crie um arquivo com este conteúdo em uma das duas pastas criadas, enquanto na outra crie um arquivo json que contenha um objeto chave valor que tenha um conteúdo Hello, World! :

Para este progrma iremos usar apenas os comandos :

* `mkdir`
* `readFile`
* `writeFIle`

Além disso vamos usar o fs em sua modalidade assícrona, utilizando promessas. Dito isso vamos para o código e a estrutura de pastas mínimas para faze-lo e entender na prática um pouco do fileSystem dentro do NodeJs :

Antes de tudo vamos criar a seguinte estrutura de diretórios :

~~~plaintext
project-root
| -- original
|   |-- teste.js
| -- app.js
~~~

Para aqueles que estão lendo apenas o resumo, se acontumem a criar estruturas de diretórios, pois todo o boilerplate contruido durante essa sessão é baseado em uma boa criação de estrutura de diretórios assim como, todos os desing patterns que serão vistos ao longo da jornada de progrmação. Após isso vamos adicionar um `console.log` no arquivo teste.js

Para diretivas de estudo vamos adicionar todas as funções que farão as operações de arquivos dentro do `app.js`, antes de tudo vamos importar os dois modulos referentes ao capitulo deste texto em seu cabeçalho, iremos declarar `.promises` após a chamada do modulo `fs` para que possamos trabalhar de modo assíncrono logo de uma maneira mais organizada:

~~~javascript
const fs = require('fs').promises;
const path = require('path');
~~~

Após isso vamos utilizar o módulo `path` para criar um caminho que ainda não exite dentro do projeto, que servirá como referência posteriro para criar a pasta:

~~~javascript
const dir01 = path.resolve(__dirname, 'pastaNova01');
const dir02 = path.resolve(__dirname, 'pastaNova02');
~~~
No caso iremos chmar estas duas pastas que serão criadas do nome generico, note que não iremos colocar extensão nenhuma para declara-las, isso é muito importante para que o filesystem faça um trabalho tranquilo na hora da crição dos diretórios.

Agora está na hora de realmente começar a utilizar funções do modulo `fs`, vamos iniciar abstraindo o conceito da criação de diretórios e escrita de arquivos. Por que abstraindo você deve estar se perguntando. Pois bem apesar de estramos utilizando tudo dentro do mesmo arquivo, não é uma boa prática fazer isto, então é bom manter o costume de abstração e componentização, permitindo que o código funcione em seu arquivo unico. Assim já estamos fazendo uma função que poderá eventualmente se encaixar em uma pasta `fileSystem` posteriormente e usada como um código modular.

~~~javascript
async function createFolder(pathOfDirectory) {
    try {
        await fs.mkdir(pathOfDirectory, { recursive: false });
        console.log(`Diretório ${pathOfDirectory} criado com sucesso`);
    } catch (e) {
        console.log(e);
    }
}
~~~

Como estamos trbalhando de forma assíncrona com o módulo observe que devomos criar a função de forma assíncrona, observando o comando `mkdir` podemos reparar que ele tem apenas dois paramentros realmente requeridos o caminho em que o diretorio deve ser criado, e opções adicionanis, que dizem respeito ao modo que isso ocorrerá, observando isso vemos que podemos então abstrair na função o cmainho de criação, e assim fizemos então. Crinado um parametro que permite uma flexibilidade de reuso do código. Como já é esperado que tenha estudado os móduos anteriores não entraremos em detalhes como funcionam as demais estruturas envolvidas na função.

Agora iremos para a criação da função que nos permitirá escrever dentro de arquivos  e criá-los caso eles não existam ela é a `writeFile`, para isso chamei a função assícrona como FileFile para haver uma diferenciação, você poderá chama-la da maneira que bem entender, só deve-se seguir a regra de criação de funções. Observe como ficou o código, e após isso comentarei sobre sua abstração :

~~~javascript
async function writeFileFile(fileName, data, pathDestination) {
    pathDestination = path.join(pathDestination, fileName);
    try {
        await fs.writeFile(pathDestination, data, { flag: 'a' });
    } catch (e) {
        console.log(e);
    }
}
~~~

Observe que o comando em questão tem dois parametros necessários para sua boa execução, são eles : o caminho do arquivo, e a informação que será escrita dentro dele, além de configurações opcionais, no caso vamos abordar  e abstrair passando para a função que criamos estes dois parametros de comando, assim obtendo novamente uma função ligeiramente mais flexivel em cima do comando do módulo.

Agora chegou a hora de finalmente criarmos a função que fará isso tudo entrar em ação e funcionar de uma maneira satisfatória ao executar o arquivo `app.js` como convenção a chamarei de `main`, por ele utilizar diretamente outras duas funções assíncronas, ela também dverá ser assíncrona como visto no módulo de assincronicidade. Ela ficará da seguinte maneira :

~~~javascript
async function main() {
    try {
        await createFolder(dir01);
        await createFolder(dir02);
        const content = await fs.readFile(path.resolve(__dirname, 'original', 'teste.js'));
        const data = JSON.stringify({ teste: `console.log('hello world')` }, null, 2);
        await writeFileFile('generatedfile.js', content, dir01);
        await writeFileFile('genrationFileTodir02.json', data, dir02);
    } catch (e) {
        console.log(e);
    }
}
~~~

Note que nela também utilizamos um comando do módulo `fs` chamado `readFile` por ele ser usado apenas uma vez, não fizemos uma função assíncrona para abstraí-lo, porém lanço um desafio para aqueles que queiram treinar além da aula específica e se aprimorar dentro do módulo `fs`, além disso para aqueles que queiram um exercício mais completo vejam `sideTasksForTraining\ex_05`. No fim de toda a criação, o arquivo `app.js` deverá ficar assim :


~~~javascript
const fs = require('fs').promises;
const path = require('path');

const dir01 = path.resolve(__dirname, 'pastaNova01');
const dir02 = path.resolve(__dirname, 'pastaNova02');

async function createFolder(pathOfDirectory) {
    try {
        await fs.mkdir(pathOfDirectory, { recursive: false });
        console.log(`Diretório ${pathOfDirectory} criado com sucesso`);
    } catch (e) {
        console.log(e);
    }
}

async function writeFileFile(fileName, data, pathDestination) {
    pathDestination = path.join(pathDestination, fileName);
    try {
        await fs.writeFile(pathDestination, data, { flag: 'a' });
    } catch (e) {
        console.log(e);
    }
}

async function main() {
    try {
        await createFolder(dir01);
        await createFolder(dir02);
        const content = await fs.readFile(path.resolve(__dirname, 'original', 'teste.js'));
        const data = JSON.stringify({ teste: `console.log('hello world')` }, null, 2);
        await writeFileFile('generatedfile.js', content, dir01);
        await writeFileFile('genrationFileTodir02.json', data, dir02);
    } catch (e) {
        console.log(e);
    }
}

main();

~~~

E após executá-lo a estrutura das pastas deve ser s seguinte :

~~~plaintext
project-root
| -- original
|   |-- teste.js
| -- pastaNova01
|   | -- generatedfile.js
| -- pastaNova02
|   | -- genrationFileTodir02.json
| -- app.js
~~~

# Criando servidores :

Como o curso dá uma enfase na parte web, um pricipio fundamental se dá na criação de servidores, que controlam e são responsaveis pela parte do backend na web. Deve-se lembrar ao se entrar na parte de servidores web do seu funcionamento com o protocolo http. Principalmente pois ele que dita como cada uma das interações com o backend deve se comportar. O protocolo http é baseado em seus verbos que são :  **GET, POST, PUT, PATCH, DELETE**. Com estes verbos podemos definir como o site será mapeado, e reagirá as requisições feitas ao servidor.

Para abstrair a complexidade de criação de um servidor com o node.js puro podemos utilizar o `express`, um framework que visa simplificar o funcionamento das requisições, o modo de acesso aos dados que transitam com ela e a integração com APIs e base de dados. Para instalar o express devemos antes de tudo iniciar um projeto com a npm, e finalmente trazer o pacote do framework para dentro deste projeto. Para fazermos isso basta realizarmos os seguintes comandos dentro do terminal :

~~~bash
## inicio da npm como visto anteriormente
npm init -y

## instalar o express
npm i express
## ou se sentir mais seguro
npm install express
~~~

Além da instalação do framework, para termos de produtividade devemos instalar também uma ferramenta conhecida como `nodemon`, que fará o trabalho de recarregar o servidor criado toda vez que houverem mudanças sendo realizadas na base de código referente a ele. deve-se notar que tal dependencia deve ser adicionada nas devDependencies. Para isso utilizamos o comando refernte a isso, apenas adicionando a flag `--save-dev` após o comando `i` e antes do nome desta ferramenta, veja asseguir :

~~~bash
## instalar o nodemon
npm i --save-dev nodemon
~~~

Dentro do arquivo chamado `package.json` na seção de scripts iremos adicionar o script de nome `start`, ele será responsavel por iniciar o servidor com o `nodemon`. veja asseguir como deverá ficar o arquivo com esta adição :

~~~json
{
  "name": "nome_do_projeto",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.3"
  }
}

~~~

Perceba também que na chave `main` iremos declarar `app.js` que será nosso arquivo de entrada.

Com estas duas ferramentas instaladas podemos começar a criar um servidor básico para web. Para fazermos isso iremos nos utilizar o conceito dos verbos http. primeiramente devemos criar um arquivo chamado `app.js` este arquivo que irá carregar os requisitos minimos para fazer o controle em qualporta ele irá rodar, as instâncias do express e posteriormente os middlewares, a chamada do roteamento e a engine que carregara as páginas web componentizadas, como veremos ao decorrer desta sesão. por enquanto vamos criar a parte básica a seguir :

~~~javascript
// instanciando o express
const express = require('express');
// utilizando o pacote
const app = express();
// definindo a porta que será utilizada
const port = 3000;

// criando o servidor
app.listen(port,()=>{
    console.log('O servidor está rodando na porta '+port);
    console.log(`Acesse http://localhost:${port}`);
})
~~~

Com este código básico já estamos rodando um servidor, agora devemos começar a gerenciar as rotas, poderiamos por ventura criar dentro deste mesmo arquivo, porém para manter mais organizado os site, a melhor prática é utilizar um arquivode roteamento, o qual chamaremos de `routes.js`, vamos cria-lo, e gerenciar uma rota básica que diz "hello world!" :

~~~javascript
const express = require('express');
// criando o roteador
const routes = express.Router();

// criando uma rota básica
routes.get('/',(req, res)=>{
    res.send('Hello world!');
});

module.exports = routes;
~~~

No código apresentado, observamos a criação de uma rota básica utilizando o Express.js. A rota `'/'`, acessível via método `GET`, utiliza uma função para processar a requisição (`req`) e gerar a resposta (`res`).

**Verbo HTTP e Rota Inicial:**

O verbo `GET` indica que a rota busca informações do servidor, enquanto a barra (`'/'`) representa a rota principal da aplicação. Essa barra, por ser o primeiro parâmetro obrigatório do método `get`, define o padrão para todas as rotas.

**Função de Processamento e Objetos `req` e `res`:**

A função de processamento recebe os objetos `req` e `res` como parâmetros. O objeto `req` contém informações sobre a requisição do cliente, como headers, parâmetros e dados do corpo. Já o objeto `res` permite enviar dados de volta ao cliente, utilizando métodos como `send` e `json`.

**Método `send` e Fluxo de Dados:**

O método `send` envia uma string de resposta ao cliente. No exemplo, a string enviada é "Hello world!". A requisição do cliente aciona a rota `'/'`, que por sua vez executa a função de processamento. Essa função utiliza o objeto `res` e o método `send` para enviar a string "Hello world!" como resposta ao cliente.

Entendendo melhor a morfologia de como é estruturada uma requisição básica da busca de informações dentro do servidor, podemos começar também a entender melhor o funcionamento de outros verbos dentro do framework, ao construir uma rota post por exeplo, ela terá a a mesma estrutura de declaração, sendo : `routes`.`verbo http`(`'rota a que se refre'`,`(declaração dos Objetos de processamento) => {` `Lógica da rota utilizando os objetos` `}`). Vamos observar uma rota post :

~~~javascript
routes.post('/',(req,res)=>{
    //lógica sendo aplicada
});
~~~

Explicado isso agora devemos fazer com que o servidor utilize destas rotas para realmente ser possível, ver o seu conteúdo para isso devemos fazer com que o `app` as use, então vamos utilizar o método `.use()`, e os conceitos do módulo `path` para tornar o código o mais responsivo possível. Para isso vamos adicionar os códigos no arquivo `app.js`. Veja aseguir :

~~~javascript
const path = require('node:path');
const express = require('express');

// cahamda do modulo desenvolvido utilizando um dos conceitos vistos no módulo path
const routes = require(path.resolve(__dirname,'routes.js'));

const app = express();
const port = 3000;

// método para fazer com que o express use outros módulos, principalmente os mais vitais para o bom funcionamento de uma aplicação web
app.use(routes);

// criando o servidor
app.listen(port,()=>{
    console.log('O servidor está rodando na porta '+port);
    console.log(`Acesse http://localhost:${port}`);
})
~~~

Agora para ver o resultado basta utilizar o script `start` que criamos lá atrás, para isso basta abrir o terminal e realizar o seguinte comando :
**Importante : não esqueça que para parar a execução do `nodemon` sempre devemos utilizar o comando Ctrl+C.**

~~~bash
npm run start
## ou somente
npm start
~~~

Agora qual seria o motivo de realizar as separações de rotas pelos nomes das requisições http. Pois bem principalmente pela questão de postagens e recuperações de entrada de arquivos e dados, que podem ser recuperados com métodos vindos do objeto `req`, estes métodos permitem além disso, também a modularização e reuso de algumas rotas permitindo que haja muito mais agilidade e desempenho no momento do desenvolvimento. Os métodos são os seguintes : `.params`, `.query` e `.body`. vamos ver um pouco deles após entender como ativamos as rotas posts ao utilizar formulários html.


Quando criamos um formulário html devemos sempre notar que em sua tag de abertura temos dois atributos importantissimos, são eles :

* `action=""` que molda e define qual rota a infromação daquele formulário deve seguir.
* `method=""` que definirá o verbo http que deverá ser utilizado na submição do fomrulário.

A seguir, detalhamos como estruturar um formulário para iniciarmos a exploração de conceitos básicos de rotas, sem a necessidade de integração com frontend. Isso também permitirá que que possamos abordar os métodos do objeto `req`.

~~~html
<!-- note os atributos inseridos em questão -->
<form action="/" method="post">
    <label for="clientname">Nome do cliente : </label>
    <input type="text" name="clientname" id="clientname">
    <button>Enviar</button>
</form>
~~~

Após entender como criar um formulário html com o minimo necessário para ele funconar em simbiose com as rotas do servidor, devemos associa-lo ao código de rotas dentro do arquivo `routes.js`, para uma demonstração inicial do funcionamento das manipulações tanto dalas, quanto os usos dos métodos do `req`, para isso devemos declarar ele da seguinte maneira.

~~~javascript
const express = require('express');
// criando o roteador
const routes = express.Router();

// criando uma rota básica
routes.get('/',(req, res)=>{
    res.send(`<form action="/" method="post">
            <label for="clientname">Nome do cliente : </label>
            <input type="text" name="clientname" id="clientname">
            <button>Enviar</button>
            </form>`
            );
});

module.exports = routes;
~~~

Após essa mudançana nossa base de códigos  vamos adicionar também nossa rota `post` que irá ser retornada ao formulário ser submetido. Para fins de testes

~~~javascript
const express = require('express');
// criando o roteador
const routes = express.Router();

// criando uma rota básica
routes.get('/',(req, res)=>{
    res.send(`<form action="/" method="post">
            <label for="clientname">Nome do cliente : </label>
            <input type="text" name="clientname" id="clientname">
            <button>Enviar</button>
            </form>`
            );
});

routes.post('/',(req,res)=>{
    res.send('estou sendo chamado pelo method do formulário');
});

module.exports = routes;
~~~

Se tudo ocorreu bem quando recarregar a página após a implementação das mudanças, o formulário deverá ser renderizado, e ao submete-lo a mensagem envida pelo post deverá aparecer na tela.

Agora com tudo funcionando vamos abordar os métodos do objeto `req`

## Uma Breve introdução aos conceitos dos métodos do Objeto `req` :

No Express.js, o objeto `req` (abreviação de "requisição") fornece acesso a diversos dados sobre a requisição HTTP recebida pelo servidor. Entre esses dados, podemos destacar os métodos `req.params`, `req.query` e `req.body`, que permitem acessar diferentes tipos de informações enviadas pelo cliente.

`req.params` - Parâmetros de Rota:

* **Funcionalidade:** Acessa valores de parâmetros nomeados definidos na URL da requisição.
* **Sintaxe:** `req.params[nomeDoParametro]`.
* **Exemplo:** Rota `/users/:id` acessível via `req.params.id`.
* **Vantagens:**
    * Permite rotas dinâmicas e adaptáveis.
    * Útil para buscar recursos específicos por ID ou outro valor único.
* **Desvantagens:**
    * Requerem a definição de parâmetros na URL.
    * Não é adequado para enviar grandes quantidades de dados.

`req.query` - Parâmetros de Consulta :

* **Funcionalidade:** Acessa valores de parâmetros de consulta enviados na URL após o ponto de interrogação (`?`).
* **Sintaxe:** `req.query[chaveDaConsulta]`.
* **Exemplo:** `/users?search=valor` acessível via `req.query.search`.
* **Vantagens:**
    * Permite enviar dados simples para a rota sem a necessidade de um formulário.
    * Útil para filtrar ou paginar resultados.
* **Desvantagens:**
    * Os valores são visíveis na URL, o que pode ser um problema de segurança.
    * Não é adequado para enviar grandes quantidades de dados.

`req.body` - Corpo da Requisição :

* **Funcionalidade:** Acessa dados do corpo da requisição, geralmente enviados via formulários HTML ou APIs REST.
* **Sintaxe:** `req.body[nomeDoCampo]`.
* **Exemplo:** formulário com campo `name`, acessível via `req.body.name`.
* **Vantagens:**
    * Permite enviar grandes quantidades de dados de forma estruturada.
    * Útil para receber dados de formulários ou APIs REST.
* **Desvantagens:**
    * Requer o uso de middleware para habilitar o parse automático de JSON ou outros formatos.
    * Mais complexo do que `req.params` e `req.query`.

Escolhendo o Método Adequado :

* Utilize `req.params` quando :
    * A rota precisa de valores dinâmicos para identificar um recurso específico.
    * Os valores são curtos e simples.
* Utilize `req.query` quando :
    * Deseja enviar dados simples para filtrar ou paginar resultados.
    * Os valores não são sensíveis e podem ser visíveis na URL.
* Utilize `req.body` quando :
    * Precisa receber grandes quantidades de dados de forma estruturada.
    * Os dados são enviados através de formulários HTML ou APIs REST.

**Exemplos de Uso :**

**Exemplo 1 : Buscar um usuário por ID:**

~~~javascript
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await findUserById(userId);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.json(user);
});
~~~

**Exemplo 2 : Filtrar produtos por categoria:**

~~~javascript
app.get('/products', async (req, res) => {
  const category = req.query.category;
  const products = await findProductsByCategory(category);

  res.json(products);
});
~~~

**Exemplo 3 : Receber dados de um formulário:**

~~~javascript
app.post('/register', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  await createUser(name, email, password);

  res.json({ message: 'Usuário cadastrado com sucesso' });
});
~~~

*OBS : Veja o [Arquivo `productsController.js`](https://github.com/LucaFrioli/JS_Estudos/blob/main/sideTasksForTraining/ex_08/src/controllers/productsController.js) do projeto de treino de manipulção de rotas ex_08, para maior entendimento observe o arquivo de rotas do mesmo projeto e o teste,lembre-se de adicionar as infromações necessárias dentro de um arquivo `.env` na raíz do projeto. Veremos mais sobre isso adiante.*

*OBS. pt.2 : Mencionamos já três vezes a palavra middleware, logo sinto pessoalmente que devo uma explicação básica ao menos o que são eles, até que não adrentemos mas a fundo em seus conceitos. Middlewares em contextos mais gerais(integração de sistema heterogênios e orquestração de microservices por exeplo) podem ser considerados softwares que varias aplicações usam para se comunicar uma com as outras. Porém dentro do contexto web Node.js/Express.js são funções que tem acesso aos objetos `req` e `res` porém não são endpoints de rotas. Muitas vezes eles são usados para definir comportamentos mais globais, utilizando o método `.use` que já vimos anteriormente. Caso queira uma recaptulação [Clique aqui!](https://github.com/LucaFrioli/JS_Estudos/blob/main/js_node_npm_express_mongoDB/Aula_14/readme.md)*

## Continuando o exemplo :

Agora com um pouco de teoria passada vamos fazer uma recepção básica do nome do cliente criada na nossa base de código. Dentro da rota `post` referente a url `/`, vamos adicionar o seguinte código :

~~~javascript
    const { clientname } = req.body;
    res.send(`<p>Olá me chamo : ${clientname}</p>`);
~~~

Ao adicionar o nosso arquivo `routes.js` deverá ter a seguinte estrutura :

~~~javascript
const express = require('express');
// criando o roteador
const routes = express.Router();

// criando uma rota básica
routes.get('/',(req, res)=>{
    res.send(`<form action="/" method="post">
            <label for="clientname">Nome do cliente : </label>
            <input type="text" name="clientname" id="clientname">
            <button>Enviar</button>
            </form>`
            );
});

routes.post('/',(req,res)=>{
    const { clientname } = req.body;
    res.send(`<p>Olá me chamo : ${clientname}</p>`);
});

module.exports = routes;
~~~

Além disso para relizar uma boa manipulação de fluxo de dados deveremos adicionar mais alguns middlewares dentro de nosso arquivo `app.js` permitindo que dados enviados pelo formulário e/ou arquivos json possam ser processados de forma segura. Para isso devemos adicionar as seguintes linhas como asseguir :

~~~javascript
const path = require('node:path');
const express = require('express');

const routes = require(path.resolve(__dirname,'routes.js'));

const app = express();
const port = 3000;

// middlewares utilizados para lidar com envios de informações de formulários e arquivos json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.listen(port,()=>{
    console.log('O servidor está rodando na porta '+port);
});

~~~

Percebe-se que o arquivo `routes.js` está crescendo gradualmente. Embora tenhamos apenas adicionado duas manipulações de rotas, é hora de começar a considerar mais profundamente o design da arquitetura do nosso projeto. Com a necessidade de incluir uma função anônima para cada rota, é prudente desacoplá-las do arquivo `routes.js` e movê-las para uma pasta separada que podemos chamar de controllers. Além disso percebe-se também que a inserção de html dentro do servidor desta forma não se trona a coisa mais intuitiva, prática e nem mesmo recomendada, também criaremos uma pasta dedicada a isso que poderemos chamar de Views. A criação destas pastas é um dos elementos essenciais do padrão de projeto MVC como veremos mais adiante.


Vamos analisar até o momento como deve ter ficado o diretório de trabalho :

~~~plaintext
| -- | node_modules
| -- app.js
| -- package.json
| -- package-lock.json
| -- routes.js
~~~

# Entendendo o Padrão arquitetural MVC e o implementando em nosso servidor :

O padrão de arquitetura MVC consiste na separação e organização do código em camadas de distintas responsabilidades, tais quais abordremos uma a uma ao longo dos próximos tópicos. Por momento vamos compreender de maneira mais básica sobre o que o Modelo MVC se trata:

 - Ele serve para *Organização e Separação de Preocupações*, separando as responsabilidades em camadas distintas (Model, View, Controller) para promover organização, reutilização e testabilidade do código.

 - Camada **Model (Modelo)** : A camada Model, é responsável por gerenciar os dados da aplicação, incluindo acesso a bancos de dados, validações e regras de negócio.

 - Camada **View (Visão)** : A camada View, é responsável pela apresentação dos dados ao usuário, utilizando templates como EJS, Pug ou Handlebars para criar interfaces dinâmicas e interativas.

 - Camada **Controller (Controlador)**: A camada Controller, é a que atua como intermediária entre as duas anteriores, delegando as responsabilidades para as camadas adequadas, e tendo controle do fluxo de direcionamento da aplicação.

## Adicionando a camada de controladores :

Inicalmente pra realizar uma mudança mais simples de se compreender dentro de nossa base de código vamos abordar a Letra `C` do padrão MVC. Ela é referente a camada dos **Controllers** (Controladores), são eles que atuam como os intermediarios, recebem requisições, processam dados e delegam as responsabilidades para as camadas Model e View as quais iremos abordar ao longo desta seção do resumo.

Primeiro iremos começar criando uma pasta que chamaremos de `src`, e dentro dela alocaremos um subdiretorio chamado `controllers`, que por sua vez deverá conter um arquivo que iremos chamar de `homeController.js`, pois ele será o responsavel por ter os controladores das rotas de entrada do nosso site. A Estrutura agora deverá estar parecida com a seguinte :

~~~plaintext
| -- | node_modules
| -- | src
|    | -- | controllers
|         | -- homeController.js
| -- app.js
| -- package.json
| -- package-lock.json
| -- routes.js
~~~

Agora vamos transferir as funções de processamento que se encontam dentro das rotas para este novo arquivo que criamos, e vamos utilizar o objeto de exportação do node para poder utiliza-las de forma modular :

~~~javascript
// homeController.js

exports.getForm = (req, res)=>{
    res.send(`<form action="/" method="post">
            <label for="clientname">Nome do cliente : </label>
            <input type="text" name="clientname" id="clientname">
            <button>Enviar</button>
            </form>`
            );
}

exports.tellOla = (req,res)=>{
    const { clientname } = req.body;
    res.send(`<p>Olá me chamo : ${clientname}</p>`);
}

~~~

Feito esta transferência, devemos chama-las dentro de `routes.js`, vamos faze-lo utilizando do módulo path como já foi visto anteriormente, veja como deve ficar o arquivo após as importações e o uso das funções de processamento :

~~~javascript
// routes.js
const path = require('node:path');
const express = require('express');
const routes = express.Router();

// importação de controllers
const homeController = require(path.resolve(__dirname,'src','controllers','homeController.js'));

// gerenciando as rotas
routes.get('/', homeController.getForm);
routes.post('/',homeController.tellOla);

module.exports = routes;
~~~

Por uma questão de clareza é sempre muito importante organizarmos as rotas e suas morfologias derivadas do objeto `req`, em diferentes arquivos, como por exemplo : as rotas `/` e suas derivações no arquivo `homeController.js`, as rotas `/products` e suas derivações em um outro arquivo `productsController.js` e assim em diante.

Ao analizarmos o arquivo `homeController.js` novamente, nos é reveladas oportunidades para desacoplar o código HTML, permitindo que a camada View assuma total responsabilidade pela entrega do formulário ao navegador e pelo retorno das informações. Assim respeitando os conceitos vistos ao abordarmos o Padrão MVC.

# Sobre a camada View e a adicionando ao projeto :

A camada view vai conter toda a parte de `EJS` (Embedded Javascript templates), ou seja um arquivo similar ao código html só que aceitando notações javascript dentro do código por meio de tags especias (para quem progrma em Java para a web os arquivois `.ejs` é o equivalente aos arquivos `.JSP`). Estes arquivos além de receber tags hmtl padrões como em arquivos estáticos, também recebem lógica, permitindo que as informações advindas do backend possam fluir de maniera mais naturala e dinâmica para o client side, eles servem como um molde para a página.

Antes de continuarmos devemos configurar o uso do `ejs` dentro de nosso arquivo de entrada `app.js`, e além disso configurar dentro de nossa estrutura de pastas um diretório que conterá a lógica do frontend, e um outro diretório para receber conteúdos estáticos, para isso useremos muito do conhecimento obtido druante as aulas de es modules vistos já anteriormente. Caso queira revisar o conteúdo [Clique aqui !](https://github.com/LucaFrioli/JS_Estudos/tree/main/JS_Tooling_e_ES6_Modules);

## Adicionando os diretórios, arquivos e dependencias necessárias :

Vamos mexer um pouco na estrutura de diretórios, adicionaremos a pasta `frontend` e `public` na raíz do projeto, e já criaremos a pasta responsavel pelas `views` dentro de `src`, e uma pasta `includes` dentro da `views`. Além disso criaremos uma estrutura de organização de `assets` dentro da pasta `frontend`, que conterá as pastas `css` dedicadas aos arquivos com esta extenção e `img` para imagens que serão utilizadas pelos arquivos `.css`. Neste ponto também criaremos já os arquivos básicos da pasta frontend, um arquivo `style.css` dentro da pasta `css`, e na raíz relativa de `frontend` uma arquivo `main.js` após isso o projeto ficará assim :

~~~plaintext
| -- | frontend
|    | -- | assets
|    |      | -- | css
|    |      |      | -- style.css
|    |      | -- | img
|    |             | -- imagemFantasia.jpg // arquivo de demonstração
|    | -- main.js
|
| -- | public
|      | -- | assets
|             | -- | js
|
| -- | node_modules
|
| -- | src
|    | -- | controllers
|    |      | -- homeController.js
|    | -- | views
|           | -- | includes
|
| -- app.js
| -- package.json
| -- package-lock.json
| -- routes.js
~~~


Após isso devemos adicionar o arquivo que fará a a transpilação de códigos modernos javascript para códigos aceitos por todos os navegadores, como vimos nas aulas sobre webpack na raíz de nosso projeto, para isso vamos criar no diretório root uma arquivo chamado `webpack.config.js` e colar o código que se encontra no seguinte arquivo : [clique aqui !](https://github.com/LucaFrioli/JS_Estudos/blob/main/JS_Tooling_e_ES6_Modules/Aula_08/webpack.config.js). Após isso iremos realizar uma mudança na chave `entry` que será a seguinte :

~~~javascript
       entry: path.resolve(__dirname, 'frontend', 'main.js'),
~~~

Devemos realizar esta mudança para indicar que nosso arquivo de entrada não é mais o main da pasta src, mas sim o arquivo `main.js` dentro da pasta dedicada `frontend`.

Além disso devemos adicionar as dependências necessárias ao projeto, para isso vamos abrir nosso terminal e realizar os seguintes comandos :

~~~bash
# Adicionando as dependencias necessárias de desenvolvimento
npm i --save-dev @babel/cli @babel/core @babel/preset-env babel-loader webpack webpack-cli
# Adicionando as dependencias necessárias
npm i regenerator-runtime style-loader css-loader core-js ejs
~~~

Após isto devemos abrir o `package.json` e adicionar um script `dev` que ficará responsável por gerenciar o `webpack`, e devemos também reformular o script `start` para que ele ignore as novas pastas que adicionamos ao projeto :

~~~json
{
  "name": "nome_do_projeto",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "webpack -w",
    "start": "nodemon --ignore frontend --ignore public"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "core-js": "^3.37.0",
    "css-loader": "^7.1.1",
    "ejs": "^3.1.10",
    "express": "^4.18.2",
    "regenerator-runtime": "^0.14.1",
    "style-loader": "^4.0.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.5",
    "@babel/core": "^7.24.5",
    "@babel/preset-env": "^7.24.5",
    "babel-loader": "^9.1.3",
    "nodemon": "^3.0.3",
    "webpack": "^5.91.0",
    "webpack-cli": "^5.1.4"
  }
}
~~~

## Configurando o Projeto para adicionar a camada view :

Após as preparações básicas para a entrada da camada view em nossa estrutura, vamos configurar os arquivos necessários para começar a compreender como ela funciona, e quais as possibilidades que o arquivos *ejs* trazem para dentro de um projeto. Vamos abrir nosso arquivo `app.js`, e adicionaremos sets e um middleware padrões para definir quais os diretórios de páginas estática, ou seja onde as páginas após serem processadas devem ser enviadas(será a pasta criada `public`), e settar que o servidor deve utilizar a engine **ejs** para processar as views, na pasta que criamos `views`. Veja como ficará o código com estas mudanças :

~~~javascript
// app.js
const path = require('node:path');
const express = require('express');

const routes = require(path.resolve(__dirname, 'routes.js'));

const app = express();
const port = 3000;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // middleware utilizado para definição da pasta com os contúdos estáticos
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('O servidor está rodando na porta ' + port);
});
~~~

**Recursos Adicionais:**

* Documentação do módulo `path`: [Node Documentation](https://nodejs.org/api/path.html)
* Tutoriais sobre o módulo `path`:
    * [Nodejs Tutorial from codevolution](https://m.youtube.com/watch?v=p995SdRXw_E)
    * [Understanding Path Module from Daily Tuition](https://youtu.be/zqYkJed6nc4?si=XVetteBbjVrTUGTg)
    * [Node.js path module from DEV Community](https://dev.to/endeavourmonk/nodejs-path-module-16fm)
    * [Understanding Path Module - Node For Beginners - 20 from Daily Tuition (Youtube channel)](https://youtu.be/zqYkJed6nc4?si=EfNyRdgoJPT2GkjL)

* Documentação do módulo `fs`: [Node Documentation](https://nodejs.org/api/fs.html)
* Tutoriais sobre o módulo `fs`:
    * [Entendendo o Módulo do Sistema de Arquivos Node.js (FS)](https://kinsta.com/pt/base-de-conhecimento/nodejs-fs/)
    * [Node.js File System Module from W3Schools](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
    * [How To Work with Files using the fs Module in Node.js](https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js)
    * [Understanding File System | Understanding Node.js Core Concepts FREE VERSION from Codedev (Youtube channel)](https://youtu.be/hNzRoZti6vI?si=aAxJvt_K0QHRTZ_L)


