let userIinput = document.querySelector('#userInput')
let equalBtn = document.querySelector('#bottom-right')
let clear = document.querySelector('#top-left')


let allClear = () => {
    userIinput.document.write = ''
}

let one = () => {
    onclick(userIinput.document.write = 1)
};

let two = () => {
    onclick(userIinput.document.write = 2)
}
let three = () => {
    onclick(userIinput.document.write = 3)
}
let four = () => {
    onclick(userIinput.document.write = 4)
}
let five = () => {
    onclick(userIinput.document.write = 5)
}
let six = () => {
    onclick(userIinput.document.write = 6)
}
let seven = () => {
    onclick(userIinput.document.write = 7)
}
let eight = () => {
    onclick(userIinput.document.write = 8)
}
let nine = () => {
    onclick(userIinput.document.write = 9)
}
let zero = () => {
    onclick(userIinput.document.write = 0)
}
let doubleZero = () => {
    onclick(userIinput.document.write = '00')
}

let plus = () => {
    onclick(userIinput.document.write = '+')
}

let minus = () => {
    onclick(userIinput.document.write = '-')
}
let multiply = () => {
    onclick(userIinput.document.write = '×')
}
let divide = () => {
    onclick(userIinput.document.write = '÷')
}
let paranthesis = () => {
    onclick(userIinput.textContent = '()')
}
let dot = () => {
    onclick(userIinput.innerText = '.')
}

addEventListener('click', allClear())
addEventListener('click', one())
addEventListener('click', two())
addEventListener('click', three())
addEventListener('click', four())
addEventListener('click', five())
addEventListener('click', six())
addEventListener('click', seven())
addEventListener('click', eight())
addEventListener('click', nine())
addEventListener('click', zero())
addEventListener('click', plus())
addEventListener('click', minus())
addEventListener('click', multiply())
addEventListener('click', divide())
addEventListener('click', dot())