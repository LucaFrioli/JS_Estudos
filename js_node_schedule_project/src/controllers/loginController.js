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
	// 	{ EmailRegister, PswdRegister, ConfirmPswdRegister, _csrf, title}
	const dataToSend = { ...req.body, ...data };
	res.render('loginPage', dataToSend);
};
