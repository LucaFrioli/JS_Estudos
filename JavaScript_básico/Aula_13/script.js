// Mais sobre strings

/*
    **
    *Revisando strings e entendendo melhor seu funcionamento :
    * Uma string pode ser setada como uma const ou uma let sendo inicializada com o valor entre :
    * aspas ("");
    * aspas simples('');
    * crase(``); particularmente recomendo mais essa, para concatenar uma vaariavel basta adicionar ${var};
    * 
    *  Strings são indexadas, ou seja cada caractere é um indice dentro de um array da variavel;
    *  O indice começa em 0 e vai até o fim da variavel;
    * 
    * Podemos passar por um indice específico também utilizando .indexOf('string a ser procurado');
    * Isso retornará o primeiro indice em que a palavra se encontra.
    * Caso ele não encontre, retornará -1;
    * É possível também dizer de onde o programa iniciará varrendo .indexOf("string", indice em que começa a varredura);
    * Se colocar .lastIndexOf(); começará do final da string;
    * 
    * Podemos procurar também um caractere em específico utilisando search() com uma expressão regular /letra ou palavra/.
    * Podemos tbm usar a flag /g no final da expressão;
    * caso ela não exista, retorna -1;
    * 
    * para averiguar o tamanho de string podemos utilizar .length
    * 
    * podemos dividir e assegurar uma string dentro de um array, utilizando a função .split("regra para quando fatiar");
    * oValor da fatia não é incluido no corte;
    * 
    * Temos também como deixar todas as letras em maiusculas ou minusculas, utilizando as funções:
    * .toUpperCase("Deixa a var em maiusculas")
    * .toLowerCase("Deixa a var em minusculas")
    * 
 */
//0123456789...
let texto1 = `Primeira string escrita com tamplate strings.`;
let texto2 = "Segundastring escrita com aspas duplas.";
let texto3 = 'Terceira string escrita com aspas simples';

let texto4 = `teste`;

console.log(`${texto1}\n${texto2}\n${texto3}`);

//Retornando o indice de perguntas específicas indexOf();
console.log(`\nO primeiroindice da palavra aspas no texto3 é : ${texto3.indexOf(`aspas`)}`);
//retorno de erro 
console.log(`Erro ao buscar aspas no texto1 : ${texto1.indexOf(`aspas`)}\n`);


//Buscando indices
console.log(`\nDemosntração de como funciona o indice utilizando o texto1 : ${texto1[5]}\nO indice é o sete, da string : "${texto1}"`);
//também pode ser feito desta outra maneira usando o .charAt()
console.log(`Podemos captar com charAt : ${texto1.charAt(5)}`);

//Utilizando buscas com .search()
console.log(`${texto3}, a primeira letra s está no indice ${texto3.search(/s/)}`);
//retorno de uma busca que não existe, repare que volta -1
console.log(`${texto4.search(/a/)}`);

//podemos também saber quantos caracteres existem dentro de uma string utilizando .length;
console.log(`"${texto1}" tem ${texto1.length} indices`);
console.log(`"${texto2}" tem ${texto2.length} indices`);
console.log(`"${texto3}" tem ${texto3.length} indices`);
console.log(`"${texto4}" tem ${texto4.length} indices`);


//Aqui consigo fatiar e slavar a string fatiada em um vetor, snedo a regra de fatiar o espaço;
const vetorTxt1 = texto1.split(` `);
console.log(`\n \n${vetorTxt1} `)//Aqui retorno o vetor inteiro;
console.log(`${vetorTxt1[3]}`);//Aqui retorno o indice 3 deste vetor, lembre-se ele começa com 0;

//metodos para manipulas caixaAlta/baixa ;
console.log(`Aqui temos um exemplo de toUpperCase: ${texto1.toUpperCase()}`);
console.log(`Aqui temos um exemplo de toLowerCase: ${texto1.toLowerCase()}`);
