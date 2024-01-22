const path = require('path');
const write = require('./modules/write');
const read = require('./modules/read');

const filePath = path.resolve(__dirname, 'test.json');

// const peapole = [{ nome: 'sandra', idade: 41 }, { nome: 'josé', idade: 37 }];
// const json = JSON.stringify(peapole, '', 2);

// write(filePath, json);

async function readFile(pathf) {
    const data = await read(pathf);
    renderingData(data);
}

function renderingData(data) {
    const dataObj = JSON.parse(data);
    dataObj.forEach(element => {
        console.log(element.nome)
    });
}

readFile(filePath);
