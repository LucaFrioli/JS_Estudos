const { resolve } = require('path');
const express = require('express');
const routes = express.Router();

// **calling controllers modules**
const homeController = require(
	// ./src/controllers/homeController.js
	resolve(__dirname, 'src', 'controllers', 'homeController.js')
);

const loginController = require(
	// ./src/controllers/loginController.js
	resolve(__dirname, 'src', 'controllers', 'loginController.js')
);

const error404Page = require(
	// ./src/controllers/_404Controller.js
	resolve(__dirname, 'src', 'controllers', '_404Controller.js')
);

const tasksController = require(
	// ./src/controllers/tasksController.js
	resolve(__dirname, 'src', 'controllers', 'tasksController.js')
);

// const contactsController = require(
// 	resolve(__dirname, 'src', 'controllers', 'contactsController.js')
// );

// **calling midlewares modules**
const checkUserInfoMiddleware = require(
	// ./src/middlewares/checkUserInfoMiddleware.js
	resolve(__dirname, 'src', 'middlewares', 'checkUserInfoMiddleware.js')
);

// **defining routes**

// index routes
routes.get('/', (req, res) => {
	res.render('index', { title: 'index' });
});

// error routes
routes.get('/404Error', error404Page.render404);

// login routes
routes.get('/login', loginController.index);
routes.post('/login', loginController.registerReceived);
routes.get('/login/register', loginController.register);
routes.post('/login/logged', loginController.login);
routes.get('/logout', loginController.logout);

// home routes
routes.get(
	'/home',
	checkUserInfoMiddleware.checkUserIsLogged,
	homeController.index
);

// tasks routes
routes.get('/tasks', tasksController.index);

// --- Data schedule manipulation routes ---


module.exports = routes;
