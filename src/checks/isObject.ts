/**
 * Проверяет, является ли переданное значение объектом (и не `null`).
 * Используется строгая проверка типа (`typeof`) и исключение `null`, так как `typeof null` возвращает `'object'`.
 *
 * @param obj - Значение, которое нужно проверить.
 * @returns Возвращает `true`, если значение является объектом и не `null`, иначе `false`.
 */
export const isObject = (obj: any): boolean =>
  obj !== null && typeof obj === 'object';
