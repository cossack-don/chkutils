import {_ch} from '@/index'

// Функция unDefWithDefaultField принимает два аргумента:
// 1. val - значение, которое может быть типа T, undefined или null.
// 2. payload - значение по умолчанию, которое будет возвращено, если val равно undefined или null.
// По умолчанию payload равен объекту { text: 'Нет данных' }.

export const unDefWithDefaultField = <T, P = { text: string }>(
  val: T | undefined | null, // val может быть любого типа T, undefined или null
  payload: P = { text: 'Нет данных' } as P // payload по умолчанию равен { text: 'Нет данных' }
): T | P => { // Функция возвращает либо значение типа T, либо значение типа P
              // Проверяем, является ли val undefined или null с помощью функции isUnDef
  if (_ch.isUnDef(val)) return payload; // Если val равно undefined или null, возвращаем payload
  return val; // Иначе возвращаем val
};
