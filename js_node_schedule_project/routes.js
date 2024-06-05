const { resolve } = require('path');
const express = require('express');
const routes = express.Router();

// calling controllers modules
// ./src/controllers/homeController.js
const indexController = require(
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

// index routes
routes.get('/', indexController.index);

// login routes
routes.get('/login', loginController.index);

// error routes
routes.get('/404Error', error404Page.render404);

module.exports = routes;
