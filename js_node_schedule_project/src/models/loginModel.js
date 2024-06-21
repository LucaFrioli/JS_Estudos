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

	async login() {
		// realiza a validação dos campos, utilizando os parâmetros idealizados no projeto, e filtrando o body da requisição
		this.validateFields();
		if (this.errors.length > 0) {
			console.log('Erros capturados : ', this.errors);
			return;
		}

		try {
			// busca na base de dados pelo email que está no body, o retorno é o objeto do user ou null
			this.user = await this.Model.findOne({ email: this.body.email });

			// averigua se o usuário exite na base de dados caso sim prossegue para averiguação de senha
			if (this.user) {
				// averigua se as senhas correspondem na base de dados
				if (
					!bcrypt.compareSync(this.body.password, this.user.password)
				) {
					this.errors.push('Senha Inválida');
					this.user = null;
					// eslint-disable-next-line no-useless-return
					return;
				}
			} else {
				this.errors.push('Usuário ou senha Inválidos');
				// eslint-disable-next-line no-useless-return
				return;
			}
		} catch (e) {
			this.errors.push('Erro Interno');
		}
	}

	async register() {
		// realiza a validação dos campos, utilizando os parâmetros idealizados no projeto
		this.validateFields();

		// realiza a verificação de usuário já cadastrado
		await this.alreadyRegisteredUser();

		// caso hajam erros o cadatro é cancelado
		if (this.errors.length > 0) {
			console.log('Erros capturados ao cadastrar : ', this.errors);
			return;
		}

		// realiza o hashing da senha para que a sua string não seja salva lisa na base de dados
		const salt = bcrypt.genSaltSync();
		this.body.password = bcrypt.hashSync(this.body.password, salt);

		// erro será capturado no controller
		this.user = await this.Model.create(this.body);
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

		if (this.body.confirmedPswd !== null) {
			if (!(this.body.password === this.body.confirmedPswd)) {
				this.errors.push('As senhas devem corresponder');
			}
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

		// normaliza os nomes das chaves para que seja mais fácil de compreender o que está acontecendo além de realizar uma filtragem permitindo que o atributo body possa ser utilizado em ambos os cenários, de cadastro e de login
		this.body = {
			email: this.body.Email,
			password: this.body.Pswd,
			confirmedPswd: this.body.ConfirmPswd || null
		};
	}

	async alreadyRegisteredUser() {
		// função para averigura a existência de um email na base de dados e adicionar uma flag  de erro no atributo erros
		// busca na base de dados pelo email que está no body, o retorno é o objeto do user ou null
		const user = await this.Model.findOne({ email: this.body.email });
		if (user) this.errors.push('Email já cadatrado.');
	}
}

module.exports = LoginService;
