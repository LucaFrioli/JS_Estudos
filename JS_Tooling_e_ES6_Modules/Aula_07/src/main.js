//webpack(auxiliador de transpilação de modo mais moderno) criando um boilerplate (um modelo onde se poderá fazer reuso)

//lembre-se de caso necessário instalar as dependencias do projeto com : npm i
// utilize o comando dentro do parenteses no terminal para iniciar o webpack: (npm run webpck)

import './assets/css/style.css';//ele carrega o css na página

import gen from './modules/formGenerator'

function displayPsw() {

    const display = document.querySelector(`.displayPsw`);
    const form = document.querySelector(`form#genPsw`);
    const bnt = form.querySelector(`button`);

    bnt.addEventListener(`click`, e => {
        e.preventDefault();
        const generatedPsw = gen(form);
        console.log(generatedPsw);
        display.textContent = generatedPsw;
    });
}

displayPsw();

