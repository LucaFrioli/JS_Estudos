Como vimos [anteriormente](./readme.md) existem vários benefícios ao utilizarmos o conjunto de conceitos REST, junto da ferramenta Docker e uma escolha sólida de banco de dados. Como o objetivo principal deste módulo é entender melhor sobre a construção de APIs, foi separado já inicialmente o seguinte conjunto de tecnologias.

--
### Tecnologias e Ferramentas Utilizadas especificamente para este projeto :

#### MariaDB
O **MariaDB** é um sistema de gerenciamento de banco de dados relacional (SGBD) que surgiu como um fork do MySQL, mantendo a compatibilidade com seu antecessor, mas adicionando uma série de melhorias em desempenho e escalabilidade. Ele utiliza a linguagem SQL (Structured Query Language) para manipulação e consulta de dados, sendo amplamente utilizado para armazenar informações de forma estruturada e garantir a integridade dos dados. Uma das grandes vantagens do MariaDB é a sua flexibilidade em ambientes corporativos de alta demanda, além de ser uma solução open source que recebe suporte contínuo de uma comunidade ativa. Com ele, é possível lidar eficientemente com transações, índices e relacionamentos entre tabelas, fundamentais para o desenvolvimento de sistemas consistentes.

#### MySQL Workbench
O **MySQL Workbench** é uma ferramenta visual que facilita o design, modelagem e administração de bancos de dados MySQL e MariaDB. Ele fornece uma interface gráfica intuitiva para a criação de esquemas de banco de dados, visualização de tabelas e execução de consultas SQL, sendo extremamente útil tanto para desenvolvedores quanto para administradores de banco de dados. Através dele, é possível visualizar a estrutura do banco de dados de maneira organizada, criar diagramas ER (Entidade-Relacionamento) e até realizar backup de dados. MySQL Workbench é uma ferramenta indispensável para quem deseja otimizar e gerenciar de maneira eficiente seus bancos de dados.

#### Docker
O **Docker** é uma plataforma que revolucionou o desenvolvimento e a implantação de software ao introduzir o conceito de conteinerização. Ele permite empacotar uma aplicação e suas dependências em contêineres leves e portáteis, garantindo que o software funcione de forma consistente em qualquer ambiente. A grande vantagem do Docker é a sua capacidade de isolar completamente uma aplicação, prevenindo conflitos de dependências entre projetos e permitindo a escalabilidade em ambientes de produção. No ciclo de desenvolvimento, o Docker ajuda a padronizar ambientes, seja na máquina do desenvolvedor, em servidores de teste, ou em ambientes de produção, trazendo eficiência e simplicidade.

#### Insomnia
O **Insomnia** é uma ferramenta voltada para o teste e o consumo de APIs REST e GraphQL. Ele permite que desenvolvedores criem, gerenciem e enviem requisições HTTP de maneira prática, facilitando o teste de APIs durante o desenvolvimento. Além de ser uma aplicação amigável, Insomnia é altamente configurável e permite gerenciar ambientes, armazenar variáveis e visualizar respostas das APIs em diferentes formatos, como JSON e XML. Para desenvolvedores que trabalham com integração entre serviços ou precisam garantir o correto funcionamento de APIs, o Insomnia se destaca como uma ferramenta de alto valor.

#### Sequelize
O **Sequelize** é um ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados relacionais como MySQL, MariaDB, PostgreSQL e SQLite. Ele abstrai a complexidade das consultas SQL, permitindo que os desenvolvedores manipulem o banco de dados utilizando código JavaScript, em vez de escrever diretamente SQL. Além disso, o Sequelize oferece uma ampla gama de recursos, como validações de dados, associações entre tabelas (relacionamentos), transações e migrações de banco de dados. Seu uso é ideal em aplicações que precisam de uma camada de abstração entre a lógica da aplicação e o banco de dados, simplificando o desenvolvimento e mantendo o código mais limpo e organizado.

#### Sucrase
O **Sucrase** é uma ferramenta de compilação JavaScript que foca em uma transpilação rápida. Enquanto ferramentas como o Babel são mais completas e realizam diversas transformações complexas no código, o Sucrase se especializa em ser mais rápido e eficiente para projetos que utilizam as últimas versões do JavaScript e TypeScript. Ele transforma o código fonte em versões que podem ser executadas em navegadores ou no Node.js, sem perder a performance. O uso de Sucrase é recomendado em cenários onde a rapidez da transpilação é essencial, como em grandes projetos que exigem ciclos de desenvolvimento mais curtos.

#### Express (Revisão)
O **Express** é um framework minimalista para o Node.js, amplamente utilizado para a criação de APIs e servidores web. Ele facilita o gerenciamento de rotas, middleware e requisições HTTP, tornando o desenvolvimento back-end em Node.js mais acessível e eficiente.

A integração dessas ferramentas e tecnologias é uma escolha estratégica para a criação de sistemas modernos e eficientes. O **MariaDB**, junto com o **Sequelize**, garantem uma comunicação fluida e escalável com o banco de dados, permitindo a manipulação estruturada de informações. O **Docker** oferece um ambiente padronizado e isolado para o desenvolvimento e a implantação dessas aplicações, garantindo consistência. Com o **Insomnia**, é possível testar e validar as APIs desenvolvidas com **Express** de forma prática, enquanto o **Sucrase** otimiza o processo de desenvolvimento com uma transpilação rápida. O **Node.js** e o **JavaScript** são os pilares que unem todas essas ferramentas, proporcionando um ambiente de desenvolvimento flexível e altamente performático.

[Próximo passo, continue sua leitura!](./projectContent.md)
