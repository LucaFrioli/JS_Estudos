//importação de nativos e dependencias
require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

//criação de variaveis essenciais
const app = express();
const port = 3000;

// conectando no database
mongoose.connect(process.env.CONNECTIONSTRING)//puxa a string de conexção do arquivo que devemos proteger no gitignore, e jamais pode ser esposto .env
    .then(() => {
        app.emit('successfully_connection');//utilizamos o emissor de evento para organizar o fluxo de execução dentro do aplicativo
    })
    .catch(e => {
        console.log(e);
        throw new Error('Erro ao Conectar no banco de dados');
    });

//importação de arquivos construidos
const routes = require(path.resolve(__dirname, 'routes.js'));
const { demoMidd } = require(path.resolve(__dirname, 'src', 'middlewares', 'globalsMiddlewares.js'));

//uso de middlewares de dependencias e nativos
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

//uso de middlewares de arquivos construidos
app.use(demoMidd);
app.use(routes);

//definindo o mecanismo e rotas par arenderização de views dinâmicas
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('successfully_connection', () => {//só iniciará o servidor caso seja emitido um evento indicando que a conexão com a base de dados ocorreu de forma esperada
    app.listen(port, () => {
        console.log(`Servidor rodando na porta : ${port}`);
        console.log(`Acesse : http://localhost:${port}`);
    });
});
