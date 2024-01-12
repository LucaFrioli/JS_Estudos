export default function concat(...strings) {
    let newString = ``;
    strings.forEach(element => {
        element = String(element);
        newString += element + ` `;
    });
    return newString;
}

function invertStrings(string) {
    const reverted = string.split(``).reverse().join(``);
    return reverted;
}

export { invertStrings as inverter };
