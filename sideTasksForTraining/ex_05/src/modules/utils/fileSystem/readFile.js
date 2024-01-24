const fs = require('fs').promises;
const path = require('path');
const srcDir = require('../rootDir');

module.exports = async (fileName, pathing = srcDir) => {
    pathing = path.join(pathing, fileName);
    try {
        const promiseData = await fs.readFile(pathing, { encoding: 'utf-8' });
        const data = JSON.parse(promiseData);
        console.log(`Dados do arquivo ${fileName} recuperados com sucesso`);
        return data
    } catch (e) {
        console.error(e);
        return false;
    }
}
