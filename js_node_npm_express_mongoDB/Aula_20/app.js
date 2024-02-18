//importação de dependencias e nativos
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');
require('dotenv').config();

//importação de modulos desenvolvidos
const { demoMidd } = require(path.resolve(__dirname, 'src', 'middlewares', 'globals.js'))
const routes = require(path.resolve(__dirname, 'routes.js'));

const port = process.env.PORT || 3000;
const app = express();
const sessionDays = 7;

mongoose.connect(process.env.CONNECTIONSTRING)//conectando a base de dados
    .then(() => {
        console.log('conexão realizada com sucesso');
        app.emit('connected');
    })
    .catch((e) => {
        console.error(e);
        throw new Error(`Erro ao se conectar na base de daddos: \n${e}`);
    });

const sessionOptions = session({
    secret: process.env.SECRETKEYSESSION,
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60 * 60 * 24) * sessionDays,
        httpOnly: true
    }
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());

app.use(sessionOptions)
app.use(demoMidd);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('connected', () => {
    app.listen(port, () => {
        console.log(`Aplicação rodando na porta : ${port}`)
        console.log(`Acesse : http://localhost:${port}`)
    });
});
