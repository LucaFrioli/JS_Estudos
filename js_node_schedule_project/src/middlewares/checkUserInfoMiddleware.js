exports.checkUserIsLogged = (req, res, next) => {
	if (!req.session.user) {
		console.log('redirecionando usuário');
		res.redirect('/');
	}
	next();
};
