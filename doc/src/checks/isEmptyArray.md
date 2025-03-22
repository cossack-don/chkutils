# Method isEmptyArray

Возвращает `true`, если массив пустой, иначе `false`

  ```ts
  isEmptyArray([]) // => true
  isEmptyArray(null) // => false

  isEmptyArray(false) // => false
  isEmptyArray(NaN) // => false
  
  const maps = new Map()
  isEmptyArray(maps) // => false
  ```