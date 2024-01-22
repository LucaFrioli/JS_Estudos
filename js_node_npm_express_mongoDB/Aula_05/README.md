# Utilizando File System e Recursão mútua:

Recomendação de leitura da documentação de [File system](https://nodejs.org/docs/latest/api/fs.html)

O módulo fs do Node.js fornece uma interface para acessar e interagir com o sistema de arquivos. Ele oferece uma ampla gama de métodos para realizar tarefas como criar, escrever, ler, renomear, copiar, mover e excluir arquivos e diretórios.

O módulo fs oferece dois tipos de APIs: síncronas e assíncronas.

O módulo fs (File System) no Node.js é uma parte fundamental da biblioteca padrão que fornece funcionalidades para interagir com o sistema de arquivos do sistema operacional.

Aqui estão algumas das principais funcionalidades oferecidas pelo módulo fs:

1. Leitura e Escrita de Arquivos:

   - `fs.readFile(path, [options], callback)`: Lê o conteúdo de um arquivo.
   - `fs.writeFile(file, data, [options], callback)`: Escreve dados em um arquivo.

2. Operações de Diretório:

   - `fs.readdir(path, [options], callback)`: Lista os arquivos em um diretório.
   - `fs.mkdir(path, [options], callback)`: Cria um novo diretório.
   - `fs.rmdir(path, [options], callback)`: Remove um diretório vazio.

3. Estatísticas de Arquivos:

   - `fs.stat(path, callback)`: Obtém estatísticas de arquivo, como tamanho, data de modificação, etc.
   - `fs.lstat(path, callback)`: Obtém estatísticas de arquivo, incluindo links simbólicos.

4. Operações de Arquivo:

   - `fs.rename(oldPath, newPath, callback)`: Renomeia um arquivo ou move um arquivo para um novo local.
   - `fs.unlink(path, callback)`: Remove (apaga) um arquivo.

5. Operações Assíncronas e Promessas:

   - Muitos métodos no módulo fs têm versões assíncronas que utilizam callbacks para lidar com operações de I/O não bloqueantes.
   - A partir do Node.js 10, também é possível utilizar a API baseada em Promessas usando `fs.promises` para métodos assíncronos.

# **Vamos para o código**

## Importação de Módulos:

   ~~~javascript
       const fs = require('fs').promises;
       const path = require('path');
   ~~~

   - `fs`: Módulo de sistema de arquivos do Node.js. O `.promises` é usado para habilitar o uso de promessas em operações assíncronas.
   - path`: Módulo para manipulação e construção de caminhos de arquivos.


## **Sobre recusão mútua:**

Vamos dividir a recursão em passos mais detalhados, focando na função `readDir` e `walk`:

### 1. **Chamada Inicial:**
   ~~~javascript
   const relactive = path.resolve(__dirname, '..', '..');
   readDir(relactive);
   ~~~
   - `const relactive = path.resolve(__dirname, '..', '..')`: Resolve o caminho para dois níveis acima do diretório atual.
   - `readDir(relactive)`: Inicia o processo chamando a função `readDir` com o caminho fornecido.

### 2. **Função `readDir`:**
   ~~~javascript
   async function readDir(rootDir) {
       rootDir = rootDir || path.resolve(__dirname);
       const files = await fs.readdir(rootDir);
       walk(files, rootDir);
   }
   ~~~
   - `rootDir`: Parâmetro que representa o diretório a ser lido. Se não for fornecido, usa o diretório atual.
   - `const files = await fs.readdir(rootDir)`: Lista os arquivos no diretório fornecido e aguarda a conclusão da operação.
   - `walk(files, rootDir)`: Chama a função `walk` para processar os arquivos no diretório atual.

### 3. **Função `walk`:**
   ~~~javascript
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
           // ... (verificação e exibição de arquivos)
       }
   }
   ~~~
   - `for (let element of files)`: Loop pelos arquivos no diretório.
   - `const fileFullPath = path.resolve(rootDir, element)`: Obtém o caminho completo para o arquivo.
   - `const stats = await fs.stat(fileFullPath)`: Obtém as estatísticas do arquivo (tamanho, data de modificação, etc.) e aguarda a conclusão da operação.
   - `if (/\.git/g.test(fileFullPath)) continue;`: Ignora os arquivos dentro do diretório `.git`.
   - `if (stats.isDirectory()) { readDir(fileFullPath); continue; }`: Se o arquivo é um diretório, chama recursivamente a função `readDir` para explorar esse diretório.

Agora, vamos detalhar ainda mais o processo de recursão dentro da função `walk`:

### 4. **Recursão em `walk`:**
   - A função `walk` é chamada recursivamente quando um diretório é encontrado.
   - A chamada recursiva é feita com `readDir(fileFullPath)`, onde `fileFullPath` é o caminho completo do diretório.
   - Isso significa que a função `readDir` iniciará um novo processo de leitura dentro do diretório encontrado, repetindo os passos de `fs.readdir` e `walk`.

## **Resumindo, o processo recursivo acontece da seguinte maneira:**

- `readDir(relactive)` chama `walk(files, rootDir)` para explorar os arquivos no diretório especificado.
- Em `walk`, a função verifica se cada elemento é um diretório.
- Se um diretório é encontrado, `readDir` é chamada novamente para explorar esse diretório.
- Isso continua até que todos os diretórios e subdiretórios sejam explorados, e os caminhos completos de todos os arquivos sejam impressos no console.

A recursão é uma abordagem poderosa para lidar com estruturas de dados como árvores de diretórios, permitindo a exploração completa de todas as ramificações da árvore de forma eficiente.
