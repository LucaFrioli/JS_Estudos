//Objeto Math

// podemos arredondar um numero para o mais proximo utilizando o Math.round()
// podemos arredondar numeros para baixo utilizando Math.floor(var);
// para arredondar para cima usamos Math.ceil()
// para achar o maior número de um intervalo podemos usar Math.max();
// para achar o menor número de um intervalo podemos usar Math.min();
// Podemos achar numeros aleatórios utilizando a função Math.random();
// Para realiazar a potenciaçãopodemos usar uma alternativa ao ** que é o MAth.pow(base,expoente);
// Para realizar uma raiz quadrada podemos usar um Math.sqtr();

let global = 9.5661985584866;// essa variavel será manipulada por todo o resto do arquivo altere ela para ver diversos principios
// let vetorGlobal = [1, 4, 3, -10, 15, 2, 5, -3, -4];

// Vamos arredondar para o mais próximo 
let n = Math.round(global);
console.log(`A variavel arredondada é ${n}`);

// Vamos arredondar para baixo a global com o .floor();
let n1 = Math.floor(global);
console.log(`A variavel arredondada para baixo é ${n1}`);

// Vamos arredondar global para cima com. ceil();
let n2 = Math.ceil(global);
console.log(`A variavel arredondada para cima é ${n2}`);

// Vamos averiguar o maior número de um intervalo com .max();
console.log(`O maior número do intervalo é ${Math.max(1, 2, 4, 5, 8, -10, 15, -6, -7, 25)} `);

// Vamos averiguar o menor número de um intervalo com .min();
console.log(`O menor número do intervalo é ${Math.min(1, 2, 4, 5, 8, -10, 15, -6, -7, 25)} `);

//Gerando um número aleatório entre 0 e 1;
let aleatorio = Math.random();
console.log(`Número aleatório : ${aleatorio}`);
//Para gerar números aleatórios acima de 0 e 1 devemos usar uma expressão matemática junto
aleatorio = Math.round(Math.random()*(15-5)+5);
console.log(`Números aleatóriao de 5 a 15 : ${aleatorio} `);

//Para pegar o valor de uma potenciação utilizando .pow() 
let potencia = Math.pow(n,3);
console.log(`A potencia de 3 da variavel arredondada : ${potencia}`)

//Raiz quadrada utilizando .sqtr();
let raiz = Math.sqrt(n1);
console.log(`Retorno de uma raiz quadrada do global arredondado para baixo : ${raiz}`);
