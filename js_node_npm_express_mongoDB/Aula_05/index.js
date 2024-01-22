const fs = require('fs').promises; //utilizamos o .promises para sanar a assincronicidade existente no fs.read funções assincronas
const path = require('path');

// fs.readdir(path.resolve(__dirname))//readdir irá retornar todos os arquivos do diretório de busca, utilizamos o path para recuperar de maneir adinâmica e segura os caminhos requeridos
//     .then(files => console.log(files))//lista os arquivos
//     .catch(e => console.log(e));

//podemos cria ruma funçpão e utilizar asyn await para demonstrar os arquivos

async function readDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let element of files) {

        const fileFullPath = path.resolve(rootDir, element);
        const stats = await fs.stat(fileFullPath);
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readDir(fileFullPath);
            continue;
        }


        //podemos relizar pesquisa de arquivos ao longo de  nossa pasta :
        // if (!/\.css$/g.test(fileFullPath)) continue;
        // if (!/\.html$/g.test(fileFullPath)) continue;
        // if (!/\.js$/g.test(fileFullPath)) continue;
        // if (!/\.md$/g.test(fileFullPath)) continue;
        // if (!/\.json$/g.test(fileFullPath)) continue;
        // if (!/\.txt$/g.test(fileFullPath)) continue;
        console.log(fileFullPath);
    };
}

const relactive = path.resolve(__dirname, '..', '..');
readDir(relactive);



