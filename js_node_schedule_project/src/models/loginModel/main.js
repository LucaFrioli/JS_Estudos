const { resolve } = require('node:path');
const mongoose = require('mongoose');
const { mainSchema } = require(resolve(__dirname, 'schema.js'));
const validations = require('./validations');

const ContactModel = mongoose.model('contacts', mainSchema);

class LoginService {
	constructor(body) {
		this.Model = ContactModel;
		this.body = body;
		this.errors = [];
		this.user = null;
	}

	vlidate() {
		validations.cleanUp(this.body);
	}
}

module.exports = LoginService;
