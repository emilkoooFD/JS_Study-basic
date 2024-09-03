const cardNum = '4561-1213-4367-2612';
let correctNum = '';

function filter(cardNumber) {
  
}

function luna(cardNumber) {
  for (const number of cardNum) {
    if (!isNaN(number)) {
      correctNum += number
    }
  }
  if (correctNum.length < 16) {
    return 'Введен некорректный номер карты!'
  } else {
    const parity = cardNumber.length % 2;
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = cardNumber[i]
      if (i % 2 === parity) {
        digit *= 2
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit
    }
    return (sum % 2) === 0
  }
}
filter(cardNum)
console.log(luna(correctNum))