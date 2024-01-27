const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
        Nome : <input type="text" name="Nome" id="Nome">
        <button>Enviar formulário</button>
        </form>
    `);
});

app.post('/', (req, resp) => {
    resp.send('formulário enviado com sucesso')
});

app.get('/teste', (req, res) => {
    res.send('<h1>TEste está funcionando</h1>');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`);
    console.log(`Para acessar utilize o link: http://localhost:${port}`);
});
