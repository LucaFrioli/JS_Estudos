const Dog = require('../../../Dog');//caminho relativo retorna três diretórios, e permanece no terceiro, ou seja ../ quer dizer retorne uma pasta

module.exports = class Peapole {
    constructor(name, lastname, havePet) {
        this.name = name;
        this.lastname = lastname;
        this.havePet = havePet;
        this.pet = this.hisPet();
    }

    compleatName() {
        return `${this.name} ${this.lastname}`;
    }

    talk() {
        if (this.havePet) {
            return console.log(`Olá me chamo ${this.compleatName()} e tenho um cahorro chamado ${this.pet.name}`);
        }
        return console.log(`Olá me chamo ${this.compleatName()}`);
    }

    hisPet() {
        if (this.havePet) {
            return new Dog();
        }
        return;
    }
}
