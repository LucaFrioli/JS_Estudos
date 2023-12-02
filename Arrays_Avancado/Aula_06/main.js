//Reduce -> ele é ideal para reduzir arrays realizando calculos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaTotal = numeros.reduce((tot, value) => tot + value, 0);
console.log(somaTotal);

//exemplo declarando tudo :
numeros.reduce((acumulator = 0, currentValue, index, array) => {//o virgula zero é para definir o valor inicial do acumulador, caso ele não seja definido presume-se que seja o primeiro valor;
    return acumulator + currentValue;//retorno como visto em outras funções;
});

// retrone a pessoa mais velha
const peapoles = [
    { nome: `Letícia`, idade: 19 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Wallace`, idade: 47 },
    { nome: `Luiz`, idade: 62 },
    { nome: `Rosana`, idade: 72 },
];

const olderPeapole = peapoles.reduce((accumulator, obj) => obj.idade > accumulator.idade ? accumulator = obj : accumulator);//quando não settammos um valor para o acumulador, ele assume o valor do primeiro elemento do array
console.log(olderPeapole);

