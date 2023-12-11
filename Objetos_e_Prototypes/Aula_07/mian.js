//Herança/Delegação
//Serve para realizar de uma melhor forma reuso de código

//Cria uma super classe produto :
function Product(name, price, stock) {//Metodos necessários da super classe(Product) aumento/desconto entrda/saída de estoque
    //aqui está o contrutor da super classe, cada this sendo os atributos da classe pai
    this.name = name;
    this.price = price;
    this.stock = stock;

    Object.defineProperty(this, `name`, {
        value: name,
        configurable: false,
        writable: false,
        enumerable: true
    });
}
//define o protótipo da superclasse produto :
Product.prototype.increase = function (percent) { this.price = this.price + (this.price * (percent / 100)) };
Product.prototype.discount = function (percent) { this.price = this.price - (this.price * (percent / 100)) };
Product.prototype.entryStock = function (amount) { this.stock += amount };
Product.prototype.exitStock = function (amount) { this.stock -= amount };
Object.freeze(Product.prototype);


//criando uma subclasse de Product chamada Tshirt para representar camiseta
function Tshirt(name, price, stock, brand, color) {
    Product.call(this, name, price, stock);//chama o contrutor de Product, o que permite reutilizar todo o código que está dentro das chaves de product
    // construtor de Tshirt utiliza os atributos de Product e adiciona os atributos a baixo em adição
    this.brand = brand;
    this.color = color;
}
Object.setPrototypeOf(Tshirt.prototype, Product.prototype);//este método é o mais recomendado até o momento da progreção de conhecimento, pois ele mantém o construtor de Tshit, o que é de suma importancia para alguns sistemas e seu funcionamento



//Criando uma subclasse de Product chamada Mug com prototipo proprio e herdado de Product, porem o metodo de saida do estoque deve ser duas vezes mais rápido que o do Produto
function Mug(name, price, stock, volume, material) {
    Product.call(this, name, price, stock);
    this.volume = volume;
    this.material = material;
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;
Mug.prototype.fillMug = function (quantity = 0) {
    switch (true) {
        case (quantity > this.volume):
            return `Transbordou ${this.name}`
        case (quantity === this.volume):
            return `Encheu ${this.name}`;
        case (quantity > (this.volume / 2) && quantity < this.volume):
            return `Estamos quase enchendo ${this.name}`;
        case (quantity === (this.volume / 2)):
            return `Estamos extamente na metade`;
        case (quantity < (this.volume / 2) && quantity > 0):
            return `Vamos não se sinta envergonhado encha mais ${this.name}`;
        case (quantity < 0):
            return `Não é possivel encher com numeros negativos ${this.name}, ao menos que vc faça uma singularidade`;
        default: return `Escreva um numero válido`;
    }
}

Mug.prototype.exitStock = function (amount) { this.stock -= (amount * 2) };



const generic = new Product(`generico`, 10, 10);
const tankTop = new Tshirt(`Regata`, 15.8, 45, `Hering`, `Branca`);
const medivalMug = new Mug(`o Caneco`, 1000, 10, 500, `Madeira e Ouro`);
tankTop.entryStock(5);
tankTop.exitStock(10);
medivalMug.exitStock(5);
medivalMug.discount(10);
console.dir(generic);
console.dir(tankTop);
console.dir(medivalMug);
