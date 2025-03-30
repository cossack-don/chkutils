import { _h } from "@/index";

/**
 * Проверяет, является ли переданное значение объектом типа Set.
 *
 * @param val - Проверяемое значение любого типа
 * @returns Возвращает true, если значение является экземпляром Set, иначе false
 *
 * @example
 * isSet(new Set()); // true
 * isSet([]);       // false
 * isSet({});       // false
 * isSet('text');   // false
 */
export const isSet = (val: unknown): val is Set<any> => {
  // Используется внутренний метод _h.toTypeString для получения строки-описания типа
  // Сравнивает результат с '[object Set]' - стандартным представлением Set
  return _h.toTypeString(val) === '[object Set]';
}
