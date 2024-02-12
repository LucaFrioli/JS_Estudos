//importações de nativos e dependencias
const path = require('path');
const express = require('express');

//importação de controllerrs
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));

//criação de variaveis essenciais
const router = express.Router();

// gerenciando rotas :

//home
router.get('/', homeController.renderIndex);
router.post('/', homeController.renderIndex);// caso o formulario de teste for submetido ele só renderiza novamente a index para demo


module.exports = router;
