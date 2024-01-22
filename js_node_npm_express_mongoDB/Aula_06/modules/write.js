const fs = require('fs').promises;
module.exports = (path, data) => fs.writeFile(path, data, { flag: 'w' });
//a tag `w` apaga tudo de dentro do arquivo caso ele exista e escreve a menssagem, caso não exista ele cria um arquivo
// a tag `a`, ao invés de apagar, adiciona ao arquivo mais linhas caso ele exista, se não ela cria o arquivo


