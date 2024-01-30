exports.homePage = (req, res) => {
    res.send(`
        <form action="/" method="post">
        Nome do cliente : <input type="text" name="clientName" id="clientName">
        Outro campo : <input type="text" name="otherField" id="otherField">
        <button>Cadastrar</button>
        </form>
        <br>
        <a href="http://localhost:3000/testes/123/Justino/?facebookprofile=Ol%C3%A1&key1=value1&key2=value2&key3=value3">Testar req.query e req.param</a>
    `);
}

exports.treatPost = (req, res) => {
    console.log(req.body);
    res.send(`
    Valores recebidos por campo : <br>
    clientName : ${req.body.clientName}<br>
    otherField : ${req.body.otherField}<br>
    `);
};

