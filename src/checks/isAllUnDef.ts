/**
 * Проверяет, является ли переданное значение `undefined`, `null` или `NaN`.
 * Эта функция также работает как type guard, сужая тип переменной до `undefined | null | typeof NaN`.
 *
 * @param v - Значение, которое нужно проверить.
 * @returns Возвращает `true`, если значение равно `undefined`, `null` или `NaN`, иначе `false`.
 */
export const isAllUnDef = (v: any): v is undefined | null | typeof NaN =>
  v === undefined || v === null || Number.isNaN(v);
