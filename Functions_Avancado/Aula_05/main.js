//Clousures

function returnFunction(nome) {
    const name = `João`;
    return function () {
        return name+` e `+nome;
    }
}

const func1 = returnFunction(`Maria`);//quando ela é declarada aqui ela precisa lembrar de todo seu escopo léxico ou seja, lembrar da estrutura de seus vizinhos mais externos, neste caso os acessos da variavel name que se encontra na função pai, sua atribuição como func1, e o escopo global, além do parametro agregado que a func1 carrega como passagem de parametro, todos os valores ficarão salvos dentro da aba clousure dentro do console.dir
const func2 = returnFunction(`José`)//observe que o valor agregado de retorno que se encontra na função pai não se altera mas o valor passado dentro do param mudou, assim podemos utilizar diversos valores dentro de uma função só.
console.log(func1(),`\n`,func2());
console.dir(func1);
console.dir(func2);
