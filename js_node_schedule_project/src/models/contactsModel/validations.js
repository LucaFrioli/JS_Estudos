const { resolve } = require('node:path');
const validator = require('validator');
const { warnAndStoreErrors } = require(
	// '../services/logInterface'
	resolve(__dirname, '..', 'services', 'logInterface.js')
);

/**
 * Function to verify if param is an array
 * @param {any} paramArray
 * @returns {Boolean}
 */
function verifyIfParamIsaArray(paramArray) {
	if (!Array.isArray(paramArray)) {
		// posteriormente adicionar o logger em mode debug para está linha
		console.log('O parâmetro passado não é um array');
		return false;
	}
	return true;
}

// Este objeto é só um assitente para montar a frase que deverá aparecer no stacktrace refernete a validação, assim reduzindo a quantidade de escrita em outras validações de valor de chave e array de entrda
const textAssitent = {
	keyTeamplate: (keyValueDisplay) => {
		return `é do tipo ${typeof keyValueDisplay} com o seguinte conteúdo :
		\n conteúdo = ${keyValueDisplay}`;
	},
	/**
	 * Creates text that will be reused multiple times
	 * @param {boolean} [arrVerificationResult]
	 */
	arrTeamplate: (arrDisplay, arrVerificationResult) => {
		return `é do tipo ${typeof arrDisplay} sendo o resultado de verificação de array ${arrVerificationResult} e o seguinte conteúdo :
		\n conteúdo = ${arrDisplay}`;
	}
};

/**
 * Cleans and maintains strings only
 * @param {{}} body
 * @returns {body<{modified}>}
 */
function cleanData(body) {
	for (const key in body) {
		if (typeof body[key] !== 'string') {
			body[key] = '';
		}
	}
	return body;
}

/**
 * Verify if the body of te request has a key empty
 * @param {{}} body
 * @param {string[]} [error]
 */
function isEmpty(body, error) {
	// eslint-disable-next-line prefer-const
	for (const key in body) {
		if (body[key] === '') {
			error.push('Todos os campos devem ser preenchidos !');
			break;
		}
	}
}

/**
 * Function to validate Email
 * @param {string} [valueOfEmailKey]
 * @param {string[]} [error]
 */
function fieldIsEmail(valueOfEmailKey, error) {
	try {
		const arrVerification = verifyIfParamIsaArray(error);

		if (!arrVerification || typeof valueOfEmailKey !== 'string') {
			throw new Error(
				`Os parâmetros devem ser em sequencia os seguintes :
				\n#### valueOfEmailKey:string, error:string[] ####
				\nPorém os que forma passados são os seguintes :
				\nemailValueKey : ${textAssitent.keyTeamplate(valueOfEmailKey)}
				\nerror : ${textAssitent.arrTeamplate(error, arrVerification)}`
			);
		}

		if (!validator.isEmail(valueOfEmailKey)) error.push('Email é inválido');
	} catch (e) {
		warnAndStoreErrors(e);
	}
	// eslint-disable-next-line no-useless-return
	return;
}

/**
 *	Function to validate a phone number
 * @param {string} [valueOfPhoneNumberKey]
 * @param {string[]} [error]
 */
function fieldIsPhoneNumber(valueOfPhoneNumberKey, error) {
	try {
		const arrVerification = verifyIfParamIsaArray(error);

		if (!arrVerification || typeof valueOfPhoneNumberKey !== 'string') {
			throw new Error(
				`Os parâmetros devem ser em sequencia os seguintes :
				\n#### valueOfPhoneNumberKey:string, error:string[] ####
				\nPorém os que forma passados são os seguintes :
				\nvalueOfPhoneNumberKey : ${textAssitent.keyTeamplate(valueOfPhoneNumberKey)}
				\nerror : ${textAssitent.arrTeamplate(error, arrVerification)}`
			);
		}

		if (!validator.isMobilePhone(valueOfPhoneNumberKey))
			error.push('Numero de telefone-celular é inválido');
	} catch (e) {
		warnAndStoreErrors(e);
	}

	// eslint-disable-next-line no-useless-return
	return;
}

module.exports = { cleanData, fieldIsEmail, fieldIsPhoneNumber, isEmpty };
