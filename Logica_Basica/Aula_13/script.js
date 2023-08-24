// Atribuição via desestruturação com Objetos : 

//obs: é possível estanciar um objeto dentro de outro objeto :
const pessoa = {
    nome: `José`,
    sobrenome: `Silva`,
    idade: 35,
    endereco: { 
        rua: `São José`,
        numero: 365
    }
};


const { nome, sobrenome, ...rest } = pessoa;//posso fazer a chamada de atributos e adicionar uma variavel com um set pré definido, posso atribuir dentro da variavel  chamando ela pelo nome do atributo, e deixar o resto do objeto com uma variavel utilizando o operador rest
console.log(nome, sobrenome, rest);
console.log(pessoa);
//podemos também pegar valores que estão dentro de subObjetos : 
const { endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome, rua, numero);
