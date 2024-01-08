//AJAX (Async Javascript XML) XMLHttpRequest(GET)+ Promises (Obrigatoriedade de uso de Live Server)
// estudar sobre verbos do protocolo http

//verbos http -> GET, POST, PUT, DELETE, HEAD, TRACE, OPTIONS, CONNECT;

//verbos mais utilizados para web : GET, POST, PUT, DELETE;

//utilizaremos no exemplo o verbo GET : significa buscar algum conteúdo da internet; Qunado abrimos um site fazemos uma requisiçao get para um servidor;

// const request = (obj) => {
//     const xhr = new XMLHttpRequest();
//     //xhr.open(`Verbo`,`URL`, async:booleano);
//     xhr.open(obj.method, obj.url, true);//.open() é um método usado para configurar a requisição HTTP que será feita ao servidor antes de envia-la;
//     xhr.send(null);//como não estaremos enviando nada para o servidor no método .send() declaramos o parâmetro como null;

//     xhr.addEventListener(`load`, () => {//ocorrerá o teste quando for disparado o request no desencadear das funções;
//         if (xhr.status >= 200 && xhr.status < 300) {//aqui será testada a resposta da requisição se ela se encontrar no range quer dizer dentro da lista de código http que foi um sucesso
//             obj.success(xhr.responseText);//caso seja um sucesso a responseText seráo conteúdo da página;
//         } else {
//             obj.error({ code: xhr.status, msg: xhr.statusText });
//         }
//     });
// };

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);

        xhr.addEventListener(`load`, () => {
            if (xhr.status >= 200 && xhr.status < 300) { resolve(xhr.responseText); } else { reject({ code: xhr.status, msg: xhr.statusText }) }
        });
    });
}

document.addEventListener(`click`, (e) => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    if (tag === `a`) {//averigua se o elemento clicado foi uma âncora, caso verdadeio a página não recarrega e o elemento é enviado para ser tratado
        e.preventDefault();
        loadPage(element);
    }
});

async function loadPage(el) {
    const href = el.getAttribute(`href`);//é resgatado o valor do atributo href do link para uso dentro do objeto que será enviado para requisição

    try {
        const response = await request({
            method: `GET`,//definição do verbo utilizado na requisição
            url: href,//qual página será utilizada como base para os testes
        });
        loadResult(response)
    }catch(e){
        console.log(e);//retorna o reject 
    }
}

function loadResult(response) {
    const result = document.querySelector(`.resultado`);
    result.innerHTML = response;
}
