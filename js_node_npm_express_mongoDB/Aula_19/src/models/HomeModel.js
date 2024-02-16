const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    Titulo: { type: String, required: true },
    ISBN: { type: Number, required: true },
    Paginas: Number
})

const homeModel = mongoose.model('Book', homeSchema);

class Home {

}

module.exports = Home
