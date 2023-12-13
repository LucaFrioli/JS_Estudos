//Herança com classes
class electronicDevice {
    constructor(make) {
        this.make = make;
        this.isOn = false;
    }

    onDevice() {
        if (this.isOn) {
            console.log(`${this.make} já está ligado`);
            return;
        }
        this.isOn = true;
    }

    offDevice() {
        if (!this.isOn) {
            console.log(`${this.make} já está desligado`);
            return;
        }
        this.isOn = false;
    }
}


//para herdar uma classe basta adicionar extends na criação da classe, isso definirá que a classe pai é a classe definida após o extends, e no construtor identificar que deve ser utilizado o construtor da supercalsse por meio da palavra chave super
class Smartphone extends electronicDevice {
    constructor(make, color, model) {
        super(make);
        this.color = color;
        this.model = model;
    }
}

class Notebook extends electronicDevice {
    constructor(make, bateryStatus, model) {
        super(make);
        this.bateryStatus = bateryStatus;
        this.model = model;
    }

    onDevice() {//podemos sobreescrever métodos caso necessário
        if (this.bateryStatus <= 0) {
            console.log(`${this.make} ${this.model} está sem bateria recarregue .`);
            this.offDevice();
            return;
        }
        if (this.isOn) {
            console.log(`${this.model} já está ligado`);
            return;
        }
        this.isOn = true
    }

    load() {//e adicionar métodos também
        if (this.bateryStatus < 100) {
            const tester = this.bateryStatus
            if ((tester + 10) > 100) return console.log(this.model + `já está com 100% de bateria`);
            this.bateryStatus += 10;
            return;
        }
        console.log(this.model + `já está com 100% de bateria`);
    }
}


//observe o reuso de métodos baseados na superclasse que cedeu seu construtor e métodos para faze-la funcionar, de maneira mais clara :
const s1 = new Smartphone(`Xiaomi`, `black`, `mi13 pro max`);
s1.onDevice();
s1.offDevice();
s1.offDevice();
console.log(s1);

console.log(`\n`);
const n1 = new Notebook(`Samsung`, 70, `GalaxyBook`);
n1.offDevice();
n1.onDevice();
n1.bateryStatus = 65;
n1.onDevice();
n1.load();
console.log(n1);
