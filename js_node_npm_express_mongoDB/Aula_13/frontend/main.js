//webpack(auxiliador de transpilação de modo mais moderno) criando um boilerplate (um modelo onde se poderá fazer reuso)

//lembre-se de caso necessário instalar as dependencias do projeto com : npm i
// utilize o comando dentro do parenteses no terminal para iniciar o webpack: (npm run dev)

import 'core-js/stable';//carrega arquivos qpara tronar a aplicação executável em navegadores mais antigos
import 'regenerator-runtime/runtime';//idem ao anterior
import './assets/css/style.css';

const teste = `tudo que rola aqui só é gerenciado pelo webpack`;
alert(teste);
