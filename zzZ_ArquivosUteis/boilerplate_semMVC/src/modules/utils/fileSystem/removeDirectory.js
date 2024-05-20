const path = require('path');
const fs = require('fs').promises;
const removeFilePath = path.resolve(__dirname, 'removeFile.js');
const removeFile = require(removeFilePath);

module.exports = async (directoryPath) => {
    try {
        const files = await fs.readdir(directoryPath);
        for (let file of files) {
            const filePath = path.join(directoryPath, file);
            const fileStats = await fs.stat(filePath);

            if (fileStats.isDirectory()) {
                await module.exports(filePath);
            } else {
                await removeFile(null, filePath);
            }
        }

        await fs.rmdir(directoryPath);
        console.log(`Diretório ${directoryPath} removido com sucesso`);
    } catch (e) {
        console.error(e);
    }
}
