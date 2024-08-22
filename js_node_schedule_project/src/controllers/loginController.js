const { resolve } = require('node:path');
const LoginService = require(
	resolve(__dirname, '..', 'models', 'loginModel.js')
);

const data = { title: 'login' };

exports.index = (req, res) => {
	// {title}
	const dataToSend = { ...req.body, ...data };
	res.render('loginPage', dataToSend);
};

exports.register = (req, res) => {
	//  {title}
	const dataToSend = { ...req.body, ...data };
	dataToSend.title = 'Cadastro';
	res.render('register', dataToSend);
};

exports.registerReceived = async (req, res) => {
	try {
		// registrar o usuário ou retornanr um erro
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

		req.flash('success', 'Cadastro realizado com sucesso');
		return res.redirect('/login');
	} catch (e) {
		console.log(e);
		return res.render('error', { title: '404' });
	}
};

exports.login = async (req, res) => {
	try {
		const login = new LoginService(req.body);
		await login.login();

		// caso não for possível logar retornaremos a página de login
		if (login.errors.length > 0) {
			req.flash('errors', login.errors);
			req.session.save(() => {
				return res.redirect('back');
			});
			return;
		}

		req.flash('success', 'Você entrou no sistema.');
		req.session.user = login.user;
		return res.redirect('/home');
	} catch (e) {
		console.log(e);
		return res.redirect('/404Error');
	}
};

exports.logout = async (req, res) => {
	req.session.destroy();
	res.redirect('/');
};
