// aula para saber mais sobre numbers

/*
    **
    * Podemos transformar numeros em Strings utilizando da função toString() caso seja necessário;
    * Vale ressaltar que este método transforma o número em string temporariamente, até que a variavel em questão receba ela mesma com o método ;
    * Ex :
    * num1 = num1.toString(); isso a transforma para sempre
    * 
    * 
    * ###Caso queira um retorno da versão binaria do numero basta declarar um  número 2 dentro do metodo;
    * num1.toString(2); Terei o retorno binario, para octa decimal basta digitar .toString(8), epara retorno de hexadecimal basta utilizar toString(16) ####
    * 
    * Para arredondar um número que tenha casas decimais extensas, posso usar o metodo .toFixed();
    * Ex : 
    * let num1 = 15.38270824020784863942
    * num1.toFixed();
    * 
    * 
    * Pra saber se um número é do tipo inteiro devemos utilizar a Função Number.isInteger(var);
    * EX : 
    * Number.isInteger(num1);
    * isso me retornará um valor true ou false
    * 
    * 
    * Para saber se calculos estão invalidos podemos usar o metodo Number.isNaN(var);
    * caso realmente ele for um NaN ira retornar true caso não retornara false;
    * ex :
    * 
    * num1 = 2 / `Olá`;
    * Number.isNaN(num1);
    * 
    * para resolver problemas de imprecisão de calculos do java script devemos usar dois métodos vistos anteriormente: Number(var.toFixed(2));
    * isso trará uma melhor precição para a máquina que roda e decodifica o código, o que trrá uma melhor precisão para os calculos.
    * 
    * 
 */

let n1 = 1;
let n2 = 2.5;

//Aqui temos um exemplo de dois números que estão sendo tranformados em strings e sendo concatenados temporariamente
console.log(n1.toString() + n2.toString());
console.log(`N1 e N2 retornando para seu estado natural já que eles foram transformados apenas temporariamente : ${typeof (n1, n2)}`);
//Aqui estou transformando o número armazenado em n1 em string até que faça o metodo Number();
n1 = n1.toString();
console.log(`N1 transformado em srtring no escomo geral : ${typeof (n1)}`);
//retornando o n1 para numero
n1 = Number(n1);
console.log(`N1 retornando como numero : ${typeof (n1)} `);


let n3 = ((n1 + n2) * 5) / 3.2;
//n3 sem o método toFixed()
console.log(`\n${n3}`);
//n3 com ometodo toFixed();
console.log(`n3 com o método toFixed ativo ${n3.toFixed()}`);
//n3 com o metodo toFixed ativo e definindo uma quantidade de casas decimais de n2 arredondado
console.log(`${n3.toFixed(n2.toFixed())}`);


//Vamos averigura dois valore, um inteiro e outro não, observe o que acontece
console.log(`\n${Number.isInteger(n1)}`);
console.log(`${Number.isInteger(n3)}`);

// Vamos observar se uma conta está ocorrendo de modo correto 
let texto = `Hello my old Friend`;
let temporario = n1 / texto;
console.log(`\nVeja isso : ${Number.isNaN(temporario)}`);
console.log(`Veja quando o retorno é de algum número : ${Number.isNaN(n1)}`);

// fazendo calculos precisos 
let num1 = 0.1;
let num2 = 0.7;

//se fizermos apenas o calculo haverá um retorno estranho, observe :
let num = num1 + num2;
console.log(`\nVeja a imprecisão  : ${num}`);
// para concertar isso utilizamos o seguinte metodo :
//Isso se deve por conta do padra IEEE 754-2008
num =Number(num.toFixed(2));
console.log(`O número correto : ${num}`);