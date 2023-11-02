const inputElement = document.querySelector(`input#taskName`);
const taskDisplay = document.querySelector(`ul#tasks`);

let tasksListJSON;

//aqui onde toda a cadeia de funções se iniciam, recebendo o valor do input
document.addEventListener(`click`, (e) => {
    const el = e.target;//todo elemento clicado é retornado por está linha
    const elId = el.id;//é lido o id deste elemento e salvo na varivel elId para ser utilizado posteriorment

    if (elId === `doneTask`) {//aciona a seguinte função caso o elemento contenha um id doneTask
        taskCompleted(el.parentElement);//remove a tarefa da lista
    }

    const action = {//aciona funções  mais simples ou que funcionam em cadeias, se o atributo do objeeto tiver o mesmo nome do id do elemento
        addTask: getValue(),
    }

    if (action[elId]) {//averigua se o id do elemento bate com algum atributo do objeto e se sim o executa
        action[elId]();
    }
});

//este evento está sendo adicionado para adicionar mais funcionalidade e acessibilidade
inputElement.addEventListener(`keypress`, function (e) {//evento keypress reconehece quais teclas estão sendo precionadas
    //console.log(e); //retire o comentário desta linha e observe como ele funcona dentro do console de seu navegador
    if (e.keyCode === 13) {//caso enter for precionado também será realizada a função
        getValue();
    }
});

function getValue() {
    if (!inputElement.value) return
    createTask(inputElement.value);//cria uma tarefa
}

function createTask(inputText) {//renderiza as tarefas na tela
    const task = createLi();//cria um elemento li para rceber o valor de get value
    task.innerHTML = `${inputText}`;
    taskDisplay.appendChild(task);//adiciona na lista de tarefas
    task.appendChild(createButton());//cria o botão de conclusão de tarefa
    saveTasks();//salva as tarefas em um LocalStorage
    clearInput();//limpa o input
}

function createLi() {//cria o elemento li em si que posteriormente será utilizado por creatTask() para inserir o valor vindo de getValue
    const li = document.createElement(`li`);
    li.classList.add(`task`);
    return li;
}

function clearInput() {//limpa o input e recoloca-o como foco para o usuario
    inputElement.value = ``;
    inputElement.focus();
}

function createButton() {//cria um botão que será utilizado para apagar as tarefas criadas, marcando-as como concluidas
    const button = document.createElement(`button`);
    //button.classList.add(`doneTask`);
    button.setAttribute(`id`, `doneTask`);//similar a classList.add, porém melhor pois pode acessar outros atributos como id e href
    button.setAttribute(`class`, `doneTask`);
    button.innerText = `Concluir`;
    return button
}

function taskCompleted(el) {//remove o elemento completo da tarefa em questão
    el.remove();//remove a tarefa da tela
    saveTasks();//remove a tarefa do localStorage
}

function saveTasks() {
    const elementsTasks = taskDisplay.querySelectorAll(`li`);//seleciona todas as tarefas que já foram criadas
    const listOfTasks = [];//inicia um array
    for (let task of elementsTasks) {//itera sobre todos os elementos criados que são tarefas
        let taskText = task.innerText;//retorna só o textto referente ao que a tarefa é ;
        taskText = taskText.replace(`Concluir`, ``).trim();//retira o texto referente ao botão criado com o método .replace() e após isso retira o espaço em branco ou quebra de linha resultante com o método .trim()
        listOfTasks.push(taskText);//adiciona os nomes das tarefaz no array criado anteriormente
    }

    tasksListJSON = JSON.stringify(listOfTasks);
    localStorage.setItem(`tasks`, tasksListJSON);
}

function rederingLocalStorage() {
    const tasksJson = localStorage.getItem(`tasks`);
    tasks = JSON.parse(tasksJson);
    this.tasks.forEach(element => {
        createTask(element)
    });
}
rederingLocalStorage();
