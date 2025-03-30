import { _h } from "@/index";

/**
 * Проверяет, является ли переданное значение объектом типа Map.
 *
 * @param val - Произвольное значение для проверки
 * @returns Возвращает true, если значение является Map, и false в противном случае
 *
 * @example
 * isMap(new Map()) // => true
 * isMap({}) // => false
 * isMap('string') // => false
 */
export const isMap = (val: unknown): val is Map<any, any> => {
  // Используется внутренний метод _h.toTypeString (предположительно аналог Object.prototype.toString.call())
  // для получения точного типа значения в формате '[object Type]'
  return _h.toTypeString(val) === '[object Map]'
}
