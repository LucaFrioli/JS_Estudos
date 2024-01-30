const express = require('express');
const route = express.Router();//define rotas. Ele é utilizado para organizar o código em torno dos diferentes pontos de entrada (URIs) da aplicação.
const homeController = require('./controllers/homeController');//chama o controlador da rota URI '/'
const testesController = require('./controllers/testesController');

//rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.treatPost);

//rotas da testes
route.get('/testes/:idUser?/:parameters?', testesController.demoParamsAndQuery );


module.exports = route;
