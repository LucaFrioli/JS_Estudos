//Lançamento e tratamento de erros (throw, try e catch)

//vamos realizar um tratamento de erro utilizando o exercício anterior 
let inputNumber = 0;
function fezzBuzz(number) {
    if (typeof number !== `number`) {//aqui é testado se o input é um número e retorna um erro caso não for 
        throw (`Não é um número tente novamente`);//throw define qual a menssagem e caso necessário o tipo de erro que será visto pelo usuário
    }
    if (number < 0 || number > 100) {//aqui testa se o número não está dentro do intervalo requerido e retorna a menssagem de erro que deverá ser escrita com o método throw caso não estiverr no intervalo definido
        throw (`O número não se encontra dentro do intervalo de 0 e 100`);
    }
    return Number.isInteger(number / 3) && Number.isInteger(number / 5) ? `FizzBuzz` :
        Number.isInteger(number / 3) ? `Fizz` :
            Number.isInteger(number / 5) ? `Buzz` :
                String(number);
}
try {
    console.log(fezzBuzz(inputNumber));//é importante utilizar console.log para utilizar o try and catch
} catch (error) {
    console.log(error);
}


// function isAnumber(input) {
//     if (typeof (input) !== `number`) {
//         throw TypeError(`Não é um número tente novamente`);
//     }
// }

// function corectRange(input) {
//     if (input < 0 && input > 100) {
//         throw RangeError(`O número não se encontra dentro do intervalo de 0 e 100`);
//     }
// }
