const container = document.querySelector(`section#container`);
const div = document.createElement(`div`);//cria uma div
container.appendChild(div);//insere a div dentro da seção html

const elementos = [
    { tag: `p`, content: ` frase 1` },
    { tag: `div`, content: ` frase 2` },
    { tag: `footer`, content: ` frase 3` },
    { tag: `section`, content: ` frase 4` },
];

for (let i = 0; i < elementos.length; i++) {
    const {content} = elementos[i];//cria uma variavel com o conteúdo do objeto 
    const tagCri = createTags(elementos[i]);//recebe a tag criada e a slava em uma variavel
    tagCri.innerText = content;//coloca o conteudo dentro da tag
    div.appendChild(tagCri);//insere a tag dentro da div criada 
}

function createTags(elementos) {//cria as tags que se encontram no objeto
    const { tag } = elementos;
    const tagCri = document.createElement(tag);
    return tagCri;
}
