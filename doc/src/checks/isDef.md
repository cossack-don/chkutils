# Method isDef

Возвращает `true`, если значение не `undefined` и не `null`, иначе `false`

  ```ts
  isDef(undefined) // => false
  isDef(null) // => false

  isDef(false) // => true
  isDef(NaN) // => true
  
  const maps = new Map()
  isDef(maps) // => true
  ```