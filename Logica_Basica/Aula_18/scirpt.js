// for of 

//For clássico, utilizado par variaveis iteráveis;
//For in, utilizado tanto para (strings arrays e Objetos){foco em objetos};
//For of, utilizado para percorrer variaveis iteráveis;

/*Explicação sobre for of
    ** For of se destaca na hora de iterar em String e arrays, tem maior foco na estrutura baseada em indices; 
    *   A maior diferença de um for in e um for of, é que o for of retorna diretamente o valor  do indice, e não o indice em si;
    * vamos para a sintaxe  :
    *  for (let valor of varivavel iteravel){
    *   console.log(valor)
    * } 
    *   
    * OBS : é impossível utilizar este for para percorrer objetos;
    * 
*/

const nome = `José`;
const jogos = [`Assasins Creed`, `Assassins Creed 2`, `Assassins Creed Brotherhood`];

console.log(`Nome utilizando for in : `);
for(let indice in nome){
    console.log(nome[indice]);
}


console.log(`\nNome utilizando for of  : `);
//porém veja como fica muito mais simples utilizando o for of 
for (let letra of nome){
    console.log(letra);
}


//vamos fazer o jogos apenas com for of 
console.log(`\nIterando o vetor Jogos : `);
for(let game of jogos){
    console.log(game);
}
