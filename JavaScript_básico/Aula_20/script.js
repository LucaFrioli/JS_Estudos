//objetos básico

/*

    **
    * Curiosidade sobre a aula de arrays :
    * Quando definimos uma constante, não podemos alterá-la, porem se ela for um array, podemos alterar os      valores da lista 
    * 
    * #####################################################################################################
    *  Podemos criar objetos utilizando var{atributos,atributo2}, no momento vamos nos ater apenas a esta aula mais a diante tereemos momentos de aprofundar no assunto :
    * EX : 
    *   const pessoa = {
    *       nome : ``,
    *       sobrenome : ``,
    *       idade : number
    *   }; //<= note que existe o ponto e virgula
    * 
    * Para acessar o conteudo desse objeto basta declarar o nome da variavel um ponto e o atributo;
    * ex:
    *   pessoa.nome;
    * 
    * podemos automatizar a criação de objetos deixando o código um pouco mais inteligente e dinâmico criando funções que chamamos de factorys.
    * ex : 
    * function criaPessoa(nome,sobrenome,idade) = {
    *       return{
    *           nome//atributo : nome//Parametro,
    *           sobrenome : sobrenome,
    *           idade : idade
    *        };
    *   }
    * 
    * Podemos deixar subentendido na fábrica pois o javaScript já entende os parametros
    * ex de como fazer a mesma coisa anterior de forma mais enxuta:
    *   function criaPessoa(nome,sobrenome,idade){
    *       return{nome, sobrenome, idade};
    *   }  
    * 
    *  //para inicializar basta utilizar a mesma maneira aprendida na aula passada  
    * 
    *   const pessoa1 = criaPessoa(``,``,number);
    * // o acesso é feito apartir do ponto atributo da mesma maneira ;
    *   console.log(pessoa1.nome);//invocação do atributo nome do objeto;
    * 
    * podemos fazer os objetos também executarem funções  obeserve o  ex : 
    * 
    *  const pessoa = {
    *       nome : ``,
    *       sobrenome : ``,
    *       idade : number,
    *       falar(){
    *           console.log(`Olá meu nome é ${nome}, e tenho ${idade} anos`);
    *       }
    *   }; 
    * 
    *
*/

//Exemplo sobre a curiosidade retire o bloco de comentário para testar
/*
const array = [1, 2, 3];
//Está correto manipular a lista com os métodos citados anteriormente ex:
array.push(4);
array[0] = `João`;//não recomendado, utilize .unshift(), utilizado por mera demonstração OBS: melhor pratica .push()
// está incorreto as seguintes maneiras de trabalhar com constante :
array = "Luiz";//isso retornará um erro
*/

//VAmos começar com um exemplo do por qual motivo devemos utilizar objetos :
const nome01 =`João`;
const sobreNome01 =`Da Silva`;
const idade01 = 32 ;

const nome02 =`Maria`;
const sobreNome02 =`Beltrana`;
const idade02 = 45 ;

//Se precisassemos criar um programa que suportasse muito mais pessoas iria ficar inviavel, assim podemos começar a trabalhar com objetos, vamos colocar em pratica a teoria, utilizando as maneiras melhores : 

//criaremos uma factory com parametros já sendo subentendidos como atributos

function criarPessoa (nome,sobrenome,idade){
    //objeto pessoa
    return {
        nome, 
        sobrenome, 
        idade, 
        /*Curiosidade sobre funções dentro de objetos, podemos ter mais de uma */
        fala(){
            console.log(`Olá meu nome é ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos!`);
        }
    }; 
}

const pessoa1 = criarPessoa(`João`,`Da Silva`,32);
const pessoa2 = criarPessoa(`Maria`,`Beltrana`,45);
console.log(pessoa2);//para chamar o objeto
console.log(pessoa2.nome,pessoa2.sobrenome,pessoa2.idade)//para assesar os atributos 
console.log(pessoa1.fala());
