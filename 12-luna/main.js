const cardNum = '2222-3333-1111-5555';
let correctNum = '';

function filter(cardNumber) {
  for (const number of cardNumber) {
    if (!isNaN(number)) {
      correctNum += number
    }
  }
}

function luna(cardNumber) {
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
filter(cardNum)
console.log(luna(correctNum))