function main() {
    const form = document.querySelector(`form#form`);
    const resposta = document.querySelector(`span#span`);
    const lista = [];//deve-se mater no inicio da função main para não perder valor quando processo reinicia
    form.addEventListener(`submit`, processo);

    const dia = new Date() ;//Date não day
    const ano = dia.getFullYear(); 

    function processo(pausa) {
        pausa.preventDefault();//este método não pode usar nenhuma varivael mas sim um parametro dessa função

        const nome = document.querySelector(`input#nome`);
        const sobrenome = document.querySelector(`input#sobrenome`);
        const idade = document.querySelector(`input#idade`);
        const nacionalidade = document.querySelector(`input#nacionalidade`);

        function criaCadastro(nome, sobrenome, idade, nacionalidade) {
            return { nome, sobrenome, idade, nacionalidade };
        }

        lista.push(criaCadastro(nome.value, sobrenome.value, idade.value, nacionalidade.value));
        console.log(lista);
        resposta.innerHTML +=`<p>${nome.value.toUpperCase()} ${sobrenome.value.toUpperCase()} nasceu em : ${ano-idade.value}</p>`;//colocar .value para obter um valor verdadeiro
    };
}

main();