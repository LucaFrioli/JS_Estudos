//manipulando prototypes

// toda vez que um objeto é criado é gerado dentro dele um [[Prototype]]
const obj1 = {
    obj1: `1`,
    //aqui temos um [[Prototype]] unico
}

const obj2 = {
    obj2: `2`,
    //aqui também temos criado um[[Prototype]] único
}

//para criar uma cadeia de prototipos de um objeto aou outro utilizamos Object.setPrototypeOf(objeto receptor, objeto doador )
Object.setPrototypeOf(obj2, obj1);//aqui temos a cadeia do objeto 2 modificada, sendo a ordem de busca nesse momento obj2->obj1->[[Prototype]] assim conseguimos recuperar a chave obj1 do objeto 1 apartir do objeto 2, podemos criar também apartir disso uma cadeia de herança observe :

const obj3 = {
    obj3: 3,
}

const obj4 = {
    obj4: 4,
}

Object.setPrototypeOf(obj3, obj2);//obj3 segue a trilha encadedada de todos os prototipos de ob2 inclusive o prtotype do obj1
Object.setPrototypeOf(obj4, obj1);//aqui iniciamos um novo braço da cadeia de prototipos, logo obj4 só recebe o prototype de obj1

console.dir(obj1);
console.dir(obj2);
console.dir(obj3);
console.dir(obj4);

//para ver a cadeia de prototipos podemos utilizar Object.getPrototypeOf(nomeDoObjeto);
console.log(Object.getPrototypeOf(obj3));


//vamos para um caso de uso mais próximo a um real :
function Product(name, price) {
    this.name = name;
    this.price = price;
}
//manipulando e criando o protótipo de Product :
Product.prototype.desconto = function (discount) {
    this.price = (this.price - (this.price * (discount / 100)));
}

Product.prototype.aumento = function (discount) {
    this.price = (this.price + (this.price * (discount / 100)));
}

//criação de objetos para consumir o prototipo criado de Product :

//consumo por objeto criado via contructor functions
function Car(marca, cor, price) {
    this.marca = marca;
    this.cor = cor;
    this.price = price;
}
//configurando o uso de prototipo :
Object.setPrototypeOf(Car.prototype, Product.prototype);//aqui trocamos o prototype de Car para Product mantendo o construtor Car


//Via Object.crate(prototipo a se usar, manipulação do corpo e chave dos objetos ) :
const videoGameConsole = Object.create(Product.prototype, {//aqui já definimos qual protótipo o objeto utilizará logo de começo, e definimos o corpo dentro das chaves de forma opcional, ou adicionameos as chaves conforme formos chamando a :  variavel.chave = valor
    model: {
        value: `Xbox`,
        writable: false,
        enumerable: true,
        configurable: false,
    },
    price: {
        value: 3000,
        writable: true,
        enumerable: true,
        configurable: false
    },
    generation: {
        value: `One S`,
        writable: true,
        enumerable: true,
        configurable: true,
    }

});
videoGameConsole.desconto(10);//consumo do prototipo criado

const tshirt = new Product(`Camiseta`, 50);
tshirt.aumento(10);//consumo do prototipo criado

const corolla = new Car(`Toyota`, `preto`, 45000);
corolla.desconto(100);//consumo do prototipo criado


console.log(`\n\nCaso de uso próximo ao real : `);
console.log(tshirt);
console.log(corolla);
console.log(videoGameConsole);
