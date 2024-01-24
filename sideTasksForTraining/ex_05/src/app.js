// desenvolver uma funcionalidade no diretório da aula, que crie todas as pastas das aulas se baseando no arquivo txt do diretório. o programa deve ler o arquivo txt, criar a quantidade de pastas baseadas na uantidade de ocorrencias do texto aula_ contido no importante.txt, em cad auma das pastas já será adicionado um README.MD com um titulo automático referente a aula do modulo
const path = require('path');
// const createDirectory = require('./modules/utils/fileSystem/createDirectory');
// const writeFile = require('./modules/utils/fileSystem/writeFile');
// const readFile = require('./modules/utils/fileSystem/readFile');
// const listContentDirectory = require('./modules/utils/fileSystem/listContentDirectory');
// const removeFile = require('./modules/utils/fileSystem/removeFile');
// const removeDirectory = require('./modules/utils/fileSystem/removeDirectory');

const projectFolder = path.resolve(__dirname, 'classes');

const te_amoMeuAmor = { teste: 'te amo meu amor' }
const teamo_meu_fedor = { te: 'te_amo_meu_Fedor' }

// createDirectory(projectFolder);

// writeFile('te_amoMeuAmor.json', te_amoMeuAmor, projectFolder);


// async function read() {
//     try {
//         const data = await readFile('peapole.js', projectFolder);
//         console.log(data);
//     } catch (error) {
//         // Trate o erro se necessário
//         console.error('Erro na execução principal:', error.message);
//     }
// }

// read()

// listContentDirectory(projectFolder);

// removeFile('teste.json', projectFolder);

// removeDirectory(projectFolder);
