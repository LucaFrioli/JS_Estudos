const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({//esquema de organização da estrutura dos dados
    title: { type: String, required: true },
    subTitle: String,
    words: Number
});

const HomeModule = mongoose.model('Home', HomeSchema);//criando modelo. O modelo é uma representação que interage diretamente com a coleção no banco de dados MongoDB. Ele fornece métodos para realizar operações como inserção, consulta, atualização e exclusão.

class Home {
    // validação de dados e lógicas para inserção e recuperação de dados de um BD
}

module.exports = Home;
