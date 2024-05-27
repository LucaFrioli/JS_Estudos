const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');
const Store = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

const routes = require(path.resolve(__dirname, 'routes.js'));
const { csrfCheckErr, csrfMidd } = require(
	path.resolve(__dirname, 'src', 'middlewares', 'globals.js')
);
const app = express();
const port = process.env.PORT || 3000;
const daySessionsEnable = 0.5;

// conexão como banco de dados :
mongoose
	.connect(process.env.CONNECTIONSTRING)
	.then(() => {
		app.emit('connected');
	})
	.catch((e) => {
		console.log(e);
		throw new Error('Erro de conexão: 500 Internal server error;');
	});
//

// configuração de sessão
const SessionConfig = session({
	secret: process.env.SECRETSESSIONENTRY,
	store: Store.create({ mongoUrl: process.env.CONNECTIONSTRING }),
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * daySessionsEnable,
		httpOnly: true
	}
});

if (
	process.env.PRODUCTION.toLowerCase() === 'y' ||
	process.env.PRODUCTION.toLowerCase() === 'yes'
) {
	app.use(helmet());
	console.log("i'm using helmet !");
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(SessionConfig);
app.use(csrf());
app.use(csrfCheckErr);
app.use(csrfMidd);
app.use(routes);

app.on('connected', () => {
	app.listen(port, async () => {
		console.log(`Aplicação rodando na porta ${port}`);
		console.log(`Acesse: http://localhost:${port}`);
	});
});
