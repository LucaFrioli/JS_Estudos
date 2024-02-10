**Consumindo API com Fetch :**

**Introdução:**
Neste desafio, exploraremos a integração entre front-end e back-end por meio da Fetch API, consumindo o back-end que criamos na aula passada, e o aprimorando para processar a resposta e reverte-la em uma frase única para uso no front-end, a Fetch API uma poderosa ferramenta para realizar requisições assíncronas em aplicações web. Ela simplifica o processo de interação com servidores, permitindo que dados sejam recuperados e manipulados de forma eficiente.

**Objetivo:**
O objetivo deste exercício é capacitar e se acostumar a utilizar a Fetch API para consumir dados de um servidor back-end via API, compreendendo os conceitos fundamentais envolvidos nesse processo,e compreendendo melhor como frameworks e bibliotecas muitas vezes funcionam por baixo dos panos.

**Tarefas:**

1. **Configuração Inicial:**
   - Inicialize um projeto web básico com HTML, CSS e JavaScript.
   - Familiarize-se com a estrutura da Fetch API e suas principais funcionalidades.

2. **Requisições Assíncronas:**
   - Implemente solicitações assíncronas utilizando a Fetch API para recuperar dados do servidor que estará rodando na porta 3000.

3. **Manipulação de Dados:**
   - Manipule os dados recebidos para extrair informações relevantes.
   - Explore diferentes métodos da Fetch API para processar os resultados.

4. **Exibição Dinâmica:**
   - Atualize dinamicamente a interface do usuário com os dados obtidos, proporcionando uma experiência interativa.

5. **Tratamento de Erros:**
   - Implemente tratamentos adequados para lidar com possíveis falhas durante as requisições.

**Informações sobre a Fetch API:**
A Fetch API fornece uma interface JavaScript para realizar requisições HTTP, oferecendo um mecanismo poderoso e flexível para a comunicação entre front-end e back-end. Ela utiliza Promises para permitir operações assíncronas, facilitando o desenvolvimento de aplicações web mais responsivas e eficientes.

**Motivação:**
Desbravar o universo da integração front-end e back-end é um passo crucial para se tornar um desenvolvedor web completo. Este desafio não apenas aprimorará nossas habilidades na Fetch API, mas também abrirá portas para uma compreensão mais profunda do funcionamento das aplicações modernas. Boa sorte e aproveite o aprendizado!


Ao utilizar funções assincronas e carregar recursos com elas apartir de Listners do documento, é melhor utilizar o disparo de envento como `DOMContentLoaded`, o que previne falhas quando o código não necessita de uso de recursos diferentes de html e css.



# `setHeaders` e sua importancia nessa implementaçao :


Em uma aplicação Node.js usando o framework Express, a função `setHeaders` (ou `setHeader` no singular) é uma maneira de configurar e modificar os cabeçalhos HTTP nas respostas enviadas pelo servidor. O middleware `setHeaders` permite que você defina cabeçalhos específicos para todas as respostas ou com base em certas condições, ajudando a controlar diversos aspectos da comunicação entre o servidor e o cliente. Vamos explorar essa configuração em detalhes.

### Middleware `setHeaders` no Express

O middleware `setHeaders` é utilizado para configurar os cabeçalhos das respostas HTTP. Geralmente, é usado para lidar com questões de segurança, como CORS (Cross-Origin Resource Sharing), autenticação, e cache.

#### Exemplo Básico

Aqui está um exemplo básico de como usar o middleware `setHeaders` no Express:

~~~javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Configuração de um cabeçalho personalizado
    res.setHeader('X-Custom-Header', 'Hello, World!');

    // Chama a próxima função no pipeline de middleware
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
~~~

Neste exemplo, toda vez que uma requisição é feita para qualquer rota (`'/'` neste caso), o servidor responde com o cabeçalho personalizado `X-Custom-Header`.

#### Configuração Condicional com `setHeaders`

Você também pode configurar cabeçalhos de maneira condicional, com base em certas condições da requisição. Aqui está um exemplo que lida com CORS:

~~~javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Configuração de cabeçalhos para permitir CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Chama a próxima função no pipeline de middleware
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
~~~

Neste exemplo, os cabeçalhos de controle de CORS são configurados para permitir todas as origens (`'*'`), métodos HTTP específicos e determinados cabeçalhos. Isso é útil quando você está construindo uma API que pode ser acessada por clientes em diferentes domínios.

### Resumo

A função `setHeaders` no Express é um middleware flexível que permite a configuração dinâmica de cabeçalhos em respostas HTTP. Ela é frequentemente utilizada para questões de segurança, como CORS, e pode ser adaptada para atender às necessidades específicas da sua aplicação. Certifique-se de consultar a documentação oficial do Express para obter informações detalhadas sobre a função `setHeaders`: [Express - setHeaders](https://expressjs.com/en/4x/api.html#res.set).


No caso para resolver problemas relacionados ao CORS em uso local, no exercício utilizamos
a seguinte estrutura de `setHeder` :

~~~javascript
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); //utilizando o link gerado pelo liveserver
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
~~~
