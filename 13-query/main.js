const object = {
    search: "Вася", 
    take: 10,
    slice: 'qwe',
    skill: 'Gaming'
}

// function transformationQuery(obj) {
//     let query = []
//     for (const key in obj) {
//       const value = obj[key]
//       query.push(`${key}=${value}`)
//     }
//     return query.join('&')
// }

//Сокращенный вариант
const queryFn = (obj) => Object.entries(obj).map(x => x.join('=')).join('&')

// console.log(transformationQuery(object))
console.log(object)
console.log(queryFn(object));