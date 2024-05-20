const fs = require('fs').promises;

module.exports = async (pathDirectory) => {
    let directory;
    try {
        directory = await fs.mkdir(pathDirectory, { recursive: false });
        console.log(`diretório "${pathDirectory}" criado com sucesso`);
    } catch (e) {
        console.log(e);
    }
}
