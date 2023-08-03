//receber os dados dos inputs,salvar dentro de um objeto, e slavar os objetos dentro de um array, que será retornado dentro do console do navegador
function main() { //protege as informações e não deixa ser acessadas por usuário comum
    const form = document.querySelector(`form.form`);  //seleciona o formulário
    const resposta = document.querySelector(`span#resp`);//seleciona a tag para respostas
    const resp = [];//Array de informações a serem retornadas 
    form.addEventListener(`submit`, prevent);//Averigua se o formulario foi enviado 

    function prevent(evento) {
        evento.preventDefault();//previne recarregamento desnecessário, deve ser sempre declarado usando o param
        const nome = form.querySelector(`#name`);
        const sobrenome = form.querySelector(`#lastName`);
        const peso = form.querySelector(`#weight`);
        const altura = form.querySelector(`#height`);

        function criarPessoa(nome, sobrenome,peso,altura){
            return{nome,sobrenome,peso,altura};
        }//factory de objetos pessoas 
        
        resp.push(criarPessoa(nome.value,sobrenome.value,peso.value,altura.value));//adiciona os campos aosobjetos e salva na array
        console.log(resp);
        resposta.innerHTML += `<p>${nome.value} ${sobrenome.value}, mede ${altura.value} e pesa ${peso.value}</p>`;//retorna a resposta na tela 
    }

}

main();




//##############################################################################################################
// CURIOSIDADE :
//Análogo ao addEventListener();
// form.onsubmit = function (evento){
//     evento.preventDefault();//previne que a página recarregue ao formulário ser enviado, ou que ela tome qualquer ação automaticamente
//     alert(1);
//     console.log(`teste`);
// };