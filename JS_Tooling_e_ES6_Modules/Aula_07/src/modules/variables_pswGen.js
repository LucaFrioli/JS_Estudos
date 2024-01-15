import rand from "./basicCalculus";



const specialChar = [
    '!', '@', '#', '$', '%',
    '&', '*', '(', ')', '{',
    '}', '[', ']', '?', '-',
    '_', '"', "'", '/'
];

const generateNumber = () => {
    return String.fromCharCode(rand(48, 57));
}

const generateChar = () => {
    return String.fromCharCode(rand(97, 122));
}

const generateSpecialChar = () => {
    return specialChar[rand(0, 19)];
}

export default function createPsw(size, numbers, capital, small, special) {
    const pswArray = [];

    for (let i = 0; i < size; i++) {
        capital && pswArray.push(generateChar().toUpperCase());
        small && pswArray.push(generateChar());
        numbers && pswArray.push(generateNumber());
        special && pswArray.push(generateSpecialChar());
    }
    return pswArray.join(``);
}
