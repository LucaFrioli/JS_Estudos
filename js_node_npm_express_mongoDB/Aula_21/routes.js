const path = require('path');
const express = require('express');
const routes = express.Router();

// chamando controllers
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));


routes.get('/', homeController.renderIndex);
routes.post('/', homeController.renderIndexPosted);

module.exports = routes;
