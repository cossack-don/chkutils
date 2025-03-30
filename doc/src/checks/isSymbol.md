# Method isSymbol

Возвращает true, если значение является корректным объектом Date, иначе false

  ```ts
    isSymbol(Symbol('foo'));  // true
    isSymbol('symbol');       // false
    isSymbol(123);           // false
    isSymbol({});            // false
  ```