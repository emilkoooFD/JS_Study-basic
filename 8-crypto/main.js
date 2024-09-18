// Цель задания:
// Научиться работать с массивами.
// Создать простую функцию шифрования пароля.
// Ключевые пункты:
// Задача:
// Необходимо написать две функции: одна для шифрования пароля и другая для его проверки.
// Шифратор пароля:
// Функция принимает строку (пароль) для шифрования.
// По заданному алгоритму происходит перестановка символов в строке.
// Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
// Важно: шифрование должно быть обратимым.
// Проверка пароля:
// Функция сравнивает зашифрованное слово с исходным паролем.
// Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
// В противном случае — false.

function crypto(password) {
    const arrPass = password.split('')

    const leftSide = arrPass.slice(0, arrPass.length / 2).reverse();
    const rightSide = arrPass.slice(arrPass.length / 2);
    return leftSide.concat(rightSide).join('')
}

function check(password, cryptoPass) {
    const decPass = crypto(cryptoPass);
    return decPass === password
}

const password = 'password';
const cryptoPass = crypto(password)

console.log(`Пароль: ${password}`)
console.log(`Зашифрованный пароль: ${cryptoPass}`)
console.log(`Проверка пароля: ${check(password, cryptoPass)}`)


const password2 = 'logginPassword';
const cryptoPass2 = crypto(password2)

console.log(`Пароль: ${password2}`)
console.log(`Зашифрованный пароль: ${cryptoPass2}`)
console.log(`Проверка пароля: ${check(password2, cryptoPass2)}`)