# Express Sessions e Flash Messages

Iremos adicionar ao boilerplate que estamos criando,uma preparção para lidar com seções de usuários, como mantendo logins ativos e gerenciamentos de preferências de navegação. Além disso iremos integrar a isso, menssagens para que o usuário possa saber o que cada uma das próprias ações desencadeou no background da aplicação.

Por estarmos trabalhando com Nodemon iremos salvar essas sessões dentro do banco de dados, e não vamos utilizar
a sessão em memoria.

Para isso iremos instalar :
- `express-session`
- `connect-mongo`
- `connect-flash`

### Express Sessions:

O Express Sessions refere-se a um middleware no framework Express.js que possibilita a criação e gestão de sessões em uma aplicação web. Sessões são mecanismos que permitem armazenar dados específicos do usuário entre as requisições, proporcionando uma forma de manter o estado e a autenticação durante a interação do usuário com a aplicação.

**Principais características do Express Sessions:**

1. **Identificação do Usuário:** O Express Sessions permite associar um identificador único a cada usuário, geralmente armazenado em um cookie. Esse identificador é utilizado para recuperar os dados da sessão associados a um usuário específico.

2. **Armazenamento de Dados:** É possível armazenar dados específicos da sessão, como informações de autenticação, preferências do usuário e outras variáveis relevantes para a aplicação. Esses dados são mantidos de forma persistente durante as requisições do usuário.

3. **Configurações Personalizadas:** O middleware oferece opções configuráveis para ajustar o comportamento das sessões, como o tempo de expiração, o local de armazenamento dos dados da sessão e a configuração de segurança.

4. **Integração com Múltiplos Sistemas de Armazenamento:** O Express Sessions é flexível e suporta diferentes métodos de armazenamento, como em memória, em banco de dados ou em sistemas externos, permitindo adaptar a solução às necessidades específicas da aplicação.

Para saber mais veja a documentação : [repositório do express session](https://github.com/expressjs/session#compatible-session-stores);

### Flash Messages:

Flash Messages são uma técnica comum em desenvolvimento web para exibir mensagens temporárias ao usuário após uma ação específica, como o envio de um formulário, atualização de perfil ou qualquer operação que gere feedback. Essas mensagens são exibidas apenas uma vez, geralmente na próxima requisição do usuário, e são frequentemente usadas para fornecer feedback sobre o sucesso ou falha de uma operação.

**Principais características das Flash Messages:**

1. **Temporariedade:** As Flash Messages são temporárias e destinam-se a serem exibidas apenas uma vez. Elas são úteis para comunicar resultados de ações específicas e fornecer feedback instantâneo ao usuário.

2. **Integração com Redirecionamentos:** Geralmente, as Flash Messages são exibidas após um redirecionamento, o que permite que sejam apresentadas na página seguinte à ação que gerou a mensagem.

3. **Tipos de Mensagens:** Podem ser categorizadas em diferentes tipos, como mensagens de sucesso, alertas ou erros. Isso permite ao usuário entender imediatamente o resultado da ação que realizou.

4. **Facilidade de Uso com Express:** O framework Express.js possui um middleware específico, conhecido como "express-flash", que simplifica a implementação de Flash Messages. Esse middleware permite armazenar mensagens na sessão do usuário e recuperá-las na próxima requisição.

Ao combinar o uso de Express Sessions e Flash Messages em uma aplicação web, podemos criar uma experiência mais interativa e informativa para os usuários, fornecendo feedback eficaz e mantendo um controle consistente do estado da sessão durante a interação com a aplicação.

# Entendendo melhor as dependencias em modo mais generalista :

## Express-session

**O que faz:**

* Gerencia sessões de usuário em aplicações Express.
* Armazena dados de sessão no servidor, como informações de login, preferências do usuário e estado de carrinho de compras.
* Permite que os dados da sessão persistam entre diferentes solicitações do mesmo usuário.

**Funções:**

* `req.session`: Acessa o objeto de sessão da requisição atual.
* `req.session.save()`: Salva as alterações feitas no objeto de sessão.
* `req.session.destroy()`: Destroi a sessão atual.
* `session.cookie`: Define as opções do cookie de sessão, como nome, domínio, caminho e tempo de vida.
* `session.secret`: Define a chave secreta usada para assinar cookies de sessão.
* `session.resave`: Controla se a sessão deve ser salva mesmo que não tenha sido modificada.
* `session.saveUninitialized`: Controla se uma nova sessão vazia deve ser salva quando uma requisição é recebida.

**Configurações:**

* `secret`: Chave secreta usada para assinar cookies de sessão. **Obrigatória**.
* `store`: Armazenamento de sessão, como `MemoryStore` (padrão) ou `MongoStore`.
* `resave`: Controla se a sessão deve ser salva mesmo que não tenha sido modificada. `false` por padrão.
* `saveUninitialized`: Controla se uma nova sessão vazia deve ser salva quando uma requisição é recebida. `true` por padrão.
* `cookie`: Opções do cookie de sessão, como nome, domínio, caminho e tempo de vida.

**Exemplo de uso:**

~~~javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'minha-chave-secreta',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
  },
}));

app.get('/', (req, res) => {
  if (!req.session.user) {
    req.session.user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
    };
  }

  res.send(`Olá, ${req.session.user.name}!`);
});

app.listen(3000);
~~~

## Connect-mongo

**O que faz:**

* Armazena dados de sessão do `express-session` em um banco de dados MongoDB.
* Permite escalar sessões para vários servidores.
* Oferece melhor persistência de dados de sessão do que o armazenamento em memória.

**Funções:**

* `MongoStore`: Construtor de armazenamento de sessão MongoDB.
* `MongoStore.create()`: Cria uma nova instância de `MongoStore`.

**Configurações:**

* `mongoUrl`: URL de conexão ao banco de dados MongoDB. **Obrigatória**.
* `collection`: Nome da coleção MongoDB para armazenar dados de sessão. `sessions` por padrão.
* `ttl`: Tempo de vida (em segundos) dos dados de sessão no banco de dados.

**Exemplo de uso:**

~~~javascript
const express = require('express');
const session = require('express-session');
const ConnectMongo = require('connect-mongo');

const app = express();

const mongoStore = ConnectMongo.create({
  mongoUrl: 'mongodb://localhost:27017/my-database',
  collection: 'sessions',
  ttl: 1000 * 60 * 60 * 24 * 7, // 7 dias
});

app.use(session({
  secret: 'minha-chave-secreta',
  store: mongoStore,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
  },
}));

app.listen(3000);
~~~

## Connect-flash

**O que faz:**

* Exibe mensagens temporárias (flash messages) para o usuário.
* As mensagens são armazenadas na sessão e são apagadas após serem exibidas.
* Úteis para exibir mensagens de erro, sucesso ou informação.

**Funções:**

* `req.flash('success', 'Mensagem de sucesso')`: Adiciona uma mensagem de sucesso.
* `req.flash('info', 'Mensagem informativa')`: Adiciona uma mensagem informativa.
* `app.locals.success`: Variável local contendo todas as mensagens de sucesso flash da requisição atual.
* `app.locals.error`: Variável local contendo todas as mensagens de erro flash da requisição atual.
* `app.locals.info`: Variável local contendo todas as mensagens informativas flash da requisição atual.

**Configurações:**

* Nenhuma configuração necessária.

**Exemplo de uso:**

~~~javascript
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

app.use(session({
  secret: 'minha-chave-secreta',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
  },
}));

app.use(flash());

app.get('/login', (req, res) => {
  if (req.body.password !== '123456') {
    req.flash('error', 'Senha incorreta.');
    res.redirect('/login');
  } else {
    req.flash('success', 'Login efetuado com sucesso.');
    res.redirect('/home');
  }
});

app.get('/home', (req, res) => {
  res.render('home', {
    success: req.locals.success,
    error: req.locals.error,
  });
});

app.listen(3000);
~~~

**Template home.ejs:**

~~~html
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
</head>
<body>
  <h1>Home</h1>
  <% if (success) { %>
    <p class="success-message"><strong>Sucesso!</strong> <%= success %></p>
  <% } %>
  <% if (error) { %>
    <p class="error-message"><strong>Erro!</strong> <%= error %></p>
  <% } %>
</body>
</html>
~~~


# Configurações realizadas no app.js :

Devemos adicionar o seguinte código a aplicação para que o uso de sessões e flash messages sejam configuradas para utilizar posteriormente as habilitando:

~~~javascript
const express_session = require('express-session');
const connectMongo = require('connect-mongo')(express_session);
const connect_flash = require('connect-flash');

const sessionOptions = express_session({
    secret: process.env.SESSIONSECRET,
    store: new connectMongo({
        mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60 * 60 * 24) * daySessionConfig,
        httpOnly: true,
    }
});
~~~


1. **`express-session`**: Esta é uma middleware para o Express que fornece suporte a sessões. No código, estamos criando um objeto `sessionOptions` com várias opções de configuração:

   - `secret`: É uma chave secreta para assinar o cookie do ID da sessão. Essa chave deve ser forte, segura e mantida em segredo. Recomenda-se armazenar essa chave em uma variável de ambiente (`process.env.SESSIONSECRET` no nosso caso).

   - `store`: estamos utilizando o `connectMongo` como armazenamento de sessão, projetado para armazenar as sessões no MongoDB. Ele usa a opção `mongooseConnection` para especificar a conexão com o banco de dados MongoDB.

   - `resave`: Essa opção força a sessão a ser salva de volta no armazenamento, mesmo que a sessão não tenha sido modificada durante a solicitação. N caso, está configurada como `false`, indicando que não salvará a sessão se não tiver sido modificada.

   - `saveUninitialized`: Essa opção força uma sessão que está "não inicializada" a ser salva no armazenamento. Uma sessão não inicializada é uma sessão nova e ainda não modificada. Nesse caso, deverá ser configurada como `false`.

   - `cookie`: Opções de configuração para o cookie da sessão. `maxAge` está configurado para um dia multiplicado por `daySessionConfig`, fazendo com que o cookie expire após um dia. A opção `httpOnly` está configurada como `true`, uma prática de segurança recomendada para ajudar a prevenir ataques de script entre sites (XSS).

2. **`connect-mongo`**: Esta é uma store de sessão para o Express e Connect, que permite armazenar sessões em um banco de dados MongoDB.

3. **`connect-flash`**: Esta é uma middleware para mensagens flash. Mensagens flash são armazenadas na sessão e podem ser usadas para exibir mensagens ao usuário na próxima solicitação. Mensagens flash são frequentemente usadas para fornecer feedback aos usuários após uma operação (por exemplo, exibir uma mensagem de sucesso ou erro).

Jamais esqueça de configurar as chave do arquivo `.env`.

## Habilitando o uso :

Para isso basta utilizarmos o `app.use()` em cada uma das opções :

~~~javascript
app.use(connect_flash());
app.use(sessionOptions);
~~~


# Criando sessões :

Após relizar as configurações necessárias e habilitar o uso de sessões em conjunto como o MongoDB, devemos começar a utiliza-las. Para criar uma seção basta ir ao controller e utilizar o comando `req.session`, adicionar um atributo com um ponto e o nome desejado da chave que carregará a sessão e as informações. Por sua vez as informações serão adicionadas em um objeto com atributos chave-valor referentes as sessões.

~~~javascript
//criando a sessão :
    req.session.user = {
        name: 'teste',
        logged: true
    }
//recuperando as informações de sessão
    console.log(req.session.user);//neste caso estamos apenas mostrando ela no console da aplicação
~~~

# utilizando as flash messages :

Para utilizar as flash messages também vamos nos controllers e declaramos `req.flash()` e como parâmetros passamos uma chave de disparo e uma menssagem a ser carregada, após serem carregadas, elas ficarão salvas na session recorrente,para dispara-la basta utilizar `req.flash('chave de disparo')`:

~~~javascript
// para setar as flash messages
    req.flash('info', 'hello world!');
    req.flash('error', 'Erro disparado por um flash');
    req.flash('success', 'sucesso de recuperação de dados');
//para dispara-las no console :
    console.log(req.flash('info'),req.flash('error'),req.flash('success'));
~~~

Após serem disparados as menssgens somem, e só aparecem novamente quando setadas novamente;
