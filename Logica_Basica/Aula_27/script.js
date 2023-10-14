//setInterval setTimeout

// setInterval faz com que uma função ocorra de tempos em tempos, sendo definida dessa maneira :  setInteval(função sem parenteses, tempo );
// setTimeout faz com que uma função seja acionada apenas uma vez apos uma quantidade de tempo sendo sua sintaxe da seguinte maneira : setTimeout(função sem parenteses, tempo);
//clearInterval serve para parar um setInterval

function showAtualHour() {
    const date = new Date();
    const hour = date.toLocaleTimeString('pt-br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return hour;
}


const clock = setInterval(time = () => {//faz com que esta função ocorra a cada quantos milesimos de segundo forem definidos 
    console.clear();
    console.log(showAtualHour());
}, 333);//para contabilizar exatamente 1 segundo sem perca por comunicação devemos atualizar a cada 333 mil[ézimos assim bate cravado com a quantidade de segundos que o timer precisa rodar 

setTimeout(stop = () => {//faz com que esta função seja realizada após a quantidde de milesegundos definidos
    clearInterval(clock);//limpa um itrvalo definido
}, 20000);

