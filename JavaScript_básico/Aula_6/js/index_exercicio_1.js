let nome = 'José', sobrenome = 'Silva';
const alturaEmM = 1.78, idade = 40, peso = 95;// Definido como constante apenas para utilização dentro do exercício;
let anoNiver, imc;

const dataAtual = new Date();
const diaAtual = dataAtual.getDay();//Caso algúem pense em utilizar o dia aqui já está declarado
const mesAtual = dataAtual.getMonth();//Caso algúem pense em utilizar o mes aqui já está declarado
const anoAtual = dataAtual.getFullYear();

anoNiver = anoAtual - idade;
imc = peso / Math.pow(alturaEmM, 2);

console.log(`${nome} ${sobrenome} tem ${idade}, e nasceu em ${anoNiver}, tem ${peso}kg, mede ${alturaEmM}metros e tem seu imc = ${imc.toFixed(2)}`);

//para mais informações, averiguar as anotações na raiz JavaScript_básico