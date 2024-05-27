const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	sobrenome: { type: String, required: true },
	idade: { type: Number, required: true, min: 0 },
	dataNascimento: { type: Date, required: true }
});

const DemoModel = mongoose.model('Demo', demoSchema);

class DemoService {
	constructor() {
		this.Model = DemoModel;
	}

	async createPerson(pessoa) {
		const novaPessoa = new this.Model(pessoa);
		await novaPessoa.save();
		return novaPessoa;
	}

	async getAllPeapole() {
		const pessoas = await this.Model.find();
		return pessoas;
	}

	async searchPersonById(id) {
		const pessoa = await this.Model.findById(id);
		return pessoa;
	}

	async updatePerson(id, pessoaAtualizada) {
		await this.Model.findByIdAndUpdate(id, pessoaAtualizada);
	}

	async deletPerson(id) {
		await this.Model.findByIdAndDelete(id);
	}
}

module.exports = DemoService;
