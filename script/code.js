//reference: https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/

let delBtn = document.querySelector('#del');
let equalBtn = document.querySelector('#equal');
let operators = document.querySelector('.operators');
let screenOutput = document.querySelector('#screen');
let dot = document.querySelector('.dot')
let arr = screenOutput
let sum = ''

//display output
let screen = (value) => {
    screenOutput.value += value;
}

//delete
let del = () => {
    screenOutput.value = screenOutput.value.slice(0, -1);
}

//allClear
let clearSum = () => {
    screenOutput.value = sum;
}

//equal
let evaluateSum = () => {
    screenOutput.value = eval(screenOutput.value)
}

let repeat = () => {
    if (screenOutput.lastElementChild = '.') {
    }else if (screenOutput.lastElementChild = '+') {
        return
    } else if (screenOutput.lastElementChild = '/') {
        return
    } else if (screenOutput.lastElementChild = '-') {
        return
    } else if (screenOutput.lastElementChild = '*') {
        return
    } else {
        
    }
}
operators.addEventListener("click", repeat)
