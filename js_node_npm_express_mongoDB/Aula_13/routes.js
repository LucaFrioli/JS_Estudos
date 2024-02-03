const path = require('path');//resolver caminhos dinamicamente
const express = require('express');
const routes = express.Router();//utiliza o modulo de gerenciamento de rotas do express;

// importação dos controllers para uso em rotas
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));

//definição de rotas da home
routes.get('/', homeController.indexDinamic);

module.exports = routes;//exporta as rotas para o servidor utilizar
