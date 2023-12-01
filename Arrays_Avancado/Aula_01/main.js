//Revisão de conceitos básicos sobre array
const nomes = [`Maria`, `José`, `João`]; // Array literal
nomes[2] = `lucas`;
console.log(nomes);
delete nomes[2]
console.log(nomes)

const nome = new Array(`teste`, `José`, `Pedro`); //Array contruido a diferÊnça é como ele é declarado
nome[2] = `lucas`;
console.log(nome);
delete nome[2]
console.log(nome)

// arrays não são atribuidos, mas sim passados por referÊncia
console.log(`\nArray Passado por referência : `);
const novo = nomes;
nomes.push(`nome`);
console.log(novo);
const removido01 = novo.pop();//lembre-se que dá para salvar o elemento removido
console.log(nomes);

//Porém existe uma formas de copiar utilizando o operador spread
console.log(`\nArray atribuido a outro : `)
const novo2 = [...nomes]
nomes.push(`nome`);
console.log(novo2);
const removido02 = novo2.pop();
console.log(nomes);
console.log(novo2)

//RESGATANDO TAMANHO DE ARRAY
console.log(`\n\nTamanho dos arrays : \n Nomes : ${nomes.length}\n Nome : ${nome.length}\n Novo : ${novo.length}\n Novo2 : ${novo2.length}`);
console.log(`Elementos removidos  : \n  ${removido01} e ${removido02}\n`);

//recuperando quantidade de indices
console.log(`Recuperando os primeiros três indices do seguinte array : `)
nomes.push(`seilá`, `teste`, `fulano`, `cicrano`);
console.log(nomes)
//supondo que queiramos apenas os tres primeiros :  utilizamos
const firstThree = nomes.slice(0,3);
console.log(firstThree)

//Transformar String em arrays
const frase = `Assassin's Creed é o melhor jogo do mundo`;
const melhorArrayDoMundo = frase.split(` `);
console.log(`\n`,melhorArrayDoMundo);
// unido todos os valores novamente
const melhorFrseReconstituida  = melhorArrayDoMundo.join(` `);
console.log(melhorFrseReconstituida);

