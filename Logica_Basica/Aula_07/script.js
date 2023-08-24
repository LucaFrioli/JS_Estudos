//operação ternária

/* **
    *
    *Note que na aula passada injetamos uma classe de validação no paragrafo, onde quando inválido o fundo mudava de cor. Nota-se que foi utilizado uma forma contraida do if else,a qual chamamos de opredores ternários:
    * comparação ? verdadeiro : falso
    * 
    * a estrutura acima é a mesma coisa que isso :
    * if (comparação){
    *   verdadeiro
    * }else{
    *   falso
    * }
    * 
    * 
    * observe como fica mais fácil de lidar com comparações simples dessa forma.
    * 
    * OBS : LEMBRE-SE OS OPERADORES TERNÁRIOS NÃO SUBSTITUEM UMA ESTRUTURA ENCADEADA
    * 
*/


//Vamos usar um exemplo de score de usuário dentro de um aplicativo sendo de 0 a 5;
const scoreMinVIP = 3.5;
const pontuacaoUser1 = 5;
const pontuacaoUser2 = 3;

pontuacaoUser1>=scoreMinVIP?console.log(`Usuário VIP`):console.log(`Usuário Comum`);
pontuacaoUser2>=scoreMinVIP?console.log(`Usuário VIP`):console.log(`Usuário Comum`);


//Vejamos a mesma coisa escrita numa estrutura comum, veja como ela fica maior
if(pontuacaoUser1>=scoreMinVIP){
    console.log(`\nUsuários VIP`);
}else{
    console.log(`\nUsuário Comum`)
}

if(pontuacaoUser2>=scoreMinVIP){
    console.log(`Usuários VIP`);
}else{
    console.log(`Usuário Comum`)
}