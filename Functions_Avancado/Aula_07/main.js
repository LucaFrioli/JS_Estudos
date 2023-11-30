//IIFE (Funções imediatas ou funções auto-invocadas, Immediatly Invoked Function Expression)
const test = `Hello World`;
(function (test) {
    const name = `José da Silva Sauro`
    console.log(name, `\n`, test);
})(test); // o segundo parênteses, executa a função imediatamente, além de servir para receber params;/

const name = `Joãozinho Cavalcante`;//observe que uma função auto-invocada possuí escopo léxico próprio, oq traz uma maior segurança dos dados que estarão sendo tratados dentro dela, além de não precisar de nenhuma linha extra para executa-la, ou seja protegemos o código dentro dos primeiros parênteses;

(function () {
    //  Observe que também podemos fazer funções, e colocar tudo que colocamos dentro do escopo global dentro  do escopo global

    const lastname = `Cavalcante`;
    function createName(name) {
        return `${name} ${lastname}`;
    }

    function showName() {
        console.log(createName(`João`))
    }

    showName();
})();
