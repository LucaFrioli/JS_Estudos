const express = require('express');
const { fieldValidations } = require('./validations')

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/receive-data', (req, res) => {
    res.send(`<h1>Formulário de teste </h1><br>
    <p>este formulário deverá retornar um erro caso seja enviado um valor vazio, um valor nullo ou undefined</p>
    <form action="/receive-data" method="post">
    teste : <input type="text" name="teste" id="teste">
    <button>Enviar</button>
    </form>
    `);
})

app.post('/receive-data', (req, res) => {
    let responseApi;
    const bodyContent = req.body;
    console.log('Dados recebidos : ',bodyContent);
    const requiredAtributes = ['teste']
    const isValidFields = fieldValidations(bodyContent, requiredAtributes);

    if (isValidFields) {
        responseApi = { status: 'sucesso', response: 'Objeto recebido com sucesso' };
    } else {
        responseApi = { status: 'erro', response: "I'm a teapot" };
    }
    res.json(responseApi);
});

app.listen(PORT, () => {
    console.log(`Server running in Port :  ${PORT}`);
    console.log(`Access this link to view server : http://localhost:${PORT}/receive-data`);
});



