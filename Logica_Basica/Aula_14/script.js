//for clássico + verboso

/*
    ** FOR
    *   Quando queremos reptir um conteúdo, ou varrer um array, ou adicionar linhas a um array várias vezes podemos utilizar a estrutura for; 
    * 
    * a estrutura se cria da seguinte maneira : 
    * for(let x = 0; x < y; x++){ //lembre-se de utilizar {[(;)]} ponto e virgula para seprar as condições
    *   código srá repetido quantas vezes for o valor de y vezes
    * }
    * 
    * x === variavel de controle = uma variavel que se inicia em 0 ou o valor necessário
    * y === definição de parada = uma comparação do valor da variavel de controle, com um valor definido para ser o máximo da repetição
    * x++ === incremento ou decremento da Variavel de controle =  variavel de controle++ || variavel de controle--
    * 
*/

//Suponhamos que queremos imprimir na tela 7 linhas, podemos fazer desse modo : 
console.log(`Linha 1`);
console.log(`Linha 2`);
console.log(`Linha 3`);
console.log(`Linha 4`);
console.log(`Linha 5`);
console.log(`Linha 6`);
console.log(`Linha 7\n`);
//porém esse é um modo pouco inteligente, pois vamos ter de escrever muitas linhas de código para chegar nesse resultado, por isso usamos a estrutura de repetição for :
let nLinhas = 7
for (let i = 0; i < nLinhas; i++) {//aqui definimos um contador i que irá ser incrementado em um a cada repetição da estrutura, até chegar em um valor menor que nLinha
    console.log(`Linha ${i + 1}`);
}

//vamos fazer estruturas lógicas com isso, vamos supor que queremos saber se um úmero é impar ou par em um intervalo de zero a 9 : 
console.log(`\n\nAveriguação de quais linhas são pares ou ímpares : `);
nLinhas = 10;
for (let i = 0; i < nLinhas; i++) {
    const averiguar = i % 2 !== 0 ? `par` : `impar`;//por estarmos incrementando 1 na hora de imprimira resposta precisamos inverter a condição utilizando o operador ! not
    console.log(`Linha ${i + 1} é ${averiguar}`);
}

//Podemos também percorrer arrays utilizando esta estrutura : 
console.log(`\n\nListagem do array : `);
const jogos = [`Ac1`, `Ac2`, `Ac brotherhood`, `Ac revelations`];
//podemos escrever toda a lista da seguinte maneira  :
for (let i = 0; i < jogos.length; i++) {
    console.log(`Jogo ${i+1} : ${jogos[i]}`)
}


