# Method isEmptyObject

Возвращает `true`, если объект пустой, иначе `false`

  ```ts
  isEmptyObject({}) // => true
  isEmptyObject(null) // => false
  isEmptyObject([]) // => false

  isEmptyObject(false) // => false
  isEmptyObject(NaN) // => false
  
  const maps = new Map()
  isEmptyObject(maps) // => false
  ```