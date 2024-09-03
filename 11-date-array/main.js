const arrString = ['10.02.22', 'тест', '11/12/2023', '01/26/2024', '00.13.2022', '31/12/2023', 'jks df', '22.33.2060', '12.06.24']

function sortDate(arr) {
    const newArrayDate = arr.map(elem => {
        if (elem.includes('/') || elem.includes('.')) {
            const newDate = elem.split(elem.includes('/') ? '/' : '.')
            if (elem.includes('/')) {
                const month = newDate[0]
                const day = newDate[1]
                const year = newDate[2]
                if ((day > 31 || day < 1) || (month > 12 || month < 1)) {
                  return null
              }
              return `${month}/${day}/${year}`
            } else {
                const day = newDate[0]
                const month = newDate[1]
                const year = newDate[2]
                if ((day > 31 || day < 1) || (month > 12 || month < 1)) {
                  return null
              }
              return `${day}.${month}.${year}`
            }
        }
        return null
    }).filter(elem => elem !== null)

    return newArrayDate    
}

const result = sortDate(arrString)
console.log(result)
