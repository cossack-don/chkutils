/**
 * Проверяет, является ли значение определённым (не `undefined` и не `null`).
 * Эта функция также работает как type guard, сужая тип переменной до `NonNullable<T>`.
 *
 * @param v - Значение, которое нужно проверить.
 * @returns Возвращает `true`, если значение не `undefined` и не `null`, иначе `false`.
 */
export const isDef = <T>(v: T): v is NonNullable<T> => v !== undefined && v !== null;
