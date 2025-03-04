/**
 * Проверяет, является ли переданное значение `undefined` или `null`.
 * Эта функция также работает как type guard, сужая тип переменной до `undefined | null`.
 *
 * @param v - Значение, которое нужно проверить.
 * @returns Возвращает `true`, если значение равно `undefined` или `null`, иначе `false`.
 */
export const isUnDef = (v: any): v is undefined | null =>
  v === undefined || v === null;
