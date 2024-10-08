// este arquivo será responsável por conter as validações de campos necessárias

import validator from 'validator';

const verifyIsEmail = (email) => {
	return validator.isEmail(email);
};

/**
 * As senhas por padrão devem conter de 7 a 30 caracteres, aos quais deve pelo menos
 * ter uma letra maíuscula, um número e um Carctere especial {# | ! | ? | @}
 */
const verifyPassword = (password) => {
	const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#!?@]).{7,30}$/;
	return regex.test(password);
};

const verifyFieldIsEqual = (password, confirmPassword) => {
	return password === confirmPassword;
};

const verifyIsPhoneNumber = (phoneNumber) => {
	return validator.isMobilePhone(phoneNumber);
};

const verifyIsString = (value) =>{
	return typeof value === 'string'
}

export {
	verifyIsEmail,
	verifyPassword,
	verifyFieldIsEqual,
	verifyIsPhoneNumber,
	verifyIsString
};
