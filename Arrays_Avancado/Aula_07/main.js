//filter+map+reduce
//podemos concatenar metodos vamos supor que qtemos a seguinte situação
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//dado este array, filtre os pares, dobre os valores, some estes valores
const doubledPairs = numeros.filter((value) => value % 2 === 0).map((value) => value * 2).reduce((tot, value) => tot + value)
console.log(doubledPairs);
