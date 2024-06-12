exports.csrfCheckErr = (err, req, res, next) => {
	if (err) {
		console.log(err);
		return res.render('error', { title: '404' });
	} else {
		next();
	}
};

exports.csrfMidd = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken();
	next();
};

exports.errorsMidd = (req, res, next) => {
	res.locals.errors = req.flash('errors');
	res.locals.success = req.flash('success');
	res.locals.user = req.session.user;
	next();
};
