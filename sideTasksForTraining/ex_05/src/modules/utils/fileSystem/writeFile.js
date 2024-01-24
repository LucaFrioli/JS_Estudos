const fs = require('fs').promises;
const path = require('path');
const rootDir = require('../rootDir');

// Define o módulo que exporta uma função assíncrona
module.exports = async (fileName, data, pathing = rootDir) => {
    // Converte os dados para uma string JSON
    data = JSON.stringify(data, null, 2);
    pathing = path.join(pathing, fileName);
    try {
        // Utiliza a função writeFile do módulo 'fs' para escrever no arquivo
        // O conteúdo do arquivo é a string JSON seguida por uma quebra de linha
        await fs.writeFile(pathing, data, { flag: 'a' });

        // Log para indicar que a operação foi bem-sucedida
        console.log(`O arquivo ${fileName} foi escrito com sucesso`);

        // Retorna true para indicar sucesso na escrita
        return true;
    } catch (e) {
        // Em caso de erro, loga o erro e retorna false
        console.log(e);
        return false;
    }
}
