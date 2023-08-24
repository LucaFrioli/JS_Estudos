//Atribuições via desestruturação utilizando Arrays  :


//exmeplo um : 
let a = `A`;
let b = `B`;
let c = `C`;
const letras = [`C`, `B`, `A`];
            //   ∨   ∨     ∨
               [ a,  b,    c] = letras; //fiz uma atribuição de valores via array, no caso cada índice que as variáveis estão, receberão seu correspondente da váriavel de atribuição;
console.log(a, b, c,"\n\n");


//exemplo 2 :
//               0  1  2  3 ...
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//suponhamos que queremos apenas os dois primeiros numeros em variaveis separadas, e os outros em uma terceira, então faremos da seguinte maneira : 
const [number1, number2, ...rest] = numbers  //as reticências indica para atribuir todos os numeros que não foram atribuidos a um variavel única como um array na variavel do nome declarado após eles, no nosso caso a variavel rest(que está com o mesmo nome do operador);
console.log("Feito com atribuição via desestruturação : \n",number1,number2);
console.log(rest);
console.log(numbers);


//exemplo 3 :
//veja como ficaria o mesmo código escrito como atribuição comum : 
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n1 = n[0];
const n2 = n[1];
n.shift();
n.shift();
const rMeio = n;
console.log("\n\n\nFeito com métodos tradicionais : \n",n1,n2);
console.log(rMeio);
n.unshift(2);
n.unshift(1);
console.log(n);

