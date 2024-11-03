# Configurando o servidor Express

Nesse momento finalmente iremos começar a popular nossa arquitetura que criamos na [etapa anterior](./readme.md). para isso iremos primeiro de tudo apagar o código de teste que criamos para verificar se a [configuração das ferramentas de desenvolvimento](../Aula_03/Readme.md). Com os arquivos limpos poderemos começar a trbalhar.

Neste projeto iremos utilizar o paradigma orientado a objetos para criar nosso servidor. Caso queira ver um breve resumo sobre POO [clique aqui](./poo.md).

---

Vamos iniciar instalando o `express` dentro de nosso projeto, para isso basta executaro seguinte comando no terminal :

```bash
npm i express
```

---

## Configurando o `app.js`:

Após isso iniciaremos criando o código do `app.js`, que ficará responsável pela configuração inicial do express. Para isso iremos abrir nosso arquivo `app.js` e adicionaremos o seguinte código :

```javascript
import express from 'express';

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
	}

	routes() {}
}

export default new App().app;
```

Este código define uma classe `App` responsável por configurar uma aplicação utilizando o framework **Express** para criar uma API em Node.js. Abaixo está a explicação linha a linha:

1. **import express from 'express';**: Aqui, o framework `express` é importado para ser utilizado na criação e configuração do servidor HTTP. O `express` facilita a criação de rotas, middlewares e o gerenciamento de requisições/respostas HTTP.


2. **class App**: Inicia a definição da classe `App`, que será responsável por configurar a aplicação Express, incluindo middlewares e rotas.


3.**Construtor da classe `App`**: O método `constructor` é chamado automaticamente quando a classe é instanciada.
```javascript
constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
}
```
   - `this.app = express();`: Cria uma instância do aplicativo Express e a armazena na propriedade `app` da classe. Essa instância é usada para configurar a aplicação.
   - `this.middlewares();`: Chama o método `middlewares`, onde serão definidos os middlewares da aplicação.
   - `this.routes();`: Chama o método `routes`, onde as rotas da aplicação serão definidas. Neste caso, o método está vazio, mas seria usado para definir as rotas HTTP.


4. Método middlewares(): Configura os middlewares que serão aplicados a todas as requisições da API.
```javascript
middlewares() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
}
```
   - `this.app.use(express.urlencoded({ extended: true }));`: Este middleware é responsável por interpretar o corpo das requisições no formato `x-www-form-urlencoded` (geralmente usado em formulários HTML), convertendo-o em um objeto JavaScript acessível via `req.body`. O parâmetro `extended: true` permite a análise de objetos aninhados.
   - `this.app.use(express.json());`: Este middleware interpreta requisições que têm o corpo no formato JSON, também permitindo o acesso a esses dados pelo objeto `req.body`.

5. **routes() {}**: Este método está vazio no momento, mas ele é utilizado para definir as rotas da aplicação. Nele, você conectará as URLs aos métodos que serão executados em resposta às requisições HTTP (como GET, POST, etc.).

6. **export default new App().app;**:

   - `new App()`: Instancia a classe `App`, o que significa que o construtor será executado, configurando os middlewares e as rotas.
   - `.app`: A propriedade `app` contém a instância do servidor Express configurado.

   - O `export default` torna essa instância disponível para ser usada em outros arquivos. Assim, qualquer arquivo que importar este módulo obterá a aplicação configurada e pronta para ser executada.

---
## Configurando o `server.js`:

Agora que o Express foi minimamente configurado o iniciaremos em uma porta, para isso voltaremos a atenção ao arquivo `server.js`, e dentro deles usaremos o método `.listen` para iniciar o nosso servidor. Então dentro do arquivo iremos adicionar o seguinte código :

```javascript
import app from './app';

const port = 3000;
app.listen(port, () => {
	console.log(`Servidor iniciado na porta ${port}`);
});
```
Este código é responsável por iniciar o servidor Express previamente configurado no arquivo `app.js` (ou `app`), escutando em uma porta específica e exibindo uma mensagem no console quando o servidor estiver rodando. Abaixo, explico o código linha a linha:


1. **import app from './app';**: Esta linha importa a instância do aplicativo Express que foi configurada no arquivo `app.js`. No código anterior que você forneceu, essa instância foi exportada usando `export default new App().app;`, e aqui é importada para ser utilizada no servidor.


2. **const port = 3000;**: Esta linha define a variável `port` com o valor `3000`. A porta é onde o servidor vai escutar as requisições HTTP. Neste caso, ele será acessível via `http://localhost:3000`.


3. **Inicia o servidor**:
```javascript
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
	console.log(`Acesse: http://localhost:${port}`);
});
```
   - `app.listen(port, ...)`: Esta linha chama o método `listen` da instância do aplicativo Express (`app`). Ele faz com que o servidor comece a escutar requisições na porta definida (3000).
   - `port`: Especifica a porta em que o servidor vai ficar escutando. Aqui, é o valor da variável `port`, ou seja, `3000`.
   - `() => { ... }`: É uma função de callback que será executada assim que o servidor estiver ativo. O callback não recebe parâmetros, pois sua única função é exibir uma mensagem no console.
   - `console.log(...)`: Exibe as mensagens `"Servidor iniciado na porta 3000"` e `"Acesse: http://localhost:3000"` no console para informar que o servidor foi iniciado com sucesso na porta especificada, e dizendo o link de entrada dentro de nossa aplicação.


## Configurando arquivo de rota e utilizando primeiro controller:

Após o servidor ter sido minimamente configurado, vamos criar a primeira rota, e entender melhor como funcinam os arquivos individuais de rotas, e como eles nos permitem criar escalabilidade em nossa aplicação, além disso como eles se comunicam com os arquivos de controller.

Para isso na pasta `routes` iremos criar um arquivo chamado `home.js` que conterá as rotas referentes ao ponto de entrada de nossa aplicação. E o arquivo `Home.js`(pois iremos trabalhar com classes) dentro de nosso diretório `controllers`.

### Código contido dentro do arquivo controller `Home.js`:

O arquivo `Home.js` será o responsável por conter as funções de processamentos de nossos endpoints, e que realizará o fim de nossas operações e requisições, como iremos trabalhar com paradigma orientado a objetos utilizamos o nome do arquivo com a **primeira letra maiúscula**, e isso deverá ser respeitado para todos os arquivos que contenham classes dentro de seu conteúdo. exceto o arquivo `app.js`.

Para este arquivo iremos utilizar um código de teste para realizarmos a primeira requisição pelo Insominia. Vamos adicionar uma resposta `Hello World!` apenas como exeplo. para começar a compreender melhor como realizaremos isso com classes vamos ao código e após isso sua explicação :

```javascript
export default class Home {
	index(req, res) {
		res.json({
			say: 'Hello world!',
		});
	}
}
```
Esse código define uma classe chamada `Home` que possui um método para lidar com requisições HTTP e enviar uma resposta JSON com uma mensagem "Hello world!". Vamos analisar cada linha detalhadamente:

1. **export default class Home {**:
   - `export default`: Esta instrução exporta a classe `Home` como o item principal (ou padrão) do módulo, tornando-a disponível para importação em outros arquivos.
   - `class Home`: Aqui estamos definindo uma classe chamada `Home`. Em JavaScript, as classes são usadas para estruturar o código de maneira organizada, permitindo encapsular métodos e dados em uma única entidade. Esta classe `Home` será usada para definir métodos que podem responder a requisições HTTP.

2. **index(req, res) {**:
   - `index(req, res) {`: Este é um método chamado `index`, pertencente à classe `Home`. Ele recebe dois parâmetros:
     - `req`: Abreviação de "request" (requisição), representa o objeto da requisição HTTP, que contém informações sobre o pedido feito pelo cliente.
     - `res`: Abreviação de "response" (resposta), representa o objeto de resposta, que é utilizado para enviar dados de volta ao cliente.
   - Este método `index` será usado para retornar uma resposta em formato JSON quando o cliente fizer uma requisição a ele.

3. **Enviar resposta JSON**:
   ```javascript
   res.json({
       say: 'Hello world!',
   });
   ```
   - `res.json({ ... })`: Aqui, estamos chamando o método `json` do objeto `res` para enviar uma resposta JSON ao cliente, isto é de extrrema importância já que estamos trabalhando com o padrão de API REST.
   - `{ say: 'Hello world!' }`: Estamos criando um objeto com uma chave chamada `say`, que possui o valor `'Hello world!'`. Quando o cliente acessar essa rota, ele receberá essa resposta em formato JSON, semelhante a `{ "say": "Hello world!" }`.

Esse código serve como um exemplo inicial para criar uma rota de resposta em uma aplicação. Ao fazer uma requisição para a rota associada ao método `index` da classe `Home`, o cliente(o frontend que iremos criar) receberá a resposta com a mensagem "Hello world!" em formato JSON.

### Código contido dentrodo arquivo de rotas `home.js`:

Dentro deste arquivo vamos utilizar todas as rotas e subrotas referentes aos caminhos da home. Como estamos utilizando uma versão ES6 ou superior, a maior mudança em relação ao [material já antes visto](../../js_node_npm_express_mongoDB/Aula_10/readme.md), está no modo de instânciar o `Router` como constante, importá-lo do módulo express, e como iremos desacoplar o conjunto completo de rotas em vários arquivos.

Além disso já iremos importar e criar uma váriavel de instância de nossa classe controladora, para que possamos aplicar as funções de processamento dentro de nossas rotas. Veja a seguir o exeplo:

```javascript
import Home from '../controllers/Home';
import { Router } from 'express';

const routes = new Router();
const processFunctions = new Home();

routes.get('/', processFunctions.index);

export default routes;
```

Esse código é responsável por configurar uma rota em um servidor Express, usando uma classe `Home` para processar uma requisição GET na rota raiz (`/`). Abaixo está a explicação de cada linha:

1. **import Home from '../controllers/Home';**
   - Esta linha importa a classe `Home` do arquivo localizado em `../controllers/Home`. Esse arquivo contém a definição da classe `Home` e os métodos que ela possui, como o `index`, que será usado para processar requisições.

2. **import { Router } from 'express';**
   - Aqui, estamos importando apenas o módulo `Router` do pacote `express`. O `Router` é uma funcionalidade do Express que permite criar rotas independentes e organizadas para o servidor. Esse objeto `Router` será usado para definir e gerenciar as rotas da aplicação.

3. **const routes = new Router();**:
    - `const routes = new Router();`: Estamos criando uma nova instância de `Router` e atribuindo-a à constante `routes`. Esse objeto `routes` será usado para configurar e definir as rotas que estarão disponíveis na aplicação.

4. **const processFunctions = new Home();**:
   - `const processFunctions = new Home();`: Aqui estamos criando uma instância da classe `Home`, chamada `processFunctions`. A partir dessa instância, podemos acessar os métodos definidos na classe `Home`, como o método `index`, que será utilizado para processar as requisições feitas na rota raiz.

5. **routes.get('/', processFunctions.index);**:
   - `routes.get('/' ... )`: Esta linha define uma rota GET na raiz (`/`) usando o método `get` do objeto `routes`.
   - `'/'`: Especifica a URL da rota, que aqui é a raiz do servidor.
   - `processFunctions.index`: Passa o método `index` da instância `processFunctions` como o manipulador da rota. Quando o cliente faz uma requisição GET para a rota `/`, o método `index` da classe `Home` é executado, enviando uma resposta JSON.

6. **export default routes;**
   - `export default routes;`: Essa linha exporta `routes` como o item padrão do módulo, tornando-o disponível para importação em outros arquivos da aplicação. Assim, esse arquivo pode ser importado e usado em outro local para integrar as rotas configuradas.

Esse código é uma configuração básica de rotas, onde uma requisição GET feita à rota raiz (`/`) será processada pelo método `index` da classe `Home`, retornando uma resposta ao cliente.

## Utilizando as rotas para que sejam acessíveis para o servidor


_Testando o resultado com o insomnia_ (anotação apenas).
