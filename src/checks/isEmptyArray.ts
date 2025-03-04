/**
 * Проверяет, является ли массив пустым.
 * @param {unknown} arr - Массив для проверки.
 * @returns {boolean} - Возвращает `true`, если массив пустой, иначе `false`.
 */
export const isEmptyArray = (arr: unknown): boolean => {
  // Проверяем, что arr является массивом
  if (!Array.isArray(arr)) {
    return false;
  }

  // Проверяем, что массив пустой
  return arr.length === 0;
};
