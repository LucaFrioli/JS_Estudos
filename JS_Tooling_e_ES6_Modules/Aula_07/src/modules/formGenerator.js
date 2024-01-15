import createPsw from './variables_pswGen';

export default function generate(form) {
    const inputs = form.querySelectorAll(`input`);
    let pswSize = null;
    let numbers = null;
    let capital = null;
    let small = null;
    let special = null;
    inputs.forEach(element => {

        if (element.type === `text` && element.value !== ``) {
            pswSize = Number(element.value);
        }

        if (element.type === `checkbox`) {
            switch (element.id) {
                case `addNum`:
                    numbers = element.checked;
                    break;

                case `capitalL`:
                    capital = element.checked;
                    break;
                case `smallL`:
                    small = element.checked;
                    break;
                case `specialChar`:
                    special = element.checked;
                    break;
            }
        }
    })

    const longPsw = createPsw(pswSize, numbers, capital, small, special);
    const psw = longPsw.slice(0, pswSize);
    return psw || `Nada selecionado`;
}

