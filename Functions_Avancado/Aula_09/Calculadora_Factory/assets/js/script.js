function calculadora() {
    //este objeto tem acesso a todas as variveis de dentro da função fábrica em que está inserido, estas variveis podem ser consideradas privadas a este objeto;
    return {

        display: document.querySelector(`input#display`),

        init() {
            this.buttonCapture();
            this.keypressEnter();
        },

        buttonCapture() {
            document.addEventListener(`click`, e => {//caso fosse uma função anonima, iria preciasar do metodo .bind(), porém arrow functions sempre referenciam a variavel que carrega o objeto;
                const el = e.target;
                if (el.classList.contains(`bnt-num`)) {
                    this.btnForDisplay(el.innerText)
                }
                if (el.classList.contains(`btn-clear`)) {
                    this.clearDisplay();
                }
                if (el.classList.contains(`btn-del`)) {
                    this.deleteANumber();
                }
                if (el.classList.contains(`btn-equal`)) {
                    this.calculateEquation();
                }
            });
        },

        keypressEnter() {
            this.display.addEventListener(`keyup`, e => {
                if (e.keyCode === 13) {
                    this.calculateEquation();
                }
            });
        },

        btnForDisplay(content) {
            let value = content;
            this.display.value += value;
        },


        clearDisplay() {
            this.display.value = ` `;
        },

        deleteANumber() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculateEquation() {
           let calculo = this.display.value;
            try {
                calculo = eval(calculo);
                if (!calculo) {
                    alert(`Digite um cálculo válido`);
                    return
                } else {
                    this.display.value = calculo
                }
            } catch (e) {
                alert(`Digite um cálculo válido`);
            }
        },
    };
}

const c = calculadora();
c.init();
