```js
// example
import polling from './polling';

// Функция, которая будет вызываться периодически
const fetchData = () => {
  console.log('Fetching data...');
};

// Создаем polling с интервалом 1000 мс (1 секунда)
const { start, stop } = polling(fetchData, 1000);

// Запускаем опрос
start();

// Через 5 секунд останавливаем опрос
setTimeout(() => {
  stop();
}, 5000);
```