const { resolve } = require('node:path');
const  LoginService  = require(
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

exports.registerReceived = (req, res) => {
	// eslint-disable-next-line no-unused-vars
	const login = new LoginService(req.body);
	login.register();
	// 	{ EmailRegister, PswdRegister, ConfirmPswdRegister, _csrf, title}
	const dataToSend = { ...req.body, ...data };
	res.render('loginPage', dataToSend);
};
