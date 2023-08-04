//Opreadores lógicos
/*
    ** OPERADORES LÓGICOS :
    * temos três :
    * - && -> and -> e
    * - || -> or -> ou
    * - ! -> not -> não 
    * 
*/

//VAmos começar a demonstração com valores literais : 
console.log(`Utilizando && com dois literais true : ${true && true}`);
console.log(`Utilizando && com um literal true e outro false : ${true && false}`);
console.log(`Utilizando && com dois literais false : ${false && false}\n`);
//perceba que nos dois ultimos retornaram false, logo conclui-se que ambas as comparações ou literais devem retornar true para o retorno da expressão também ser true

console.log(`Utilizando || com dois literais true : ${true || true}`);
console.log(`Utilizando || com um literal true e outro false : ${true || false}`);
console.log(`Utilizando || com dois literais false : ${false || false}\n`);
//Observe que apenas o ultimo retornou falso, logo conclui-se que na expressão em que se utiliza || para ser verdadeira pode ser um ou outro literal ou comparação retornando verdaeiro para a expressão completa ser verdadeira;

console.log(`Utilizando o operador ! podemos inverter o valor de  um retorno lógico de variveis ou valores literais observe : `);
console.log(`Uma expressão que era para retornar ***${true &&true&&true}*** com este operador retorna :  ${!(true &&true&&true)}`);