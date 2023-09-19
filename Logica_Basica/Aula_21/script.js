//break e continue 
/**
 * esses comandos servem para ter um controle sobre as estrturas de repetição já vistas;
 * 
 * continue continua para a próxima iteração do laço, pulando todos os comando a baixo dele;
 * Break sai do laço de repetição;
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers){
    if (number === 2 || number === 7){
        continue;//este continue impedirá que os numeros acima sejam impressos, já que não executará nada no laço abaixo dele e continuará o laço
    }
    console.log(number);
}

console.log(`\n`);

for(let number of numbers){
    if(number === 6 ){
        break;//isso fará com que o laço deixe de ser executado
    }
    console.log(number);
}


//código extra :
//evenOrOdd(numbers);
//PS : o fiz para demonstrar que nem em todos os casos o break ou o continue são aceitos, em condições ternárias o comando é ignorado;
function evenOrOdd (arrayOfNumbers){
    for(let number of arrayOfNumbers){
        Number.isInteger(number/2)? console.log(`${number} é par`) : console.log(`${number} é impar`);
    }
}

