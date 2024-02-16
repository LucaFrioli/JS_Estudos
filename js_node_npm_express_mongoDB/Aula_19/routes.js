//importações nativas e de dependencias
const path = require('path');
const express = require('express');

//controllers
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));

//variaveis
const routes = express.Router();

//rotas

//home
routes.get('/', homeController.renderIndex);

module.exports = routes;
