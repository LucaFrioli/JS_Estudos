//Métodos úteis para objetos

/*
**
    * Revisão de métodos já vistos
    * Object.keys(objectName) Método que facilita a vixualização das chaves do objeto poupando linhas e escritas de for in
    * Object.freeze() que trava atributos e/ou metodos específicos ou gerais
    * Object.defineProperty() que permite trabalhar a especificidade de um único atributo ou método { enumerablle, value, writeblle, configurablle}
    * Object.defineProperties() permite fazer a mesma coisa que o anterior, porém em mais de um atributo ou método
    *
**/

//criação de objeto por ContructorFunction utilizando Object.defineProperty/Object.defineProperties, Utilizando Object.freeze e Object.keys
function Person(name, lastname, age, height, weight) {
    Object.defineProperty(this, `name`, {
        set: (value) => name = value,
        get: () => name,
        configurable: false,
        enumerable: true,
    });

    this.lastname = lastname;
    this.age = age;
    this.height = height;
    this.weight = weight;

    Object.defineProperties(this, {
        compleatName: {
            value: () => `${this.name} ${this.lastname}`,
            writable: false,
            configurable: false,
            enumerable: true
        },

        imcPoints: {
            value: () => (this.weight / ((this.height / 100) ** 2)).toFixed(2),
            writable: false,
            configurable: false,
            enumerable: true
        }
    });

    this.imcResult = (imcPoint = this.imcPoints()) => imcResponse(imcPoint)
    Object.freeze(this.imcResult(), this.imcPoints(), this.compleatName());//travar para que o vaslor da chave não seja alterada qw

}

function imcResponse(value) {
    if (value < 18.5) {
        return `Abaixo do peso`
    } else if (value < 24.9) {
        return `com Peso normal`
    } else if (value < 29.9) {
        return `Sobrepeso`
    } else if (value < 34.9) {
        return ` com Obesidade grau 1`
    } else if (value < 39.9) {
        return `com Obesidade Grau 2`
    } else {
        return `com Obesidade Grau 3`
    };
}

const p1 = new Person(`Pedro`, `Cunha`, 17, 175, 87);
console.log(Object.keys(p1));
console.log(`\n${p1.compleatName()} pesa ${p1.weight}Kg e tem ${p1.imcPoints()} pontos no imc estando ${p1.imcResult()}\n\n`);


//trabalhando Novos métodos

const produto = { nome: `produto`, preco: 1.8 };
const aponta = produto; //as duas constantes apontam para o mesmo endereço de memoria
const caneca = { ...produto, material: `Porcelana` };//com o spread copiamos de um endereço de memória para outro a mesma informação
const colher = Object.assign({}, produto, { material: `Madeira` });//foi feita a mesma coisa que o spread operator

produto.preco = 4.85;
caneca.nome = `Caneca`;
colher.nome = `Colher`;


console.log(`Novos Métodos : \n`);

console.log(produto);
console.log(aponta);
console.log(caneca);//observe que outracoisa não foi afetado pela mudança de preço
console.log(colher);//observe que também fooi copiado o produto, e após modificadop a valor da chave

//Podemos ver as propriedades das chaves caso queiramos, observe :
console.log(`\nObject.getOwnPropertyDescriptor() :\n`);
//                                          objeto    chave
console.log(Object.getOwnPropertyDescriptor(produto, `nome`));
console.log(`\n`, Object.getOwnPropertyDescriptor(p1, `name`));
console.log(`\n`, Object.getOwnPropertyDescriptor(p1, `compleatName`));

//podemos enumerar os valores das chaves e salva-los em um array
console.log(`\nObject.values() : \n`);
console.log(`\n`, Object.values(produto));
console.log(`\n`, Object.values(caneca));
console.log(`\n`, Object.values(colher));
console.log(`\n`, Object.values(p1));

//Podemos ler tanto chaves quanto valores em um array com Object.entries
console.log(`\nObject.entries() : \n`);
console.log(`\n`, Object.entries(produto));
console.log(`\n`, Object.entries(caneca));
console.log(`\n`, Object.entries(colher));
console.log(`\n`, Object.entries(p1));

