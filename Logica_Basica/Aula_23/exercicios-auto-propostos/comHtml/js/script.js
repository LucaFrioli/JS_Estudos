//faça uma função que receba o tamanho de uma imagem, e retorne se ela está em modo paisagem, em modo vertical, ou é quadrada  criando um elemento e o adicionando na tela
const form = document.querySelector(`form`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();//não deixa a página atualizar

    //recebem os valores 
    const heigth = Number(document.querySelector(`input#heigth`).value);
    const width = Number(document.querySelector(`input#width`).value);


    const landscape = (width, heigth) => {//testa os valores e define o tamanho da imagem
        let dimension = `Quadrado`;
        if (width !== heigth) {
            dimension = width < heigth ? `Vertical` : `Horizontal`
        }
        return dimension;
    };

    console.log(landscape(width, heigth));//teste de retorno
    const p = document.createElement(`p`);
    p.innerHTML = landscape(width,heigth);
    const response = p
    const body = document.querySelector(`body`);//apesar de ser uma má prática não criar funções para a criação e inserção de conteúdos na página o fiz para simplificação e colocar foco na lógica de definição da orientação da imagem
    body.appendChild(response);
});

