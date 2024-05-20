const path = require('path');
const rootDirPath = path.resolve(__dirname, 'rootDir.js');
const copyFilePath = path.resolve(__dirname, 'copyFile.js');
const removeFilePath = path.resolve(__dirname, 'removeFile.js');
const rootDir = require(rootDirPath);
const copyFile = require(copyFilePath);
const removeFile = require(removeFilePath);

module.exports = async (origenFile, destinyFile, origenPath = rootDir, destinyPath = rootDir) => {
    await copyFile(origenFile, destinyFile, origenPath, destinyPath);
    await removeFile(origenFile, origenPath);
    console.log(`Arquivo ${origenFile} movido com sucesso para ${path.join(destinyPath, destinyFile)}`);
}
