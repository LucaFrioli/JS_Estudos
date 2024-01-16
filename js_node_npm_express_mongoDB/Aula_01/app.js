const module01 = require('./module');//utilizamos caminho relativo, o require dentro do node usa o mesmo conceito do import from do es6, qwuando estamos chamando modulos criados por nós mesmo, quando quisermos usar modulos do proprio node ou que instalamos utilizamos apenas o nome do arquivos, sem utilizar o caminho relativo. Vale ressaltar que quando um pacote, ou dependencia utilizada, é nativa do node não se precisa iniciar o npm ou instalar qualquer dependencia como foi feito nas aulas anteriores, um exepmlo de uma lib padraão do node é o path, que utilizamos para configurar o webpack, instalaremos o axios para ter um exemplo.
const path = require('path');
// const axios = require('axios');//para retirar o erro do axios execute npm i e tire o comentário desta linha


const name = module01.name;
const lastname = module01.lastname;
//ainda podemos resgatar exports via desestruturação :

const { hello, world } = require('./module1');//pór ser um objeto literal o exports dentro do arquivo requerido

console.log('\n\nAPP JS :\n');
module01.sayHello(name, lastname);
module01.sayHello(module01.newName, module01.newLastname);
module01.sayHello(hello, world);

//podemos também consumir calsses  :

const { Peapole } = require('./Peapole');
const p1 = new Peapole('José', 'Eduardo');
console.log('\n', p1);
p1.sayHelloToWorld();

