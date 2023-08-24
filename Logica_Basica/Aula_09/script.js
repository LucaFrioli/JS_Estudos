//Switch case
/*
    **
    * Vamos supor que queiramos dizer qual dia da semna é hoje em português e com uma formatação de nossa escolha ;
    * Para isso podemos usar a estrutura switch, já que ela  é umaestrutura de escolha com valores estáticos:
    * Veja como ela é estruturada: 
    * switch (argumento){
    *   case valor1:
    *       código
    *   break; {para a estrutura}
    *   case valor2:
    *       código
    *   break; 
    *   case valor3:
    *       código
    *   break; 
    *   default :
    * 
    * }
    * 
    * lembre-se switch só é utilizado para valores fixos
    * 
    * OBS : caso ela esteja dentro de uma função podemos trocar o breake por return;
    * 
*/
const data = new Date();
const diaSemana = data.getDay();
let dia;
switch (diaSemana) {
    case 0:
        dia = `domingo`;
        break;
    case 1:
        dia = `segunda`;
        break;
    case 2:
        dia = `terça`;
        break;
    case 3:
        dia = `quarta`;
        break;
    case 4:
        dia = `quinta`;
        break;
    case 5:
        dia = `sexta`;
        break;
    case 6:
        dia = `sábado`;
        break;
    default:
        dia = `ERROR`;
}

console.log(`Hoje é : ${dia}`);

