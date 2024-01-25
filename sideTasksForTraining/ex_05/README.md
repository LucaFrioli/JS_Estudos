**Exercício de Manipulação de Arquivos e Diretórios no Node.js:**

Imagine que você está criando um utilitário de gerenciamento de diretórios e arquivos no Node.js. Seu objetivo é criar funções que possam criar, listar e remover diretórios, além de ler e escrever arquivos. Aqui está um exercício que abrange vários conceitos, incluindo `path`, `readFile`, `writeFile`, `readdir`, recursão, `mkdir`, `unlink`, `rmdir` e `stat`.

### Exercício:

**OBS : Todos os caminhos dos require referentes as funcionalidades, e ao rootDir podem mudar dependendo da arquitetura do boilerplate e dos requisitos do software em produção.**

1. Crie uma função chamada `createDirectory` que aceita um nome de diretório como parâmetro e cria esse diretório.

    - Como Utilizar :
    ~~~javascript
        const createDirectory = require('./modules/utils/fileSystem/createDirectory');//chamar a função
        //criar um caminho :
        const projectFolder = path.resolve(__dirname, 'modules', 'utils','validations');
        //UTILIZAR A FUNÇÃO, CASO O CAMINHO JÁ EXISTA SERÁ LANÇADO UM ERRO
        createDirectory(projectFolder);
    ~~~

2. Crie uma função chamada `writeFile` que aceita um nome de arquivo, dados e um caminho (opcional) como parâmetros e escreve os dados no arquivo.

    - Como Utilizar :
    ~~~javascript
        const writeFile = require('./modules/utils/fileSystem/writeFile');
        //criar caminho:
        const projectFolder = path.resolve(__dirname, 'modules', 'utils','validations');
        //utilizar a função
        writeFile('peapole.json', peapole, projectFolder);
        //          file Name      data        path?
    ~~~

3. Crie uma função chamada `readFile` que aceita um nome de arquivo e um caminho (opcional) como parâmetros e retorna o conteúdo do arquivo.

    - Como Utilizar :
    ~~~javascript
        const readFile = require('./modules/utils/fileSystem/readFile');
        //criar caminho:
        const projectFolder = path.resolve(__dirname,'classes','teste');
        //utilizar a função:
        async function read() {
            try {
                const data = await readFile('peapole.js', projectFolder);
                //realizar o procedimento necessário com os dados : (neste caso só estamos logando)
                console.log(data);
            } catch (error) {
                // Trate o erro se necessário
                console.error('Erro na execução principal:', error.message);
            }
        }
    ~~~

4. Crie uma função chamada `listContentDirectory` que aceita um caminho como parâmetro e imprime no console todos os arquivos e subdiretórios presentes no diretório.

    - Como Utilizar :
    ~~~javascript
        const listContentDirectory = require('./modules/utils/fileSystem/listContentDirectory');//chamar a função
        //criar um caminho :
        const projectFolder = path.resolve(__dirname, 'modules', 'utils');
        //UTILIZAR A FUNÇÃO, todos os arquivos e subdiretórios serão listados
        listContentDirectory(projectFolder);
    ~~~

5. Crie uma função chamada `removeFile` que aceita um nome de arquivo e um caminho (opcional) como parâmetros e remove o arquivo.

    - Como Utilizar :
    ~~~javascript
        const removeFile = require('./modules/utils/fileSystem/removeFile');
        //criar um caminho :
        const projectFolder = path.resolve(__dirname, 'modules', 'utils', 'validations');
        //UTILIZAR A FUNÇÃO, o arquivo do primeiro parâmetro sera excluido
        removeFile('objectValidations.js', projectFolder);
    ~~~

6. Crie uma função chamada `removeDirectory` que aceita um nome de diretório e um caminho (opcional) como parâmetros e remove o diretório e todo o seu conteúdo (recursivamente).

    - Como Utilizar :
    ~~~javascript
        const removeDirectory = require('./modules/utils/fileSystem/removeDirectory');
        //criar um caminho :
        const projectFolder = path.resolve(__dirname, 'modules', 'utils', 'validations');
        //UTILIZAR A FUNÇÃO, o diretório e os arquivos serão excluidos
        removeDirectory(projectFolder);
    ~~~

7. Implemente uma função chamada `copyFile` que aceita um nome de arquivo de origem, um nome de arquivo de destino e caminhos opcionais e copia o conteúdo do arquivo de origem para o arquivo de destino.

    - Como Utilizar :
    ~~~javascript
        const copyFile = require('./modules/utils/fileSystem/copyFile');
        //criar os caminhos :
        const origenFolder = path.resolve(__dirname, 'modules', 'utils', 'fileSystem');
        const destinyFolder = path.resolve(__dirname,'modules','utils',);
        //UTILIZAR A FUNÇÃO, o diretório e os arquivos serão excluidos
        copyFile('readFile.js', 'teste.js', origenFolder, destinyFolder);
    ~~~

8. Implemente uma função chamada `moveFile` que aceita um nome de arquivo de origem, um nome de arquivo de destino e caminhos opcionais, movendo o arquivo de origem para o diretório de destino.

    - Como Utilizar :
    ~~~javascript
        const moveFile = require('./modules/utils/fileSystem/moveFile');
        //criar os caminhos :
        const origenFolder = path.resolve(__dirname, 'modules', 'utils', 'fileSystem');
        const destinyFolder = path.resolve(__dirname,'modules','utils',);
        //UTILIZAR A FUNÇÃO, o diretório e os arquivos serão excluidos
        moveFile('readFile.js', 'teste.js', origenFolder, destinyFolder);
    ~~~

### Observações:

- Utilize os módulos `fs` e `path` do Node.js para manipulação de arquivos e caminhos.
- Teste suas funções utilizando arquivos e diretórios de exemplo.
- Certifique-se de lidar com casos onde os diretórios ou arquivos não existem.
- Explore a recursão para tratar diretórios de forma eficaz.

Este exercício proporcionará uma oportunidade prática de aplicar os conceitos de manipulação de arquivos e diretórios no Node.js, bem como a utilização de funções assíncronas e a lida com operações I/O.


**{completas : [1, 2, 3, 4, 5, 6, 7, 8 ], pendentes : [Eventuais Correções]}**
