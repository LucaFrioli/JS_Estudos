/**
 * This function recives the body and an object with the expected keys of this body
 * @param {{}} [body] - body of the request
 * @param {string[]} [expectedKeys] - array whith the names of expected Keys in a body of the request
 */
const verifyBodyKeys = (body, expectedKeys) => {
	const keys = Object.keys(body);
	// eslint-disable-next-line prefer-const
	for (let key of keys) {
		// eslint-disable-next-line no-prototype-builtins
		if (
			!expectedKeys.includes(key) ||
			keys.length !== expectedKeys.length
		) {
			return false;
		}
	}
	return true;
};

module.exports = verifyBodyKeys;
