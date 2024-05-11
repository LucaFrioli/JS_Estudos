//Calculadora com função contrutora
function Calculadora() {

    display = document.querySelector(`input#display`);

    this.init = () => {
        buttonCapture();
        keypressEnter();
    };

    const buttonCapture = () => {
        document.addEventListener(`click`, e => {
            const el = e.target;
            if (el.classList.contains(`bnt-num`)) {
                btnForDisplay(el.innerText)
            }
            if (el.classList.contains(`btn-clear`)) {
                clearDisplay();
            }
            if (el.classList.contains(`btn-del`)) {
                deleteANumber();
            }
            if (el.classList.contains(`btn-equal`)) {
                calculateEquation();
            }
        });
    }

    keypressEnter = () => {
        document.addEventListener(`keyup`, e => {
            if (/*e.keyCode === 13 este método de declaração é considerado obseloto utilize */ e.key === "Enter") {
                calculateEquation();
            }
        });
    }

    btnForDisplay = (content) => {
        let value = content;
        display.value += value;
        display.focus();
    }

    clearDisplay = () => display.value = ` `;

    deleteANumber = () => display.value = display.value.slice(0, -1);


    calculateEquation = () => {
        let calculo = display.value;
        try {
            calculo = eval(calculo);
            if (!calculo) {
                alert(`Digite um cálculo válido`);
                return
            } else {
                display.value = calculo
            }
        } catch (e) {
            alert(`Digite um cálculo válido`);
        }
    }
}

const c = new Calculadora();
c.init();
