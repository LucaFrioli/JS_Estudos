const fs = require('fs').promises;

module.exports = (path) => fs.readFile(path, 'utf-8'); //aqui hà o retorno de uma promise
