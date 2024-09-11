let result = document.querySelector('.result')
let num1, num2;

function numValue() {
    num1 = Number(document.querySelector('.first-inp').value)
    num2 = Number(document.querySelector('.second-inp').value)
    return num1, num2
}

function resetInput() {
    document.querySelector('.first-inp').value = ''
    document.querySelector('.second-inp').value = ''
}

function clearResult() {
    result.innerText = ''
}

function addition() {
    numValue()
    result.innerText = num1 + num2
    resetInput()
}

function subtraction() {
    numValue()
    result.innerText = num1 - num2
    resetInput()
}

function multiplication() {
    numValue()
    result.innerText = num1 * num2
    resetInput()
}

function division() {
    numValue()
    if(num2 === 0) {
        return result.innerText = `На ноль делить нельзя!`
    }
    result.innerText = num1 / num2
    resetInput()
}