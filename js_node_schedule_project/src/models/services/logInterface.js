require('dotenv').config();

/**
 * Recive error of the catch scope and redirect or handling the errors using the log system,
 * for debuggin and posterior deployed application;
 * @param {Error} [e]
 * @param {Number} typeError
 */
function warnAndStoreErrors(e, typeError = 500) {
	if (
		process.env.PRODUCTION.toLowerCase() !== 'y' ||
		process.env.PRODUCTION.toLowerCase() !== 'yes'
	) {
		// posteriormente adicionar loogger com winston ou o sistema de logger criado como demonstração, neste caso o projeto estar em modo de desenvolvimento, o logger só ocorrerá dentro do console, e arquivo local.
		console.error('Error ' + typeError + ' :\n' + e + '\n\n\n');
	} else {
		// Aqui será adicionado também em um logger, porém ele será gerando como arquivo e também salvo em um banco de dados utilizando winston  ou uitlizando o sitema de logger criado como demonstração. Não haverá o redirecionamento para consoles.
		console.error('Error ' + typeError + ' :\n' + e + '\n\n\n');
	}
}

module.exports = { warnAndStoreErrors };
