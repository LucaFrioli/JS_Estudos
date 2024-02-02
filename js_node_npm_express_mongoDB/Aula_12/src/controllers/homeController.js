exports.mainTest = (req, res) => {
    const data = { teste: 'estou sendo renderizado pelo servidor' };
    res.render('index', data);
}
