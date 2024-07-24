exports.checkUserIsLogged = (req, res, next) => {
	if (!req.session.user) {
		req.flash('errors', 'Faça login antes de continuar !');
		// É importante realizar um salvamento como este por medidas de segurança que dados não serão perdidos caso hajam erros de redirecionamento e afins.
		req.session.save(() => {
			res.redirect('/login');
		});
		return;
	}
	next();
};
