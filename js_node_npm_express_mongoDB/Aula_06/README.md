# Escrevendo e lendo arquivos :

O módulo `fs` (File System) no Node.js desempenha um papel crucial ao lidar com operações de leitura e escrita de arquivos no sistema operacional. Essas operações são fundamentais para muitas aplicações, como manipulação de dados, persistência de informações e processamento de arquivos de configuração. Vamos explorar brevemente as principais funções para leitura e escrita de arquivos usando o `fs` no Node.js.

### Leitura de Arquivos:

Para ler o conteúdo de um arquivo, o método `fs.readFile` é amplamente utilizado. Ele aceita o caminho do arquivo como primeiro argumento e um callback como segundo argumento. O callback será chamado após a leitura do arquivo, fornecendo eventuais erros e os dados lidos.

~~~javascript
const fs = require('fs');

fs.readFile('exemplo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Erro na leitura do arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
});
~~~

No exemplo acima, o arquivo "exemplo.txt" é lido como uma string no formato UTF-8. Caso o arquivo seja binário, você pode omitir o segundo argumento ('utf-8') para obter os dados brutos.

### Escrita de Arquivos:

Para escrever em um arquivo, utiliza-se o método `fs.writeFile`. Semelhante ao `readFile`, ele aceita o caminho do arquivo como primeiro argumento e os dados a serem escritos como segundo argumento. O terceiro argumento é um callback que será chamado após a conclusão da operação.

~~~javascript
const fs = require('fs');

const dadosParaEscrever = 'Conteúdo a ser escrito no arquivo.';

fs.writeFile('novo-arquivo.txt', dadosParaEscrever, (err) => {
    if (err) {
        console.error('Erro na escrita do arquivo:', err);
        return;
    }
    console.log('Arquivo foi escrito com sucesso.');
});
~~~

Neste exemplo, um novo arquivo chamado "novo-arquivo.txt" será criado, e o conteúdo especificado será gravado nele. Se o arquivo já existir, o conteúdo anterior será substituído.

### Operações Assíncronas e Utilização de Promessas:

Ambas as operações, leitura e escrita, têm versões assíncronas e também podem ser utilizadas com Promessas a partir do Node.js 10. O uso de Promessas pode tornar o código mais conciso e fácil de entender, especialmente em cenários mais complexos.

~~~javascript
const fsPromises = require('fs').promises;

async function leituraAssincrona() {
    try {
        const dados = await fsPromises.readFile('exemplo.txt', 'utf-8');
        console.log('Conteúdo do arquivo:', dados);
    } catch (erro) {
        console.error('Erro na leitura do arquivo:', erro);
    }
}

async function escritaAssincrona() {
    const dadosParaEscrever = 'Conteúdo a ser escrito no arquivo.';
    try {
        await fsPromises.writeFile('novo-arquivo.txt', dadosParaEscrever);
        console.log('Arquivo foi escrito com sucesso.');
    } catch (erro) {
        console.error('Erro na escrita do arquivo:', erro);
    }
}

leituraAssincrona();
escritaAssincrona();
~~~

