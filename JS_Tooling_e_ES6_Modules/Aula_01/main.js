//babel transpilador
//comandos importantes para instalar babel via npm
//iniciar a NPM : npm init -y
//instalar o babel como uma dependencia de desenvolvimento:
//npm i --save-dev @babel/cli @babel/preset-env @babel/core
//consvertendo arquivos ecmascript recentes para antigos via terminal :
//         atual file  file de destino
// npx babel main.js -o bundle.js --presets=@babel/env
// Configuração para transpilação automatica ao salvar :
//abra o package-json vá até scripts, adicione uma chave com o nome da run, e atribua o valor (babel main.js -o bundle.js --presets=@babel/env -w); a flag -w faz com que a run não pare até ser dado o comando de parada


class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }

    showName() {
        console.log(`${this.name} ${this.lastname}`);
    }
}

const joao = new Person(`João`, `Silva`);
joao.showName();
