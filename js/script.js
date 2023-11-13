let input = document.querySelector('#userInput')
let clearBtn = document.querySelector('#top-left')
let deleteBtn = document.querySelector('#delete')
let equalBtn = document.querySelector('#bottom-right')
let btnNumbOps = document.querySelectorAll('[data-valueOperand]')
let operands = ['+', '-', '*', '/', '.']

 let uInput = (value) => {
    input.value += value
}

let clear = (value) => {
    input.value = ''
}

clearBtn.addEventListener('click', () => {
    clear()
})

let deleting = (value) => {
    input.value = input.value.slice(0, -1)
}

deleteBtn.addEventListener('click',() => {
    deleting()
})


equalBtn.addEventListener('click',() => {
    let result = eval(input.value)
    input.value = result
})

btnNumbOps.forEach((numbOps)=>{
    numbOps.addEventListener('click', function(){
        document.querySelector("#userInput").value += numbOps.value
    })
})


