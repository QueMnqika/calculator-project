//reference: https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/

let delBtn = document.querySelector('#del');
let equalBtn = document.querySelector('#equal');
let operators = document.querySelector('.operators');
let screenOutput = document.querySelector('#screen');
let arr = screenOutput
let a = 0;
let b = 0;
arr = [a, b]

//display input
function screen(value) {
    screenOutput.value += value;
}

//delete
function del() {
    screenOutput.value = screenOutput.value.slice(0, -1)
}

//allClear
function allClear() {
    screenOutput.value = '';
}

//equal


//logic
