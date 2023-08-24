const returnDay = document.querySelector(`h1#titulo`);

function leftZero(num) {
    return num > 9 ? num : `0${num}`;
}
function formatDate(dayWeek, day, month, year, hour, minutes) {
    let formatedDate = `${dayWeek}, ${day} de ${month} de ${year} <br/> ${hour}:${minutes}`;
    return formatedDate;
}

function defineMonth(month) {
    const months = [`janeiro`,`fevereiro`,`março`,`abril`,`maio`,`junho`,`julho`,`agosto`,`setembro`,`outubro`,`novembro`,`dezembro`];
    return months[month];
}

function defineDayOfW(day) {
    //Aqui faria da mesma maneira que na função defineMonth porém para uma demonstração do funcionamento do switch segue este modo
    switch (day) {
        case 0:
            return `domingo`;
        case 1:
            return `segunda-feira`;
        case 2:
            return `terça-feira`;
        case 3:
            return `quarta-feira`;
        case 4:
            return `quinta-feira`;
        case 5:
            return `sexta-feira`;
        case 6:
            return `sábado`;
        default:
            return `ERROR`;
    }
}

const data = new Date();
const day = leftZero(data.getDate());
const month = defineMonth(data.getMonth());
const year = leftZero(data.getFullYear());
const hour = leftZero(data.getHours());
const minutes = leftZero(data.getMinutes());
const dayOfWeek = defineDayOfW(data.getDay());


const dateBrazil = formatDate(dayOfWeek, day, month, year, hour, minutes);
returnDay.innerHTML = `${dateBrazil}`;