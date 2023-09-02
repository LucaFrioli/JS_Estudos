//estrutura de repetição for in
/*
    ** O for in itera os indices de um array ou as chaves de acesso de um objeto por exemplo :
    *
    * IMPORTANTE : o for in é mais recomendado par iterar sobre objetos, já que é um looping que interaje da melhor forma cpossivel com esta estrutura, para iterar com arrays é mais recomendado o uso do laç de repetição for of que será visto na aula subsequente 
    * 
    *   Ao fazer isso pode-se acessar o conteúdo em questão, o valor o indiceou da chave no momento da execução
    *   Vamos para um exemplo de sua sintaxe : 
    *   for (let i in objeto/array){
    *       código;
    *   }
    * 
 */

//exemplo com objeto :
const pessoa = {
    nome: 'João',//chave nome
    idade: 30,//chave idade 
    cidade: 'São Paulo'//chave cidade
};

for (let propriedade in pessoa) {
    console.log(`${propriedade/**chave */}  : ${pessoa[propriedade]/**conteúdo da chave */}`);
    //podemos acessar o valr da propriedade também com um array sem necessariamente precisar usar o ponto, isso é muito bom para consulta dinamica de objetos 
}




//exemplo com array não recomendado ao menos se necessário o valor do índice, exemplo, trabalhando com banco de dados ou produzindo alguma feature para algum jogo : 
const frutas =[`Pera`,`Banana`,`Mexerica`];

for(let indice in frutas){
    console.log(`indice ${indice } : ${frutas[indice]}`);
}

console.log(`\n`);