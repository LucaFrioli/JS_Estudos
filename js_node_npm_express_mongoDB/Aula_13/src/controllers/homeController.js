exports.indexDinamic = (req, res) => {
    const data = { teste: 'Olá estou sendo renderizado, e está dando tudo certo ! Hello World !' };
    res.render('index', data);
}
