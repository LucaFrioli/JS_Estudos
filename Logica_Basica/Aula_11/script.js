//ainda mais sobre var let e const 

/*
    **
    *   lembre-se sempre que uma let é declarada, com um nome , não se pode declarar outra let com o mesmo nome dentro DO MESMO ESCOPO, caso ela se encontre dentro de um outro escopo dentro do mesmo código ela poderá sim ser declarada, porém deve-se lembrar que dentro do escopo em que ela se encontra, terá prioridade em relação até mesmo que a mesma declarada de forma global, isso se chama escopo de bloco.
    * 
    * let tem escopo de bloco ou seja tudo que está dentro de chaves {};
    * 
    * a let também corrigiu o problema de hoisting que havia na var;
    * 
    * 
 */

const verdade = true;
var nome = `João` ;//ela esta sendo criada 
let nome2 = `Luca` ; //ela está sendo criada dentro do  escopo global;
console.log(`Veja que luca irá se alterar dentro do if porém retornará ao seu estado natural após o if já joão não : `);
console.log(`Primeira demonstração : ${nome} ${nome2}`);

if(verdade){
    var nome = `José`;//Aquie só está sendo mudado o valor ou seja REDECLARANDO
    let nome2 = `Silva`;//essa variavel pode ser declarada por conta que se encontra dentro de um bloco de execução ou seja está sendo CRIADA uma nova variavel dentro do bloco if;
    console.log(`Segunda demonstração : ${nome} ${nome2}`);
}

console.log(`Terceira demonstração : ${nome} ${nome2}`);//note que o nome não se manteve João, oq pode gerarprobleamas em códigos mais complexos
nome2 = `Silva`;//ALTERANDO o seu valor
console.log(`Quarta demonstração : ${nome} ${nome2}`);//Agora sim consigo mudar globalmente o Luca


