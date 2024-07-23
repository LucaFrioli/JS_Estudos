// const mainData = { title: 'Add Contact' };

exports.index = (req, res) => {
	res.send('Estou vindo da rota get : /contact/new')
	// res.render('createContact', { ...mainData, flag: 'create' });
};
