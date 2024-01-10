async function rescueBookInfo() {
    try {
        const response = await fetch(`books.json`);
        if (response.status < 200 || response.status > 299) throw new Error(`Não foi possível encontrar os arquivos, por gentileza tente novamente mais tarde`);
        const contentReturned = await response.text();
        const obj = await JSON.parse(contentReturned);
        if (typeof obj !== `object`) throw new Error(`Não foi possível recuperar os dados, por gentileza tente mais tarde`);
        displayInfo(obj);
    } catch (e) {
        console.warn(e);
    }
}

function displayInfo(obj) {
    const ul = document.querySelector(`ul`);
    if (!obj.hasOwnProperty(`books`)) {
        return;
    }
    const arrayOfBooks = obj.books;
    for (let book of arrayOfBooks) {
        ul.appendChild(divInLi(book));
    }
}

function divInLi(bookInfo) {
    const div = inserInfoInDiv(bookInfo);
    const li = createLi();
    li.appendChild(div);
    return li;
}

function createDiv() {
    return document.createElement(`div`);
}

function inserInfoInDiv(bookInfo) {
    const arrayInfo = [`Título : ${bookInfo.titulo}`, `Autor : ${bookInfo.autor}`]
    const div = createDiv();
    arrayInfo.forEach(element => {
        div.append(element);
        div.appendChild(document.createElement(`br`));
    });
    return div;
}

function createLi() {
    return document.createElement(`li`);
}

rescueBookInfo();
