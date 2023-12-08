function Pessoa(name, age, emailAdress) {
    this.name = name;
    this.age = age;
    this.emailAdress = emailAdress;
    this.primeNumArray;
    Object.defineProperty(this, `primeNumArray`, {
        value: [],
        writable: true,
        enumerable: false,
        configurable: false,
    });
}
Pessoa.prototype.toString = function () { return `Nome : ${this.name}\nIdade : ${this.age}\nEmail : ${this.emailAdress}` };
Pessoa.prototype.encontrarPrimos = function (age = this.age) {
    if (age > 110) { return `Não foi possível calcular devido a idade ser alta de mais` }
    if (age < 2) { return this.primeNumArray.reverse() }

    for (let i = 2; i < Math.sqrt(age); i++) {
        if (age % i === 0) {
            return this.encontrarPrimos(age - 1)
        }
    }

    this.primeNumArray.push(age);
    return this.encontrarPrimos(age - 1);
};

const Lucas = new Pessoa(`Lucas`, 35, `teste@teste.com`);
console.log(Lucas.toString() + `\n`);
console.log(Lucas.encontrarPrimos());
