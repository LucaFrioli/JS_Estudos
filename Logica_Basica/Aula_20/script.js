//Estrutura while e do while

/*  
    **
    * A estrutura while e do while é mais indicado quando não se sabe a quantidade de vezes que um código precisrá ser repetido previmente 
    * Ou seja a condição repete até que a condição não seja mais verdadeira   
    * A unica diferença do while e do do while é a execução do código, mesmo que a condição seja falsy o código será executado ao menos uma vez 
    * 
*/

function randomNumber(min, max) {
    let number = Math.random() * (max - min) + min;
    return Math.floor(number);
}
let min = 1;
let max = 50;
let random = randomNumber(min, max);

while (random < 25) {
    console.log(random);
    console.log(`numero menor que 25`)
    random = randomNumber(min, max);
}

console.log(random);
console.log(`numero maior ou igual que 25`)

do {
    random = 10
    console.log(`O random é ${random}, logo sairá da contição, mesmo executando este console.log`);
} while (random !== 10);
