//Valores primitivos e  valores por referencia 

/* 
    **
    *
    * primitivos imutaveis = Tipo : String, Number, boolean, undefined, null (bigint, symbol)
    * Referências  : objetos, arrays e functions; as variaveis quando são atribuidas as outras fazem um pointer na memoria
    * 
 */

let a = `a`;
let b = a; //Aqui há uma cópia logo são variaveis independentes, isso ocorre em variaveis primitivas

console.log(a, b);

a = `João`;
console.log(a, b);// Não há diferença no valor de b, porém a mudou;

//Vejamso um caso de referencia 
let referencia = [1, 2, 3, 4];
let demo = referencia;// aqui demo está aontando pra o mesmo lugar na memória que a 

console.log(referencia, demo);

//vamos adicionar algum valores a referencia

referencia.push(5, 6, 7);
console.log(`Veja a referencia com os números adicionados :  ${referencia}`);
console.log(`Veja agora o retorno de demo: ${demo}`);//demo não salvou e se alterou conforme a referencia se alterou também;

demo.pop();
console.log(`Perceba que tanto referencia quanto demo foram afetados pelo metodo .pop() :`);
console.log(referencia, demo);

//Caso queiramos fazer uma cópia de um referenciado usamos [...var] em caso de array {...var };
demo = [...referencia];//nessecaso qualquer modificação que fizermos com referencia agora não afetará demo
referencia.pop();
console.log(`Veja que neste caso apenas o valor de referencia foi afetado pelo método .pop() :`);
console.log(referencia, demo);


//vejamos um exemplo dentro de uma função
function criaProdutos(marca, tipo) {
    return { marca, tipo };
}

const produto1 = criaProdutos(`Xiaomi`, `Celular`);
let produto2 = produto1;

console.log(`\nSegue as duas variaveis uma seguida da outra respectivamente : `);
console.log(produto1, produto2);

produto1.tipo = `Computador`;

console.log(`\nAqui apenas mudei o atributo tipo do produto1 veja que ambos mudaram  :`);
console.log(produto1, produto2);

produto2 = { ...produto1 };
produto1.tipo = `Veículo`;

console.log(`\nAgora o produto2 está com uma cópia do ultimo valor referenciado a produto1, e produto 1 foi modificado :`);
console.log(produto1, produto2)