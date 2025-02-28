import { isDef } from "./isDef";

/**
 * Проверяет, является ли переданное значение объектом Promise.
 * Эта функция также работает как type guard, сужая тип переменной до `Promise<any>`.
 *
 * @param val - Значение, которое нужно проверить.
 * @returns Возвращает `true`, если значение является Promise, иначе `false`.
 */
export const isPromise = (val: any): val is Promise<any> =>
  isDef(val) && // Проверяем, что значение определено (не `undefined` и не `null`)
  typeof val.then === 'function' && // Проверяем наличие метода `then`
  typeof val.catch === 'function'; // Проверяем наличие метода `catch`
