const path = require('path');
const express = require('express');
const routes = express.Router();
const homeController = require(path.resolve(__dirname, 'src', 'controllers','homeController'));

//rotas da homePage
routes.get('/', homeController.mainTest);


module.exports = routes;
