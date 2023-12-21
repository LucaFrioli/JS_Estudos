//função sendo consumida por createARegister
function mainToInsert() {
    //recuperando os valores do campo e os adicionando nos params do Objeto Person
    const form = document.querySelector(`form.register`);
    const arrayOfValuesforPersonKey = [];
    for (let field of form.querySelectorAll(`.validate`)) {
        arrayOfValuesforPersonKey.push(field.value);
    }

    //adicionando os valores no param e chamando a função de inserção
    const person = new Person(...arrayOfValuesforPersonKey);
    insertIntoaLocalStorage(person);

}

function insertIntoaLocalStorage(obj) {
    const mapOfRegister = localStorage.getItem(`register`);
    if (mapOfRegister === null) {//averiguar se existe um campo registro, se não cria um
        const map = new Map;
        map.set(obj.email, obj);//armazena o objeto em um map utilizando o email como key de recuperação
        const mapAsJSON = JSON.stringify(Array.from(map.entries()));//o metodo entries, itera sobre o map e retorna um array
        localStorage.setItem(`register`, mapAsJSON);
        redirectToIndex(`Cadastrado com sucesso`);
        return;
    }

    // Recuperar do LocalStorage e converter de volta para Map
    const storedMap = new Map(JSON.parse(localStorage.getItem(`register`)));


    if (storedMap.has(obj.email)) {//averiguar se já existe um email cadastrado;
        alert(`email já foi cadastrado nesta máquina`);
        return;
    }

    storedMap.set(obj.email, obj);
    const updatedLSJson = JSON.stringify(Array.from(storedMap.entries()));//o entries metodo itera sobre os arrays para que após isso seja possivel converter o map em uma string novamente
    localStorage.setItem(`register`, updatedLSJson);
    redirectToIndex(`O cadastro foi relalizado com sucesso!`);
    return;
}


function redirectToIndex(messageOfAlert) {
    alert(messageOfAlert);
    window.location.replace(`./index.html`);
}
