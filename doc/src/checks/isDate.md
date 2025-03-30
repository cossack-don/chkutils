# Method isDate

Возвращает true, если значение является корректным объектом Date, иначе false

  ```ts
    isDate(new Date());     // true
    isDate('2023-01-01');  // false
    isDate(null);          // false
    isDate(1234567890);    // false
  ```