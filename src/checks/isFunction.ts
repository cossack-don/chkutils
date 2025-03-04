/**
 * Проверяет, является ли переданное значение функцией.
 * Эта функция также работает как type guard, сужая тип переменной до типа функции.
 *
 * @param value - Значение, которое нужно проверить.
 * @returns Возвращает `true`, если значение является функцией, иначе `false`.
 */
export const isFunction = (value: any): value is (...args: any[]) => any =>
  typeof value === 'function';
