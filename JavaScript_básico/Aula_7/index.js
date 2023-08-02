//Diferenças básicas entre var e let
var nome = 'Pedro';
var nome = 'Silvano';

/*
   **
    *observe que  o código até o momento não retornou nenhum erro, isso se dá por um problema que 
     a var havia, esta feature foi corrigida junto ao ECS6;
    *A declaração de variaveis diversas vezes pode gerar alguns erros ao longo do código;
*/
console.log(nome);

//Agora observe o comportamento da let quando redeclarada

let idade = 40;
let idade =41;

/*
    **
    *Ela gera um erro evitando assim geração de bugs ou comportamentos anormais do sistema;
    *para realizar a mudança de uma let é só colocar o nome da variavel e relaizar a mudança;
    *Comente as linhas com erro para proseguir e ver a mudança;
*/

let peso = 95;
peso = 85;//note que agora não é gerado erro;

console.log(peso);
console.log(idade);
