# Realizando a conexão com o MongoDB e criando o primeiro Modelo :

Iremos utilizar novas ferramentas, e devemos instala-las como dependencias de projeto :
    - mongoose
    - dotenv **Lembre-se de retirar o arquivo `.env`, para isso sempre adicione ele no `.gitignore` ou configuração de ignorar do versionador de códigos de sua preferência.**


# Sobre o mongoose :

A biblioteca Mongoose é uma ferramenta popular no mundo Node.js, projetada para facilitar a interação com bancos de dados MongoDB. Vamos explorar detalhadamente o motivo pelo qual ela surgiu, suas funcionalidades, vantagens, facilidades e fornecer alguns exemplos.

### Origem:

A necessidade de uma biblioteca como o Mongoose surgiu devido às características específicas do MongoDB, um banco de dados NoSQL orientado a documentos. MongoDB armazena dados em documentos JSON-like (BSON) e, por ser schema-less, oferece flexibilidade, mas também pode tornar a interação com o banco de dados mais complexa.

O Mongoose foi desenvolvido para fornecer uma camada de abstração sobre o MongoDB, simplificando a interação com o banco de dados e permitindo a definição de esquemas para dados. Ele oferece um modelo de objeto para a aplicação, facilitando a validação, consulta e manipulação de dados de forma mais estruturada.

### Funcionalidades:

1. **Esquemas (Schemas):** Mongoose permite a definição de esquemas para os dados, especificando os tipos de campos, validações e configurações adicionais.

~~~javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 },
  email: { type: String, unique: true }
});
~~~

2. **Modelos:** Com base nos esquemas, Mongoose cria modelos que representam coleções no MongoDB. Esses modelos oferecem métodos para interagir com os dados.

~~~javascript
const User = mongoose.model('User', userSchema);
~~~

3. **Middleware:** Mongoose suporta middleware, que permite a execução de código antes ou depois de certos eventos, como salvar ou remover documentos.

~~~javascript
userSchema.pre('save', function (next) {
  // Execute algo antes de salvar
  next();
});
~~~

4. **Validação:** Mongoose facilita a validação de dados antes de serem persistidos no banco de dados.

~~~javascript
const user = new User({ name: 'John', age: 16 });
user.save()
  .catch(err => console.error(err.message));
~~~

### Vantagens e Facilidades:

1. **Abstração de Banco de Dados:** Mongoose simplifica a interação com o MongoDB, oferecendo uma API mais amigável e expressiva.

2. **Validação de Dados:** Facilita a aplicação de regras de validação, garantindo a integridade dos dados antes de serem armazenados.

3. **Esquemas Estruturados:** A definição de esquemas proporciona uma estrutura clara para os dados, melhorando a manutenção do código.

4. **Middleware Customizado:** A capacidade de adicionar middleware personalizado oferece controle adicional sobre o fluxo de dados.

5. **Promessas e Callbacks:** Mongoose suporta tanto callbacks quanto promessas, permitindo escolher o estilo de programação preferido.

### Exemplos:

1. **Conectar ao Banco de Dados:**

~~~javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meu_banco', { useNewUrlParser: true, useUnifiedTopology: true });
~~~

2. **Definir e Salvar um Documento:**

~~~javascript
const User = mongoose.model('User', userSchema);
const newUser = new User({ name: 'Alice', age: 25, email: 'alice@example.com' });

newUser.save()
  .then(() => console.log('Usuário salvo com sucesso!'))
  .catch(err => console.error('Erro ao salvar usuário:', err));
~~~

3. **Consultar Documentos:**

~~~javascript
User.find({ age: { $gte: 21 } })
  .then(users => console.log('Usuários com 21 anos ou mais:', users))
  .catch(err => console.error('Erro ao consultar usuários:', err));
~~~

O Mongoose simplifica o desenvolvimento de aplicativos Node.js que usam o MongoDB, oferecendo abstração, validação e uma estrutura organizada para interagir com o banco de dados.


# Sobre o dotenv :

A biblioteca `dotenv` é comumente usada em projetos Node.js para carregar variáveis de ambiente a partir de um arquivo `.env`. Vamos explorar detalhadamente o motivo pelo qual ela surgiu, suas funcionalidades, vantagens, facilidades e fornecer alguns exemplos.

### Origem:

O `dotenv` foi criado para lidar com a configuração de variáveis de ambiente em projetos Node.js de uma maneira mais organizada e segura. Em muitos casos, ao desenvolver aplicativos, é necessário armazenar informações sensíveis ou configurações específicas do ambiente, como chaves de API, URLs de banco de dados, etc. O `dotenv` fornece uma maneira de carregar essas variáveis de ambiente sem expô-las diretamente no código fonte.

### Funcionalidades:

1. **Carregamento de Variáveis de Ambiente:** O principal objetivo do `dotenv` é carregar variáveis de ambiente a partir de um arquivo `.env`.

~~~javascript
// .env
DB_CONNECTION_STRING=mongodb://localhost/meu_banco
API_KEY=chave_secreta
~~~

~~~javascript
// index.js
require('dotenv').config();
~~~

2. **Organização e Segurança:** Manter configurações sensíveis em um arquivo `.env` proporciona uma maneira organizada de gerenciar variáveis de ambiente, mantendo-as fora do código fonte e protegendo informações confidenciais.

### Vantagens e Facilidades:

1. **Simplicidade:** Facilita o gerenciamento e o carregamento de variáveis de ambiente sem a necessidade de manipulação manual.

2. **Consistência em Diferentes Ambientes:** Ajuda a manter a consistência nas configurações entre diferentes ambientes de desenvolvimento, teste e produção.

3. **Segurança:** Evita a exposição acidental de informações sensíveis, uma vez que o arquivo `.env` não deve ser compartilhado publicamente ou versionado.

4. **Facilidade de Configuração:** Basta criar um arquivo `.env` na raiz do projeto e adicionar as variáveis necessárias.

### Exemplos:

1. **Carregar Variáveis de Ambiente:**

~~~javascript
// index.js
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
~~~

2. **Utilizar Variáveis em Código:**

~~~javascript
// index.js
require('dotenv').config();

const apiKey = process.env.API_KEY;
console.log(`Chave da API: ${apiKey}`);
~~~

O `dotenv` é uma ferramenta valiosa para gerenciar configurações e informações sensíveis em projetos Node.js, permitindo a carga fácil e segura de variáveis de ambiente a partir de um arquivo `.env`. Isso contribui para a segurança, organização e facilidade de configuração em diferentes ambientes de desenvolvimento.

# Principais mudanças :

## Configurando o arquivo `.env`

Primeirmanete se deve criar um arquivo `.env` na raíz do projeto, ele servirá para manter as informações sensíveis seguras, como já visto anteriormente. **Reforço : ao criar o arquivo, não esqueça de adicionar seu nome dentro do `.gitignore` ou arquivo de exclusão de leitura do seu versionador.**

Iremos então criar uma varivel neste arquivo `CONNECTIONSTRING` que deverá conter a uri de conexão que o mongodb disponibiliza, inclusive vamos analiza-la para o entendimento melhor de sua estrutura, tudo que estiver entre tags, deverá ser trocado pelos nomes necessários, menos o `<clusterName>`, que é para vir preenchido por padrão:

~~~textplain
#código dentro do .env:

CONNECTIONSTRING = mongodb+srv://<username>:<password>@<clusterName>.wt3ba5x.mongodb.net/<nome_do_banco_de_dados_utilizado>?retryWrites=true&w=majority
~~~

## Configurando o `app.js` :

1. Após criar o arquivo `.env`, devemos trazer esta informação para o `app.js`, para isso devemos utilizar a seguinte importação, que fará a configuração de segurança necessária para trazer os dados com uma boa prática, além disso para realizar a conexão devemos importar o `mongoose`, logo no cabeçalho de importações de dependencias e nativos, ele ficará assim:

~~~javascript
//importação de nativos e dependencias
require('dotenv').config();//trazendo o dot env para processamento seguro
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');//trazendo o mongoose para inicio de conexão com o banco de dados
~~~

2. Após isso ser realizado, o express iniciado e a porta da aplicação definida, iremos adicionar a lógica de conexão com o banco de dados, utilizando o método `.connect` do `mongoose`, e como seu parametro trazer a `CONNECTIONSTRING` de froma segura utilizando `process` para que se possa ter acesso ao processo que está ocorrendo no momento, `.env` para cessar os parametros dentro do objeto env que se encontra nos processos, e o nome da variavel de ambiente , que nosso caso no momento é CONNECTIONSTRING.

O `mongoose.connect` utiliza a string de conexão retornada pelo `process`,  e faz uma promessa retronando se a conexão foi bem sucedida ou não, por ela ser assíncrona, devemos grantir que ela ocorra antes que o servidor inicie no `app.listen()`,para isso adicionaremos na varivel `app` um emissor de evento `.emit`, que grantirá a apenas a execução do servidor, quando o banco de dados realmente estiver conectado. Para isso também precisaremos encapsular o listner dentro de um `app.on` que é o ouvinte do emissor. Veja o código que será adicionado, e o encapsulamento do `.listen` :

~~~Javascript
//criando uma conexão com o banco de dados
mongoose.connect(process.env.CONNECTIONSTRING)
   .then(()=>{
        app.emit('conectado');
   })
   .catch(e=>console.log(e));

//encapsulando o app.listen
app.on('conectado', () => {
    app.listen(port,()=>{
        //resto do código
    });
});
~~~

## Criando um modelo simples como exeplo :

Primeiramente devemos criar uma pasta chamada `models` dentro de nosso diretório `src`, nesta pasta ficarão armazenadas so modelos de dados de cada uma das páginas e coleções necessárias dentro da aplicação desenvolvida, arquivos models contém o esquema de dados refererente o modelo, e um objeto de configurações, validações e lógica de inserção dentro do banco de dados.

No geral a estrutura de arquivos de modelo será em seu básico a seguinte, podendo conter alterações drásticas dependendo do que se é necessário:

~~~javascript
const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({//esquema de organização da estrutura dos dados
    title: { type: String, required: true },
    subTitle: String,
    words: Number
});

const HomeModule = mongoose.model('Home', HomeSchema);//criando modelo. O modelo é uma representação que interage diretamente com a coleção no banco de dados MongoDB. Ele fornece métodos para realizar operações como inserção, consulta, atualização e exclusão.

class Home {
    // validação de dados e lógicas para inserção e recuperação de dados do BD equivalente
}

module.exports = Home;

~~~
