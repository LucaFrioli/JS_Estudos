const data = { teste: 'de Teste', name: '' };

const indexRender = (req, res/*, next*/) => {
    // console.log(`respondendo o ${req.session.nome} e a sessão continua salva`);
    // console.log();
    res.render('index', data);
    //next();
}

const indexPostTest = (req, res) => {
    const dataResponse = req.body
    const dataRendering = { ...data, ...dataResponse };
    res.render('index', dataRendering);
}


// function testedeMiddleware(req, res, next) {//um midlleware é uma função que será executada no meio da requisição, então ela recebe um parametro next alem de requisição e resposta, indicando que é para utilizar umais uma função dentro da rota e não parar aqui
//     req.session = { nome: 'José', sobrenome: 'Airton' };
//     console.log()
//     console.log('passei no seu middleware e salvei a sessão de '+req.session.nome);
//     console.log();
//     next();
// }

module.exports = {
    indexRender,
    indexPostTest,
    //testedeMiddleware
}
