const randomNumber = require('./utilities/randomNumber');

const generate = (diceAmount, diceSides) => {
    const amount = diceAmount;
    const results = [];
    for (let i = 0; i < amount; i++) {
        const result = randomNumber.randomNumber(1, diceSides);
        results.push(result);
    }
    return results;
}

module.exports = {
    generate
}
