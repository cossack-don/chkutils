/**
 *
 * @public
 */

const isPromise= (val: any): val is Promise<any> => isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function'
const isDef = <T>(v: T): v is NonNullable<T> => v !== undefined && v !== null
const isTrue = (v: any): boolean => v === true
const isFalse = (v: any): boolean => v === false
const isArray = Array.isArray;
const isUndefined = (v: any): v is undefined | null => v === undefined || v === null
const isObject = (obj: any): boolean => obj !== null && typeof obj === 'object'
const isFunction = (value: any): value is (...args: any[]) => any => typeof value === 'function'
// const isDate = (val: unknown): val is Date => toTypeString(val) === '[object Date]'


export const _checks = {
    isDef,
    isPromise,
    isTrue,
    isFalse,
    isArray,
    isUndefined,
    isObject,
    isFunction
}
