// este arquivo será responsável por conter as validações de campos necessárias

import validator from 'validator';

function verifyIsEmail(email) {
	return validator.isEmail(email);
}

export { verifyIsEmail };
