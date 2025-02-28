/**
 * Функция debounce (устранение дребезга) для отложенного выполнения функции.
 * Позволяет откладывать вызов функции до тех пор, пока не пройдет указанное время `wait`
 * с момента последнего вызова. Если `immediate` равно `true`, функция выполняется сразу
 * при первом вызове, а затем откладывается на указанное время.
 *
 * @template T - Тип функции, которую нужно отложить.
 * @param func - Функция, которую нужно отложить.
 * @param wait - Время задержки в миллисекундах.
 * @param immediate - Если `true`, функция выполняется сразу при первом вызове.
 * @returns Возвращает новую функцию, которая откладывает вызов оригинальной функции.
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null; // Таймер для хранения идентификатора setTimeout

  return (...args: Parameters<T>): void => {
    // Функция, которая будет вызвана после завершения таймера
    const later = () => {
      timeout = null; // Сбрасываем таймер
      if (!immediate) {
        // Если immediate = false, вызываем оригинальную функцию
        func(...args);
      }
    };

    // Если immediate = true и таймер не запущен, вызываем функцию сразу
    const callNow = immediate && !timeout;

    // Если таймер уже запущен, сбрасываем его
    if (timeout) {
      clearTimeout(timeout);
    }

    // Запускаем новый таймер
    timeout = setTimeout(later, wait);

    // Если immediate = true и таймер не запущен, вызываем функцию сразу
    if (callNow) {
      func(...args);
    }
  };
};
