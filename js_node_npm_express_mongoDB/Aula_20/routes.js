const path = require('path');
const express = require('express');
const routes = express.Router();
//controllers
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));

//rotas
routes.get('/', homeController.renderIndex);

module.exports = routes;
