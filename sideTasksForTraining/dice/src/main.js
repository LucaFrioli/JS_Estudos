//webpack(auxiliador de transpilação de modo mais moderno) criando um boilerplate (um modelo onde se poderá fazer reuso)

//lembre-se de caso necessário instalar as dependencias do projeto com : npm i
// utilize o comando dentro do parenteses no terminal para iniciar o webpack: (npm run webpck)

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css'//ele carrega o css na página

const generate = require('./modules/dice')

//aqui deverá estar a lógica de inserção
function main() {
    const form = document.querySelector('form#diceForm');
    const button = form.querySelector('button');
    const display = document.querySelector('div.response');
    let diceValues;

    button.addEventListener('click', (e) => {
        e.preventDefault();
        display.innerHTML = '';
        const sides = Math.floor(Number(form.querySelector('input#diceSides').value));
        const amount = Math.floor(Number(form.querySelector('input#diceAmount').value));
        diceValues = generate.generate(amount, sides);
        diceValues.forEach(element => {
            display.innerHTML += element + ' ';
        });
    });
}

main();
