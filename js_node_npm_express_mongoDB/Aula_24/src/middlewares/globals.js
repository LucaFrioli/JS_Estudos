exports.csrfCheckErr = (err, req, res, next) => {
	if (err && err.code === 'EBADCSRFTOKEN') {
		return res.render('404', { title: '404' });
	} else {
		next();
	}
};

exports.csrfMidd = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken();
	next();
};
