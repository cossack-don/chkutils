export const cloneDeep = <T>(value: T, cache = new WeakMap()): T => {
  // Примитивы и функции возвращаем как есть
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Если значение уже было скопировано, возвращаем его из кэша
  if (cache.has(value)) {
    return cache.get(value);
  }

  // Обработка массивов
  if (Array.isArray(value)) {
    const clonedArray: any[] = [];
    cache.set(value, clonedArray);
    clonedArray.push(...value.map(item => cloneDeep(item, cache)));
    return clonedArray as unknown as T;
  }

  // Обработка объектов
  if (value instanceof Date) {
    return new Date(value) as unknown as T;
  }

  if (value instanceof RegExp) {
    // Копируем RegExp
    return new RegExp(value.source, value.flags) as unknown as T;
  }

  //Важно понимать, что копирование Promise — это нестандартная задача,
  // так как Promise представляет собой асинхронную операцию, и его копирование может быть неочевидным.
  // В большинстве случаев Promise не нужно копировать, так как он представляет собой ссылку на асинхронную операцию.
  if (value instanceof Promise) {
    // Возвращаем оригинальный Promise (без копирования)
    return value;
  }

  if (value instanceof Map) {
    const clonedMap = new Map();
    cache.set(value, clonedMap);
    value.forEach((val, key) => {
      clonedMap.set(key, cloneDeep(val, cache));
    });
    return clonedMap as unknown as T;
  }

  if (value instanceof Set) {
    const clonedSet = new Set();
    cache.set(value, clonedSet);
    value.forEach(val => {
      clonedSet.add(cloneDeep(val, cache));
    });
    return clonedSet as unknown as T;
  }

  // Обработка обычных объектов
  const clonedObject: Record<string, any> = {};
  cache.set(value, clonedObject);
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      clonedObject[key] = cloneDeep(value[key], cache);
    }
  }

  return clonedObject as T;
};
