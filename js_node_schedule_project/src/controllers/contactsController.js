const { resolve } = require('node:path');

// './validations/reviewBody'
const reviewBody = require(resolve(__dirname, 'validations', 'reviewBody'));
// '../models/contactsModel/main'
const ContactService = require(
	resolve(__dirname, '..', 'models', 'contactsModel', 'main')
);

// Objeto contendo a sinformações básicas para ser injetado na view contactManagement
const mainData = {
	title: '',
	flag: '',
	textReference: ''
};

exports.index = (req, res) => {
	const renderingObject = { ...mainData };
	renderingObject.title = 'Add Contact';
	renderingObject.flag = 'create';
	renderingObject.textReference = 'Criar novo contato';
	res.render('contactManagement', renderingObject);
};

exports.createContact = async (req, res) => {
	// the expected is a object than represent a expected keys of the body in this request
	const expected = ['name', 'lastname', 'number', 'email', '_csrf'];
	const body = req.body;

	if (reviewBody(body, expected)) {
		try {
			const service = new ContactService(body);
			await service.createContact();

			// caso forem detectados erros ocorrerá um redirecionamento para a própria página de cadastro
			if (service.error.length > 0) {
				req.flash('errors', service.error);
				req.session.save(() => {
					return res.redirect('back');
				});
				return;
			}

			req.flash(
				'success',
				'Novo contato cadastrado na agenda com sucesso !'
			);
			return res.redirect('/home');
		} catch (e) {
			// após acriação do módulo de logs salvar em um arquivo de log
			console.log(
				'Erro ao tentar criar novo usuário : ' +
					e +
					'\n\nEste erro ocorreu dentro da sessão do usuário : ' +
					req.session.user
			);
			return res.render('error', { title: '404' });
		}
	} else {
		// Após adicionar o sistema de log este log deverá ser um log de debuggin
		console.log(`
			Foi recebido um body da requisição diferente do esperado, se esperava as seguintes chaves :
			\n ${expected}
			\nPorém foram recebidas as seguintes chaves :
			\n ${Object.keys(body)}
		`);
		return res.render('error', { title: '404' });
	}
};

exports.editPage = async (req, res) => {
	// recupera o id do usuário passado no parâmetro
	const id = req.params.id;
	if (!id) return res.render('error', { title: '404' });

	try {
		const service = new ContactService();
		const contact = await service.findContactById(id);

		// verifica se o parametro id foi recebido e corresponde a um colntato existente, caso não redireciona para a página de erro;
		if (!contact) {
			res.render('error', { title: '404' });
		}

		// defing de params to render the page
		const renderingObject = { ...mainData };
		renderingObject.title = 'EditContact';
		renderingObject.flag = `update/${id}`;
		renderingObject.textReference = `Editar Contato`;
		renderingObject.contactInfo = contact;

		res.render('contactManagement', renderingObject);
	} catch (e) {
		console.log(
			'500 : erro ao tentar encontrar usuário na base de dados\n',
			e
		);
		res.render('error', { title: '404' });
	}
};

exports.updateContact = async (req, res) => {
	const id = req.params.id;
	if (!id) res.render('error', { title: '404' });

	try {
		const service = new ContactService(req.body);
		await service.updateContact(id);

		if (service.error.length !== 0) {
			req.flash('errors', service.error);
			req.session.save(() => {
				return res.redirect('back');
			});
			return;
		}

		req.flash('success', 'Contato atualizado com sucesso');
		return res.redirect('/home');
	} catch (e) {
		console.log(e);
		res.render('error', { title: '404' });
	}
};

exports.deleteContact = async (req, res) => {
	const id = req.params.id;
	if (!id) res.render('error', { title: '404' });

	try {
		const service = new ContactService(req.body);
		await service.deleteContact(id);

		req.flash('success', 'Contato excluido com sucesso');
		return res.redirect('back');
	} catch (e) {
		console.log(e);
		res.render('error', { title: '404' });
	}
};
