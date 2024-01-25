const fs = require('fs').promises;
const path = require('path');
const rootDirPath = path.resolve(__dirname, 'rootDir.js');
const srcDir = require(rootDirPath);

module.exports = async (fileName, pathing = srcDir) => {
    pathing = path.join(pathing, fileName);
    try {
        const promiseData = await fs.readFile(pathing, { encoding: 'utf-8' });
        // Tenta analisar o conteúdo como JSON
        try {
            const jsonData = JSON.parse(promiseData);
            console.log(`Dados do arquivo ${fileName} recuperados com sucesso`);
            return jsonData;
        } catch (jsonError) {
            // Se houver um erro ao analisar como JSON, retorna o conteúdo como string
            console.warn(`O conteúdo do arquivo ${fileName} não é um JSON válido. Retornando como string.`);
            return promiseData;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}
