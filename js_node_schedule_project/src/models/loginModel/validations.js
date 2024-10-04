const { resolve } = require('node:path');
const validator = require('validator');
const { warnAndStoreErrors } = require(
	// '../services/logInterface'
	resolve(__dirname, '..', 'services', 'logInterface.js')
);

const errorTextAssistent = {
	typeVerify: (typeExpexted, content, paramName) =>
		`O tipo esperado do parâmetro ${paramName} é ${typeExpexted},
	\nporém chegou o campo com tipo ${typeof content}, e o seguinte conteúdo :
	\n ${content}`,
	arrayVerify: (paramName, content, arrayVerification) =>
		`O tipo esperado do parâmetro ${paramName} é para ser um array,
	\nporém o resultado do teste isArray foi ${arrayVerification}, e oconteúdo recebido no parametrô é :
	\n ${content}`
};

const verifyIfIsArray = (arr) => Array.isArray(arr);
const verifyIsADate = (date) => !isNaN(Date.parse(date));

const cleanUp = (body) => {
	for (const key in body) {
		const loginsArr = !verifyIfIsArray(body[key]) && key === 'logins';
		if (typeof body[key] !== 'string' || loginsArr) {
			body[key] = '';
		}
		if (!loginsArr) {
			body[key] = body[key].filter((el) => verifyIsADate(el));
		}
	}
};

const verifyEmail = (email, errorsArray) => {
	try {
		const isArray = verifyIfIsArray(errorsArray);
		if (typeof email !== 'string' || !isArray) {
			throw new Error(
				`Algo não está correto:
				\n${errorTextAssistent.typeVerify('string', email, 'email')}
				\n${errorTextAssistent.arrayVerify('errorsArray', errorsArray, isArray)}`
			);
		}
		if (!validator.isEmail(email)) {
			errorsArray.push('Email Inválido !');
		}
	} catch (e) {
		warnAndStoreErrors(e);
	}
};

const verifyPassword = (password, errorsArray) => {
	try {
		const isArray = verifyIfIsArray(errorsArray);
		if (typeof password !== 'string' || !isArray) {
			throw new Error(
				`Algo não está correto:
				\n${errorTextAssistent.typeVerify('string', password, 'password')}
				\n${errorTextAssistent.arrayVerify('errorsArray', errorsArray, isArray)}`
			);
		}
		const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#!?@]).{7,30}$/;
		if (!regex.test(password))
			errorsArray.push(
				'As senha deve conter de 7 a 30 caracteres, e pelo menos uma letra maíuscula, um número e um caractere especial'
			);
	} catch (e) {
		warnAndStoreErrors(e);
	}
};

const verifyExpectedBody = (body, expectedArrayNames = []) => {
	let flag = true;
	for (const key in body) {
		if (!flag) break;
		if (!expectedArrayNames.includes(key)) flag = false;
	}
	return flag;
};

module.exports = {
	cleanUp,
	verifyIfIsArray,
	verifyIsADate,
	verifyEmail,
	verifyPassword,
	verifyExpectedBody
};
