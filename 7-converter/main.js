// Задание:

// Создать функцию конвертации валют, принимающую три параметра:
// Сумма для конвертации
// Исходная валюта
// Целевая валюта

// Обработка ошибок:
// Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.
// Логика функции:

// В функции должны содержаться курсы конвертации для поддерживаемых валют (например, 
// рубль к доллару и обратно).
// Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
// Если курс конвертации для заданной пары валют отсутствует, возвращается null.

function currencyConverse(cash, origCur, tarCur) {
    const dollar = 80;
    const euro = 100;
    const lira = 26;

    if (origCur === 'rub' && tarCur === 'usd') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash / dollar}`)
    } else if (origCur === 'usd' && tarCur === 'rub') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash * dollar}`)
    } else if (origCur === 'rub' && tarCur === 'eur') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash / euro}`)
    } else if (origCur === 'eur' && tarCur === 'rub') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash * euro}`)
    } else if (origCur === 'rub' && tarCur === 'lir') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash / lira}`)
    } else if (origCur === 'lir' && tarCur === 'rub') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash * lira}`)
    } else  {
        return null
    }

    // switch (origCur.toUpperCase()) {
    //     case 'USD':
    //         switch (tarCur.toUpperCase()) {
    //             case 'EUR':
    //                 return cash * 0.9
    //             case 'RUB':
    //                 return cash * 80
    //             default:
    //                 return null
    //         }
    //     case 'EUR':
    //         switch (tarCur.toUpperCase()) {
    //             case 'USD':
    //                 return cash * 1.1
    //             case 'RUB':
    //                 return cash * 85
    //             default:
    //                 return null
    //         }
    //     case 'RUB':
    //         switch (tarCur.toUpperCase()) {
    //             case 'USD':
    //                 return cash * 75
    //             case 'EUR':
    //                 return cash * 85
    //             default:
    //                 return null
    //         }
    //     default: 
    //         return null
    // }
}

const cash = 100;
let originalCurrency = 'rub';
let targetCurrency = 'eur';
currencyConverse(1000, originalCurrency, targetCurrency)


