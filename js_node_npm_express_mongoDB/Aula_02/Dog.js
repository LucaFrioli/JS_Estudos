module.exports = class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        try {
            console.log(`${this.name} faz au au`);
        } catch (e) {
            console.log(`Não há Cachorro`)
        }
    }
}
