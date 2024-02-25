# Habilitando segurança de cabeçalhos com Helmet e previnindo CSRF :
**1. Helmet:**

Helmet é um middleware popular para o Express que fornece proteção contra diversas vulnerabilidades de segurança web, incluindo:

* **Cross-site scripting (XSS):** Evita a injeção de scripts maliciosos no HTML da sua aplicação.
* **Content-sniffing:** Protege contra ataques que tentam adivinhar o tipo de conteúdo de um arquivo e explorá-lo.
* **Clickjacking:** Impede que usuários sejam enganados a clicar em links ou botões maliciosos.
* **X-Frame-Options:** Controla como a sua aplicação é renderizada em frames de outras páginas web.
* **Referrer Policy:** Define como o navegador deve enviar informações sobre a página de origem ao fazer solicitações para a sua aplicação.
* **Expect-CT:** Permite que você configure o navegador para esperar um Certificate Transparency (CT) log para o seu domínio.
* **HTTP Strict Transport Security (HSTS):** Força o navegador a usar HTTPS para se conectar à sua aplicação.

**2. CSRF:**

Cross-site request forgery (CSRF) é um tipo de ataque em que um invasor força um usuário autenticado a realizar uma ação indesejada em uma aplicação web. Para se proteger contra CSRF, você pode implementar as seguintes medidas:

* **Usar tokens CSRF:** Gerar um token único para cada usuário e incluí-lo em todas as solicitações que modificam dados.
* **Verificar o token CSRF:** Validar o token CSRF em cada solicitação e rejeitar solicitações com tokens inválidos.
* **Usar a biblioteca `csurf`:** Esta biblioteca fornece uma maneira fácil de implementar proteção CSRF no Express.

A implementação de Helmet, CSRF e no Express e Node.js é crucial para garantir a segurança de aplicações web. O Helmet fornece proteção contra diversas vulnerabilidades de segurança web, enquanto CSRF protege contra ataques específicos. Ao usar estas medidas em conjunto, podemos aumentar significativamente a segurança da aplicação desenvolvida.

# Como adicionar as fetures de segurança mencionadas ao projeto :


Primeiramente deveromos adicionar ambas as dependencias ao projeto para isso utilizamos o seguinte comando na NPM :

~~~bash
npm i helmet csurf
~~~

Após isso abriremos o app.js importamos ambas as dependencias para dentro do projeto e as utilizamos como middlewares, o helmet deverá ser utilizado antes de tudo, e o csurf deverá ser declarado após o uso do middleware de sessão, vamos observar isto no seguinte código :

~~~javascript
// ... importações anteriores
const helmet = require('helmet');
const csrf = require('csurf');

//.. código de configuração de sessão

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());

app.use(SessionConfig);
app.use(csrf());
//...  criação de middlewares para autenticar envios de requisição por formulários com csrf.
//...  outros middlewares e uso de rotas e continuação do código
~~~

O helmet neste ponto já está praticamente fazendo o seu papel, por não estarmos trabalhando com um software que irá para produção não iremos no momento adicionar mais configurações a ele. Porem o csrf ainda não está funcionando corretaemnte, e para configura-lo devemos criar dois middlewares que farão a injeção de tokens em formulários, e outro para a validação da existencia do token ao enviar um formulário. Posteriormente estes middlewares deverão ser usados normalmente pela aplicação com o comando `app.use()`, por momento vamos configura-los, abra o arquivo de middlewares globais chamado no nosso boilerplate de `globals.js` :

~~~javascript
exports.csrfMidd = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();//
    next();
}

exports.csrfCheckErr = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    } else {
        next();
    }
}
~~~

A primeira função chamada `csrfMidd` cria uma varivel global de injeção por meio da propriedade `.locals` e põe o nome dela de `csrfToken`, a `csrfToken` carregará um token que será autenticado pelo csurf, e deverá ser injetada como valor de um input do tipo `hidden` e nome `_csrf` em todo formulário que existir na aplicação, vejamos como deve ficar a cara do formulário ejs :

~~~html
<!-- código antes do fromulário -->
        <form action="/" method="post">
            <label for="clientname">Nome do cliente : </label>
            <input type="text" name="clientname" id="clientname">
            <!-- tag que contém o Token recebendo-o apartir de uma tag ejs -->
            <input type="hidden" name="_csrf" value="<%= csrfToken %>">
            <!-- -------------------------------------------------- -->
            <button>Enviar</button>
        </form>
<!-- código que vem depois do formulário -->
~~~

A segunda função chamada `csrfCheckErr` é chamada em toda requisição e é acionada quando nehum token csrf ou quando os tokens do back e frontend não correspondem, assim permitindo uma validação de envio sendo feita apenas por usuários autenticados e logados na aplicação, caso nenhum token exista ou não corresponda, a função encarrega-se de renderizar uma págian com erro. E Eventualmente dependendo da aplicação salve estes erros em arquivos de logs e afins;

Feito isto, temos então agora um boilerplate padrão com todas as ferramentas até agora estudadas, e já com o mínimo do mínimo de segurança aplicados, nas duas proximas aulas adaptaremos um pouco os módulos csrf e revisaremos todo o conteúdo visto até aqui;
