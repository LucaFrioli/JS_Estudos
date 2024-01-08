//fetch API

// a palavra reservada fetch cria "automaticamente um AJAX" então todo o código ajax pode ser omitido basta utilizarmos um fetch de chamada

document.addEventListener(`click`, (e) => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    if (tag === `a`) {//averigua se o elemento clicado foi uma âncora, caso verdadeio a página não recarrega e o elemento é enviado para ser tratado
        e.preventDefault();
        loadPage(element);
    }
});

async function loadPage(el) {
    try {
        const href = el.getAttribute(`href`);//é resgatado o valor do atributo href do link para uso dentro do objeto que será enviado para requisição
        const response = await fetch(href)

        if (response.status !== 200) throw new Error(`<h1>Página não encontrada, retorne mais tarde</h1>`);//forcei um erro com a página 1

        const html = await response.text()
        loadResult(html);
    } catch (e) {
        loadResult(e);
    }

}

function loadResult(response) {
    const result = document.querySelector(`.resultado`);
    result.innerHTML = response;
}

