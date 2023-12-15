//usando classes para validar cpf
const _cpf = Symbol(`cpf`);
class Person {
    constructor(name, lastname, age, nationality, cpf) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.nationality = nationality;

        Object.defineProperty(this, `clearCpf`, {
            value: cpf.replace(/\D+/g, ``),
            enumerable: false,
            writable: false,
            configurable: false,
        });

        Object.defineProperty(this, `isValid`, {
            value: Person.validCpf(this.clearCpf),
            enumerable: true,
            writable: false,
            configurable: false,
        });


        this[_cpf] = this.isValid ? cpf : `cpf Invalido`;

    }

    get cpf() {
        return this[_cpf];
    }

    static validCpf(clearCpf) {
        if (typeof clearCpf === undefined || clearCpf.length !== 11 || Person.isSequecy(clearCpf)) {
            return false;
        } else {
            const cpfParcial = clearCpf.slice(0, -2);
            const digit1 = Person.calculusForDigit(cpfParcial);
            const digit2 = Person.calculusForDigit(cpfParcial + digit1);

            const newCpf = cpfParcial + digit1 + digit2;
            return newCpf === clearCpf;
        }
    }

    static isSequecy(clearCpf) {
        return clearCpf.charAt(0).repeat(clearCpf.length) === clearCpf;
    }

    static calculusForDigit(parcialCpf) {
        const cpfArray = Array.from(parcialCpf);
        let regressive = cpfArray.length + 1;
        const total = cpfArray.reduce((acu, v) => {
            acu += regressive * Number(v);
            regressive--
            return acu;
        }, 0);
        const digit = 11 - (total % 11);
        return digit > 9 ? `0` : String(digit);
    }
}

const p1 = new Person(`José`, `de Barros`, 52, `Brasileiro`, `295.925.610-79`);
console.log(p1.cpf)
