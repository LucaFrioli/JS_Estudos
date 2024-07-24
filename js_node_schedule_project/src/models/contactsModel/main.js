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

	sanitizeAndValidateBody() {
		validations.cleanData(this.body);
		
		console.log('Após a realização da sanitização o body é o seguinte :	\n');
		console.table(this.body);
		console.log(
			'\n\n\n-----------------------------------------------------------'
		);

		validations.fieldIsEmail(this.body.email, this.error);
		validations.fieldIsPhoneNumber(this.body.number, this.error);
		console.log(
			`Após as validações ocorrerem temos o seguinte body :
			\n${console.table(this.body)}
			\nTemos também os seguintes erros :
			\n${this.error}`
		);
	}
}

const teste = new ContactService({
	email: '@luca1@teste.com',
	number: '19996631705',
	name: 'teste',
	lastname: 'fulaninho de tals'
});
teste.sanitizeAndValidateBody();

module.exports = ContactService;
