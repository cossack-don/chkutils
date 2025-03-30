/**
 * Проверяет, является ли переданное значение примитивом типа Symbol.
 *
 * @param val - Проверяемое значение любого типа
 * @returns Возвращает true, если значение является Symbol, иначе false
 *
 * @example
 * isSymbol(Symbol('foo'));  // true
 * isSymbol('symbol');       // false
 * isSymbol(123);           // false
 * isSymbol({});            // false
 */
export const isSymbol = (val: unknown): val is symbol => {
  // Используется оператор typeof, который для Symbol возвращает строку 'symbol'
  return typeof val === 'symbol';
}
