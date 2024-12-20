# Estruturando a arquitetura de nosso projeto:

Agora que já temos todas as [ferramentas em nosso sistema](../Aula_01/readme.md), os [pacotes e configurações](../Aula_02/readme.md) para manter nosso código sólido e bem estruturado, e nosso ambinete construido para ter uma experiência de [desenvolvimento de forma ágil](../Aula_03/Readme.md). Estamos prontos para começar a criar a arquitetura de nosso projeto, e adicionar algumas dependências básicas.

## Sobre a Arquitetura utilizada

Vamos utilizar uma arquitetura similar a MVC, caso queira lembrar um pouco mais sobre ela [clique aqui](../../js_node_npm_express_mongoDB/Aula_10/readme.md#padrão-mvc-). Porém por se tratar de uma API não teremos pastas relacionadas a camada View.

Primeiramente dentro da raiz de nosso projeto, iremos criar uma pasta chamada `src`, dentro dela iremos adicionar as seguintes pastas :

- `routes`;
- `controllers`;
- `models`;
- `middlewares`;
- `configs`;
- `database`;

Vamos resumir de forma breve o intúito de cada uma das pastas, caso queira entender de forma mais aprofundada as pastas relacionadas ao arquitetura MVC clique no link disponibilizado no inicio desta sessão.

1. **Diretório `routes`**: Armazena os arquivos que definem as rotas da aplicação, associando cada rota a uma função do controller correspondente. As rotas são responsáveis por mapear as requisições HTTP (como GET, POST, PUT, DELETE) para os controllers adequados, garantindo que cada endpoint da API responda de acordo com o comportamento esperado.

2. **Diretório `controllers`**: Contém os arquivos responsáveis por controlar a lógica de negócios e a interação com o cliente. Os controllers recebem as requisições HTTP, processam os dados e retornam as respostas em formato JSON, interagindo com os modelos quando necessário.

3. **Diretório `models`**: Define as estruturas de dados e as regras de manipulação do banco de dados. Representa a camada de abstração entre a aplicação e o banco, onde as operações de criação, leitura, atualização e exclusão de dados (CRUD) são realizadas.

4. **Diretório `middlewares`**: Armazena as funções que são executadas durante o ciclo de vida de uma requisição HTTP, antes que ela chegue aos controllers. Pode incluir autenticação, validação de dados, logging e tratamento de erros.

5. **Diretório `configs`**: Responsável por armazenar as configurações gerais da aplicação, como variáveis de ambiente, configurações de conexão com o banco de dados, e definições de portas e outras opções de inicialização.

6. **Diretório `database`**: Contém arquivos relacionados à configuração do banco de dados, como migrações, seeds e conexões, para ter uma breve introdução a estes conceitos [clique aqui](./basicConceptsOfMigrationsConectionsAndSeeds.md). Ele cuida da interface de comunicação direta entre a aplicação e o banco de dados.

---

Após as adições de nossa arquitetura básica está na hora de começar a colocar a mão no código. Vamos ver como configurar o nosso servidor express, e como iremos fazer a separação de arquivos, para isso vamos para o [próximo passo, continue sua leitura!](./expressConfiguration.md)
