//map -> map retorna sempre um array com o mesmo tamnaho que o original
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const arrayDobrado = numeros.map(value => value * 2); // a função embutida tem a mesma estrutura que a função utilizada em filter ou seja os três parametros consecutivos são value, index, array
console.log(arrayDobrado);

//Retrone apenas  uma string com o nome da pessoa
//retorne apenas a chave nome do objeto
//adicione uma chave id em cada objeto
const peapoles = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Letícia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
];

const stringNames = peapoles.map(obj => obj.nome);
const agesOfPepaoles = peapoles.map(obj => ({ idade: obj.idade }));//para fazer com que deê o retorno correto, deve-se ter o retorno de uma expressão
const idInListOfPeapoles = peapoles.map((obj, index) => ({ id: index, ...obj }));//utilizando expression e operador spread para a criação de uma nova lista de objetos, sem alterar a lista original

console.log(`\nNome das pessoas :\n ${stringNames.join(`\n `)}`);
console.log(`\nLista de idades : `);
console.log(agesOfPepaoles);
console.log(`\nLista com indices adicionados : `);
console.log(idInListOfPeapoles);
console.log(`\nArray original :`);
console.log(peapoles)
