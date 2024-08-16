const { resolve } = require('node:path');
const mongoose = require('mongoose');
const { mainSchema } = require(resolve(__dirname, 'schema.js'));
const validations = require('./validations');

const ContactModel = mongoose.model('contacts', mainSchema);

class ContactService {
	constructor(reqBody) {
		this.model = ContactModel;
		this.body = reqBody;
		this.error = [];
		this.contact = null;
	}

	// método que define a sanitizaçõa e validação dos dados que estão chegando na aplicação
	sanitizeAndValidateBody() {
		validations.cleanData(this.body);
		validations.fieldIsEmail(this.body.email, this.error);
		validations.fieldIsPhoneNumber(this.body.number, this.error);
	}

	// método para verificar se já existe algum contato cadastrado com o mesmo nome;
	async alredyExistContact() {
		const contact = await this.model.findOne({
			name: this.body.name,
			lastname: this.body.lastname
		});
		if (contact) this.error.push('Este contato já existe');
	}

	// método que cuidará da criação de novos contatos
	async createContact() {
		this.sanitizeAndValidateBody();
		await this.alredyExistContact();

		if (this.error.length !== 0) {
			console.log(
				`Erros capturados ao tentar cadastrar novo contato : ${this.error}`
			);
			return;
		}

		this.contact = await this.model.create(this.body);
	}

	async findContactById(userId) {
		if (typeof userId !== 'string') {
			// Utilizar logger para logar além desta menssagem a sessão do usuário a data e afins
			console.log('O id de usuário deve ser uma string !');
			return null;
		}
		try {
			this.contact = await this.model.findById(userId);
			return this.contact;
		} catch (e) {
			this.error.push('Contato não encontrado !');
			return null;
		}
	}
}

module.exports = ContactService;
