const path = require('path')
const HomeModel = require(path.resolve(__dirname, '..', 'models', 'HomeModel.js'));

exports.renderIndex = (req, res) => {
    res.render('index', {
        name: '<strong>Dagoberto</strong>',
        emails: ['teste@hotmail.com', 'teste2@outlook.com']
    })
}
