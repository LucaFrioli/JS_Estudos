const { resolve } = require('path');
const express = require('express');
const routes = express.Router();

// **calling controllers modules**
// ./src/controllers/homeController.js
const homeController = require(
	resolve(__dirname, 'src', 'controllers', 'homeController.js')
);

// ./src/controllers/loginController.js
const loginController = require(
	resolve(__dirname, 'src', 'controllers', 'loginController.js')
);

// ./src/controllers/_404Controller.js
const error404Page = require(
	resolve(__dirname, 'src', 'controllers', '_404Controller.js')
);

// ./src/controllers/tasksController.js
const tasksController = require(
	resolve(__dirname, 'src', 'controllers', 'tasksController.js')
);

// **calling midlewares modules**
// ./src/middlewares/checkUserInfoMiddleware.js
const checkUserInfoMiddleware = require(
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

module.exports = routes;
