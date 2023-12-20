class Person {//será utilizado na inserção do localstorage e consumo de usuário correto
    constructor(name, lastname, email, cellphone, cpf, password) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.cellphone = cellphone;
        this.cpf = cpf;
        this.password = password;
    }

    completeName() {
        return `${this.name} ${this.lastname}`;
    }

    informations() {
        return `<ol class={list-demo-info}>
        <li>Nome completo : ${this.completeName()}</li>
        <li>Email : ${this.email}</li>
        <li>Cpf : ${this.cpf}</li>
        <li>Número de Celular : ${this.cellphone}</li>
        </ol>`;
    }
}
