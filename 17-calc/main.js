// Цели задания:
// Практика использования объекта Document в JavaScript.
// Разработка базового взаимодействия с пользователем через HTML-формы.
// Задачи для выполнения:
// Создание интерфейса калькулятора:
// Разработайте простой пользовательский интерфейс с двумя полями ввода (input) для чисел.
// Добавьте четыре кнопки для выполнения основных арифметических операций: сложение, вычитание, деление и умножение.
// Логика калькулятора:
// При нажатии на любую из арифметических кнопок, программа должна читать значения из двух полей ввода, 
// производить выбранную операцию и выводить результат.
// После вывода результата поля ввода должны быть очищены для возможности нового ввода.
// Вывод результата:
// Результат операции отобразите в предназначенном для этого элементе на странице.

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