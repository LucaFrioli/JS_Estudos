//Object.defineProperty e Object.defineProperties
//O conceito é parecido com Object.freeze, porém as funções servem para ter mais controle sobre o objeto

function Product(name, price, stock = 0, color = undefined, brand) {
    this.Name = name;
    this.Price = price;
    //                    onde, chave Unica
    Object.defineProperty(this, `Stock`, {//a chave recebe o objeto de descrição
        enumerable: true, // ele pode ser exibido caso true, mostrando a chave
        value: stock, // qual o valor dele
        writable: true, //o valor pode, ou não pode ser alterado, caso false ele não pode ser alterar
        configurable: false //A chave pode ser reconfigurada ou deletada, caso false ela não pode sofrer nenhuma das duas alteração
    });

    Object.defineProperties(this, {//chaves
        Color: {//configuração da chave como feita no defineProperty
            enumerable: true,
            value: color,
            writable: true,
            configurable: false
        },
        Brand: {//configuração da chave
            enumerable: true,
            value: brand,
            writable: false,
            configurable: false
        }
    });
}

const tshirt = new Product(`camiseta`, 43.50, 20, `Branca`, `Nike`);
console.log(Object.keys(tshirt));//Object.keys itera sobre as chaves enumaraveis do objeto sendo uma alternativa mais atrativa que o for in
console.log(tshirt)
