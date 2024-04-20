# Recaptulação dos conteúdos vistos no módulo

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

## Criando servidores :

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

Com estas duas ferramentas instaladas podemos começar a criar um servidor básico para web. Para fazermos isso iremos nos utilizar o conceito dos verbos http. primeiramente devmos criar um arquivo chamado `app.js` este arquivo que irá carregar os requisitos minimos para fazer o controle em qualporta ele irá rodar, as instâncias do express e posteriormente os middlewares, a chamada do roteamento e a engine que carregara as páginas web componentizadas, como veremos ao decorrer desta sesão. por enquanto vamos criar a parte básica a seguir :

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

Entendendo melhor a morfologia de como é estruturada uma requisição básica da busca de informações dentro do servidor, podemos começar também a entender melhor o funcionamento de outros verbos dentro do framework, ao construir uma rota post por exeplo, ela terá a a mesma estrutura de declaração, sendo : `routes`.`verbo http`(`'rota a que se refre'`,`(declaração dos Objetos de processamento) => {` `Lógica da rota utilizando os objetos` `}`). Vamos observar umarota post :

~~~javascript
routes.post('/',(req,res)=>{
    //lógica sendo aplicada
});
~~~

**Recursos Adicionais:**

* Documentação do módulo `path`: [Node Documentation](https://nodejs.org/api/path.html)
* Tutoriais sobre o módulo `path`:
    * [Nodejs Tutorial from codevolution](https://m.youtube.com/watch?v=p995SdRXw_E)
    * [Understanding Path Module from Daily Tuition](https://youtu.be/zqYkJed6nc4?si=XVetteBbjVrTUGTg)
    * [Node.js path module from DEV Community](https://dev.to/endeavourmonk/nodejs-path-module-16fm)
* Documentação do módulo `fs`: [Node Documentation](https://nodejs.org/api/fs.html)


