const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    title: String,
    test: Number,
    cpf: { required: true, String }
});

const homeModel = mongoose.model('test', homeSchema);

class HomeModel {

}

module.exports = HomeModel;
