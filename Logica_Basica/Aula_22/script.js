// Escreva uma função que receba 2 números e retorne o maior deles 

let numberOne = 2;
let numberTwo = 7;
const higherNumber = (firstNumber, secondNumber) => firstNumber > secondNumber ? firstNumber : secondNumber;  //é possível retornar parametros sem a necessidade de uma variavel intermediária, também podemos deixar implícito o return já que só há uma unica coisa acontecendo dentro desta função, inclusive por este motivo é recomendado utilizar arrow function
console.log(`o maior numero é : ${higherNumber(numberOne, numberTwo)}`);
