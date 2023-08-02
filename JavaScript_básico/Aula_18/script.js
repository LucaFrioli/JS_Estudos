//Arrays básico

/* 
    **
    * Dicas e prioridades : 
    * Importante sempre de preferencia a .push(){linha 28} e .pop(){linha 40}
    * Fatiamento também é uma coissa importante para recuperar indices especificos .slice(elementoInicial, elementoFinal);
    * Aprenda bem a instanceof Array para ter mais certezas do que duvidas; {linha 59}
    * 
 */

// Para criar um array basta declarar abrindo colchetes, Os arrays são considerados listas 
const nomes = [`Lucas`, `Maria`, `José`];
console.log(nomes);
//OBS: boa pratica utilizar apenas um tipo de dado dentro de uma array

//curiosidade,os arrays são indexados por elementos, as strings são indexadas por letras;
// Caso eu queira alterar um indice do array podemos declarar o arrai mais o indice envolto em colchetes, e alterar.
nomes[0] = `João`;
//também podemos adicionar itens nesse array observe os dois modos
nomes[3] = `Pedro`;
console.log(`Array com um nome adicionada  : ` + nomes);


// ou utilizar outras maneira mais dinâmica
nomes[nomes.length] = `Felipe`;
nomes[nomes.length] = `Tadeu`;
//Sendo essa seguinte a mais recomendada, utilizando o metodo .push() para adicionar ao final do array e:
nomes.push(`Matheus`, `André`);
console.log(nomes);
//Esta outra maneira para adicionar no inicio do array .unshift();
nomes.unshift(`Lucas`);
console.log(`Aqui está o array com o nome inserido no inicio da lista : `);
console.log(nomes);
console.log(`\n`);

//#############################################################################
// Vamos iniciar o processo de retirada dos nomes que foram adicionados 
//metodo .pop() retira o ultimo elemento do array podemos salvar os elementos que foram removidos
//metodo .shift() retira do começo;
let removidoDoFinal = nomes.pop();
let removidoDoComeco = nomes.shift();
console.log(nomes);
console.log(`O nome removido foi : ${removidoDoFinal}`);
console.log(`O nome removido do começo foi : ${removidoDoComeco}\n`);

// podemos deletar indices que estão no meio com delete var[numero do indice]
delete nomes[1];
console.log(nomes);

//Caso acessarmos um indice inexistente será retornado um valor undefined;
console.log(`\nVeja quando acessamos um indice inexistente : `);
console.log(nomes[10]);

//podemos recuperar intervalos do array usando .slice()
console.log(`\n` + nomes.length);//retorna a quantidade de elementos que tem no array
console.log(nomes.slice(0, 4));//retornará os elementos dos indices 0 até 3 obs: o 4 não é incluso

// para ter certeza que uma variavel é um array podemos ussar a expressão var instanceof Array
console.log(`\nNomes é um array ? ${nomes instanceof Array}`)
