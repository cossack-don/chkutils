# Method isFalse

Возвращает `true`, если значение строго равно `false`, иначе `false`

  ```ts
  isFalse(false) // => true

  isFalse(true) // => false
  isFalse(NaN) // => false
  
  const maps = new Map()
  isFalse(maps) // => false
  ```