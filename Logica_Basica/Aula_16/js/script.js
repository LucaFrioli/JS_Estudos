const container = document.querySelector(`section#container`);
const div = document.createElement(`div`);//chamamos isso de criar elemento por API DOM
div.classList.add(`demo`);
container.appendChild(div);//estamos criando e adicionando um elemento o qual chmamos ele de filho do elemento section que é considerado um elemento pai

const injectionTagList = [
    { tag: `p`, content: `reforço 1` },
    { tag: `section`, content: `reforço 2` },
    { tag: `div`, content: `reforço 3` },
    { tag: `footer`, content: `reforço 4` }
];

function createTag(injectionTagList) {
    const { tag } = injectionTagList;
    const creation = document.createElement(tag);
    return creation;
}

for (let i = 0; i < (injectionTagList.length); i++) {
    const {content} = injectionTagList[i];
    const tag = createTag(injectionTagList[i]);
    tag.innerHTML = `${content}`;
    div.appendChild(tag);
}
