# Method isFunction

Возвращает `true`, если значение является функцией, иначе `false`

  ```ts
  isFunction(() => 123) // => true

  isFunction([]) // => false
  isFunction(NaN) // => false
  ```