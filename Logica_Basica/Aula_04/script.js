//if else 

/*
    **A estrutura if serve para executar uma estrutura de dados caso uma compração seja satisfeita ou seja retorna um valor true:
    *
    * if é equivalente a se , e sua sintae é descrita como a seguir :
    * ex : If(condição comparativa com concatenação eventual de && ou ||){
    *   estrutura a ser executada caso a comparação retorne um valor verdadeiro;
    * }
    * 
    ** Temos também a estrutura caso a rimeira não seja satsfeita qual se denomina else :
    * 
    * else é equivalente a senão,logo se a primeira estrutura não for satisfeita é executado a segunda estrutura : 
    * ex: 
    * if(comparação){
    *   resposta caso satisfeita
    * }else{
    *   resposta caso não satisfeita
    * }
    * 
    * opodemos concatenar um else com mais uma comparação, utilisando a sequencia depalavras else if(){}
    * if(comparação){
    *   resposta caso satisfeita
    * }else if(comparação2){
    *   resposta caso comparação2 satisfeita
    * }else{
    *   caso nenhuma das outras sejam satisfeitas;
    * }
    * 
*/

//Vamos para um exemplo prático : 
const horaTeste = 25;

if (horaTeste >= 6 && horaTeste < 13) {//caso a hora teste formaior ou igual a 6 e menor que 13 sendo ele horas, o programa retorna bom dia 
    console.log(`Bom dia !!`);
} else if (horaTeste >= 13 && horaTeste < 18) {//caso horas seja igual ou maior que 13 e menor que 18 retornará boa Tarde
    console.log(`Boa Tarde !!`);
} else if (horaTeste <= 5.9 || horaTeste <= 24.99) {
    console.log(`Boa noite !!`);
} else {
    console.log(`Hora inválida`)
}
