### Introdução ao Projeto: REST API e Conceitos de Banco de Dados

Uma **REST API** (Representational State Transfer - Application Programming Interface) é uma interface de programação que segue os princípios da arquitetura REST, permitindo a comunicação entre sistemas pela web, utilizando o protocolo HTTP. A simplicidade e escalabilidade fazem da REST API uma escolha comum para criar serviços web, com base em padrões amplamente difundidos, como o HTTP.

### Princípios da Arquitetura REST

Vamos falar sobre o conceito de **arquitetura REST**, que é uma maneira de construir sistemas para que eles possam se comunicar pela internet de maneira simples e eficiente. A arquitetura REST foi formalizada por Roy Fielding em 2000 e é amplamente utilizada na construção de APIs (interfaces que permitem a comunicação entre diferentes sistemas).

Imagine que você tem uma lanchonete de hambúrgueres. Quando alguém quer pedir um hambúrguer, ele fala para você: "Eu quero um hambúrguer". Essa pessoa é o **cliente** e você é o **servidor**. O cliente faz um pedido, e você responde entregando o hambúrguer.

Agora, imagine que você é uma lanchonete superorganizada, onde cada pedido (como hambúrguer, batata frita, ou refrigerante) tem seu próprio jeito de ser pedido. Por exemplo:
- Para pedir um hambúrguer, o cliente diz: **GET /hamburguer**
- Para pedir uma batata frita: **GET /batata**
- Se ele quiser adicionar ketchup: **POST /ketchup**
- Se o cliente quiser mudar a quantidade de batata frita: **PUT /batata**
- Se ele quiser cancelar o pedido de batata: **DELETE /batata**

Você (servidor) escuta o pedido e responde ao cliente com o que ele pediu.

Essa é a ideia por trás da arquitetura REST, onde o cliente (quem faz o pedido) e o servidor (quem responde) têm uma forma simples e padronizada de conversar, usando diferentes "comandos" para pedir, criar, atualizar ou apagar alguma coisa.

---

Agora que entendemos o básico, vamos nos aprofundar nos **seis princípios** que Roy Fielding descreveu para a arquitetura REST e como cada um deles funciona.

### 1. **Cliente-Servidor**

Esse é o princípio mais fácil de entender. Ele separa as funções de quem pede algo (o **cliente**) de quem responde (o **servidor**). O cliente pode ser um aplicativo, como um site ou um app de celular, e o servidor é o lugar onde as informações estão armazenadas.

#### Exemplo prático:
- Você está usando um aplicativo de compras online (cliente) e faz uma requisição para ver os produtos. O servidor responde enviando a lista de produtos disponíveis.

**Técnico**: Esse princípio permite que o cliente e o servidor evoluam separadamente. Ou seja, você pode atualizar o app sem precisar mudar o que está no servidor e vice-versa. Além disso, essa separação melhora a escalabilidade e a manutenção do sistema.

---

### 2. **Stateless (Sem Estado)**

Aqui vem uma parte mais técnica. "Stateless" significa que o servidor não guarda informações sobre as requisições anteriores. Cada vez que o cliente faz um pedido, ele precisa fornecer todas as informações necessárias para que o servidor entenda o que está acontecendo, sem depender de pedidos anteriores.

#### Exemplo prático:
- Imagine que você faz um pedido de uma pizza. Na primeira vez, você pede uma pizza de calabresa e, depois, quer adicionar mais um refrigerante ao seu pedido. Em um sistema **stateless**, você teria que repetir todas as informações anteriores (que você já pediu uma pizza de calabresa) para que o pedido fosse atualizado corretamente. O servidor não lembra o que você pediu antes.

**Técnico**: Em termos de programação, **stateless** é um dos conceitos mais importantes do REST, pois isso torna as requisições independentes umas das outras. Como o servidor não precisa armazenar dados sobre o cliente entre as requisições, ele pode processar mais requisições ao mesmo tempo, melhorando o desempenho e a escalabilidade. Mas, por outro lado, o cliente precisa sempre enviar todas as informações necessárias.

---

### 3. **Cacheável**

O cache é como uma "memória de curto prazo" do cliente ou do servidor. Ele guarda respostas para requisições comuns, de forma que não precise pedir ao servidor as mesmas informações várias vezes. Isso ajuda a acelerar o sistema e economizar recursos.

#### Exemplo prático:
- Se você entrar em um site e ele te mostrar a previsão do tempo para hoje, essa informação pode ser guardada no **cache**. Na próxima vez que você acessar o site no mesmo dia, ele pode te mostrar a previsão rapidamente, sem precisar perguntar ao servidor de novo.

**Técnico**: As respostas do servidor podem incluir informações que indicam se podem ser **cacheadas** ou não. Isso é útil para melhorar o desempenho do sistema, especialmente quando você tem dados que não mudam frequentemente, como uma lista de produtos ou uma página estática.

---

### 4. **Interface Uniforme**

Esse é o princípio que padroniza como cliente e servidor se comunicam. A arquitetura REST utiliza os métodos HTTP (GET, POST, PUT, DELETE) para interagir com os recursos. Os recursos são coisas como livros, produtos, usuários, etc., que são identificados por URLs.

#### Exemplo prático:
- Para buscar todos os livros em uma biblioteca virtual, você faz uma requisição: **GET /livros**.
- Para adicionar um novo livro, você faz um **POST /livros** com os detalhes do livro.
- Para atualizar as informações de um livro específico: **PUT /livros/1** (onde "1" é o ID do livro).
- Para deletar um livro: **DELETE /livros/1**.

**Técnico**: A **interface uniforme** é o que faz a API REST tão simples e universal. Como os métodos HTTP são padronizados, qualquer sistema que use REST consegue interagir com a API. Isso torna REST uma escolha muito popular para APIs web.

---

### 5. **Sistema em Camadas**

Esse princípio diz que a arquitetura REST pode ter várias camadas intermediárias entre o cliente e o servidor, como servidores de cache, proxies e balanceadores de carga. Essas camadas não afetam a comunicação direta entre o cliente e o servidor final, mas podem melhorar o desempenho ou segurança.

#### Exemplo prático:
- Quando você acessa um site, seu navegador pode fazer a requisição primeiro para um servidor de **cache** em vez de diretamente para o servidor principal. Se o cache tiver a informação, ele responde sem incomodar o servidor.

**Técnico**: Essas camadas permitem a distribuição de funções. Por exemplo, uma camada de cache pode melhorar a performance, uma camada de segurança pode filtrar requisições, e um balanceador de carga pode distribuir as requisições entre vários servidores, melhorando a escalabilidade do sistema.

---

### 6. **Código Sob Demanda (Opcional)**

Esse é um princípio menos comum em APIs REST, mas ainda assim importante. Ele permite que o servidor envie **código** para o cliente executar, em vez de apenas dados. Esse código pode ser um script JavaScript, por exemplo.

#### Exemplo prático:
- Imagine que você está acessando um site e, ao abrir a página, o servidor envia um pedaço de código JavaScript para o seu navegador, permitindo que ele execute algumas funções sem precisar fazer uma nova requisição ao servidor.

**Técnico**: Esse princípio é opcional e não é amplamente utilizado em todas as implementações REST. No entanto, ele pode ser útil para criar funcionalidades dinâmicas no cliente, sem sobrecarregar o servidor.

---

### Funcionamento de uma REST API - Exemplo Prático

Vamos imaginar uma API para gerenciar uma biblioteca de livros. Essa API segue todos os princípios do REST e funciona da seguinte maneira:

1. **GET /livros**: Retorna todos os livros da biblioteca.
   - **Resposta**:
     ```json
     [
       {"id": 1, "titulo": "Dom Quixote", "autor": "Miguel de Cervantes"},
       {"id": 2, "titulo": "1984", "autor": "George Orwell"}
     ]
     ```

2. **POST /livros**: Adiciona um novo livro.
   - **Requisição**:
     ```json
     {"titulo": "O Hobbit", "autor": "J.R.R. Tolkien", "ano": 1937}
     ```

3. **PUT /livros/1**: Atualiza as informações do livro com ID 1.
   - **Requisição**:
     ```json
     {"titulo": "Dom Quixote", "autor": "Miguel de Cervantes", "ano": 1605}
     ```

4. **DELETE /livros/1**: Remove o livro com ID 1.

Esses exemplos mostram como os métodos HTTP são usados de forma consistente em uma API REST para interagir com os recursos. REST permite que tanto o cliente quanto o servidor saibam exatamente como se comunicar, tornando a arquitetura flexível, simples e eficiente.

---

### Docker e seu Papel no Desenvolvimento

O **Docker** é uma plataforma de código aberto que automatiza o processo de criação, execução e gerenciamento de aplicações dentro de **contêineres**. Esses contêineres garantem que as aplicações sejam executadas de forma consistente, independentemente do ambiente onde estão sendo implantadas, seja no computador do desenvolvedor, em um servidor de produção ou em um ambiente na nuvem.

A grande inovação do Docker é a sua capacidade de encapsular não só a aplicação, mas também todas as suas dependências (bibliotecas, pacotes, configurações, etc.) em um ambiente isolado e padronizado, chamado **contêiner**. Isso resolve um dos maiores problemas no desenvolvimento de software: a incompatibilidade de ambientes, como a famosa frase "funciona no meu computador, mas não no servidor".

### Conceitos Principais do Docker

#### 1. **Imagem**: A Base para os Contêineres

Uma **imagem Docker** é um "modelo" ou "blueprint" imutável que define tudo o que é necessário para rodar uma aplicação. Isso inclui o código-fonte, bibliotecas, dependências e variáveis de ambiente. Pense na imagem como uma receita de bolo: ela define todos os ingredientes e passos para criar um bolo (ou, neste caso, rodar uma aplicação).

- **Exemplo prático**: Uma imagem Docker pode ser criada para uma aplicação Node.js. Ela incluiria o código da aplicação e todas as dependências, como o Node.js e os pacotes npm necessários. Essa imagem pode ser usada para criar contêineres que executarão a aplicação de forma idêntica em qualquer ambiente.

  **Dockerfile para criar uma imagem Node.js**:
  ```dockerfile
  FROM node:14
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["node", "app.js"]
  ```
  Neste exemplo, o Dockerfile está definindo uma imagem baseada no Node.js, copiando os arquivos da aplicação para dentro do contêiner e instalando as dependências com `npm install`.

#### 2. **Contêiner**: A Instância da Imagem em Execução

O **contêiner** é a instância de uma imagem em execução. É dentro do contêiner que a aplicação realmente roda, de forma isolada do restante do sistema. Cada contêiner tem seu próprio sistema de arquivos, bibliotecas e configurações, o que garante que ele não interfira em outras aplicações ou contêineres rodando no mesmo sistema.

- **Exemplo prático**: Ao rodar uma imagem de um contêiner, o desenvolvedor pode testar a aplicação localmente. Por exemplo, ao executar o comando `docker run`, o Docker cria um contêiner a partir da imagem especificada e inicia a aplicação. Uma vantagem é que o contêiner pode ser iniciado ou parado sem impactar outras partes do sistema.

  **Comando para rodar um contêiner a partir de uma imagem**:
  ```bash
  docker run -d -p 3000:3000 nome-da-imagem
  ```

  Esse comando cria e executa o contêiner, mapeando a porta 3000 do contêiner para a porta 3000 do host.

#### 3. **Dockerfile**: O Plano de Construção da Imagem

O **Dockerfile** é um arquivo de texto que contém as instruções passo a passo para construir uma imagem Docker. Ele define desde a base da imagem (um sistema operacional, por exemplo) até a instalação de bibliotecas e a configuração final da aplicação.

- **Exemplo prático**: Um Dockerfile pode começar a partir de uma imagem base como o Ubuntu, instalar o Apache e configurar uma aplicação web. O desenvolvedor pode customizar o Dockerfile para garantir que todas as dependências necessárias estão incluídas, eliminando problemas de compatibilidade entre diferentes ambientes.

  **Exemplo de Dockerfile para uma aplicação Python**:
  ```dockerfile
  FROM python:3.8
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install -r requirements.txt
  COPY . .
  CMD ["python", "app.py"]
  ```
  Aqui, estamos criando uma imagem que usa Python 3.8, instala as dependências listadas no arquivo `requirements.txt` e define o comando para rodar a aplicação.

#### 4. **Docker Hub**: O Repositório de Imagens

O **Docker Hub** é um repositório online onde os desenvolvedores podem armazenar, compartilhar e baixar imagens Docker. Ele funciona como um "GitHub" para contêineres. Em vez de recriar uma imagem do zero, o Docker Hub permite que os desenvolvedores usem imagens prontas de sistemas operacionais, ferramentas e até aplicações completas.

- **Exemplo prático**: Um desenvolvedor pode baixar uma imagem pré-configurada de um banco de dados MySQL diretamente do Docker Hub, em vez de configurar o banco de dados manualmente.

  **Comando para baixar e rodar um contêiner MySQL**:
  ```bash
  docker run --name meu-mysql -e MYSQL_ROOT_PASSWORD=minhasenha -d mysql:latest
  ```
  Esse comando baixa a última versão da imagem MySQL e inicia um contêiner com o nome "meu-mysql", configurando uma senha para o usuário root.

### Fluxo Prático de Uso do Docker

Para entender melhor o funcionamento do Docker, vamos seguir um fluxo de uso típico:

1. **Escrever o Dockerfile**: O primeiro passo é criar um Dockerfile com as instruções necessárias para construir a imagem da aplicação.

   - Se você tem uma aplicação web em Node.js, você vai definir a imagem base, instalar as dependências, copiar o código da aplicação e expor as portas corretas.

2. **Construir a Imagem**: Depois de ter o Dockerfile, o próximo passo é criar a imagem Docker.

   **Comando para construir a imagem**:
   ```bash
   docker build -t minha-aplicacao .
   ```

   Este comando cria uma imagem chamada `minha-aplicacao` com base no Dockerfile presente no diretório atual (`.`).

3. **Rodar o Contêiner**: Uma vez que a imagem é construída, você pode rodar a aplicação dentro de um contêiner.

   **Comando para rodar o contêiner**:
   ```bash
   docker run -d -p 8080:8080 minha-aplicacao
   ```

   Aqui, o Docker cria um contêiner da imagem `minha-aplicacao` e mapeia a porta 8080 do host para a porta 8080 do contêiner, permitindo que a aplicação seja acessada via navegador.

4. **Publicar no Docker Hub**: Se você quiser compartilhar sua imagem, pode enviá-la para o Docker Hub.

   **Comando para enviar a imagem para o Docker Hub**:
   ```bash
   docker push usuario/minha-aplicacao
   ```

### Vantagens do Docker

- **Portabilidade**: Com o Docker, você pode garantir que sua aplicação rode da mesma maneira em diferentes ambientes, sem necessidade de ajustes manuais.
- **Eficiência**: Os contêineres compartilham o mesmo kernel do sistema operacional, o que os torna muito mais leves e rápidos que as máquinas virtuais tradicionais.
- **Escalabilidade**: Docker facilita a escalabilidade de aplicações, permitindo a criação de múltiplos contêineres para lidar com cargas de trabalho maiores, usando ferramentas como Docker Compose ou Kubernetes para orquestração.

---

## Bancos de Dados Relacionais

### O que é um Banco de Dados Relacional?

Um **banco de dados relacional** organiza dados em **tabelas**, onde as colunas representam os atributos e as linhas representam registros. As tabelas podem se relacionar entre si usando **chaves primárias** e **chaves estrangeiras**. Isso cria uma estrutura organizada e normalizada, que segue o modelo relacional, proposto por Edgar F. Codd.

#### Principais Operações SQL:
- **SELECT**: Recupera dados de uma tabela.
- **INSERT**: Insere novos registros.
- **UPDATE**: Atualiza registros existentes.
- **DELETE**: Remove registros.

#### Exemplos de Bancos de Dados Relacionais:
- **MySQL**
- **MariaDB**
- **PostgreSQL**
- **Oracle Database**
- **Microsoft SQL Server**

### Diferenças entre MySQL, MariaDB e PostgreSQL os mais utilizados :

Embora todos sejam bancos de dados relacionais, existem algumas diferenças-chave entre eles.

#### 1. **MySQL**
   - **Licenciamento**: Código aberto (GPL) com versões comerciais pela Oracle.
   - **Facilidade de uso**: Simples e fácil de usar, especialmente em ambientes web.
   - **ACID**: Suporte a transações ACID quando utilizado com InnoDB.
   - **Exemplo prático**:
     ```sql
     CREATE TABLE usuarios (
       id SERIAL PRIMARY KEY,
       nome VARCHAR(100),
       email VARCHAR(100)
     );
     ```

#### 2. **MariaDB**
   - **Licenciamento**: 100% código aberto, derivado do MySQL.
   - **Compatibilidade**: Compatível com MySQL em termos de sintaxe e arquitetura.
   - **Desempenho**: Melhor performance em consultas complexas e replicação.
   - **Exemplo prático**:
     ```sql
     CREATE TABLE pedidos (
       id SERIAL PRIMARY KEY,
       produto VARCHAR(100),
       quantidade INT
     );
     ```

#### 3. **PostgreSQL**
   - **Licenciamento**: Código aberto sob a licença PostgreSQL.
   - **Recursos Avançados**: Suporte a tipos de dados complexos, JSONB, geoespaciais (PostGIS), e maior conformidade com ACID.
   - **Extensibilidade**: Altamente extensível e adequado para consultas complexas.
   - **Exemplo prático**:
     ```sql
     CREATE TABLE produtos (
       id SERIAL PRIMARY KEY,
       nome VARCHAR(100),
       preco DECIMAL(10, 2)
     );
     ```

### Comparação Resumida

| Característica       | MySQL           | MariaDB           | PostgreSQL       |
|---------------------|-----------------|-------------------|------------------|
| **Licença**          | GPL + Comercial | GPL               | Open Source      |
| **Facilidade**       | Simples         | Simples           | Complexo         |
| **Desempenho**       | Bom             | Melhor            | Excelente        |
| **Suporte a JSON**   | Parcial         | Parcial           | Completo (JSONB) |
| **Extensibilidade**  | Limitada        | Limitada          | Altamente extensível |

---

## Diferenças Entre Banco de Dados Relacional e Não Relacional

### Banco de Dados Não Relacional (NoSQL)

Enquanto bancos de dados relacionais organizam dados em tabelas, os **bancos de dados não relacionais** (NoSQL) utilizam estruturas mais flexíveis como **documentos**, **pares chave-valor**, **colunas largas** ou **grafos**. Eles são ideais para aplicações que lidam com grandes volumes de dados e que precisam de escalabilidade horizontal.

#### Exemplos de Bancos de Dados Não Relacionais:
- **MongoDB** (orientado a documentos)
- **Cassandra** (baseado em colunas)
- **Redis** (chave-valor)
- **Neo4j** (orientado a grafos)

### Diferenças Entre Relacional e Não Relacional:

| Característica        | Relacional                              | Não Relacional                         |
|-----------------------|-----------------------------------------|----------------------------------------|
| **Estrutura**          | Tabelas (linhas e colunas)              | Documentos, chave-valor, colunas largas, grafos |
| **Esquema**            | Fixo                                    | Flexível                               |
| **Consultas**          | SQL                                     | Depende do banco (e.g., MongoDB usa JSON) |
| **Escalabilidade**     | Vertical                                | Horizontal                             |
| **Exemplo prático**    | ERP, CRM                                | Redes sociais, sistemas de recomendação |

#### Exemplo de MongoDB (NoSQL):
```json
{
  "_id": "1",
  "nome": "Ana",
  "email": "ana@email.com",
  "enderecos": [
    {"rua": "Rua A", "cidade": "São Paulo"},
    {"rua": "Rua B", "cidade": "Rio de Janeiro"}
  ]
}
```

---

### Considerações finais :

O estudo sobre arquitetura REST, Docker e bancos de dados, tanto relacionais quanto não relacionais, é essencial para entender como criar sistemas modernos, escaláveis e eficientes. Cada uma dessas tecnologias desempenha um papel fundamental no desenvolvimento e na manutenção de aplicações robustas.

A **arquitetura REST** segue seis princípios fundamentais (cliente-servidor, stateless, cacheável, interface uniforme, sistema em camadas e código sob demanda), que facilitam a construção de APIs simples e padronizadas. Esses princípios promovem uma comunicação clara entre sistemas, garantem flexibilidade, escalabilidade e permitem que as APIs sejam fáceis de manter e evoluir.

O **Docker** complementa esse cenário ao oferecer uma plataforma que encapsula aplicações e suas dependências em contêineres leves e portáteis, permitindo uma maior padronização no processo de desenvolvimento e implantação de software. Com ferramentas como **imagens**, **contêineres**, **Dockerfile** e **Docker Hub**, o Docker facilita a criação de ambientes consistentes e previsíveis, que podem ser replicados em diferentes máquinas e ambientes, proporcionando escalabilidade e estabilidade tanto para desenvolvedores individuais quanto para grandes equipes.

A escolha entre **bancos de dados relacionais** e **não relacionais** merece uma atenção especial, dado o impacto que a estrutura de dados tem no desempenho e nas funcionalidades de uma aplicação. Os bancos de dados **relacionais**, como **MySQL** e **PostgreSQL**, são a escolha ideal para cenários onde **a consistência e a integridade dos dados são cruciais**. Eles seguem o modelo tradicional de tabelas e garantem que as transações sejam seguras e que as relações entre os dados sejam mantidas de maneira rigorosa por meio de chaves primárias e estrangeiras. Esse modelo é particularmente útil em sistemas financeiros, bancários ou qualquer aplicação que exija **operações complexas de leitura e escrita, com garantia de que os dados estejam sempre corretos e sincronizados**.

Por outro lado, os bancos **não relacionais**, como **MongoDB**, são projetados para oferecer maior flexibilidade, sendo mais adequados para aplicações que lidam com **grandes volumes de dados** ou para cenários em que **os requisitos de estrutura dos dados podem variar** ao longo do tempo. Esses bancos de dados são amplamente utilizados em aplicações que requerem **alta escalabilidade horizontal** ou onde os dados não seguem uma estrutura tabular fixa, como em redes sociais, análise de big data ou sistemas de recomendação.

A decisão de escolher um banco de dados relacional ou não relacional deve ser guiada pelos requisitos específicos do projeto: se a **consistência e a integridade** forem prioridades, os bancos relacionais são a melhor opção. Se a **escalabilidade**, a **flexibilidade na estrutura de dados** e o suporte a **grandes volumes de dados** forem mais importantes, os bancos não relacionais serão mais apropriados.

Juntos, REST, Docker e a escolha apropriada de bancos de dados formam uma base sólida para a criação de sistemas modernos, capazes de lidar com as demandas de desempenho, escalabilidade e manutenção. Essas tecnologias garantem que desenvolvedores e empresas possam construir soluções eficientes, robustas e adequadas às necessidades atuais do mercado.

**[Próximo passo, continue sua leitura !](./stack.md)**
