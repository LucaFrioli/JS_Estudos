//try catch e finally 

// try{
//     //parte executada caso não haja erros
// }catch(err){
//     //parte executada caso haja erros 
// }finally{
//     //será executado sempre, sendo opcional
// }

//vamos para um exemplo mais prático em uma função que retorna um horario 
function returnTime(date) {
    if (!(date instanceof Date)) { //instance serve para verificar se uma variavel está instanciada em um objetos, nesse caso se date não for uma objeto data retornará um erro 
        throw (`Erro na captura de hora de entrada !!`);
    }

    let hour =date.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return `Você logou no sistema ás ${hour} seja bem vindo !`;
}

try {
    const date = new Date();
    const hour = date;
    console.log(returnTime(hour));
} catch (err) {
    console.log(err);
} finally {
    console.log(`Esperamos que você desfrute ao máximo do nosso site !`)
}
