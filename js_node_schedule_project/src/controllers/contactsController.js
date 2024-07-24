const mainData = {
	title: 'Add Contact',
	flag: 'create',
	textReference: 'Criar novo contato'
};

exports.index = (req, res) => {
	res.render('contactManagement', { ...mainData });
};
