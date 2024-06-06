exports.csrfCheckErr = (err, req, res, next) => {
	if (err) {
		return res.render('error', { title: '404' });
	} else {
		next();
	}
};

exports.csrfMidd = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken();
	next();
};
