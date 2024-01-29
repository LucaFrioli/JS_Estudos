const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));//esta linha serve para tratarmos valores de req.body para forms 

app.get('/', (req, res) => {
    res.send(`
        Para observar o req.body execute o formulário<br>
        <form action="/" method="post">
            Nome : <input type="text" name="name" id="name" require>
            <button>Enviar Formulário</button>
        </form><br>
        <a href ="http://localhost:3000/testes/teste123/?name=teste">Entre ná página de testes para ver req.params e req.query</a>
    `)//veja que a action foi mudada para URL de testes
});

app.get('/testes/:idUser?', (req, res) => {//o /:idUser? é um parâmetro de url o ? faz com que ele seja opcional, lembrando podemos adicionar mais paramtros basta adicionar uma /:NomeDoParametroOpcional?, lembre-se caso seja necessário um paramtro obrigatório o adicione sem ? e sempre como primeiro
    console.log(req.params, req.query);// para ver a query basta utilizar o seguinte link : http://localhost:3000/testes/teste123/?name=teste
    res.send(`Testes rodando aqui, observe o console do VSCode;
    <br>Os params são : ${req.params.idUser} ;
    <br>A query de name retornou : ${req.query.name} ;
    <br>Observe a URL: veja que a primeira barra mostra o req.params, já a segunda inicia com "?" e representa o req.query ;
    <br><a href ="http://localhost:3000/">Voltar</a>`);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Formulário enviado com sucesso:<br>
    Recebemos do input com name="name", o seguinte valor : ${req.body.name}<br>
    <a href ="http://localhost:3000/">Voltar</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse : http://localhost:${PORT}`);
})
