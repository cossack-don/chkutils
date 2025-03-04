```js
const myFunction = (message: string) => {
console.log(message);
};

const debouncedFunction = _m.debounce(myFunction, 2000);

debouncedFunction("Hello, World!"); // Вызовется через 2000 мс
```