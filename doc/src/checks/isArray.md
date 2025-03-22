# Method isArray

Возвращает `true`, если значение является массивом, иначе `false`

  ```ts
  isArray([]) // => true
  isArray([ 1, 2 ,3 ]) // => true
  isArray([{ name: 'Name', age: 25 }]) // => true

  isArray({}) // => false
  isArray(false) // => false
  isArray(NaN) // => false
  
  const maps = new Map()
  isArray(maps) // => false
  ```