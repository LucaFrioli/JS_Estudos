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
		validations.isEmpty(this.body, this.error);
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
			console.error(
				`Erros capturados ao tentar cadastrar novo contato : ${this.error}`
			);
			return;
		}

		this.contact = await this.model.create(this.body);
	}

	/**
	 * This method read all contacts in the data Collection and return them
	 * @returns {object[]}
	 */
	async readAllContacts() {
		const contacts = await this.model.find();
		return contacts;
	}

	/**
	 *	Método responsavel por encontrar usuários por id
	 * @param {string} userId
	 * @returns {null || contact}
	 */
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

	/**
	 * This method do a updating in a contact element of the data base, with the same id of the param
	 * @param {String} userId
	 */
	async updateContact(userId) {
		this.sanitizeAndValidateBody();
		if (this.error.length !== 0) {
			console.error(
				`Ocorreu algum erro ao tentar atualizar dados do contato ${this.body.name} ${this.body.lastname}.
				Os errros capturado são os seguintes :
				${this.error}`
			);
			return;
		}

		const verifyContactExistence = this.findContactById(userId);
		if (!verifyContactExistence) {
			console.error('Contato não encontrado na base de dados');
			throw new Error(
				'Este contato não foi encontrado dentro da base de daos, por gentileza passe um id válido.'
			);
		}

		this.contact = await this.model.findByIdAndUpdate(userId, this.body, {
			new: true
		});
		return this.contact;
	}
}

module.exports = ContactService;
