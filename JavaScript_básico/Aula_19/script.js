//Funções básico
/*
    **
    *Para criar uma função declaramos ##function nomedafunçao (parametros) {}##
    * 
    * Para que uma função retorne um valor para alguma variavel podemos escrever return conteudo, além disso esse comando indica o fim da execução dela;
    * 
    * Podemos criar uma função anonima declarando ela dentro de uma variavel; Este assunto será aprofundado em aulas posteriores
    * 
    * Maneira mais moderna de criação de funções são as arrow functions;
    *  Elas são funções anonimas só que ao invés de declarar = function (param){}; se declara =(param)=>{}; 
    * Recomendavel utiliza-la
    * 
    * 
*/

//declaração de função simples
function saudacao(nome) {//nome é o parametro da função que será utilizado dentro da função
    console.log(`Bom dia ${nome} .`);
    return true;//ela agora esta retornando um valor boleano verdadeiro, obs : poderia serqualquer coisa; PS: a função se encerrará ao encontrar return;
}

//execução da função saudação
saudacao(`João`);//João é o argumento do parametro nome no momento
saudacao(`Maria`);//Maria é o argumento do parametro nome no momento

//isso não é o ideal
let retorno = saudacao(`André`);//ela vai executar com and´re mas será salvo o retun na variavel retorno;
console.log(retorno);

//Correção da declaração de um retorno de uma função simples para uso dentro de variaveis
//É uma boa prática deixar apenas a lógica dentro de uma função, e retornar o valor dá lógica com return
function corrigido(nome) {
    return `\nBom dia ${nome} `;
}

retorno = corrigido(`José`);//desejavel que haja a declaração do argumento 
console.log(`\nAgora sim o retorno com variavel corrigido : ${retorno}`);


//##############################################################################################################
// essa parte execute dentro do navegador e observe o console do mesmo

let respX = 6;
let respY = 14;

//podemos passar dois ou mais params para ela, e inicializar, para que ela haja retorno caso nenhum argumento posterior seja passado
function soma(x = 1, y = 1) {
    let resultado = x + y;
    return `O resultado da soma de x e y é igual a ${resultado}`;
}

console.log(soma(respX, respY));
console.log(`Caso passe apenas um argumento referente a x o y continua 1 : ${soma(respX)}`);

//##############################################################################################################

//Função anonima, veja que ela será declarada dentro de uma variavel, note que é obrigatório o uso de ;(ponto e virgula no final de sua declaração).

const raiz = function (n) {
    return n ** 0.5;
}; //<= aqui

console.log(raiz(9));

// vamos fazer a mesma função agora de maneira mais moderna usando arrow functions

const raiz2 = (n) =>{
    return n**0.5;
};
console.log(raiz2(9));

//Como nesse caso como temos apenas um parametro podemos deixar ainda mais enxuto o código
const raiz3 = n => n**0.5;
console.log(raiz3(9));

// as tres funções são as mesmas, só que declaradas de maneiras diferente