const ContactService = require('../models/contactsModel/main');

exports.index = async (req, res) => {
	try {
		const constacts = await new ContactService().readAllContacts();
		res.render('home', { title: 'home', constacts });
	} catch (e) {
		// Após o término da contrução do módulo de logs iremos trocar o console, pelo módulo
		console.error('Error 500 : ' + e);
		res.render('error', { title: '404' });
	}
};
