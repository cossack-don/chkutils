/**
 *
 * @public
 */
export declare const _checks: {
    isDef: <T>(v: T) => v is NonNullable<T>;
    isPromise: (val: any) => val is Promise<any>;
    isTrue: (v: any) => boolean;
    isFalse: (v: any) => boolean;
    isArray: (arg: any) => arg is any[];
    isUndefined: (v: any) => v is undefined | null;
    isObject: (obj: any) => boolean;
    isFunction: (value: any) => value is (...args: any[]) => any;
};

/**
 *
 * @public
 */
export declare const _transforms: {};

export { }
