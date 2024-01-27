const express = require('express');
const app = express();

//CRUD -> create, read, update, delete
//metodos-> post   get    put    delete

//iremos falar apenas do metodo GET no momento

app.get('/', (request, response) => {//o trabalho da internet é baseado em requisições e respostas client faz requisições, o server manda respostas(client-> request, server-> response);
    response.send('<h1>hello world!</h1>');//resposta.envia(conteúdo);
});

app.get('/contato', (req, resp) => {
    resp.send('<h1>Obrigado por entrar em contato conosco!</h1>');
})

//o servidor deve ouvir as requisições de portas do computador, no caso sempre tentamos utilizar portas não tão utilizadas

const PORT = 3000;
app.listen(PORT, () => {//app ouça a Porta (PORT)
    console.log(`Acessar por :  http://localhost:${PORT}`)
    console.log(`servidor executando na porta ${PORT}`);
});
