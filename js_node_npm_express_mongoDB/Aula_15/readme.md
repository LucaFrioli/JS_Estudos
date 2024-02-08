# Criando um servidor MongoDB

O MongoDB é um sistema de gerenciamento de banco de dados NoSQL (Not Only SQL) amplamente utilizado para armazenar dados de forma flexível e escalável. Ele difere dos bancos de dados relacionais tradicionais ao adotar um modelo de dados orientado a documentos, o que significa que os dados são armazenados em documentos BSON (Binary JSON), que são estruturados em pares de chave-valor e agrupados em coleções.

## **Estruturação e Funcionalidades:**
1. **Documentos:** Os dados no MongoDB são representados como documentos BSON. Cada documento é uma estrutura de dados flexível e pode conter campos de diferentes tipos, incluindo outros documentos ou arrays.

2. **Coleções:** Os documentos são organizados em coleções, que são equivalentes a tabelas em bancos de dados relacionais. No entanto, as coleções no MongoDB não impõem um esquema rígido, permitindo que diferentes documentos dentro da mesma coleção tenham campos diferentes.

3. **Índices:** O MongoDB suporta a criação de índices para otimizar consultas e melhorar o desempenho de leitura.

4. **Consultas:** A linguagem de consulta do MongoDB é baseada em JSON, facilitando a execução de operações de consulta e projeção de dados.

5. **Sharding e Replicação:** O MongoDB oferece recursos robustos de sharding e replicação para escalabilidade horizontal e alta disponibilidade.

## **Vantagens:**
1. **Flexibilidade de Esquema:** O MongoDB permite que os desenvolvedores alterem a estrutura dos documentos sem a necessidade de modificar esquemas ou tabelas, proporcionando flexibilidade durante o desenvolvimento.

2. **Desempenho de Leitura:** Por utilizar o modelo de documentos, o MongoDB é eficiente para operações de leitura, especialmente quando se trata de consultas complexas que envolvem dados aninhados.

3. **Escalabilidade Horizontal:** O sharding facilita a escalabilidade horizontal, permitindo distribuir grandes volumes de dados em vários servidores.

4. **Suporte para Dados Semi-Estruturados:** O MongoDB é adequado para armazenar dados semi-estruturados ou não estruturados, com suporte para arrays e documentos aninhados.

5. **Comunidade Ativa e Documentação Abundante:** O MongoDB possui uma comunidade ativa de usuários, além de uma documentação extensa e recursos educacionais.

## **Desvantagens:**
1. **Complexidade em Operações de Gravação Intensiva:** Em cenários de gravação intensiva, o MongoDB pode enfrentar desafios em comparação com alguns sistemas de bancos de dados relacionais.

2. **Consistência Eventual:** Em configurações padrão, o MongoDB oferece consistência eventual, o que significa que pode haver um período durante o qual os nós podem ter visões diferentes dos dados antes de se sincronizarem.

3. **Curva de Aprendizado:** Para aqueles familiarizados apenas com bancos de dados relacionais, pode haver uma curva de aprendizado ao se adaptar ao modelo de documentos e às particularidades do MongoDB.

4. **Consumo de Recursos:** Em ambientes de alta concorrência, o MongoDB pode consumir mais recursos do que alguns sistemas de banco de dados relacionais, especialmente em configurações não otimizadas.

# Começando um servidor :

Primeiramente devemos criar uma conta no [mongodb/Atlas](https://www.mongodb.com/cloud/atlas/register);

Pós relizar o registro devemos escolher um cluster para ser criado nosso data base, no caso escolheremos o `M0` que é free, deixaremos o provedor como AWS padrão, então devemos escolher a região, se quiser pode-se trocar o nome do cluster criado.

Após tudo ser carregado, crie um usuário utilizando a aba **Database Access** crie como um usuario administrativo com a opção `Atlas Admin`;
**OBS: anote o usuário e a senha criadas**

Vá para a aba **Network Access** e clicque em add ip address, clique no campo referente a entrada e após isso selecione a opção **Allow Access from anywhere**, adicione um comentário indicando sobre o que se trata a entrada, e confirme;

Vá até a aba Database e clique em **Connect**, após isso selecione **Drivers**, selecione a linguagem do campo `Driver`, a versão pode ser mudada caso necessário, e o mais importante copie a URL de conexão, que se encontrará no item **3. Add your connection string into your application code**;

**Salve o link de conexão**
