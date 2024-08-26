const cash = 100;
const originalCurrency = 'rub';
const targetCurrency = 'dol';
let result;

function currencyConverse(cash, origCur, tarCur) {
    const dollar = 80;
    const euro = 100;
    const lira = 26;

    if (origCur === 'rub' && tarCur === 'dol') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash / dollar} долларов`)
    } else if (origCur === 'dol' && tarCur === 'rub') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash * dollar} рублей`)
    } else {
        return null
    }

    if (origCur === 'rub' && tarCur === 'euro') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash / euro} евро`)
    } else if (origCur === 'euro' && tarCur === 'rub') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash * euro} рублей`)
    } else {
        return null
    }

    if (origCur === 'rub' && tarCur === 'lira') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash / lira} лира`)
    } else if (origCur === 'lira' && tarCur === 'rub') {
        console.log(`Перевод ${cash} ${origCur} на ${tarCur} = ${result = cash * lira} рублей`)
    } else  {
        return null
    }
}

currencyConverse(100, 'rub', 'euro')


