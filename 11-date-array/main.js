// Цель: Создание функции для обработки массива строк, содержащих потенциальные даты.

// Контекст задания:

// Вы работаете с парсером или API, который предоставляет строки, потенциально содержащие даты.
// Некоторые строки действительно являются датами, другие нет.
// Примеры входных данных:

// Верные даты: "10.02.22", "11.12.23"
// Неверные данные: "0.13.22", "41.12"
// Задание:

// Разработайте функцию, принимающую массив строк.
// Функция должна анализировать каждую строку:
// Отфильтровать невалидные даты.
// Преобразовать валидные даты к единому формату.
// Условия валидации дат:

// Форматы дат: DD.MM.YY или MM/DD/YY.
// День не может быть больше 31.
// Месяц не может быть больше 12.
// Учитывать високосные года для февраля (опционально).

const arrString = ['10.02.22', 'тест', '11/12/2023', '01/26/2024', '00.13.2022', '31/12/2023', 'jks df', '22.33.2060', '12.06.24']

function sortDate(arr) {
    const newArrayDate = arr.map(elem => {
        if (elem.includes('/') || elem.includes('.')) {
            const newDate = elem.split(elem.includes('/') ? '/' : '.')
            if (elem.includes('/')) {
                const month = newDate[0]
                const day = newDate[1]
                const year = newDate[2]
                if ((day > 31 || day < 1) || (month > 12 || month < 1)) {
                  return null
              }
              return `${month}/${day}/${year}`
            } else {
                const day = newDate[0]
                const month = newDate[1]
                const year = newDate[2]
                if ((day > 31 || day < 1) || (month > 12 || month < 1)) {
                  return null
              }
              return `${day}.${month}.${year}`
            }
        }
        return null
    }).filter(elem => elem !== null)

    return newArrayDate    
}

const result = sortDate(arrString)
console.log(result)
