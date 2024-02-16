//importação de nativos e dependencias
const path = require('path');

//importação de modelos
const HomeModel = require(path.resolve(__dirname, '..', 'models', 'HomeModel.js'));

//informações para injeção de informações
const data = { teste: 'estou sendo injetado pelo controller' };

exports.renderIndex = (req, res) => {
    req.flash('info', 'hello world!');
    req.flash('error', 'Erro disparado por um flash');
    req.flash('success', 'sucesso de recuperação de dados');
    console.log(req.session.user, req.flash('info'), req.flash('error'), req.flash('success'));
    res.render('index', data);
}
