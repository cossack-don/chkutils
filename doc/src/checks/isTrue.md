# Method isTrue

Возвращает `true`, если значение строго равно `true`, иначе `false`

  ```ts
  isTrue(true) // => true

  isTrue(false) // => false
  isTrue(NaN) // => false
  
  const maps = new Map()
  isTrue(maps) // => false
  ```
