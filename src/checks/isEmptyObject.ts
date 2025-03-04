/**
 * Проверяет, является ли объект пустым.
 * @param {unknown} obj - Объект для проверки.
 * @returns {boolean} - Возвращает `true`, если объект пустой, иначе `false`.
 */
export const isEmptyObject = (obj: unknown): boolean => {
  // Проверяем, что obj является объектом и не является null
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  // Проверяем, что obj не является массивом
  if (Array.isArray(obj)) {
    return false;
  }

  // Проверяем, что объект пустой
  return Object.keys(obj).length === 0;
};
