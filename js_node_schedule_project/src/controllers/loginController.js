const { resolve } = require('node:path');
const LoginService = require(
	resolve(__dirname, '..', 'models', 'loginModel.js')
);

const data = { title: 'login' };

exports.index = (req, res) => {
	// {_csrf, title} ou {title}
	const dataToSend = { ...req.body, ...data };
	res.render('loginPage', dataToSend);
};

exports.register = (req, res) => {
	data.title = 'Cadastro';
	// {_csrf, title} ou {title}
	const dataToSend = { ...req.body, ...data };
	res.render('register', dataToSend);
};

exports.registerReceived = async (req, res) => {
	// registrar o usuário ou retornanr um erro
	// eslint-disable-next-line no-unused-vars
	const login = new LoginService(req.body);
	await login.register();

	// caso não for possível registrar o usuário retornaremos a página de cadastro
	if (login.errors.length > 0) {
		req.flash('errors', login.errors);
		req.session.save(() => {
			return res.redirect('back');
		});
		return;
	}

	// 	{ EmailRegister, PswdRegister, ConfirmPswdRegister, _csrf, title}
	const dataToSend = { ...req.body, ...data };
	res.render('loginPage', dataToSend);
};
