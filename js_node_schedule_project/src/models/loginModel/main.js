const { resolve } = require('node:path');
const mongoose = require('mongoose');
const { mainSchema } = require(resolve(__dirname, 'schema.js'));
const validations = require('./validations');
const encrypt = require('../services/encryptationService');

const ContactModel = mongoose.model('contacts', mainSchema);

class LoginService {
	constructor(body) {
		this.Model = ContactModel;
		this.body = body;
		this.errors = [];
		this.user = null;
	}

	validate(isFullBody = false) {
		validations.cleanUp(this.body);
		validations.verifyEmail(this.body.email, this.errors);
		validations.verifyPassword(this.body.password, this.errors);
		// para ser considerada uma data válida deverá estar em formato ISO
		if (!validations.verifyIsADate(this.body.creationDate) && isFullBody)
			this.errors.push('Ops, ocorreu um erro no servidor !');
		if (!validations.verifyIfIsArray(this.body.logins) && isFullBody)
			this.errors.push('Ops, não foi possível registrar seu login !');
	}

	async register() {
		this.validate(true);
		this.verifyUserExistence();
		if (this.errors.length !== 0) {
			console.log(
				'Erros capturados ao tentar cadastrar usuário. Erros capturados :',
				this.errors,
				'\nAqui está o body limpo :'
			);
			console.table(this.body);
			return;
		}

		if (this.body.logins.length > 0) {
			console.log(
				'O usuário está com logins já cadastrados, e isso não deveria acontecer por ser seu primeiro registro !'
			);
			throw new Error(500).message(
				'This user should never have logged in. But the logins are not empty',
				this.body.logins
			);
		}

		this.body.password = encrypt.genHash(this.body.password);
		this.user = await this.Model.create(this.body);
	}

	async verifyUserExistence() {
		// função para averigura a existência de um email na base de dados e adicionar uma flag  de erro no atributo erros
		// busca na base de dados pelo email que está no body, o retorno é o objeto do user ou null
		const user = await this.Model.findOne({ email: this.body.email });
		if (user) this.errors.push('Usuário já cadastrado.');
	}
}

module.exports = LoginService;
