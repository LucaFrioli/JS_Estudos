//importações de nativos e dependencias
require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('connected');
    })
    .catch(e => {
        console.log(`Error : ${e}, try again later`);
        throw new Error('Internal Server ERROR! Retry to connect in database');
    });


//importações referentes a sessões e menssagens flash para usuários;
const express_session = require('express-session');
const MongoStore = require('connect-mongo');
const connect_flash = require('connect-flash');

//importação de módulos construidos
const { demoMidd } = require(path.resolve(__dirname, 'src', 'middlewares', 'globalsMiddlewares.js'));
const routes = require(path.resolve(__dirname, 'routes.js'));

//variaveis
const port = process.env.PORTAPLICATION || 3000;
const app = express();
const daySessionConfig = 7;//dias que uma sessão irá ficar salva

//configurando a sessão
const sessionOptions = express_session({
    secret: process.env.SESSIONSECRET,
    store:  MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60 * 60 * 24) * daySessionConfig,
        httpOnly: true,
    }
});

//definição de middlewares de dependencias
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(connect_flash());

//definição de middlewares desenvolvidos
app.use(sessionOptions);
app.use(demoMidd);
app.use(routes);

//definição de engines de views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('connected', () => {
    app.listen(port, () => {
        console.log(`Running in port : ${port}`);
        console.log(`Acsses : http://localhost:${port}`);
    });
});
