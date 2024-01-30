const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Aplicativo rodando na Porta : ${PORT}`);
    console.log(`Acesse utilizando este link :  http://localhost:${PORT}`);
});
