const uri = 'http://localhost:3000/receive-data'
const container = document.querySelector('section.container');

function renderFrom(form) {
    container.innerHTML = form;
}

async function getForm() {
    const response = await fetch(uri);
    const form = await response.text() //retrona a resposta do get da uri e já a transforma em texto
    renderFrom(form);// envia o texto para renderizar dentro da página
}

async function postForm(uri, data) {
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    getForm()
        .then(() => {
            const form = document.querySelector('form');
            form.addEventListener('submit', e => {
                e.preventDefault();
                const array = form.querySelectorAll('input');
                const objectDataForm = {}
                for (const element of array) {
                    objectDataForm[element.id] = element.value;
                }
                console.log(typeof objectDataForm);
                postForm(uri, objectDataForm)
                    .then(response => {
                        console.log('resposta da API: ', response)
                        renderResponse(response);
                    })
                    .catch(e => console.log('erro ao fazer a requisição POST :', e));
            })
        })
        .catch(e => console.log(e));
});

function renderResponse(response) {
    removeDuplicateDiv();
    const divResponse = createDiv();
    divResponse.innerHTML = response.response;
    container.appendChild(divResponse);
}

function createDiv() {
    const div = document.createElement('div');
    div.classList.add('resp');
    return div;
}

function removeDuplicateDiv() {
    const div = document.querySelector('div.resp');
    if (div) {
        div.remove();
    }
    return;
}
