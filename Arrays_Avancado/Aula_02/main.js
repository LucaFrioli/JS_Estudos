//Método Splice
const nomes = [`João`, `Maria`, `José`, `Pedro`, `Lucas`];

const indiceUltimo = (array) => (array.length) - 1 //Não é uma função necessária pois o indice -1 representa o ultimo indice do array

//nomes.splice(indice de inicio, quantidade de delete, adição1,adição2,adição3...)
let removidos = nomes.splice(indiceUltimo(nomes), 1)
console.log(nomes, `\n Removidos : `, removidos+`\n`);
nomes.push(`Lucas`);//retornar o array para seu estado natural
//temos o mesmo resultado de forma mais fácil
removidos = nomes.splice(-1, 1);
console.log(nomes, `\n Removidos : `, removidos+`\n`);
nomes.push(`Lucas`);//retornar o array para seu estado natural

//Podemos também relizar trocas em indices específicos
removidos = nomes.splice(-2, Number.MAX_VALUE,`Olá`,`mundo`);//a remoção ocorre do indice definido a diante, nunca será removido um indice anterior, o metodo number.max_value, retira todos os indices que estão na frente o indice inicial;
console.log(nomes, `\n Removidos : `, removidos+`\n`);
