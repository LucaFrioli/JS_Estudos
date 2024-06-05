const data = { title : 'login'}

exports.index = (req, res) => {
	res.render('loginPage', data);
};
