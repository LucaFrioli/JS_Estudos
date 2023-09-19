/* exercício FizzBuzz :
    **escreva uma função que receberá um número e retornará o seguinte :
    * Caso o número seja divisível por três retorna Fizz
    * Caso o número seja divisível por cinco retorna Buzz
    * Caso seja divisível por ambos retorna FizzBuzz
    * Caso não for divisível por nenhum dos dois, retorna o próprio número
    * Deve fazer a verificação se o número é mesmo um número 
    * A função só deve disparar caso o número esteja entre 0 e 100 
    * 
*/

let inputNumber = Math.floor(Math.random() * (100 - 0) + 0);

function fizzBuzz(number) {
    return Number.isInteger(number / 3) && Number.isInteger(number / 5) ? `FizzBuzz` :
        Number.isInteger(number / 3) ? `Fizz` :
            Number.isInteger(number / 5) ? `Buzz` :
                String(number);
}

console.log(`O número ${inputNumber} se enquadra como :`);
if (typeof (inputNumber) === `number`) {
    const message = (inputNumber >= 0 && inputNumber <= 100) ? fizzBuzz(inputNumber) : `O número excede o tamanho padrão`;
    console.log(message);
} else {
    console.log(`NaN`);
}