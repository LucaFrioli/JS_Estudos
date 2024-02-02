# Criando um servidor super básico com Node :

Vamos analisar o código passo a passo e explicar os conceitos envolvidos:

1. **Importação do Módulo HTTP:**
   ~~~javascript
   const http = require('node:http');
   ~~~
   - Aqui, estamos importando o módulo `http`, que é um módulo nativo do Node.js. Este módulo fornece funcionalidades para criar servidores HTTP.

2. **Criação do Servidor HTTP:**
   ~~~javascript
   const server = http.createServer((req, res) => { /* ... */ });
   ~~~
   - Utilizamos o método `createServer` do módulo `http` para criar um servidor. Ele recebe uma função de callback que será executada sempre que uma requisição HTTP for recebida.

3. **Manipulação de Requisições:**
   ~~~javascript
   const url = req.url;
   ~~~
   - O objeto `req` (requisição) fornece informações sobre a requisição do cliente. Aqui, estamos obtendo a URL solicitada.

4. **Roteamento de Requisições:**
   ~~~javascript
   switch (url) {
       // ... casos para diferentes URLs
   }
   ~~~
   - Usando um switch, o código roteia a requisição com base na URL solicitada.

5. **Tratamento de Respostas:**
   ~~~javascript
   res.writeHead(statusCode, headers);
   res.end(data);
   ~~~
   - O objeto `res` (resposta) é usado para enviar dados de volta ao cliente. `writeHead` configura o cabeçalho da resposta com o código de status e os cabeçalhos, enquanto `end` envia os dados de resposta.

6. **Exemplo de Rotas:**
   ~~~javascript
   case '/':
       // ... lógica para a rota principal
       break;
   case '/teste':
       // ... lógica para a rota '/teste'
       break;
   default:
       // ... lógica para rotas não encontradas
   ~~~
   - Aqui, são fornecidos exemplos de tratamento para as rotas '/' e '/teste'. O bloco `default` é acionado se a URL não corresponder a nenhuma das rotas especificadas.

7. **Configuração e Inicialização do Servidor:**
   ~~~javascript
   const port = 3000;
   server.listen(port);
   console.log(`estou rodando no link http://localhost:${port}`);
   ~~~
   - Configuração da porta do servidor e chamada do método `listen` para iniciar o servidor. O console.log exibe uma mensagem indicando onde o servidor está sendo executado.

**Teoria do Módulo HTTP:**
O módulo `http` do Node.js fornece funcionalidades para criar servidores e clientes HTTP. Ele encapsula a complexidade do protocolo HTTP, permitindo que os desenvolvedores construam servidores facilmente. O método `createServer` cria um servidor que escuta as requisições HTTP e executa a função de callback fornecida sempre que uma requisição é feita.

este código demonstra a criação de um servidor básico que roteia diferentes URLs para respostas, demonstrando o funcionamento prático do módulo http em node.js;


# Sobre o protocolo HTTP :

O Protocolo de Transferência de Hipertexto (HTTP - Hypertext Transfer Protocol) é um protocolo de comunicação usado para a transferência de dados na World Wide Web. Ele é a base para qualquer troca de dados na web e é um protocolo sem estado, o que significa que cada solicitação do cliente é independente das anteriores. Vamos explorar mais a fundo o funcionamento do HTTP:

### Fundamentos do HTTP:

1. **Cliente e Servidor:**
   - O HTTP é um protocolo cliente-servidor. O cliente (geralmente um navegador web) faz solicitações e o servidor (onde os recursos estão hospedados) responde a essas solicitações.

2. **URI (Uniform Resource Identifier):**
   - As solicitações HTTP referem-se a recursos usando URIs. URIs podem ser URLs (Localizador de Recursos Uniforme) ou URNs (Nome de Recurso Uniforme).

3. **Métodos HTTP:**
   - HTTP define diferentes métodos para indicar a ação desejada. Os principais métodos são GET (obter informações), POST (enviar dados para serem processados), PUT (atualizar um recurso), DELETE (remover um recurso), entre outros.

4. **Cabeçalhos HTTP:**
   - Os cabeçalhos HTTP fornecem informações adicionais sobre a solicitação ou resposta. Eles incluem detalhes como tipo de conteúdo, formato de dados, informações sobre o cliente, cache, autenticação, entre outros.

5. **Corpo da Mensagem:**
   - As solicitações e respostas HTTP podem conter um corpo de mensagem que transporta dados adicionais. Por exemplo, no método POST, o corpo da mensagem geralmente contém dados enviados pelo cliente.

### Fluxo de uma Solicitação HTTP:

1. **Iniciação:**
   - O cliente inicia a comunicação enviando uma solicitação HTTP ao servidor. A solicitação contém o método desejado, a URI do recurso e a versão do protocolo HTTP que está sendo usada.

2. **Processamento do Servidor:**
   - O servidor recebe a solicitação e executa a ação correspondente ao método e à URI. O servidor pode processar a solicitação, acessar bancos de dados, executar lógica de aplicativo, etc.

3. **Geração da Resposta:**
   - O servidor gera uma resposta, que inclui um código de status indicando o resultado da solicitação (por exemplo, 200 para sucesso, 404 para recurso não encontrado) e cabeçalhos contendo informações adicionais.

4. **Envio da Resposta:**
   - A resposta é enviada de volta ao cliente. O cliente recebe os cabeçalhos e o corpo da mensagem, se houver.

### Ciclo de Vida de uma Sessão HTTP:

1. **Sem Estado (Stateless):**
   - O HTTP é sem estado, o que significa que cada solicitação é tratada independentemente, sem qualquer conhecimento do estado anterior. Isso simplifica a implementação, mas exige técnicas adicionais (como cookies) para gerenciar o estado entre as solicitações.

2. **Sessões e Cookies:**
   - Para manter algum tipo de estado, os cookies podem ser usados. O servidor envia um cookie para o cliente, que é armazenado e enviado de volta em cada solicitação subsequente. Isso permite ao servidor associar solicitações a um estado específico.

### Segurança e HTTPS:

1. **Segurança:**
   - O HTTP é um protocolo não seguro, o que significa que as informações transmitidas podem ser interceptadas por terceiros. Para segurança, o HTTPS (HTTP Seguro) usa uma camada adicional de criptografia SSL/TLS para proteger a comunicação entre o cliente e o servidor.

2. **HTTPS (HTTP Seguro):**
   - O HTTPS usa certificados SSL/TLS para criptografar os dados durante a transmissão, garantindo que eles não possam ser facilmente lidos por terceiros. Isso é crucial para a proteção de dados sensíveis, como informações de login e detalhes de pagamento.

### Conclusão:

O HTTP é fundamental para a comunicação na web, permitindo a transferência eficiente de dados entre clientes e servidores. Compreender seus princípios e funcionamento é crucial para o desenvolvimento web e para garantir a segurança das informações transmitidas pela internet.
