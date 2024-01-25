// desenvolver uma funcionalidade no diretório da aula, que crie todas as pastas das aulas se baseando no arquivo txt do diretório. o programa deve ler o arquivo txt, criar a quantidade de pastas baseadas na uantidade de ocorrencias do texto aula_ contido no importante.txt, em cad auma das pastas já será adicionado um README.MD com um titulo automático referente a aula do modulo
const path = require('path');
const createDirectory = require('./modules/utils/fileSystem/createDirectory');
const writeFile = require('./modules/utils/fileSystem/writeFile');
const readFile = require('./modules/utils/fileSystem/readFile');
const listContentDirectory = require('./modules/utils/fileSystem/listContentDirectory');
const removeFile = require('./modules/utils/fileSystem/removeFile');
const removeDirectory = require('./modules/utils/fileSystem/removeDirectory');
const copyFile = require('./modules/utils/fileSystem/copyFile');
const moveFile = require('./modules/utils/fileSystem/moveFile');

const projectFolder = path.resolve(__dirname, 'classes');
const origenFolder = path.resolve(__dirname, 'classes', 'teste');
const destinyFolder = path.resolve(__dirname, 'modules', 'utils', 'testeDeCopia');

const te_amoMeuAmor = { teste: 'te amo meu amor' }
const teamo_meu_fedor = { te: 'te_amo_meu_Fedor' }


// createDirectory(path.join(projectFolder, `teste2`));

// writeFile('te_amoMeuAmor.json', te_amoMeuAmor, path.join(projectFolder, 'teste'));
// writeFile('teamo_meu_fedor.json', teamo_meu_fedor, path.join(projectFolder, 'teste1'));
// writeFile('teste.json', teamo_meu_fedor, projectFolder);


// async function read() {
//     try {
//         const data = await readFile('te_amoMeuAmor.json', path.join(projectFolder, 'teste'));
//         console.log(data);
//     } catch (error) {
//         // Trate o erro se necessário
//         console.error('Erro na execução principal:', error.message);
//     }
// }

// read();

// listContentDirectory(projectFolder);

// setTimeout(() => {
//     removeFile('teste.json', projectFolder);
//     removeDirectory(path.join(projectFolder, 'teste1'));
// }, 10000);



// copyFile('te_amoMeuAmor.json', 'te_amoMeuAmorCopy.js', origenFolder, destinyFolder);

moveFile('te_amoMeuAmorCopy.js', 'te_amoMeuAmorCorreto.json', destinyFolder);
