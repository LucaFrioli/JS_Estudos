# Injetando conteúdo nas views :

Já vimos um pouco sobre a view engine `ejs`, nesta aula iremos abordar alguns conceitos um pouco mais avançados com, injeção de informações com escape e sem escape, metodos de inclusão e composição de viewse controle de fluxo utilizando código javascript dentro das páginas html :

1. Primeiramente vamos abordar os metodos de injeção de informações com escape e sem escape. Para isso utilizamos as tags `<%= variavel %>` para lidar com informações de escape, ou seja mesmo que tenham tags html dentro da informação de injeção, as tags não serão executadas e por consequencia serão mostradas dentro da view. Já quando queremos que elas sejam executadas como html utilizamos o método de injeção sem escapeque consiste na seguinte declaração de tag `<%- variavel %>`. Veja o exeplo a seguir :

- Suponhamos que temos esté tipo de objeto de injeção dentro do controller referente ao `index.ejs` :

~~~javascript
exports.renderIndex = (req, res) => {
    res.render('index', {
        name: '<strong>Dagoberto</strong>',
        emails: ['teste@hotmail.com', 'teste2@outlook.com']
    })
}
~~~

- Podemos recuperar o valor de duas formas dentro do arquivo ejs referente :

~~~html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Training Compose</title>
</head>

<body>

    <section class="container">
        <h1>Lorem ipsum dolor sit amet.</h1>
            <%= name %> <br>
            <%- name %> <br>
    </section>

    <script src="./assets/js/bundle.js"></script>
</body>

</html>
~~~

- As saidas da variavel `name` serão respectivamente :

~~~plaintext
    <strong>Dagoberto</strong> //com a tag exposta
    Dagoberto //em negrito
~~~

2. Componentizar arquivos ejs é uma boa prática principalmente para fazer reuso de códigos e evitar reescriatas,para isso o ejs contem o método includes, que vem dentro de uma tag sem escape, o que permite trazer trechos de códigos de outros ejs basta utilizar `<%- includes(caminho/arquivo); %>`, para criar componentes de inclusão é uma boa prática separá-los dentro de uma paasta chamada `includes` que estará dentro da pasta `views`. Vejamos um exemplo de código :

- Arquivos ejs da pasta includes
~~~html
 <!-- header.ejs -->
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Training Compose</title>
</head>

<body>
~~~

~~~html
<!-- footer.ejs -->
<script src="./assets/js/bundle.js"></script>
</body>

</html>
~~~

Após criar estes "componentes" devemos utiliza-los para fazer a composição de outras páginas, no caso vamos compor a mesma `index.ejs` dada no exemplo acima  :

~~~html
<%- include('includes/header'); %>
    <section class="container">
        <h1>Lorem ipsum dolor sit amet.</h1>
            <%= name %> <br>
            <%- name %> <br>
    </section>
<%- include('includes/footer'); %>
~~~

Veja como é vantajoso utilizar composições, e como aos poucos organiza melhor o código. Isso será importante para que quando adicionarmos controles de fluxo, o código fique mais legivel.

3. Os conceitos de controle de fluxo de dados injetados são baseados em estruturas de controle javascript padrão, como `if`, `for`, `while` e afins, elas são muito uteis para iterar sobre arrays de envios, ou obter controle de injeção criando templates padrão caso alguma variavel não tenha sido enviada. PAra adicionar as estruturas de controle basta encapsula-la entre tags **`ejs`** simples `<% estrutura de controle %>`, como as estruturas de controle tornam o código um pouco mais complexo exite também maneiras de realizar comentarios, utilizando a tag ejs padrão `<%# isso é um comentário %>`. Veja o exeplo a seguir :

~~~html
<%- include('includes/header'); %>
    <section class="container">
        <h1>Lorem ipsum dolor sit amet.</h1>

        <% if(typeof name !=='undefined' ) {%>

            <%# veja que quando não enviamos uma variavel, o tipo dela fica nullo, isso é util para manter ainda mais dinamica a página,e o controle do fluxo da aplicação%>
            <%= name %> <br>
            <%- name %> <br><br><br>
            <p>Ambos os nomes são a mesma variavel, o que muda é o modo de declaração da tag ejs, sendo a primeira com escape de tags html e a segunda com leitura e processamento da tag </p><br>

        <% } else { %>
            <p>Nada foi enviado</p>
        <% } %>

        <h2>Teste de iteração utilizando ejs : </h2>
        <div class="test">
            <% if(typeof emails !== 'undefined' && Array.isArray(emails) && emails.length > 0){ %>
                <% for( let email of emails) { %>
                    <h3><%= email %></h3>
                <% } %>
            <% } else{ %>
                <p>nenhum email foi enviado para ser iterado</p>
            <% } %>
        </div>
    </section>
<%- include('includes/footer'); %>
~~~
