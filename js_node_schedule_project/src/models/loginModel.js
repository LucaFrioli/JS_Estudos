const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
		// realiza a validação dos campos, utilizando os parâmetros idealizados no projeto
		this.validateFields();

		// realiza a verificação de usuário já cadastrado
		await this.alreadyRegisteredUser();

		if (this.errors.length > 0) {
			console.log('Erros capturados : ', this.errors);
			return;
		}

		// realiza o hashing da senha para que a senha não seja salva lisa na base de dados
		const salt = bcrypt.genSaltSync();
		this.body.password = bcrypt.hashSync(this.body.password, salt);

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

		// normalização final do objeto para cadastra-lo
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

	async alreadyRegisteredUser() {
		// busca na base de dados pelo email que está no body, o retorno é o objeto do user ou null
		const user = await this.Model.findOne({ email: this.body.email });
		if (user) this.errors.push('Email já cadatrado.');
	}
}

module.exports = LoginService;
