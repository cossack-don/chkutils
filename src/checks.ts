/**
 *
 * @public
 */

// Примитивные структуры данных
const isTrue = (v: any): boolean => v === true
const isFalse = (v: any): boolean => v === false

// Защита от null, undefined
const isDef = <T>(v: T): v is NonNullable<T> => v !== undefined && v !== null
const isUnDef = (v: any): v is undefined | null => v === undefined || v === null
const isAllUnDef = (v: any): v is undefined | null | typeof NaN => v === undefined || v === null || Number.isNaN(v);

// Сложные структуры данных
const isFunction = (value: any): value is (...args: any[]) => any => typeof value === 'function'
const isObject = (obj: any): boolean => obj !== null && typeof obj === 'object'
const isPromise= (val: any): val is Promise<any> => isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function'
const isArray = Array.isArray;

export const _ch = {
    isDef,
    isAllUnDef,
    isPromise,
    isTrue,
    isFalse,
    isArray,
    isUnDef,
    isObject,
    isFunction
}
