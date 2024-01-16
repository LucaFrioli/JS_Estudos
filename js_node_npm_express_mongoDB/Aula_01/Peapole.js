class Peapole {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    sayHelloToWorld() {
        console.log(`Olá mundo, me chammo ${this.name} ${this.lastname}`);
    }
}

module.exports.Peapole = Peapole;
