const path = require('path');
const express = require('express');
const routes = express.Router();

//área para chamada de controladores
const homeController = require(path.resolve(__dirname, 'src', 'controllers', 'homeController.js'));
//


//gerenciamento de rotas :
routes.get('/', homeController.indexRender);
routes.post('/', homeController.indexPostTest);

// exeplo de funcionamento de middleware em uma unica rota
// para apreciar tudo ele vá em homeController e tire o comentário de req.session na rota home e tire o comentário da rota testedeMiddleware
// routes.get('/', homeController.testedeMiddleware, homeController.indexRender, (req, res) => {
//     console.log('continuo aqui com a sessão de ' + req.session.nome);
// });

module.exports = routes
