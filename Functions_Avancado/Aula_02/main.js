//parametros e seu funcionamento dentro do java script 

function argumentsMethodOne(a, b, c) {
  console.log(arguments, arguments[5], a, b, c);//note que arguments sustenta todos os argumentos passados, se definirmos um indice ele retorna o valor do argumento como um array, e se definirmos dentro dos parenteses, nomes podemos acessar os argumentos em ordem , sendo o argumento do indice 0 sendo referenciado pelo nome do primeiro parametro nesse caso a, e assim sucessivamente dos nomes de parametros definidos 
}

argumentsMethodOne(1, 2, 3, 4, 5, 6, 7);

//Iniciando parametros para prevenção de erros, iniciamos ele com um valor padrão apenas adicionando o operador de atribuição após a declaração de seu nome e o valor padrão que ele irá assumir caso não iniciado na chamada da função;
function soma(a, b = 0, c = 3) {
  console.log(a + b + c + `\n`);
}
soma(1);
soma(3, undefined, 9);

//parametros via desestruturação

function retornaPessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

const nome = {
  nome: `João`,
  sobrenome: `Silva`,
  idade: 33
}

retornaPessoa(nome);

function arrayJogos([jogo1, jogo2, jogo3, jogo4]) {
  console.log(jogo1, jogo2, jogo3, jogo4);
}

let games = [`Mario Odyssey`, `Zelda Ocarina of time`, `Assassin's Creed Origens`, `The Witcher 3`];
arrayJogos(games);

//exemplo real : 
function calc(operator, acumulator, ...numbers) {//podemos usar o operador rest para atribuir todos os argumentos não referenciados por um parâmetro, no parâmetro comoperador
  for (let number of numbers) {
    switch (operator) {
      case `+`: acumulator += number; break;
      case `-`: acumulator -= number; break;
      case `*`: acumulator *= number; break;
      case `/`: acumulator /= number; break;
      default: console.log(`Operador não reconehcido`);
    }
  }
  console.log(acumulator);
}

const operator = `+`;
const acumulator = 0;
calc(operator, acumulator, 10, 20, 30, 40, 50);