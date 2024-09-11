let result = document.querySelector('.result')

function resetInput() {
    document.querySelector('.first-inp').value = ''
    document.querySelector('.second-inp').value = ''
}

function clearResult() {
    result.innerText = ''
}

function addition() {
    const num1 = Number(document.querySelector('.first-inp').value)
    const num2 = Number(document.querySelector('.second-inp').value)
    result.innerText = num1 + num2
    resetInput()
}

function subtraction() {
    const num1 = Number(document.querySelector('.first-inp').value)
    const num2 = Number(document.querySelector('.second-inp').value)
    result.innerText = num1 - num2
    resetInput()
}

function multiplication() {
    const num1 = Number(document.querySelector('.first-inp').value)
    const num2 = Number(document.querySelector('.second-inp').value)
    result.innerText = num1 * num2
    resetInput()
}

function division() {
    const num1 = Number(document.querySelector('.first-inp').value)
    const num2 = Number(document.querySelector('.second-inp').value)
    if(num2 === 0) {
        return result.innerText = `На ноль делить нельзя!`
    }
    result.innerText = num1 / num2
    resetInput()
}