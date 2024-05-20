const fs = require('fs').promises;


module.exports = async (pathing) => {
    try {
        const list = await fs.readdir(pathing, { recursive: true, withFileTypes: true });
        for (let content of list) {
            console.log(`${content.name} ${content.isFile() ? 'é um arquivo' : 'é um diretório'} , e está no seguinte caminho : ${content.path} \n\n`);
        }
    } catch (e) {
        console.log(e);
    }
}
