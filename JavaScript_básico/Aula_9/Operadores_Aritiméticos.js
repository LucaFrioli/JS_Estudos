//importante utilizar a função Number(variavel), se quiser converter uma string em numero
/* 
    **
    *Exemplo e nomenclatura de operadores aritiméticos : 
    * + (soma) ou (concatenador)
    * - (subtração)
    * / (divisão)
    * * (multiplicação)
    * **(potenciação)
    * %(mod, retorna o resto de uma divisão) 
    *
    * OBS : existe uma ordem de precedencia nesses básicos, vale-se ressaltar que ela respeita a ordem matemática : 
    * Primeiro () tudo que estiver enter parenteses;
    * Segundo (**);
    * Terceiro (/ ou * ou %) qual vir primeiro;
    * Após (- ou +) qual vir primeiro; 
    * 
    *Para mudar a precedencia dos calculos, realizamos o encapsulamento do calculo com ()parentêses, por isso ele se encontra em primeiro lugar 
*/

//definindo const que serão utilizadas durante a execução completa dessa sessão ;

const n1 = 5;
const n2 = 10;
const n3 = 2;//para averiguação do operador mod;
let nString = '1234';

//exemplo de adição funcionando como concatenador 
console.log(`Simbolo de adição funcionando como concatenação ${nString + n1}`);

//exemplo de adição funcionando como operador 
console.log(`Simbolo de adição realizando a soma de ${n1} com ${n2} :  ${n1 + n2}`);

//exemplo de potenciação
console.log(`Potenciação de ${n1} por ${n3} é = ${n1 ** n3}`);

//exemplo do funcionamento do mod
console.log(`Exemplo do mod funcionando com os valores ${n1} e ${n3} , o resultado é igual a ${n1 % n3}`);


/*
    **
    *Operadore sde incremento e decremento :
    * ++(soma um de uma variavel);
    * --(subtrai um de uma variavel);
    * obs : se um dos operadores vem antes da variavel, primeiro é feito o calculo depois exibido o valor, se primeiro vem a variavel e após o operador, é realizado o contrário;
    *
    * Formas contraidas ou operadores de atribuição : 
    * existe como fazer calculos que utilizama mesma variavel, assim é escrito a variavel e depois outra variavel com a qual vai ser feito o calculo;
    * +=
    * -=
    * *=
    * /=
    * **=
    * %=
    * 
 */

let x = 2, y = 3, z = 6;

//Forma contraida por exemplo do calculo z = z+x
z += x;// 6 + 2
console.log(`\n${z} já somado com ${x}`);
console.log(`Formas de incrementos e decrementos pós :  ${y++}`);//3+1 saida 3
console.log(`Resultaado de y da linha passada ${y}`);//resultado da linha anterior 4
console.log(`Resultado do pré incremento ${++y}`);// 4+1 saida 5
y--;// 5 -1 
z /= y;// 8/4
console.log(`O resultado de z é ${z}`);