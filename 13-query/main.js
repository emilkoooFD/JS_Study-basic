const object = {
    search: "Вася", 
    take: 10,
    slice: 'qwe',
    skill: 'Gaming'
  }
  function transformationQuery(obj) {
      let query = []
      for (const key in obj) {
        const value = obj[key]
        query.push(`${key}=${value}`)
      }
      return query.join('&')
  }
  console.log(transformationQuery(object))