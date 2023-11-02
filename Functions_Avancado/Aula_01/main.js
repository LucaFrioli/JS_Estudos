//como declara funções e suas diversas maneiras

//método de declaração, function nomeDaFuncao(){ }, é o método que literalmente a chamamos utilizando a palavra function
//está maneira de declarar função aciona o (function Hoisting) este conceito, faz com que todas as funções sejam elevada ao topo do arquivo na execução

tellHello();//aqui funciona normalmente
function tellHello() {
    console.log(`Hello World!! on function tellHello`);
}


//Funções são consideradas FCO(First-class Objects) ou seja podemos tratar as funções como valores que são inseridos em variaveis
//isso abre margem para a criação de functions expressions ou seja criar funções dentro de variaveis veja a seguir  :

//tellExpression(); //retire a função do comentário para ver o erro sendo gerado
const tellExpression = function (complement = ``) {//veja que essa função não possui nome ou seja ela é uma função anonima pertencente a constante tellExpression
    console.log(`Isso é uma function expression${complement}`);
}
tellExpression();//observe na linha 15 que caso tente chamar antes de cria-la gerará um erro


//criar functions expressios é poderoso pois podemos passar uma função como parametro para outra função
function execFunction(f, complement = ` sendo executada por outra função`) {//está é uma função que recebe outra função e a executa, observe que é possível também iniciar parametros, veremos mais sobre na próxima aula;
    f(complement);//função sendo executada por este motivo a chamamos de first class object
}
//executando tellExpression utilizando a função execFunction
execFunction(tellExpression);


//arrow functions são uma contração das functions expressions ela é declarada passando a ára de parametro e um => e o bloco da função veja abaixo :
const tellArrow = () => {//a função continua sendo anonima, e por ela ser anonima não necessita nem declarar a palavra function
    console.log(`Isso é uma function expression utilizando o método declarativo de arrow function`);
}
tellArrow();//observe que para chama-la basta chamar o nome da variavel e adicionar parenteses para executa-la


//Podemos declarar funções dentro de objetos
const pepole = {
    nome: `Luíz`,
    sobrenome: `Gustavo`,
    tellHello() {//podemos declarar a função apenas adicionando o nome dela e o parenteses
        return console.log(`Olá me chamo ${this.nome} ${this.sobrenome}`);
    },
}

pepole.tellHello();//e podemos chamalas utilizando um método como demosntrado nessa linha
