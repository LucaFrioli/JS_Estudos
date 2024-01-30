exports.demoParamsAndQuery = (req, res) => {
    // /testes/123/justino // representam os parâmetros
    // justino/?facebookprofile=Olá&key1=value1&key2=value2&key3=value3 // após o "?" representa as querys
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
};
