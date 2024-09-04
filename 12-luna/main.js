const cardNum = '4561-1213-4367-2612';
const card = '234s834503458353';
const card1 = '2342834503458353';
const card2 = '4561-2612-1234-5464';
const card3 = '4561-2612-1534-5464';

function luna(cardNumber) {
  let correctNum = ''

  for (const number of cardNumber) {
    if (!isNaN(number)) {
      correctNum += number
    }
  }
  
  if (correctNum.length !== 16) {
    return 'Введен некорректный номер карты!' 
  }

  const parity = correctNum.length % 2;
  let sum = 0;

  for (let i = 0; i < correctNum.length; i++) {
    let digit = Number(correctNum[i])
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

console.log(luna(card3))