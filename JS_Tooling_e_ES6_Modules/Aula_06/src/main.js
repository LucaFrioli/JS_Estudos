//webpack(auxiliador de transpilação de modo mais moderno) criando um boilerplate (um modelo onde se poderá fazer reuso)

//lembre-se de caso necessário instalar as dependencias do projeto com : npm i
// utilize o comando dentro do parenteses no terminal para iniciar o webpack: (npm run webpck)
import GenerateCpf from './modules/classes/GenerateCpf';

import './assets/css/style.css';//ele carrega o css na página

(function () {
    const generate = new GenerateCpf();
    const cpfGenerated = document.querySelector(`.resultCpf`);
    cpfGenerated.innerHTML = generate.generateNewCpf();
})();
