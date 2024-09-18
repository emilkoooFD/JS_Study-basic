// Задача
// Реализовать функцию, выполняющую обратную операцию фильтрации массива чисел.

// Функция принимает в качестве аргументов другую функцию (функцию удаления) и массив чисел.
// Функция удаления определяет, нужно ли удалять элемент массива (возвращает true) или оставить (возвращает false).
// Шаги реализации
// Определить функцию высшего порядка, принимающую массив чисел и функцию удаления.
// Итерировать через каждый элемент массива, применяя функцию удаления для определения, 
// оставлять элемент в массиве или удалить.
// Возвращать отфильтрованный массив, где остаются только те элементы, которые не подлежат удалению.


const array = [1, 2, 3, 4, 2, 6, 13, 24, 15, 21, 8, 9, 13, 56];

function filterArray(arr, func) {
    let resArray = []
    for (let i = 0; i < arr.length; i++) {
        const deleteNum = func(arr[i])
        if (!deleteNum) {
          resArray.push(arr[i])
        }
    }
    return resArray
}

function clean(number) {
  return (
    number > 13 && number < 24
  )
}
console.log(filterArray(array, clean))