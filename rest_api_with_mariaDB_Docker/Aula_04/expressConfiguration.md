# Configurando o servidor Express

Nesse momento finalmente iremos começar a popular nossa arquitetura que criamos na [etapa anterior](./readme.md). para isso iremos primeiro de tudo apagar o código de teste que criamos para verificar se a [configuração das ferramentas de desenvolvimento](../Aula_03/Readme.md). Com os arquivos limpos poderemos começar a trbalhar.

Neste projeto iremos utilizar o paradigma orientado a objetos para criar nosso servidor. Caso queira ver um breve resumo sobre POO [clique aqui](./poo.md).

---

Vamos iniciar instalando o `express` dentro de nosso projeto, para isso basta executaro seguinte comando no terminal :

```bash
npm i express
```

---

Após isso iniciaremos criando o código do app.js, que ficará responsável pela configuração inicial do express. Para isso iremos abrir nosso arquivo app.js e adicionaremos o seguinte código :

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
});
```
   - `app.listen(port, ...)`: Esta linha chama o método `listen` da instância do aplicativo Express (`app`). Ele faz com que o servidor comece a escutar requisições na porta definida (3000).
   - `port`: Especifica a porta em que o servidor vai ficar escutando. Aqui, é o valor da variável `port`, ou seja, `3000`.
   - `() => { ... }`: É uma função de callback que será executada assim que o servidor estiver ativo. O callback não recebe parâmetros, pois sua única função é exibir uma mensagem no console.
   - `console.log(...)`: Exibe a mensagem `"Servidor iniciado na porta 3000"` no console para informar que o servidor foi iniciado com sucesso na porta especificada.

