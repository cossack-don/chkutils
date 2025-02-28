/**
 * Функция для выполнения периодического опроса (polling).
 * @param func - Функция, которая будет вызываться периодически.
 * @param interval - Интервал времени (в миллисекундах) между вызовами функции.
 * @returns Объект с методами `start` и `stop` для управления опросом.
 */
export const polling = <T extends (...args: any[]) => any>(
  func: T,
  interval: number
): { start: () => void; stop: () => void } => {

  let timer: ReturnType<typeof setInterval> | null = null; // Таймер для хранения идентификатора интервала

  return {
    /**
     * Запускает периодический опрос.
     * Если опрос уже запущен, ничего не делает.
     */
    start: () => {
      if (!timer) {
        // Если таймер не запущен, запускаем его
        timer = setInterval(() => func(), interval);
      }
    },

    /**
     * Останавливает периодический опрос.
     * Если опрос не запущен, ничего не делает.
     */
    stop: () => {
      if (timer) {
        // Если таймер запущен, останавливаем его
        clearInterval(timer);
        timer = null; // Сбрасываем таймер
      }
    },
  };
};

// Написать тесты !!!



//example
// import polling from './polling';
//
// // Функция, которая будет вызываться периодически
// const fetchData = () => {
//   console.log('Fetching data...');
// };
//
// // Создаем polling с интервалом 1000 мс (1 секунда)
// const { start, stop } = polling(fetchData, 1000);
//
// // Запускаем опрос
// start();
//
// // Через 5 секунд останавливаем опрос
// setTimeout(() => {
//   stop();
// }, 5000);
