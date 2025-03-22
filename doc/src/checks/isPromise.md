# Method isPromise

Возвращает `true`, если значение является Promise, иначе `false`

  ```ts
  isPromise(fetch('url')) // => true

  const payload = new Promise((resolve, reject) => resolve(результат))
  isPromise(payload) // => true

  isPromise([]) // => false
  isPromise([{ name: 'Name', age: 25 }]) // => false

  isPromise({}) // => false
  isPromise(false) // => false
  isPromise(NaN) // => false
  
  const maps = new Map()
  isPromise(maps) // => false
  ```