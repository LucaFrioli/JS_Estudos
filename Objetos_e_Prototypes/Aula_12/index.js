//Object.Map

//caso em que é propício utilizar Objec.map

const pessoas = [
    { id: 2, nome: `José` },
    { id: 3, nome: `Maria` },
    { id: 1, nome: `António` },
];

const novasPessoas = Object.create(null);
for (let pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas);//observe que nesse caso os números foram ordenados, e o indice criado foi uma string, o que pode gerar um erro em uma aplicação real, para contornar esse erro existe o Map ();

const nPessoasCorreto = new Map();
for (let pessoa of pessoas) {
    const { id } = pessoa;
    nPessoasCorreto.set(id, { ...pessoa });
}

console.log(`\n`)

console.log(nPessoasCorreto);//veja que a ordfem se mantem e o indice agora é um numero
//para recuperação de chaves basta utilizar o metodo get(chave do objeto );
console.log(`\n`)

console.log(nPessoasCorreto.get(3));
console.log(`\n`)

//Podemos iterar sobre o objeto criado gerando um array  :
for (let [ind, { id, nome }] of nPessoasCorreto) {
    console.log(`o número de identificação é ${ind}, e contém a pessoa: ${nome}, com id ${id}`);
}

console.log(`\n`)
//podemos iterar sobre as chaves
for (let key of nPessoasCorreto.keys()) {
    console.log(key);
}

// podemos deletar chaves específicas
console.log(`\n`)
nPessoasCorreto.delete(2);
console.log(nPessoasCorreto);
