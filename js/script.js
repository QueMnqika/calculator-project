let input = document.querySelector('#userInput')
let clearBtn = document.querySelector('#top-left')
let deleteBtn = document.querySelector('#delete')
let multiply = document.querySelector('#top-right')
let add = document.querySelector('#add')
let minus = document.querySelector('#minus')
let divide = document.querySelector('#divide')
let equalBtn = document.querySelector('#bottom-right')


function userInput(value) {
    input.value += value
}

function clear(value) {
    input.value = ''
}

clearBtn.addEventListener('click', () => {clear(value)})

function deleting(value) {
    input.value = input.value.slice(0, -1)
}

deleteBtn.addEventListener('click', deleting())

function equal(value) {
    input.value = eval(input.value)
}

equalBtn.addEventListener('click', equal())