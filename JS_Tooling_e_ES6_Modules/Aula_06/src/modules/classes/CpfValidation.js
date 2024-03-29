export default class CpfValidation {//quando está se trabalhando com uma classe modulo, é importante para a consistência da arquitetura do programa o nome do arquivo ter o mesmo nome da classe

    constructor(cpf) {
        this.cpf = CpfValidation.validation(cpf);
    }

    static validation(cpf) {
        let valid = true
        const clearcpf = cpf.replace(/\D+/g, ``);

        if (clearcpf === undefined || clearcpf.length !== 11 || CpfValidation.isSequecy(clearcpf)) {
            return valid = false
        } else {
            const parcialCpf = clearcpf.slice(0, -2);
            const firstDigit = CpfValidation.generateDigit(parcialCpf);
            const secondDigit = CpfValidation.generateDigit(parcialCpf + firstDigit);
            const newCpf = parcialCpf + firstDigit + secondDigit;
            return newCpf === clearcpf
        }
    }

    static generateDigit(numberCalculus) {
        const cpfArray = Array.from(numberCalculus);
        let regressive = cpfArray.length + 1;
        const total = cpfArray.reduce((acu, v) => {
            acu += regressive * Number(v);
            regressive--
            return acu;
        }, 0);
        const digit = 11 - (total % 11);
        return digit > 9 ? `0` : String(digit);
    }

    static isSequecy(clearCpf) {
        return clearCpf[0].repeat(clearCpf.length) === clearCpf;
    }
}
