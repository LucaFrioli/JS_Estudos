let respX = Number(prompt(`Digite o primeiro número`));
let respY = Number(prompt(`Digite o segundo número`));

//podemos passar dois ou mais params para ela, e inicializar, para que ela haja retorno caso nenhum argumento posterior seja passado
function soma(x = 1, y = 1) {
    let resultado = x + y;
    return `O resultado da soma de x e y é igual a ${resultado}`;
}

console.log(soma(respX, respY));
console.log(`Caso passe apenas um argumento referente a x o y continua 1 : ${soma(respX)}`);