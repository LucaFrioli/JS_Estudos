const path = require('path');//para resolver os caminhos de forma dinâmica e  evitar erros ao fazer o deploy na aplicação
const express = require('express');
const app = express();//inicia o express

const routes = require(path.resolve(__dirname, 'routes.js'));//chama o roteador na aplicação
const port = 3000;//porta em que o servidor estará rodando localmente

app.use(express.urlencoded({ extended: true }));//recebe dados de formulários html permitindo que dados mais complexos sejam analizados, apartir da configuração extended : true
app.use(express.static(path.resolve(__dirname, 'public')));//habilita o uso de páginas estáticas pelo servidor permitindo assim eventuais caches em client side poupando o servidor
app.use(routes);//define que a o servidor deve usar o roteador de rotas

app.set('views', path.resolve(__dirname, 'src', 'views'));//define em qual pasta estarão as views para uso de páginas dinâmicas
app.set('view engine', 'ejs');//define qual tipo de engine será utilizada para renderização dos arquivos

app.listen(port, () => { //inicia o servidor
    console.log(`Aplicativo rodando na porta ${port}`);
    console.log(`Acesse : http://localhost:${port}`);
});
