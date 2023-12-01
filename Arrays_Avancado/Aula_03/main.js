//Concatenando Arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//podemos concatenar com o metodo concat()
const a3 = a1.concat(a2, [7, 8, 9]);
console.log(a3);

//ou spread seguido de spread
const a4 = [...a1, ...a2, ...[7, 8, 9]]
console.log(a4)
