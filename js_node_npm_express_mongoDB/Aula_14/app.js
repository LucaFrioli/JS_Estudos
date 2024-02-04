const path = require('path');
const express = require('express');
const app = express();

const port = 3000;
const routes = require(path.resolve(__dirname, 'routes.js'));
const { myMiddlewareGlobal} = require(path.resolve(__dirname, 'src', 'middlewares', 'middlewareGlobals.js'));//aqui estamos indicando onde está o middleware e o chamando para ser usado em todas as requisições que ocorrerem no site, por isso ele se encontra no arquivo app.js

//middlewares do express e eventuais outras dependências
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

//middlewares que nós criamos ( quase sempre coloque routes por último) :
app.use(myMiddlewareGlobal);//todas as requisições em todas as rotas e todos os verbos http no momento estão passando por este middleware, pois ele é declarado globalmente (((importamte lembrar que ele deve ser usado antes do uso das rotas)));
app.use(routes);

//
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`);
    console.log(`Acesse : http://localhost:${port}`);
});
