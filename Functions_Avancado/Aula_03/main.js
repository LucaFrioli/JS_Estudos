//Conceitos de retorno de funções

function soma(a = 1, b = 1) {
    return a + b;
}
const r1 = soma(2, 3);
console.log(r1)

function retornaPessoa(nome, sobrenome) {
    return { nome, sobrenome };//aqui ele está reagindo de forma similar a desestruturação, a linguagem assume que atributos com nomes iguais aos parâmetros retornará e salvará o valor do parametro em um atributo com o mesmo nome veja o retorno de João da Silva
}
console.log(retornaPessoa(`João`, `da Silva`));
const rp1 = retornaPessoa(`José`, `Medeiros`);
console.log(rp1.nome, rp1.sobrenome);

//Funções que retornam funções
function falaOi(saudacao = `Olá...`) {
    function continuidade(complemento) {
        return console.log(`${saudacao}  ${complemento}`);
    }
    return continuidade;
}

const teste = falaOi(`oi...`)(`Você me ouve`);
// console.log(teste);

// vamos dar um exemplo mais real
function multiplica(multiplicador) {
    return function multiplicar(n) {
        return n * multiplicador;
    }
}

const duplica = multiplica(2);
const triplica = multiplica(3);
const quadriplica = multiplica(4);
const n = 2;

console.log(duplica(n))
console.log(triplica(n))
console.log(quadriplica(n))
