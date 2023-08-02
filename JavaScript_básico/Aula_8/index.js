// Tipos de dados primitivos 
// OBS : valido para javascript puro, desconsiderar em partes caso venha a utilizar o typescript 

/*
    **
    *Declarando strings
    *Para declarar uma string devemos falar primeiro se a variavel é uma let ou const;
    *Posteriormente ao atribuir o valor devemos colocar o conteúdo entre tres das opçoes a baixo : 
    * "" (aspas duplas);
    * '' (aspas simples);
    * `` (crase);
    * obs : recomendo a utilização de crases;
*/
const nome = "João";
const nome1 = 'Pedro';
const nome2 = `Lucas`;//Qual mais recomendo o uso;

// Rode e averigue; 
console.log(`Tipos primitivos : string.`);
console.log(nome, typeof (nome));
console.log(nome1, typeof (nome1));
console.log(nome2, typeof (nome2));

/*
    **
    *Declaração do tipo Number 
    *É ainda mais fácil, basta colocar o nome da variavel e escrever um numero de duas formas possíveis :
    * 1 2 3 4 5 etc. (para numeros inteiros só digitar o numero);
    * 1.75 5.367 3.45 7.89 (Para números com ponto flutuante colocar um ponto que irá separar o inteiro do decimal);
    **
*/

//Obs : vale resaltar que ambas as variaveis irão retornar Number 
const idade = 20;
const idade1 = 20.5;

//rode e averigue;
console.log(`\nTipos primitivos : number.`);
console.log(idade, typeof (idade));
console.log(idade1, typeof (idade1));


/*
**
 *Declaração do tipo indefinido:
 * A variavel do tipo indefinido não indica nenhum local na memória; 
 *Para conseguir o tipo undefined basta declarar a variavel como let e sem valor iniciando-a;
 */
let n;
let n1;

//rode e averigue;
console.log(`\nTipos primitivos : undefined.`);
console.log(n, typeof (n));
console.log(n1, typeof (n1));

/*
    **
    *Declaração de variavel dotipo nulo:
    *A declaração do tipo nullo é quando queremos retirar temporariamente ou por algum motivo o valor de determinada variavel; 
    * Ela é declarada iniciando a variavel com a palavra **null** sem nenhum tipo de caractere especial;
    ** 
*/

const nulo = null;
const nulo1 = null;

//rode e averigue;
//OBS : ele não é um objeto,por mais que seu retorno referencie o mesmo;
console.log(`\nTipos primitivos : null.`);
console.log(nulo, typeof (nulo));
console.log(nulo1, typeof (nulo1));

/*
    **
    *Declaração de variavel do tipo booleano:
    *A declaração do tipo booleano é quando queremos obter um resultado falso ou verdadeiro; 
    * Ela é declarada iniciando a variavel e a inicializando com true(verdadeiro) ou false(falso);
    ** 
*/

let bool = true;
let bool1 = false;

//rode e averigue;
console.log(`\nTipos primitivos : boolean.`);
console.log(bool, typeof (bool));
console.log(bool1, typeof (bool1));