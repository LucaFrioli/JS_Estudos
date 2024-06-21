exports.checkUserIsLogged = (req, res, next) => {
	if (!req.session.user) {
		req.flash('errors', 'Faça login antes de continuar !');
		res.redirect('/login');
	}
	next();
};
