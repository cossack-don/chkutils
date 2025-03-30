# Method isSet

Возвращает true, если значение является экземпляром Set, иначе false

  ```ts
    isSet(new Set()); // true
    isSet([]);       // false
    isSet({});       // false
    isSet('text');   // false
  ```