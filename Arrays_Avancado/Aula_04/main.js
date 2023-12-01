// filter -> todo filter retorna um array do mesmo tamanho ou menor que o original
// para utilizar este método é necessário criar uma função de callback

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const BiggerThan10 = numeros.filter(v => v > 10);//oque esta entre parenteses é a mesma coisa que a função cbFilter que se encontra a baixo;
console.log(BiggerThan10);

function cbFilter(value) {
    return value > 10;
}

//exercício de filter utilizando arrays de objetos
//retorne pessoas com nomes de 5 letras ou mais
//Retorne pessoas com mais de 50 anos
// Retrone as pessoas cujo o nome termina com a
const peapoles = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Letícia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]

const bigNamedPeapoles = peapoles.filter(value => value.nome.length >= 5);
const betterAgePeapoles = peapoles.filter(value => value.idade > 50);
const peapolesWhithLastLetterA = peapoles.filter(value => value.nome.toLocaleLowerCase().endsWith(`a`));// Veja que utilizamos um novo metodo chamado .endsWith(``); ele serve para testar se a string termina com a letra passada em seu paramtro, e rretorna true ou false
console.log(`Pessoas com nomes maiores ou iguais a 5 Letras :`);
console.log(bigNamedPeapoles);

console.log(`\nPessoas com mais de 50 anos :`);
console.log(betterAgePeapoles);

console.log(`\nPessoas com nomes terminados em a :`);
console.log(peapolesWhithLastLetterA)
