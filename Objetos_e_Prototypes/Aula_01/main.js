// revisando conceitos :

//Criação de objetos :
// Objetos LIterais  :
const objectLiteral = {//sempre que declarar um objeto literal é necessário iniciar a chave com o valor
    Nome: `José`, //par chave : valor
    Idade: 12,
    //Métodos dentro de objetos são interessantes para realizar ações utilizando valores privados ao objeto em questão
    getYearOfBirth() {
        const now = new Date().getFullYear();
        return now - this.Idade;
    },
    talkName() {
        console.log(`Olá me chamo ${this.Nome} e nasci em ${this.getYearOfBirth()}\n`)
    },
};
objectLiteral.Idade = 16;//podemos modificar o valor de uma chave, mas não mudar o endereçamento da memoria dele d
const chave = `Idade`;
console.log(`${objectLiteral.Nome} tem ${objectLiteral[chave]} anos`);// aqui a dois modos de acessos aos atributos de um objeto, observe que o segundo modo com os colchetes, permite realiizar acessos dinâmicos dos atributos do objeto
objectLiteral.talkName();
Object.freeze(objectLiteral);


//Objetos por Construtor
const objectWhithConstrutor = new Object();
objectWhithConstrutor.Nome = `Maria`;
objectWhithConstrutor.Idade = 27;//aqui contruimos os atribnutos do objeto
//aqui vamos contruir os métodos do objeto
objectWhithConstrutor.getYearOfBirth = function () {
    const now = new Date().getFullYear();
    return now - this.Idade;
};
objectWhithConstrutor.talkName = function () { console.log(`Olá me chamo ${this.Nome} e nasci em ${this.getYearOfBirth()}\n`) };
console.log(`${objectWhithConstrutor.Nome} tem ${objectWhithConstrutor[chave]} anos`);
objectWhithConstrutor.talkName();


//MÉTODOS MAIS RECOMENDADOS DE CRIAÇÃO DE OBJETOS :  FACTORY FUNCTIONS E CONSTRUCTION FUNCTIONS
//Os métodos de criação citados são melhors pois permitem reuso de código, além de definir melhor padrões de projetos  :
//#############################################################################################################################################

//FACTORY
function factoryFunc(Nome, Idade) {
    return {
        Nome,
        Idade,
        //Métodos dentro de objetos são interessantes para realizar ações utilizando valores privados ao objeto em questão
        getYearOfBirth() {
            const now = new Date().getFullYear();
            return now - this.Idade;
        },
        get talkName() {
            console.log(`Olá me chamo ${this.Nome} e nasci em ${this.getYearOfBirth()}\n`)
        },
    }
}
const Jonas = factoryFunc(`Jonas`, 44);
console.log(`${Jonas.Nome} tem ${Jonas.Idade} anos`);
Jonas.talkName;

//CONSTRUCTION
function ConstructionFunc(name, age) {
    this.Nome = name;
    this.Idade = age;
    this.getYearOfBirth = () => {
        const now = new Date().getFullYear();
        return now - this.Idade;
    };
    this.talkName = () => {
        console.log(`Olá me chamo ${this.Nome} e nasci em ${this.getYearOfBirth()}\n`);
    };
}
const Lucas = new ConstructionFunc(`Lucas`, 21);
console.log(`${Lucas.Nome} tem ${Lucas.Idade} anos`);
Lucas.talkName();


//podemos iterar sobre o objeto descobrindo os nomes de suas chaves com for in
console.log(`\nIteração sobre as chaves de ambos os objetos : `);
console.log(` Objeto objectLiteral : `);
for (let key in objectLiteral) {
    console.log(`  ${key}`);
}

console.log(`\n Objeto objectWhithConstrutor : `);
for (let key in objectWhithConstrutor) {
    console.log(`  ${key}`);
}

console.log(`\n Objeto Jonas instância de factoryFunc : `);
for (let key in Jonas) {
    console.log(`  ${key}`);
}

console.log(`\n Objeto Lucas instância de factoryFunc : `);
for (let key in Lucas) {
    console.log(`  ${key}`);
}

//comparação de criação de objetos
console.log(`\nAqui está os objetos e suas estruturas para a realização das comparações`);
console.log(` `, objectLiteral);
console.log(` `, objectWhithConstrutor);
console.log(` `, Jonas);
console.log(` `, Lucas);

//podemos apagar chaves de objetos caso necessário com delete
objectLiteral.Idade = 12;
delete objectLiteral.talkName;
delete objectWhithConstrutor.talkName;
delete Jonas.talkName;
delete Lucas.talkName;
console.log(`\n\nObjetos com uma de suas chaves apagadas :`);
console.log(` `, objectLiteral);//observe que a tentativa de mudança foi fracassada isso graças ao Object.freeze
console.log(` `, objectWhithConstrutor);
console.log(` `, Jonas);
console.log(` `, Lucas);
