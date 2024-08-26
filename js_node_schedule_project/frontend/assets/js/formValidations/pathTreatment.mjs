/**
 * Function to remove mongo id segments from url
 * @param {string} [pathWithId]
 * @returns {string | false}
 */
function clearIdForPath(pathWithId) {
	// turns the path into an array, filtering out possible whitespace
	const arrayOfSegments = pathWithId.split('/').filter((segment) => segment);
	const arrayToNewPath = [];
	let pathHasId = false;

	// iterates through each of the path segments and checks if it is a mongo id, if it is, it will not enter the path construction array and set true in the pathHasId tag;
	for (const segment of arrayOfSegments) {
		if (isMongoDBId(segment)) {
			pathHasId = true;
		}
		if (!isMongoDBId(segment)) {
			arrayToNewPath.push(segment);
		}
	}

	// returns the path without the id
	return arrayToNewPath.length !== 0 && pathHasId
		? '/' + arrayToNewPath.join('/')
		: false;
}

/**
 * Function to check if a string is a valid MongoDB ID
 * @param {string} segment
 * @returns {boolean}
 */
function isMongoDBId(segment) {
	// testa se o fragmento contem letras de a até f em maiusculas e minisculas ou números e contém 24 caracteres e retona true ou false
	return /^[a-fA-F0-9]{24}$/.test(segment);
}

export { clearIdForPath };
