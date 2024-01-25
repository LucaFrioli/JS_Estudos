const fs = require('fs').promises;
const path = require('path');
const srcDirPath = path.resolve(__dirname, 'rootDir.js');
const rootDir = require(srcDirPath);

module.exports = async (fileName, filePath = rootDir) => {
    if (fileName !== null) filePath = path.join(filePath, fileName);
    try {
        await fs.unlink(filePath);
        console.log(`${fileName || filePath} foi apagado com sucesso`);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}
