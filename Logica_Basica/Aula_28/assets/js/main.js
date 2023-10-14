//We display the timer in this variable and set a idle for init
const display = document.querySelector(`h1#timer`);
const idle = `00 : 00 : 00`//this is a idle
display.innerHTML = idle;//display the idle

const oneSecond = 1000;
//rescue 00:00:00 time 
const corectionForDate = 3 * 60 * 60 * oneSecond;//corrige a data para meia noite do dia zero apartir do ponto brasileiro
const corectedDate = new Date(0 + corectionForDate);//de
let originalTimer = new Date(0 + corectionForDate);
let timer = corectedDate; //timer definido como meia noite do big Day
let startedTimer;

document.addEventListener(`click`, (e) => {
    const element = e.target;
    idOfElement = element.id
    switch (idOfElement) {
        case `start`:
            startStopwatch();
            break;
        case `pause`:
            pauseStopwatch();
            break;
        case `reset`:
            resetStopwatch();
            break;
    }
});

function startStopwatch() {
    clearInterval(startedTimer);
    startedTimer = setInterval(() => {
        timer.setSeconds(timer.getSeconds() + 1);
        let updatedTimer = setUpdateTimer(timer)
        display.innerHTML = updatedTimer;
    }, oneSecond);

}

function resetStopwatch() {
    pauseStopwatch();
    timer = originalTimer;
    display.innerHTML = idle;
}

function pauseStopwatch() {
    clearInterval(startedTimer);
}

function setUpdateTimer(timer) {//update the timer for a smootie display
    const zeroOnLeft = (number) => (number < 10 ? `0${number}` : number);
    let hour = timer.getHours();
    let minute = timer.getMinutes();
    let second = timer.getSeconds();
    return `${zeroOnLeft(hour)} : ${zeroOnLeft(minute)} : ${zeroOnLeft(second)}`;
}