const password = 'password';

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

const cryptoPass = crypto(password)
console.log(cryptoPass)
console.log(check(password, cryptoPass))
