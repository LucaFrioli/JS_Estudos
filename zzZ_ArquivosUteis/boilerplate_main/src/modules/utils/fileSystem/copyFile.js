const fs = require('fs').promises;
const path = require('path');

const rootDirPath = path.resolve(__dirname, 'rootDir.js');
const readFilePath = path.resolve(__dirname, 'readFile.js');
const createDirectoryPath = path.resolve(__dirname, 'createDirectory.js');
const writeFilePath = path.resolve(__dirname, 'writeFile.js');
const rootDir = require(rootDirPath);
const readFile = require(readFilePath);
const createDirectory = require(createDirectoryPath);
const writeFile = require(writeFilePath);


module.exports = async (origenFile, destinyFile, origenPath = rootDir, destinyPath = rootDir) => {
    try {
        const existDirectory = await checkDirectoryExistence(destinyPath);///averigua se a pasta de destino existe
        const data = await readFile(origenFile, origenPath);//recupera as informações do arquivo de origem

        if (!existDirectory) {//caso ele não exista cria o diretório
            await createDirectory(destinyPath);
        }
        //criar idretório e inserir informações
        await writeFile(destinyFile, data, destinyPath);
    } catch (e) {
        console.error('Erro ao copiar arquivo : ', e);
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
