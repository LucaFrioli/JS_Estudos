//resolução sugerida validador de cpf
function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, `clearCpf`, {
        get: () => cpfEnviado.replace(/\D+/g, ``),
        enumerable: true,
        configurable: false,
    });
};
ValidaCpf.prototype.valida = function () {
    if (typeof this.clearCpf === undefined) { return false }
    if (this.clearCpf.length !== 11) return false;
    if (this.isSequecy()) return false;

    const cpfParcial = this.clearCpf.slice(0, -2);
    const digit1 = this.generateDigit(cpfParcial);
    const digit2 = this.generateDigit(cpfParcial + digit1);

    const newCpf = cpfParcial + digit1 + digit2;
    return newCpf === this.clearCpf;

}
ValidaCpf.prototype.generateDigit = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((acu, v) => {
        acu += regressive * Number(v);
        regressive--
        return acu;
    }, 0);
    const digit = 11 - (total % 11);
    return digit > 9 ? `0` : String(digit);
}

ValidaCpf.prototype.isSequecy = function () {
    return this.clearCpf[1].repeat(this.clearCpf.length) === this.clearCpf ? true : false ;
}

const cpf = new ValidaCpf(`295.925.610-79`)
console.log(cpf.valida());
