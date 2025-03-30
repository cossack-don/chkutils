import { _h } from "@/index"

/**
 * Проверяет, является ли переданное значение объектом Date.
 *
 * @param val - Проверяемое значение любого типа
 * @returns Возвращает true, если значение является корректным объектом Date, иначе false
 *
 * @example
 * isDate(new Date());     // true
 * isDate('2023-01-01');  // false
 * isDate(null);          // false
 * isDate(1234567890);    // false
 */
export const isDate = (val: unknown): val is Date => {
  // Используется внутренний метод _h.toTypeString, который возвращает строку вида '[object Type]'
  // Для объектов Date возвращается строка '[object Date]'
  return _h.toTypeString(val) === '[object Date]';
}
