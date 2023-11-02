//escopos lexicos
const nome = `Juninho`

function falaNome() {
    console.log(nome);
}

function falaNomeDois() {
    const nome = `José`
    console.log(nome);
}

function falaNomeTres() {
    const nome = `Pedro`;
    falaNome();//ela utilizou de seu próprio escopoléxicp
}

falaNome();//utilizou a variavel que se encontra no escopo global
falaNomeDois();//utilizou a variavel que se encontrra no escopo léxico da função em questão
falaNomeTres();

// vamos utilizar uma função aninhada
function aninhada() {
    const nome = `Não serrei utilizada`;
    function aninhadoL2() {
        const nome = `Maria`;
        console.log(nome);
    }
    return aninhadoL2;
}

function aninhada2() {
    const nome = `João`;
    function aninhadaL2() {
        console.log(nome);
    }
    return aninhadaL2
}

function aninhada3() {
    function aninhadaL2() {
        console.log(nome);
    }
    return aninhadaL2;
}

let testeDeAninhamento1 = aninhada()
let testeDeAninhamento2 = aninhada2()
let testeDeAninhamento3 = aninhada3()

testeDeAninhamento1()
testeDeAninhamento2()
testeDeAninhamento3()
