# Method isUnDef

Возвращает `true`, если значение равно `undefined` или `null`, иначе `false`

  ```ts
  isUnDef(undefined) // => true
  isUnDef(null) // => true

  isUnDef(false) // => false
  isUnDef(NaN) // => false
  
  const maps = new Map()
  isUnDef(maps) // => false
  ```