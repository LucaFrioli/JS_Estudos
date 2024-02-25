exports.demo = (req, res, next) => {
    console.log('\nestou funcionando\n');
    if (req.body.clientname) {
        req.flash('sended', "A informação foi enviada com sucesso");
        console.log(`
        \n${req.flash('sended')}
        \nE ainda estou recebendo informações no caso : ${req.body.clientname}
        `);
    }
    next();
}

exports.csrfCheckErr = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    } else {
        next();
    }
}

exports.csrfMidd = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
