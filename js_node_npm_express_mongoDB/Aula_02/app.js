//O ideal é semprte usar o caminho relativo, . representa a página atual, .. significa que estamos voltando uma pasta, o / indica que estamos buscando algo na pasta, e solidifica o significado do . e ..
const Peapole = require('./modules/Basics/Peapoles_and_subGrups/Peapole');
const Calculus = require('./modules/Basics/basic_calculus');

const jonas = new Peapole('Jonas', 'Augustus', true);


try {
    if (jonas.havePet) {
        jonas.pet.name = `Rufus`
        jonas.talk();
    }
    jonas.pet.bark();
} catch (e) {
    jonas.talk();
}

console.log(`\n\nSoma : ${Calculus.soma(2, 3)}\nSubtração : ${Calculus.subtracao(5, 3)}`);

const path = require('path');//importando a lib
console.log(path.resolve(__dirname,'Basics','Peapoles_and_subGrups'));//podemos entrar em uma pasta específica
console.log(path.resolve(__dirname,'..','..','Classes_e_POO','Aula_05'));//ou podemos retornar entre diretórios

const Dog = require(path.resolve(__dirname,'Dog.js'));//fazendo uma chamada de módulo via variavel path
const d1 = new Dog(`Sócrates`);
d1.bark()
