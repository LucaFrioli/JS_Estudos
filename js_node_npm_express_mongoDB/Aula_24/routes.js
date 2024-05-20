const { resolve } = require('path');
const express = require('express');
const routes = express.Router();

// calling controllers modules
const indexController = require(
	resolve(__dirname, 'src', 'controllers', 'homeController.js')
);

const error404Page = require(
	resolve(__dirname, 'src', 'controllers', '_404Controller.js')
);

// index routes
routes.get('/', indexController.init);

// error routes
routes.get('/404Error', error404Page.render404);

module.exports = routes;
