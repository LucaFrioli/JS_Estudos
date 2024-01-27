# Introdução ao Express

**OBS: tenha cuidado ao experimentar o servidor, pois sempre devemos finaliza-lo após rodar**

Instale o `express` nas dependências.

A biblioteca Express.js, muitas vezes referida apenas como Express, é um framework para Node.js utilizado no desenvolvimento de aplicativos web. Criado por TJ Holowaychuk, o Express simplifica a criação de servidores HTTP e facilita a construção de aplicativos web robustos e eficientes.

Aqui estão alguns pontos-chave sobre o Express.js:

1. **Minimismo e Flexibilidade:**
   Express é conhecido por sua abordagem minimalista. Ele fornece apenas o essencial para criar aplicativos web, permitindo que os desenvolvedores escolham e incorporem módulos adicionais conforme necessário. Isso proporciona uma grande flexibilidade e liberdade no desenvolvimento.

2. **Roteamento:**
   O roteamento é uma parte fundamental do Express. Você pode definir rotas para diferentes URLs e métodos HTTP e associar funções de tratamento (handlers) a essas rotas. Isso torna a criação de APIs e manipulação de requisições HTTP muito mais simples.

   ```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello, World!');
   });
   ```

3. **Middleware:**
   O sistema de middleware é uma característica poderosa do Express. Os middlewares são funções que têm acesso tanto ao objeto de requisição (request) quanto ao objeto de resposta (response). Eles podem realizar diversas tarefas, como autenticação, manipulação de dados de requisição, e muito mais. O Express possui middlewares integrados e permite que você crie seus próprios.

   ```javascript
   app.use(express.json()); // Middleware para interpretar JSON nas requisições
   ```

4. **Modelo de Aplicativo:**
   O Express segue o modelo de aplicativo, onde você configura um aplicativo expresso e define rotas e middlewares nesse aplicativo. Isso torna a estrutura do código mais organizada e fácil de entender.

   ```javascript
   const express = require('express');
   const app = express();

   // Definindo rotas e middlewares aqui...

   app.listen(3000, () => {
     console.log('Servidor rodando na porta 3000');
   });
   ```

5. **Suporte a Template Engines:**
   Express não é vinculado a um mecanismo de modelo específico, mas oferece suporte a uma variedade de motores de modelo populares, como EJS, Pug (anteriormente conhecido como Jade), Handlebars, etc. Isso permite a fácil geração de páginas HTML dinâmicas.

6. **Comunidade Ativa:**
   Express é amplamente utilizado na comunidade Node.js e possui uma comunidade ativa. Isso significa que há muitos recursos, tutoriais e módulos disponíveis para ajudar os desenvolvedores a superar desafios comuns.

Em resumo, o Express.js é uma ferramenta poderosa e popular para o desenvolvimento de aplicativos web em Node.js. Sua simplicidade, flexibilidade e ampla adoção na comunidade fazem dele uma escolha comum para muitos desenvolvedores quando se trata de construir servidores web e APIs eficientes.

## Método GET:

O método HTTP GET é um dos métodos padrão do protocolo HTTP e é amplamente utilizado para solicitar dados de um recurso específico em um servidor. Em um contexto web, o método GET é frequentemente utilizado para recuperar informações de recursos, como páginas HTML, imagens, arquivos de estilo e outros tipos de dados.

No contexto do Express.js, o método GET é utilizado para definir rotas que respondem a requisições GET específicas. O Express fornece um método `app.get()` para criar manipuladores de rota para requisições GET. Aqui está um exemplo básico de como você pode definir uma rota GET usando o Express:

```javascript
const express = require('express');
const app = express();

// Definindo uma rota para requisições GET na raiz ("/")
app.get('/', (req, res) => {
  res.send('Esta é a resposta para uma requisição GET na rota principal.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

No exemplo acima:

- `app.get('/')` define uma rota para requisições GET na raiz do aplicativo.
- O segundo argumento para `app.get()` é uma função de manipulação (handler) que recebe objetos `req` (representando a requisição) e `res` (representando a resposta). Neste exemplo, estamos respondendo à requisição com o texto "Esta é a resposta para uma requisição GET na rota principal.".

Quando um cliente faz uma requisição GET para a rota especificada ("/"), a função de manipulação associada é chamada, e a resposta é enviada de volta ao cliente.

O método GET é comumente utilizado para operações que não alteram o estado do servidor ou dos recursos, ou seja, operações "seguras" e "idempotentes". Ele é eficiente para recuperar dados e recursos, mas não é adequado para operações que causam alterações no servidor.

Em resumo, no contexto do Express.js, o método GET é usado para definir manipuladores de rota que respondem a requisições GET específicas, tornando o processo de roteamento e manipulação de requisições mais organizado e fácil de entender no desenvolvimento de aplicativos web.
