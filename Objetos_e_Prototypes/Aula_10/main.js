//Polimorfismo( só existe em js polimorfismo de sobre escrita)

//Superclasse
function Conta(numero, agencia, saldo) {
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo Insuficiente, saldo atual : ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.showSaldo()
}
Conta.prototype.depositar = function (valor) { this.saldo += valor; this.showSaldo(); }
Conta.prototype.showSaldo = function () { console.log(`Ag: ${this.agencia} \nConta: ${this.numero} \nSaldo : R$ ${this.saldo.toFixed(2)}`) }

//Subclasses
function Corrente(numero, agencia, saldo, limite) {
    Conta.call(this, numero, agencia, saldo);
    this.limite = limite;
}
Object.setPrototypeOf(Corrente.prototype, Conta.prototype);
Corrente.prototype.sacar = function (valor) {//aqui estamos polimorfizando o método, o reescrvendo e grando uma diferença clara na execução final, assim temos o mesmo método, só que gerando um resultado diferente;
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente, saldo atual : ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.showSaldo()
}

function Poupanca(numero, agencia, saldo) {
    Conta.call(this, numero, agencia, saldo);
}
Object.setPrototypeOf(Poupanca.prototype, Conta.prototype);//Aqui a execução do metodo continua original ao da superclasse

console.log(`Conta corrente : `)
const c1 = new Corrente(11, 22, 30, 30);
c1.depositar(200);
c1.sacar(30);
c1.sacar(200);
c1.sacar(30);
c1.sacar(30);

console.log(`\nConta poupança : `)
const c2 = new Poupanca(11, 22, 30);
c2.depositar(200);
c2.sacar(30);
c2.sacar(200);
c2.sacar(30);
c2.sacar(30);

