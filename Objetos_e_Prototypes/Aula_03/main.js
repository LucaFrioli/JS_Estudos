//Getters and Setters

//vaja seu funcionamento em uma constructor Function
function Product(name, price, stock = 0) {
    this.Name = name;
    this.Price = price;
    let Stock = stock;

    Object.defineProperty(this, `Stock`, {
        enumerable: true, // ele pode ser exibido caso true, mostrando a chave
        configurable: false,//A chave pode ou não ser reconfigurada ou deletada
        get: () => Stock,
        set: (value) => typeof (value) === `number` && value >= 0 ? Stock = value : console.log(`Digite um número valido`),
    });
}

const tshirt = new Product(`camiseta`, 43.50, 20);
console.log(tshirt)
//perceba que os getters e setters estão implícitos
tshirt.Stock = `10`//Aqui o set está entrando em ação
console.log(tshirt.Stock)//aqui o get está entrando em ação

//veja seu funcionamento em uma factory function
function createProduct(name, price, stock = 0) {
    return {
        name,
        price,
        get stock() { return stock },
        set stock(value) { return typeof (value) === `number` && value >= 0 ? stock = value : console.log(`perdeu`) }
    }
}

const pants = createProduct(`Calças`, 75.80, 20);
console.log(pants);
pants.stock = 0;
console.log(pants.stock);
