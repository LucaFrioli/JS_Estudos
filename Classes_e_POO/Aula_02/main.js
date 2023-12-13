//Getters e Setters

//symbol serve para criar chaves privadas dentro do objeto, ou seja que não são posíveis de acessar, se não utilizando getters e setters
const _velocity = Symbol(`velocity`);

class Carro {
    constructor(name) {
        this.name = name
        this[_velocity] = 0//propriedade privada sendo iniciada com 0
    }

    //alterando valores por meio de métodos
    acelerar() {
        if (this[_velocity] >= 100) return;
        this[_velocity]++;
    }

    freiar() {
        if (this[_velocity] <= 0) return;
        this[_velocity]--;
    }

    //Criando acesso ao atributo por meio de getters e setters
    get velocity() {
        return this[_velocity];
    }

    set velocity(velocity) {
        if (typeof velocity !== `number`) return console.log(`\nVelocidade inválida\n`);
        if (velocity >= 100 || velocity <= 0) return console.log(`\nVelocidade inválida\n`);
        this[_velocity] = velocity;
    }
}

const c1 = new Carro(`Fusca`);
for (let i = 0; i <= 150; i++) {
    c1.acelerar();
}
c1.velocity = 10
console.log(c1)
