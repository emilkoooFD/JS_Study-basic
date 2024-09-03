const arrString = ['10-02-22', 'тест', '11/12/2023', '00/13/2022', '31/12/2023', 'jks df', '22.33.2060', '12.06.24']

function sortDate(arr) {
    const newArrayDate = arr.map(elem => {
        if (elem.includes('/') || elem.includes('.')) {
            const newDate = elem.split(elem.includes('/') ? '/' : '.')
            const date = newDate[0]
            const month = newDate[1]
            const year = newDate[2]
            if (date > 31 || month > 12) {
                return null
            }
            return `${date}-${month}-${year}`
        }
        return null
    }).filter(elem => elem !== null)

    return newArrayDate    
}

const result = sortDate(arrString)
console.log(result)
