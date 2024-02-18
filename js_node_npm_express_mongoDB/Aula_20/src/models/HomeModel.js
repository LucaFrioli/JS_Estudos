const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
    title: { type: String, require: true },
    isbn: { type: Number, require: true },
    numPages: Number
});

const homeModel = mongoose.model('Book', homeSchema);

class Home {

};

module.exports = Home;
