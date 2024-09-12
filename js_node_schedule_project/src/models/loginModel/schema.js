const { Schema } = require('mongoose');
const versionSchemas = {
	mainSchema: new Schema({
		email: { type: String, required: true },
		password: { type: String, required: true },
		creationDate: { type: String, require: true },
		logins: { type: Array, require: true }
	}),
	v1: {
		adding: {
			creationDate: { type: String, require: true },
			logins: { type: Array, require: true }
		},
		remonving: []
	}
};

module.exports = versionSchemas;
