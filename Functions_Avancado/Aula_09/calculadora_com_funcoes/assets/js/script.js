const display = document.querySelector(`input#display`);
let expressionArray = [];

document.addEventListener(`click`, function (event) {
    event.preventDefault();
    const element = event.target;
    const button = element.tagName;
    console.log(element)
    console.log(element.id)

    if (button !== `BUTTON`) { return console.log(`não é um botão`) }

    switch (element.id) {
        case `bnt-num`:
            const validExpression = element.innerText;
            console.log(addToArray(validExpression))
            break;

        case `del`:
            console.log(deleteFromArray());
            break;

        case `clear`:
            clearArrayExpression();
            console.clear();
            console.log(expressionArray);
            break;
        case `equal`:
            console.clear();
            console.log(evaluateExpression(expressionArray))
            console.log(expressionArray);
            break;
    }

    display.value = stringfyExpression(expressionArray);
});


function addToArray(valuedExpression) {
    expressionArray.push(valuedExpression);
    return expressionArray;
}

function deleteFromArray() {
    expressionArray.pop();
    return expressionArray;
}

function clearArrayExpression() {
    expressionArray = []
    return expressionArray;
}

function evaluateExpression(arrayExpression) {
    const stringExpression = stringfyExpression(arrayExpression);
    const result = eval(stringExpression);
    clearArrayExpression();
    addToArray(result);
    return result;
}

function stringfyExpression(arrayExpression) {
    let string = ``;
    for (let element of arrayExpression) {
        string += element;
    }
    return string
}

function protectValues(value) {
    const safeValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '/', '*', '+', '-', '.'];
    return safeValues.includes(value);
}
