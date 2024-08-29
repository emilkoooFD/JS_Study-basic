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