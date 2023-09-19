//faça uma função que receba o tamanho de uma imagem, e retorne se ela está em modo paisagem, em modo vertical, ou é quadrada  

const width = 100;
const heigth = 200;

function defineImagePosition(width, heigth) {
    let dimension = `tem uma dimenção : quadrada`;
    if (width !== heigth) {
        dimension = width > heigth ? `está na : horizontal` : ` esta na : vertical`;
    }
    return dimension;
}

console.log(`A imagem ${defineImagePosition(width, heigth)}`);
