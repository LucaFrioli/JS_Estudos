# Express - req.params req.query e req.body

No contexto do framework Node.js chamado Express, `req.params`, `req.query`, e `req.body` são objetos fornecidos pelo Express para lidar com diferentes tipos de dados provenientes de requisições HTTP.

1. **`req.params`:**
   - Este objeto contém parâmetros de rota extraídos da URL. Quando você define parâmetros em uma rota utilizando ":" na definição da rota, o Express os captura e os coloca no objeto `req.params`, se o parâmetro for seguido de um "?" quer dizer que ele é opcional.
   - Exemplo:

    ~~~javascript
    // Definindo uma rota com um parâmetro chamado 'id'
    app.get('/users/:id?', (req, res) => {
        const userId = req.params.id;
        // Faça algo com o userId
    });
    ~~~

    Neste exemplo, se a URL for `/users/123`, então `req.params.id` será igual a `123`, caso não for enviado nada a página continuará funcionando normalmente.

1.1. **O porquê usar :**
    O uso de `req.params` no Express é fundamental quando você está lidando com rotas dinâmicas que contêm parâmetros variáveis. Esses parâmetros são extraídos da própria URL, permitindo que você crie rotas mais flexíveis e dinâmicas. A importância e utilidade de `req.params` podem ser destacadas pelos seguintes pontos:

        - **Roteamento Dinâmico:**
           - Ao utilizar `req.params`, você pode criar rotas que são dinâmicas e capazes de lidar com diferentes valores em posições específicas da URL. Isso é especialmente útil quando você está construindo APIs RESTful ou outras aplicações web que precisam manipular recursos identificados por IDs ou outros parâmetros dinâmicos.

        -  **Reutilização de Lógica:**
           - A capacidade de extrair parâmetros da URL permite a reutilização de lógica de manipulação de solicitações para diferentes recursos. Por exemplo, você pode ter uma única função de controle de acesso para manipular diferentes tipos de entidades com base nos parâmetros da URL.

        -  **Maior Flexibilidade:**
           - O uso de `req.params` fornece uma maneira flexível de lidar com diferentes casos de uso em uma única rota. Isso evita a necessidade de criar várias rotas quase idênticas para casos semelhantes, simplificando o código e tornando-o mais fácil de manter.

        - **Facilita a Manipulação de Identificadores Únicos:**
           - Em muitas aplicações, é comum ter recursos identificados por IDs únicos. `req.params` permite a fácil extração desses IDs da URL, facilitando a manipulação desses recursos na lógica do servidor.

        -  **Criação de APIs RESTful:**
           - Em APIs RESTful, os parâmetros na URL são comumente usados para identificar recursos específicos. O uso de `req.params` ajuda a criar APIs mais claras e intuitivas, onde os clientes podem acessar diferentes recursos com base nos parâmetros fornecidos.

        -  **Manutenção de Código:**
           - Utilizando `req.params`, você pode manter uma única rota que lida com diferentes situações, o que pode tornar o código mais limpo e fácil de manter. Isso é particularmente útil quando você precisa adicionar suporte para novos recursos ou parâmetros.

    Em resumo, `req.params` é fundamental para tornar as aplicações Express mais dinâmicas, flexíveis e fáceis de manter. Ao permitir a extração de parâmetros da URL, ele desempenha um papel importante na criação de rotas que podem lidar com uma variedade de cenários, tornando o código mais modular e reutilizável.

2. **`req.query`:**
   - Este objeto contém os parâmetros de consulta (query parameters) da URL. Parâmetros de consulta são aqueles que aparecem após o ponto de interrogação na URL.
   - Exemplo:

    ~~~javascript
    // Rota que lida com parâmetros de consulta
    app.get('/search', (req, res) => {
        const searchTerm = req.query.q;
        // Faça algo com o searchTerm
    });
    ~~~

    Se a URL for `/search?q=express`, então `req.query.q` será igual a `'express'`.


2.1. **O porquê usar :**
    O uso de `req.query` no Express é importante porque oferece uma maneira conveniente de lidar com parâmetros de consulta (query parameters) em requisições HTTP. Parâmetros de consulta são uma forma comum de passar informações adicionais para o servidor, especialmente em solicitações GET. Aqui estão algumas razões pelas quais `req.query` é útil:

        - **Passagem de Parâmetros em Requisições GET:**
         - Quando os usuários interagem com URLs, é comum usar parâmetros de consulta para transmitir informações específicas. Isso é especialmente útil em casos como pesquisas, filtragem ou ordenação de recursos.

            Exemplo de URL com parâmetros de consulta:
            ```
            /search?query=express&category=nodejs
            ```

            Com `req.query`, você pode facilmente acessar esses parâmetros na rota correspondente:

            ```javascript
            app.get('/search', (req, res) => {
                const searchTerm = req.query.query;
                const category = req.query.category;
                // Faça algo com searchTerm e category
            });
            ```

        - **Conveniência na Manipulação de Dados:**
         - O uso de `req.query` simplifica a extração e manipulação de dados dos parâmetros de consulta. O Express automaticamente analisa a URL e disponibiliza os parâmetros como propriedades no objeto `req.query`.

        - **Facilidade na Construção de URLs Dinâmicas:**
         - Ao construir URLs dinamicamente em uma aplicação, você pode usar `req.query` para gerar links que incluem parâmetros de consulta com base nas preferências do usuário ou em outros contextos dinâmicos.

            Exemplo de construção dinâmica de URL em uma aplicação Node.js/Express:

            ```javascript
            const searchTerm = 'express';
            const category = 'nodejs';
            const dynamicURL = `/search?query=${searchTerm}&category=${category}`;
            ```

        - **Interoperabilidade com Clientes Front-End:**
         - Muitas vezes, as bibliotecas e frameworks do lado do cliente, como React ou Angular, utilizam parâmetros de consulta para interagir com APIs no servidor. O uso de `req.query` no lado do servidor permite uma integração suave entre o frontend e o backend.

    Em resumo, `req.query` no Express é uma ferramenta valiosa para lidar com parâmetros de consulta em URLs, facilitando a extração de dados e a criação de rotas mais flexíveis e dinâmicas em suas aplicações Node.js.



3. **`req.body`:**
   - Este objeto contém os dados enviados no corpo da requisição HTTP. É particularmente relevante para requisições do tipo POST, PUT e PATCH, onde os dados são enviados no corpo da requisição em vez de na URL.
   - Para utilizar `req.body`, você precisa de um middleware que possa interpretar o corpo da requisição, como o `express.json()` para JSON ou `express.urlencoded()` para dados de formulário.
   - Exemplo:

    ~~~javascript
    // Middleware para processar JSON no corpo da requisição
    app.use(express.json());

    // Rota que lida com dados no corpo da requisição
    app.post('/create-user', (req, res) => {
        const userData = req.body;
        // Faça algo com userData
    });
    ~~~

    Se você enviar uma requisição POST com dados JSON para `/create-user`, o Express irá analisar o corpo da requisição e disponibilizar os dados no objeto `req.body`.

3.1. **O porquê usar :**
    O uso de `req.body` no Express é fundamental quando você está lidando com dados que são enviados no corpo da requisição HTTP, especialmente em métodos como POST, PUT e PATCH. Isso é relevante quando você precisa enviar informações mais complexas do que as que podem ser incluídas nos parâmetros de URL ou de consulta.

    Aqui estão algumas razões pelas quais `req.body` é importante e sua utilidade real:

        - **Envio de dados sensíveis:**
           - Informações sensíveis, como senhas, tokens de autenticação e dados pessoais, geralmente são enviadas no corpo da requisição. Usar `req.body` permite que você acesse e manipule esses dados no servidor.

        - **Formatos de dados variados:**
           - Em muitos casos, os dados enviados no corpo da requisição podem estar em formatos diversos, como JSON, XML ou dados de formulário. `req.body` permite que você manipule esses diferentes formatos de maneira conveniente, dependendo do middleware que você configurou (por exemplo, `express.json()` para JSON ou `express.urlencoded()` para dados de formulário).

        - **Criação ou atualização de recursos no servidor:**
           - Ao criar ou atualizar recursos no servidor, é comum enviar os dados relevantes no corpo da requisição. Por exemplo, ao criar um novo usuário ou atualizar as informações de um usuário existente, você enviaria esses dados no corpo da requisição POST ou PUT, e `req.body` permitiria que você acessasse esses dados no servidor.

        - **APIs RESTful:**
           - Ao construir APIs RESTful, onde as operações CRUD (Create, Read, Update, Delete) são mapeadas para métodos HTTP, `req.body` se torna crucial. Por exemplo, ao criar um novo recurso (POST), os dados podem ser enviados no corpo da requisição, e `req.body` é usado para extrair esses dados.

        - **Suporte a aplicativos de formulário:**
           - Quando você está lidando com formulários em aplicações web, os dados do formulário são enviados no corpo da requisição, e `req.body` é utilizado para acessar esses dados. Isso é particularmente comum em aplicações que utilizam HTML com métodos POST para enviar dados de formulário.

    Lembrando sempre que para usar `req.body`, é necessário configurar middleware no Express, como `express.json()` para interpretar dados JSON ou `express.urlencoded()` para interpretar dados de formulário. Esse processo é essencial para que o Express possa processar e tornar os dados do corpo da requisição disponíveis em `req.body`.
