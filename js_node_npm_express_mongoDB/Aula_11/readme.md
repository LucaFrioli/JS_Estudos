# Express Views

Vamos começar explorando a camada View no padrão MVC (Model-View-Controller) e, em seguida, abordaremos o tema sobre as view engines no Node.js.

### Camada View no Padrão MVC:

A camada View no padrão MVC é responsável por apresentar os dados ao usuário e receber suas interações. Ela exibe a informação ao usuário de maneira adequada, formatando os dados provenientes do Model. No contexto web, a View geralmente representa a interface do usuário, incluindo HTML, CSS e, em alguns casos, partes mínimas de código JavaScript.

1. **Responsabilidades da Camada View:**
   - Apresentação dos dados ao usuário de maneira compreensível.
   - Interpretação e exibição de dados provenientes do Model.
   - Responder a eventos do usuário e interações.

2. **Independência da Lógica de Negócios:**
   - A Camada View deve ser o mais independente possível da lógica de negócios, promovendo a reutilização e a manutenibilidade do código.

3. **Comunicação Bidirecional:**
   - A View deve ser capaz de exibir dados ao usuário e também aceitar entradas do usuário para repassar ao Controller.

### View Engines no Node.js:

No contexto do Node.js, as view engines são ferramentas que facilitam a renderização dinâmica de páginas HTML, permitindo a incorporação de dados dinâmicos nas visualizações. Elas ajudam a separar a lógica de apresentação da lógica de negócios, seguindo os princípios do padrão MVC.

1. **Principais View Engines para Node.js:**

   - **EJS (Embedded JavaScript):**
     - Utiliza JavaScript embutido nas tags `<% %>` para incorporar lógica de controle e exibir dados dinâmicos.

   - **Pug (anteriormente conhecido como Jade):**
     - Utiliza uma sintaxe mais concisa baseada em indentação, facilitando a leitura e escrita de templates.

   - **Handlebars:**
     - Utiliza um sistema de marcação simples e incorpora lógica de controle usando expressões entre chaves duplas `{{ }}`.

   - **Mustache:**
     - Similar ao Handlebars, fornece uma sintaxe simples para incorporar dados dinâmicos em templates.

2. **Uso de View Engines no Express:**

   - O Express, um framework para Node.js, suporta a integração fácil de várias view engines. Você pode configurar uma view engine usando o método `app.set('view engine', 'nome_da_view_engine')`.

   - Exemplo utilizando `EJS`:

     ~~~javascript
        const express = require('express');
        const path = require('path');

        const routes = require('./routes');

        const app = express();
        const port = 3000;

        app.use(express.urlencoded({ extended: true }));
        app.use(routes);

        //aqui iremos definir qual a pasta que o express deve consumir para renderizar as views e a view engine que no caso é ejs
        app.set('views', path.resolve(__dirname, 'src', 'views')); //definindo o caminho da pasta
        app.set('view engine', 'ejs'); //definindo a engine

        // Rota que renderiza um template EJS aqui está apenas como uma explicação transfira este get para routes, e a função para o controller referente a home para entender a arquitetura da aula
        app.get('/', (req, res) => {
            res.render('index', { teste: 'Olá mundo' });//define o template index.ejs e a váriavel dentro dele para o valor Olá mundo
        });

        app.listen(port, () => {
            console.log(`Server rodando na porta ${port}`);
            console.log(`Abra o link : http://localhost:${port}`);
        });
     ~~~

As view engines no Node.js ajudam a tornar a criação de interfaces dinâmicas e a implementação do padrão MVC mais eficiente, facilitando a separação de responsabilidades entre Model, View e Controller. Vamos utilizar `EJS` como visto no exeplo do código acima.

# Explicações mais Generalistas sobre `EJS` :

O EJS (Embedded JavaScript) é uma view engine para Node.js que permite incorporar código JavaScript diretamente em arquivos de modelo HTML. Isso facilita a geração dinâmica de conteúdo HTML com dados provenientes do servidor. Vou explicar alguns conceitos-chave e fornecer alguns exemplos práticos.

### Sintaxe Básica do EJS:

1. **Incorporando Variáveis:**
   - Para incluir variáveis no seu template, use a tag `<%= %>`:

     ~~~html
     <h1><%= title %></h1>
     ~~~

   - No lado do servidor, você passaria um objeto que contém a variável `title` para ser renderizada.

2. **Estruturas de Controle:**
   - Você pode usar estruturas de controle, como `if`, `for`, e `switch` diretamente no template:

     ~~~html
     <% if (user) { %>
       <p>Nome: <%= user.name %></p>
     <% } else { %>
       <p>Usuário não encontrado.</p>
     <% } %>
     ~~~

3. **Loops:**
   - Exemplo de um loop `for`:

     ~~~html
     <ul>
       <% for (let i = 0; i < users.length; i++) { %>
         <li><%= users[i] %></li>
       <% } %>
     </ul>
     ~~~

   - O EJS também suporta o loop `forEach`.

### Instalação e Uso no Express:

1. **Instalação:**
   - Você pode instalar o EJS usando o npm:

     ~~~bash
     npm install ejs
     ~~~

2. **Configuração no Express:**
   - No seu arquivo principal do aplicativo (por exemplo, `app.js`), configure o Express para usar o EJS como a view engine:

     ~~~javascript
     const express = require('express');
     const app = express();

     app.set('view engine', 'ejs');
     ~~~

3. **Renderizando Páginas:**
   - No seu roteamento, use o método `res.render` para renderizar um template EJS:

     ~~~javascript
     app.get('/', (req, res) => {
       const data = { title: 'Meu Site', users: ['Alice', 'Bob', 'Charlie'] };
       res.render('index', data);
     });
     ~~~

   - No exemplo acima, o arquivo `index.ejs` no diretório `views` será renderizado, e o objeto `data` será passado para ser utilizado no template.

### Partials e Layouts:

1. **Partials:**
   - Os partials são trechos de código reutilizáveis. Você pode criar um arquivo parcial (por exemplo, `header.ejs`) e incluí-lo em outros templates:

     ~~~html
     <!-- views/partials/header.ejs -->
     <header>
       <h1>Meu Site</h1>
     </header>
     ~~~

     ~~~html
     <!-- views/index.ejs -->
     <% include partials/header.ejs %>
     <p>Conteúdo da página inicial.</p>
     ~~~

2. **Layouts:**
   - Os layouts definem a estrutura comum de todas as páginas. EJS não possui layouts incorporados, mas você pode simular isso com partials:

     ~~~html
     <!-- views/layouts/mainLayout.ejs -->
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title><%= title %></title>
     </head>
     <body>
       <%- include('../partials/header.ejs') %>
       <div id="content">
         <%= content %>
       </div>
       <%- include('../partials/footer.ejs') %>
     </body>
     </html>
     ~~~

     ~~~html
     <!-- views/index.ejs -->
     <%- include('../layouts/mainLayout.ejs', { title: 'Página Inicial', content: '<p>Conteúdo da página inicial.</p>' }) %>
     ~~~

Esta é apenas uma visão geral básica do EJS. Ele oferece mais recursos, como helpers e filtros, que podem ser explorados de acordo com as necessidades específicas do projeto.
