const arr = [1, 40, -5, 10, 0];

function sortBubbles(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const leftNumber = arr[j];
      const rightNumber = arr[j + 1]
      if (leftNumber > rightNumber) {
        arr[j + 1] = leftNumber
        arr[j] = rightNumber
      }
    }
  }
  return arr
}

console.log(sortBubbles(arr))