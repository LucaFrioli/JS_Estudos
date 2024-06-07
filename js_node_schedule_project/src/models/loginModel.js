const mongoose = require('mongoose');
const validator = require('validator');

const loginSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', loginSchema);

class LoginService {
	constructor(body) {
		this.Model = LoginModel;
		this.body = body;
		this.errors = [];
		this.user = null;
	}

	async register() {
		this.validateFields();
		console.log(this.body);
		if (this.errors.length > 0) {
			console.log('Erros capturados : ', this.errors);
			return;
		}
		try {
			this.user = await this.Model.create(this.body);
		} catch (e) {
			console.log('Erro ao tentar salvar dado dentro do db : \n', e);
		}
	}

	validateFields() {
		// validaremos os campos :
		// tudo que estiver dentro do body precisa ser uma string
		this.cleanUp();
		console.log(this.body);

		// o email precisa ser valido e a senha precisa ter entre 7 e 50 caracteres e a senhas devem corresponder uma a outra
		if (!validator.isEmail(this.body.email)) {
			this.errors.push('E-mail inválido');
		}

		if (this.body.password.length < 7 && this.body.password > 50) {
			this.errors.push(
				'A senha não está com o tamanho correto requerido : 7 a 50 caracteres'
			);
		}

		if (!(this.body.password === this.body.confirmedPswd)) {
			this.errors.push('As senhas devem corresponder');
		}

		this.body = {
			email: this.body.email,
			password: this.body.password
		};
	}

	cleanUp() {
		for (const key in this.body) {
			// garantir que todos os dados que estão chegando são strings, caso não sejam troca por strings vazias
			if (typeof this.body[key] !== 'string') {
				this.body[key] = '';
			}
		}

		// normaliza os nomes das chaves para que seja mais fácil de compreender o que está acontecendo
		this.body = {
			email: this.body.EmailRegister,
			password: this.body.PswdRegister,
			confirmedPswd: this.body.ConfirmPswdRegister
		};
	}
}

module.exports = LoginService;
