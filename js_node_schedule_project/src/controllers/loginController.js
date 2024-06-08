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
	data.title = 'Cadastro';
	//  {title}
	const dataToSend = { ...req.body, ...data };
	res.render('register', dataToSend);
};

exports.registerReceived = async (req, res) => {
	try {
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

		req.flash('success','Cadastro realizado com sucesso');
		return res.redirect('/login');
	} catch (e) {
		console.log(e);
		return res.render('error', { title: '404' });
	}
};
