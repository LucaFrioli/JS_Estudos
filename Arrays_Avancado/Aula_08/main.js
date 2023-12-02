// forEach for each só está disponivel em arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a1.forEach(function (value) {
    console.log(value)
}); //o forEach recebe uma função de calback como o filter e o map, com parâmetros valor, índice, e array, isso permite iterar apenas pelo array, diferente dos outros métodos, isso pode dar um poder junto com outras funções;
