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
	 * @param {string} contactId
	 * @returns {null || contact}
	 */
	async findContactById(contactId) {
		if (typeof contactId !== 'string') {
			// Utilizar logger para logar além desta menssagem a sessão do usuário a data e afins
			console.log('O id de usuário deve ser uma string !');
			return null;
		}
		try {
			this.contact = await this.model.findById(contactId);
			return this.contact;
		} catch (e) {
			this.error.push('Contato não encontrado !');
			return null;
		}
	}

	/**
	 * This method do a updating in a contact element of the data base, with the same id of the param
	 * @param {String} contactId
	 */
	async updateContact(contactId) {
		this.sanitizeAndValidateBody();
		if (this.error.length !== 0) {
			console.error(
				`Ocorreu algum erro ao tentar atualizar dados do contato ${this.body.name} ${this.body.lastname}.
				Os errros capturado são os seguintes :
				${this.error}`
			);
			return;
		}

		const verifyContactExistence = this.findContactById(contactId);
		if (!verifyContactExistence) {
			console.error('Contato não encontrado na base de dados');
			throw new Error(
				'Este contato não foi encontrado dentro da base de daos, por gentileza passe um id válido.'
			);
		}

		this.contact = await this.model.findByIdAndUpdate(contactId, this.body, {
			new: true
		});
		return this.contact;
	}

	/**
	 * This method will be to delete an contact with the passed id
	 * @param {String} contactId
	 */
	async deleteContact(contactId){
		if(typeof contactId !== 'string'){
			console.error('O id de usuário deve ser uma string !');
			throw new Error('Error 500 :  id de recebimento deve ser uma string verifique o prâmetro passado');
		}

		await this.model.findByIdAndDelete(contactId);
	}
}

module.exports = ContactService;
