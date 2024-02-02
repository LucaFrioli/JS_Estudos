const path = require('path');
const express = require('express');
const app = express();

const routes = require(path.resolve(__dirname, 'routes.js'));
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));//criando uma pasta de conteúdos estáticos e a usamos
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
    console.log(`Para Acessar utilize o seguinte link : http://localhost:${port}`);
});
