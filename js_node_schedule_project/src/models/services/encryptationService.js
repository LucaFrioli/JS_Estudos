const bcrypt = require('bcryptjs');

const genHash = (password) => {
	const salt = bcrypt.genSaltSync();
	const hash = bcrypt.hashSync(password, salt);
	return hash;
};

const compareHashedPasswords = (bodyPass, userPass) => {
	return !bcrypt.compareSync(bodyPass, userPass);
};

module.exports = { genHash, compareHashedPasswords };
