const fs = require('fs').promises;
const path = require('path');
const rootDirPath = path.resolve(__dirname, '..', 'rootDir.js');
const readFilePath = path.resolve(__dirname, 'readFile.js');
const rootDir = require(rootDirPath);
const readFile = require(readFilePath);

module.exports = (origenFile, destinyFile, origenPath = rootDir, destinyPath = rootDir) => {
    destinyPath = path.join(destinyPath, destinyFile);
    async function readData() {
        try {
            const existDirectory = checkDirectoryExistence(origenPath);
            if (existDirectory) {
                const data = await readFile(origenFile, origenPath);
                // inserir informações
            }else{
                //criar idretório e inserir informações
            }
        } catch (e) {

        }
    }
}

async function checkDirectoryExistence(pathToDirectory) {
    try {
        await fs.access(pathToDirectory);
        console.log(`O diretório em ${pathToDirectory} existe.`);
        return true
    } catch (error) {
        console.log(`O diretório em ${pathToDirectory} não existe.`);
        return false;
    }
}
