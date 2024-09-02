const array = [1, 2, 3, 4, 2, 6, 13, 24, 15, 21, 8, 9, 13, 56];

function clean(num, arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] > num) {
            arr.splice(i, 1)
        }
    }
    return arr
}

const filterArray = (fnClean, num, arr) => fnClean(num, arr)

console.log(filterArray(clean, 10, array))