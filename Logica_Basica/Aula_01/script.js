/*
    **
    * Operadores de comparação dentro da linguagem:
    * <  (menor)
    * >  (maior)
    * <= (menor ou igual)
    * >= (maior ou igual)
    * == (igualdade)[só checa valor] ************ Não recomendado
    * === (igualdade estrita)[cehca valor e tipo]
    * != (difierente) ******************* Não recomendado
    * !== (diferente estrito)
    * 
    * 
    * Podemos adicionar as comparação dentro de variaveis que nos retornarão verdadeiro ou falso 
    * 
*/

console.log(`Veja que toda expreção asseguir retornará um valor booleano : `);
console.log(`1. ${10 < 5}`);
console.log(`2. ${10 <= 10}`);
console.log(`3. ${10 > 5}`);
console.log(`4. ${10 <= 5}`);
console.log(`5. ${10 == `10`}`);//note que aqui há um retorno verdadeiro
console.log(`6. ${10 === `10`}`);//E aqui há um retorno falso, por conta que o segundo dez é uma string
console.log(`7. ${10 != 5}`);//Aqui me retornará como verdadeiro já que 10 é diferente de 5 troque por 10 para ver um resultado diverso
console.log(`8. ${10 !== `10`}\n`);//Aqui tbm terei um retorno verdadeiro pois o segundo dez é uma string sendo extritamente diferente que o primeiro dez

//----------------------------------------- Observe a atribuição de expressões dentor de variaveis --------------------------------------------
const um = 1 < 0;
const dois = 1 > 0;

console.log(um, dois);

const n0 = `10`;
const n1 = 10;
const n2 = 5;
const n3 = `5`;
//vamos mostrar por qual motivo é melhor utilizar o estritamente igual ou o estritamente diferente 
console.log(`Observe que temos uma string e um número,observe quando fazemos a comparação simples : ${n0 == n1} e ${n2 != n3}`);
console.log(`Sabemos que este resultado não é real, para resolver isso fazemos da seguinte maneira : ${n0 === n1} e ${n2 !== n3}`);//observe que o segundo dá true por conta de ser uma string e o primeiro dá false por tentar ser uma igualdade de texto com numero;