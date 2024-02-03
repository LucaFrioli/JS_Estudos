# Utilizando o express junto com webpack :

## Instalando as dependências do projeto e configurando detalhes :
Antes de começar as configurações e integrações devemos instalar todas as dependencias de projeto e desenvolvimento para isso vamos iniciar o npm dentro do `root-dir` do projeto :

~~~bash
# Inicando a npm no projeto :
npm init -y
# Instalando as dependencias de projeto :
npm i express ejs style-loader css-loader core-js regenerator-runtime
# Instalando as dependencias de desenvolvimento :
npm i --save-dev @babel/cli @babel/core @babel/preset-env @babel-loader webpack webpack-cli nodemon
~~~

 - Após tudo terminar de ser instalado criaremos um `.gitignore` para o git ignorar a pasta `node-modules`.

 - A estrutura da `root-dir` até o dado momento deve ter ficado assim :

~~~plaintext
  root-dir
  |
  |-- node_modules
  |   |-- (...)
  |-- package.json
  |-- package-lock.json
  |-- .gitignore
~~~

## Configurando o Front-end :
1. O primerio passo é configurar o webpack apartir do `webpack.config.js` que devemos criar na raiz do projeto, além de criar também uma pasta `frontend`, deixando-o para modo desenvolvimento, e definindo entrypoint dele em uma pasta `frontend` a qual contém o arquivo `main.js` que é o source que controla toda a parte de front-end do projeto, e a pasta `assets` que carrega o css e as imagens em suas pastas correspondentes; Veja a configuração feita já habituais, porém com estas mudanças :

~~~javascript
    const path = require('path');

    module.exports ={
        mode : 'development',
        entry : path.resolve(__dirname,'frontend','main.js'), // <- aqui está a mudança mais significativa na configuração
        output :{
            path : path.resolve(__dirname,'public','assets','js');
            filename : 'bundle.js'
        },
        modules : {
            rules :[
                {
                    exclude : /node_modules/,
                    test : /\.js$/,
                    use: {
                        loader : 'babel-loader',
                        option :{
                            presets : ['@babel-env']
                        }
                    }
                },
                {
                    test :/\.css$/,
                    use : ['css-loader','style-loader']
                }
            ]
        },
        devtools : 'source-map'
    };
~~~

2. Agora devemos adicionar os scripts `dev` e `start` ao arquivo `package.json` para que se possa utilizar o es6-modules dentro do projeto, e ele gere um arquivo que carregara as funcionalidades do fron-tend para utilizar psteriormente no back-end; O script `start` já está sendo criado e estão sendo adicionadas as flags `--ignore` para que o script ignore as pastas que serão criadas no próximo passo, note que ele é o script que tem mais mudança em relação as aulas anteriores:

~~~javascript
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack -w",
        "start": "nodemon app.js --ignore public --ignore frontend"
    },
~~~

3. Os `assets` e o `main.js` que eram utilizados anteriormente dentro da pasta `src` nos projetos front-end, agora são transferidos para uma pasta própria com o mesmo nome, e se cria uma pasta `public`, que contém o subdiretório `assets/js` que recebrá os arquivos estáticos que são utilizados pelo back-end; Obtendo agora uma estrutura assim :

~~~plaintext
  root-dir
  | -- node_modules
  |    |-- (...)
  | -- frontend
  |    | -- assets
  |    |    | -- css
  |    |    |    | -- style.css
  |    |    | -- img
  |    | -- main.js
  |-- public
  |    | -- assets
  |    |    | -- js
  |    |    |    | -- bundle.js (arquivo criados pelo webpack ao ser executado);
  |    |    |    | -- bundle.js.map (arquivo criados pelo webpack ao ser executado);
  |-- package.json
  |-- package-lock.json
  |-- .gitignore
  |-- webpack.config.js
~~~

 - OBS : não podemos esquecer de adicionar o `core-js/stable` e o `regenerator-runtime/runtime` como modulos requeridos no arquivo `main.js` da pasta `frontend`, para tornar o software mais responsivo e aceito em navegadores antigos, e importar o `style.css` que se encontra dentro de `assets`, para isso iremos abrir o arquivo e escrever os seguintes códigos  :

~~~javascript
    import 'core-js/stable';
    import 'regenerator-runtime/runtime';
    import '.assets/css/style.css';
~~~

## Configurando o Back-end :

A configuração do backend é basicamente a mesma que vimos nas ultimas aulas, e ainda não está completa, pois não abordamos a camada model do padrão MVC, porém iremos recaptular o que já realizamos até aqui, e abordar o funcionamento do ejs em relação ao consumo do que foi criado no front-end.

Criaremos a pasta que o back-end ficará e chamaremos ela apenas ne `src` ela deverá conter outras duas pastas chamadas `views` e `controllers` que ficarão encarregadas das partes com o mesmo nome do padrão arquitetural MVC. Para gerenciar os `controllers` em cada uma das rotas que as URIs dos sites pode nos levar, vamos criar um arquivo na raíz do projeto chamado `routes.js` que vai ficar com a responsabilidade de rotear os caminhos para o servidor, que será outro arquivo na raíz do projeto chamado `app.js`.

1. Primeiramente vamos configurar o `app.js` que utilizará o express, e dirá em qual porta o site estará sendo executado, e usará o `routes.js` para gerenciar as rotas, além de definir onde estarão as views, e qual engine será utilizada para consumir estas views, neste caso será ejs. Além disso ele será responsavel por dizer que nosso site aceita dados vindos de requisições por formulários html, e a localização de arquivos estáticos. Vamos então criar e configurar o `app.js` na raíz do projeto :

~~~javascript
    const path = require('path');
    const express = require('express');
    const app = express();

    const routes = path.resolve(__dirname, 'routes.js');
    const port = 3000;

    app.use(express.urlencoded({extends : true}));//habilita recebimento de dados do html por forms incluindo estruturas de dados e objetos
    app.use(express.static(path.resolve(__dirname, 'public')));//habilita uso de arquivos estáticos
    app.use(routes);// usa as rotas

    app.set('views',path.resolve(__dirname, 'src', 'views'));//define onde a pasta das views se encontra
    app.set('view engine','ejs');// define qual engine fará o processamento das views

    app.listen(port,() => {// abre o servidor para porta configurada
        console.log(`Servidor rodando na porta ${port}`);
        cosnole.log(`Acesse : http://localhost:${port}`);
    });
~~~

2. Agora continuando as configurações na raiz do projeto vamos criar o `routes.js` que grenciará as rotas e consumirá os arquivos da pasta `controllers`, que são controladores(ela é a camada que realiza a comunicação entre os views e os models) que contém rotinas, respostas e ações, para cada eventual chamada de verbo http e rota relativa, que serão feitos no corpo do arquivo `routes.js`, então vamos cria-lo:

~~~javascript
const path = require('path');
const express = require('express');
const routes = express.Router();

//importando módulos controladores
const homeController = require(path.resolve(__dirname,'src','controllers','homeController.js'));

//gerenciando rotas da home
routes.get('/', homeController.renderIndexDinamic);

module.exports = routes;
~~~

 - Feito isso devemos criar a pasta `src` propriamente dita com as duas subpastas `controllers` e `views`, e dentro da pasta `controllers` devemos adicionar um arquivo neste caso (pois é o unico controlador no momento utilizado pelo `routes.js` ) chamado `homeController.js`. Assim agora termos a seguinte estrutura  de pastas :

~~~plaintext
  root-dir
  | -- node_modules
  |    |-- (...)
  | -- frontend
  |    | -- assets
  |    |    | -- css
  |    |    |    | -- style.css
  |    |    | -- img
  |    | -- main.js
  |-- public
  |    | -- assets
  |    |    | -- js
  |    |    |    | -- bundle.js (arquivo criados pelo webpack ao ser executado);
  |    |    |    | -- bundle.js.map (arquivo criados pelo webpack ao ser executado);
  | -- src
  |    | -- controllers
  |    |    | -- homeController.js
  |    | -- views
  |-- package.json
  |-- package-lock.json
  |-- .gitignore
  |-- webpack.config.js
  |-- app.js
  |-- routes.js
~~~

3. Agora precisaremos configurar os conteúdos do `homeController.js` para que ele tenha a função que estamos chamando no `routes.js`, no caso essa função servirá apenas como um exeplo de renderização da view, para entendermos como faz a conexão front-end back-end. Para isso iremos utilizar o método disponibilizado pelo express dentro do parametro `res` chamado `render`, que recebe como parâmetros o nome do arquivo da view como uma `String`, e os dados que a engine ejs irá consumir para a página ficar dinamica em um objeto chave-valor, onde chave representa a variavel declarada na view e o valor representa o conteúdo que a variavel irá apresentar. Para demonstrar como utilizar o front-end apartir do back-end, vamos criar esta função dentro de `homeController.js`:

~~~javascript
exports.renderIndexDinamic = (req,res) =>{
    res.render('index', {teste: 'olá mundo'});
}
~~~

- O método `render` irá buscar na pasta especificada na definição do endereço de `'views'` feito no `app.js` um arquivo que tenha o mesmo nome do valor passado no primeiro parâmetro de `render`, e com a mesma extenxão da engine configurada também no `app.js`.

- O segundo parâmtro do método `render` serão os valores que a engine utilizará para que a página seja dinâmica, assim estes valores serão consumidos pela engine e definirão o que aparecerá para o client no front-end.

4. Vamos criar o arquivo `index.ejs` na pasta `view` para que o controlador possa renderizá-lo. Ao definir o script dentro deste arquivo, incluiremos um caminho relativo para `bundle.js` da pasta `public`. Isso é possível porque o arquivo `bundle.js` é estático e, como aprendemos nas aulas anteriores, para acessar arquivos estáticos basta adicionar seu nome à URI, desde que estejam na pasta `public`. Neste caso, `bundle.js` está localizado na pasta `public` e contém todo o código referente ao JavaScript do front-end. Portanto, podemos criar o seguinte código:

~~~html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Modelo</title>
</head>

<body>
    <section class="container">
        <h1>
            Lorem ipsum dolor sit amet diz : <%= teste %>
        </h1>
    </section>

    <script src="./assets/js/bundle.js"></script>
</body>

</html>
~~~
**OBS : Vale resaltar que não precisamos passar todo o caminho relativo do server-side já que a pasta public é uma pasta acessivel em cliente-side, que é onde está sendo executado o index.ejs, é como se tivessemos o criado dentro da pasta public.**

Por fim temos a seguinte estrutura de pastas  :

~~~plaintext
  root-dir
  | -- node_modules
  |    |-- (...)
  | -- frontend
  |    | -- assets
  |    |    | -- css
  |    |    |    | -- style.css
  |    |    | -- img
  |    | -- main.js
  |-- public
  |    | -- assets
  |    |    | -- js
  |    |    |    | -- bundle.js (arquivo criados pelo webpack ao ser executado);
  |    |    |    | -- bundle.js.map (arquivo criados pelo webpack ao ser executado);
  | -- src
  |    | -- controllers
  |    |    | -- homeController.js
  |    | -- views
  |    |    | -- index.ejs
  |-- package.json
  |-- package-lock.json
  |-- .gitignore
  |-- webpack.config.js
  |-- app.js
  |-- routes.js
~~~

### Explicando o motivo de funcionar a atribuição do caminho do script dentro de `index.ejs` :

A pasta `public` em um projeto web é utilizada para armazenar recursos estáticos, como arquivos CSS, JavaScript, imagens e outros ativos que serão acessados diretamente pelo navegador do usuário. Essa prática é comum em frameworks e bibliotecas como Node.js, Express, e muitos outros, pois oferece uma maneira organizada e eficiente de servir esses recursos.

A estrutura da pasta `public` é projetada para ser acessível diretamente a partir do lado do cliente, tornando-a uma escolha conveniente para armazenar arquivos que não precisam de processamento do servidor a cada requisição. Em muitos casos, isso ajuda a melhorar o desempenho do aplicativo, pois os recursos estáticos são cacheados pelo navegador do cliente e podem ser recuperados mais rapidamente.

Logo a importância da pasta `public` em relação ao arquivo `bundle.js` é :

4.1. **Arquivos Estáticos na Pasta Public:**
   - A pasta `public` é projetada para armazenar arquivos estáticos que serão acessados diretamente pelos clientes (navegadores).
   - `bundle.js` é um arquivo estático que contém todo o código JavaScript do lado do cliente. Ele foi gerado a partir da transpilação e empacotamento de vários arquivos JavaScript do projeto.

4.2. **Utilização na View:**
   - A pasta `public` é configurada para ser servida publicamente. Isso significa que todos os arquivos dentro dela podem ser acessados diretamente pela URI, sem a necessidade de tratamento especial no servidor.
   - Ao referenciar o caminho relativo para `bundle.js` na URI dentro do arquivo `index.ejs` na pasta `view`, o autor está garantindo que o navegador conseguirá buscar e carregar esse arquivo JavaScript.

4.3. **Organização do Projeto:**
   - Manter recursos estáticos, como JavaScript, CSS e imagens, na pasta `public` ajuda na organização do projeto, separando claramente os ativos que serão servidos diretamente do lado do cliente daqueles que exigem processamento no servidor.
