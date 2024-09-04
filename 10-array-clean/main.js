const array = [1, 2, 3, 4, 2, 6, 13, 24, 15, 21, 8, 9, 13, 56];

function filterArray(arr, func) {
    let resArray = []
    for (let i = 0; i < arr.length; i++) {
        const deleteNum = func(arr[i])
        if (!deleteNum) {
          resArray.push(arr[i])
        }
    }
    return resArray
}

function clean(number) {
  return (
    number > 13 && number < 24
  )
}
console.log(filterArray(array, clean))