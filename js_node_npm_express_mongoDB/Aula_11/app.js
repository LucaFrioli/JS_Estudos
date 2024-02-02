const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
    console.log(`Abra o link : http://localhost:${port}`);
});
