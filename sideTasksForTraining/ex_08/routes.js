const { resolve, join } = require('path');
const express = require('express');
const routes = express.Router();

const controllersPage = join(__dirname, 'src', 'controllers');

// calling controllers modules
const indexController = require(resolve(controllersPage, 'homeController.js'));
const productsController = require(
	resolve(controllersPage, 'productsController.js')
);
const aboutController = require(resolve(controllersPage, 'aboutController.js'));
const error404Page = require(resolve(controllersPage, 'errorsController.js'));

// index routes
routes.get('/', indexController.index);

// products routes
routes.get('/products', productsController.productsInit);
/* obs : lembrar que sempore que for trabalhar com subrotas, é importante que
as sub rotas referentes a querys estejam antes de sub rotas que envolvem params */
routes.get('/products/search', productsController.getByProductCategory);
routes.get('/products/:id', productsController.getProductById);

// abaut routes
routes.get('/about', aboutController.aboutInit);

// error routes
routes.get('/404Error', error404Page.render404);

module.exports = routes;
