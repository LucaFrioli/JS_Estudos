const express = require('express');
const routers = express.Router();

const homeController = require('./src/controllers/homeController');//controladores da homePage

//rotas da homePage
routers.get('/', homeController.mainTest);


module.exports = routers;
