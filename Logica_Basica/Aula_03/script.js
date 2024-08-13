//Avaliação de curto circuito

/*
    ** Parav entendermos curto circuito devemso entender como funcionam os retornos de expressões com operadores de comparação,
    *
    * Todos os valores podem ser avaliados em JS :
    * existe o falso literal = false
    * e os valores FALSY que são avaliados como falso automaticamente :
    * - 0 (numero zero)
    * - `` (string vazia)
    * - null
    * - undefined
    * - NaN
    *
    * Todos os outros são avaliadoscomo true(verdadeiro automaticamente);
    *
    *
*/

//vamos para um exemplo, vou passar uma expreção com operadores e valores que não sejam nem falso literal nem Falsy
console.log(`1. ${`João` && `maria` && `José`}`);// não retornará nenhum valor falso e imprimirá o ultimo valor verdadeiro
console.log(`2. ${`João` && null && `José`}`); //retornará a string vazia e não proseguirá com a comparação aqui se caracteriza como curto cirquito

function falaOi() {
    return `oi`;
}

const retensor = null;//se essa constante for qualquer falor false ou falsy a funação não irá executar, e irá retornar apenas o valor que está descrito, caso variavel de string vazia `` irá retornar apenas vazio;
console.log(retensor && falaOi());//Reforçando caso retensor for qualquer falsy ou false não irá executar a função

//VAmos falar sobre ou

console.log(0 || `` || null || true || `joão da Silva`); //ele retorna o primeiro valor que seja verdadeiro caso tosdas sejam falsy ou false será retornado o último

//Vamos para um exemplo prático

let userColor = null;
const color = userColor || `red`;//os curto circuitos também podem ser declarados dentro de variáveis

console.log(color);//caso um usuário escolha uma cor irá retornar a cor do usuário, se não retornará a cor padrao
