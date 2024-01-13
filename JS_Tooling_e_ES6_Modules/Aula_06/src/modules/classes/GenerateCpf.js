import CpfValidation from "./CpfValidation";

export default class GenerateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formated(cpf) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
    }


    generateNewCpf() {
        const noDigitCpf = String(this.rand());
        const digit1 = CpfValidation.generateDigit(noDigitCpf);
        const digit2 = CpfValidation.generateDigit(noDigitCpf + digit1);
        const newCpf = noDigitCpf + digit1 + digit2;
        return this.formated(newCpf);
    }
}
