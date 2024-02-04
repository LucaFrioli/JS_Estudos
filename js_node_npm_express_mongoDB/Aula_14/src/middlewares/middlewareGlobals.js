exports.myMiddlewareGlobal = (req, res, next) => { //para o uso de middlewares dentro do express jamais podemos esquecer do parâmetro next, ele representa que o caminho não para por aqui e deve se manter aberto e terminar uma requisição, caso não exista isso a página trava e carrega para sempre, não terminado a requisição;
    if (req.body.name) {
        console.log();
        console.log(`Vi que você postou ${req.body.name}`);
    }

    console.log()
    console.log('Passei no middleware global')
    console.log()

    next();
}

exports.otherMiddleware = (req, res, next) => {
    console.log('Exemplode de usso do otherMiddleware');
    next();
}
