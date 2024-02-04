# Sobre middlewares :

**OBS: Importante ressaltar que quando for utilizar middlewares globais ou seja no `app.js` eles devem ser definidos antes do uso de middleware de `routes`. Além disso este readme terá um bonus de uma explicação superficial do conceito do método `.set`. Outra observação importante é que teremos um exercício recontruindo a API que está na pasta  [`sideTasksForTraining/ex_06`](https://github.com/LucaFrioli/JS_Estudos/tree/main/sideTasksForTraining/ex_06), utilizando um JSON e FS para simular um DB local e integrar o frontend e o backend. apartir de tudo que abordamos até agora. Também há a recomendação de reecriar toda a estrutura criada até aqui para reforçar os passos e conceitos abordados(ideal estar fazendo todas as aulas pois o boilerplate ainda não foi completamente definido, então aprenda a cria-lo repita quantas vezes forem necessárias(após que estiver bem feito busque reecriar tudo utilizando apenas javascript/node.js puro, conhecimento sobre fundamentos nunca é demais)).**

**O que é um middleware e para que ele é usado. De acordo com a [AWS](https://aws.amazon.com/pt/what-is/middleware/)**
O middleware é um software que diferentes aplicações usam para se comunicar umas com as outras. Ele oferece funcionalidade para conectar aplicações de modo inteligente e eficiente, para que se possa inovar mais rapidamente. O middleware atua como uma ponte entre diversas tecnologias, ferramentas e bancos de dados para integrá-los perfeitamente em um único sistema.

O middleware começou como uma ponte entre novas aplicações e sistemas herdados antes de ganhar popularidade na década de 1980. Os desenvolvedores inicialmente o usavam para integrar novos programas com sistemas anteriores sem reescrever o código. O middleware se tornou uma importante ferramenta de comunicação e gerenciamento de dados em sistemas distribuídos.

**Middlewares dentro do contexto de desenvolvimento de software :**
Desenvolvedores de software usam middleware para integrar diferentes componentes de software a outras aplicações. O middleware oferece um padrão de interface de programação de aplicações (API) para gerenciar a entrada e a saída de dados necessárias do componente. A ligação interna com o componente não fica visível para o usuário. Os desenvolvedores usam as APIs para solicitar os serviços necessários dos componentes de software.

### **Como o middleware funciona?**
O middleware abstrai o processo de comunicação subjacente entre componentes. Isso significa que a aplicação frontend se comunica apenas com o middleware e não precisa aprender a linguagem de outros componentes de software de backend.

**Framework de sistema de mensagens**
Um framework de sistema de mensagens facilita a troca de dados entre aplicações frontend e backend. Alguns frameworks comuns são:

 - JavaScript Object Notation (JSON)
 - Transferência Representacional de Estado (REST API)
 - Extensible Markup Language (XML)
 - Serviços da Web
 - Protocolo Simples de Acesso a Objetos (SOAP)

Frameworks de sistemas de mensagens fornecem uma interface de comunicação comum para aplicações em diferentes plataformas operacionais e linguagens. As aplicações gravam e leem dados em um formato padronizado fornecido pelo framework do sistema de mensagens.

**Exemplo de middleware :**

Por exemplo, um servidor web é um middleware que conecta sites ao banco de dados backend. Quando você envia um formulário em um site, seu computador envia a solicitação em XML ou JSON para o servidor da Web. Em seguida, o servidor da Web executa a lógica de negócios com base na solicitação, recupera informações de bancos de dados ou se comunica com outros microsserviços usando protocolos diferentes.

**Outras funções do middleware :**

Além de ser um intermediário entre aplicações de software, os programas de middleware também fazem o seguinte:

 - Fornecem um canal de comunicação seguro entre aplicações distribuídas, para que os sites enviem informações confidenciais com segurança para aplicações backend.
 - Gerenciam o fluxo de tráfego e evitam sobrecarregar uma aplicação ou um servidor de arquivos específico.
 - Automatizam e personalizam as respostas à solicitação. Por exemplo, o middleware classifica e filtra os resultados antes de enviá-los para a aplicação frontend.


## Explicação prática conceituando para express :

Middleware é um conceito fundamental em programação web, e em Node.js, é especialmente utilizado em conjunto com frameworks como o Express. Iremos explorar o que são middlewares e como funcionam, especialmente dentro do contexto do Express.

**Middleware em Programação Web:**

Middleware refere-se a um software intermediário que conecta diferentes componentes de um sistema. Em programação web, middlewares são funções que têm acesso tanto ao pedido (request) quanto à resposta (response) em uma aplicação. Eles podem realizar ações, modificar os dados ou interromper o fluxo do ciclo de vida da requisição.

**Funcionamento Básico dos Middlewares:**

1. **Requisição (Request):** Quando uma requisição é feita a um servidor, ela passa por uma série de middlewares antes de chegar à rota final ou manipulador de rota.

2. **Processamento nos Middlewares:** Cada middleware pode realizar tarefas específicas, como autenticação, logging, manipulação de dados, etc. Eles podem modificar o objeto `request` ou `response` antes que eles atinjam o próximo middleware ou a rota final.

3. **Resposta (Response):** O resultado do processamento do middleware é então enviado para o próximo middleware ou para o cliente como resposta.

**Middlewares no Express:**

O Express é um framework web para Node.js que utiliza extensivamente o conceito de middlewares para proporcionar flexibilidade e modularidade. Os middlewares no Express são funções que têm acesso aos objetos `request`, `response`, e ao próximo middleware na cadeia.

**Exemplo de Middleware no Express:**

Vamos considerar um exemplo básico de middleware que faz logging da URL da requisição:

~~~javascript
const express = require('express');
const app = express();

// Middleware de logging
app.use((req, res, next) => {
  console.log(`Recebido um pedido para a URL: ${req.url}`);
  next(); // Chama o próximo middleware na cadeia
});

// Rota
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// Inicia o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
~~~

Neste exemplo:

- `app.use` é usado para registrar um middleware.
- O middleware recebe `req` (objeto de requisição), `res` (objeto de resposta) e `next` (função para chamar o próximo middleware).
- O middleware de logging exibe a URL da requisição no console.

**Principais Conceitos:**

1. **Chamada do `next()`:** É essencial chamar `next()` para passar o controle para o próximo middleware na cadeia. Se esquecido, a execução pode ficar bloqueada no middleware atual.

2. **Ordem dos Middlewares:** A ordem em que os middlewares são registrados é crucial. Eles são executados na ordem em que são definidos.

3. **Finalização da Resposta:** Alguns middlewares podem finalizar a resposta, impedindo que a execução alcance as rotas subsequentes ou middlewares.

4. **Uso de `app.use`:** `app.use` é uma maneira comum de adicionar middlewares globais que afetam todas as rotas.

5. **Middlewares de Rota:** Além dos middlewares globais, o Express suporta middlewares específicos de rota, que são aplicados apenas a determinadas rotas.


## Aprofundando-se um pouco mais :

**1. Middleware de Erro:**

Os middlewares podem ser utilizados para lidar com erros. Se um middleware recebe um argumento, o Express o trata como um middleware de erro. Normalmente, esses middlewares têm quatro parâmetros: o próprio erro, `req`, `res`, e `next`.

~~~javascript
app.use((err, req, res, next) => {
  // Manipular o erro aqui
});
~~~

**2. Uso de Roteadores:**

Como já vimos o Express permite a criação de roteadores, que são conjuntos modulares de rotas e **middlewares**. Isso é útil para organizar melhor o código em aplicações maiores. Roteadores podem ter seus próprios middlewares e serem montados em caminhos específicos.

~~~javascript
const router = express.Router();

router.use((req, res, next) => {
  // Middleware específico do roteador
  next();
});

router.get('/', (req, res) => {
  // Rota específica do roteador
});

app.use('/api', router); // Montando o roteador em um caminho específico
~~~

**3. Middleware de Terceiros:**

Podemos usar middlewares de terceiros para adicionar funcionalidades extras ao seu aplicativo. Por exemplo, o `body-parser` é um middleware comum usado para analisar dados do corpo da requisição, especialmente útil para lidar com dados enviados através de formulários.

~~~javascript
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Middleware de terceiros para analisar JSON no corpo da requisição
~~~

**4. Execução Condicional de Middlewares:**

Podemos condicionalmente executar middlewares com base em certas condições. Isso é feito colocando middlewares em funções condicionais.

~~~javascript
function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.get('/restrito', verificaAutenticacao, (req, res) => {
  // Esta rota só será acessível se o usuário estiver autenticado
});
~~~

**5. Middleware de Log Global:**

Adicionando um middleware de log global para registrar informações sobre todas as requisições pode ser extremamente útil para rastrear o comportamento da aplicação.

~~~javascript
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
~~~

Estes são apenas alguns exemplos que destacam a versatilidade e poder dos middlewares no contexto do Express. Eles são a espinha dorsal da arquitetura do Express, permitindo a construção de aplicativos web flexíveis, modulares e fáceis de manter. Ao entender profundamente os conceitos de middlewares, pode-se tirar máximo proveito dessa abordagem para criar aplicações web eficientes em Node.js.


## Bonus sobre o método `set` :

No Express, o método `.set()` é usado para configurar variáveis de aplicação que afetam o comportamento global do framework. Ele permite que você configure diversas opções ou parâmetros de configuração para a sua aplicação. Essas configurações são frequentemente acessadas usando `app.get()` posteriormente para recuperar os valores definidos.

A sintaxe básica é a seguinte:

~~~javascript
app.set('nome_da_configuracao', 'valor_da_configuracao');
~~~

Aqui estão alguns exemplos de como o método `.set()` é utilizado:

**1. Configuração de Variáveis de Ambiente:**

~~~javascript
app.set('port', process.env.PORT || 3000);
~~~

Neste exemplo, o Express está sendo configurado para utilizar a porta definida no ambiente (caso esteja definida), ou então usar a porta 3000 como padrão.

**2. Configuração do Motor de Visualização (View Engine):**

~~~javascript
app.set('view engine', 'ejs');
~~~

Aqui, o Express está sendo configurado para usar o EJS como o motor de visualização padrão. Isso afeta como as renderizações de views são processadas.

**3. Configuração de Opções de Segurança:**

~~~javascript
app.set('trust proxy', 1);
~~~

Esta configuração indica ao Express para confiar na informação do cabeçalho `X-Forwarded-For` quando estiver hospedado atrás de um proxy, o que é útil para garantir que as informações de IP do cliente sejam tratadas corretamente.

**4. Desativação de Headers de X-Powered-By:**

~~~javascript
app.set('x-powered-by', false);
~~~

Ao definir `'x-powered-by'` como `false`, você está desabilitando o header `X-Powered-By` na resposta, por razões de segurança. Isso ajuda a não revelar informações desnecessárias sobre o servidor.

**5. Configuração de Tamanho Máximo de Payload para Solicitações POST:**

~~~javascript
app.set('json limit', '1mb');
~~~

Aqui, você está configurando o limite de tamanho para solicitações JSON, limitando-as a 1 megabyte.

É importante notar que nem todas as configurações são padrão ou amplamente utilizadas, e a documentação do Express deve ser consultada para entender completamente as opções disponíveis. O método `.set()` é uma maneira de personalizar e configurar o comportamento global do seu aplicativo Express de acordo com suas necessidades específicas.
