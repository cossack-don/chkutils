export declare const _c: {};

export declare const _ch: {
    isDef: <T>(v: T) => v is NonNullable<T>;
    isAllUnDef: (v: any) => v is undefined | null | typeof NaN;
    isPromise: (val: any) => val is Promise<any>;
    isTrue: (v: any) => boolean;
    isFalse: (v: any) => boolean;
    isArray: (arg: any) => arg is any[];
    isUnDef: (v: any) => v is undefined | null;
    isObject: (obj: any) => boolean;
    isFunction: (value: any) => value is (...args: any[]) => any;
    isDate: (val: unknown) => val is Date;
    isMap: (val: unknown) => val is Map<any, any>;
    isSet: (val: unknown) => val is Set<any>;
    isSymbol: (val: unknown) => val is symbol;
    isNull: (value: any) => boolean;
    isEmptyArray: (arr: unknown) => boolean;
    isEmptyObject: (obj: unknown) => boolean;
};

export declare const _h: {
    unDefWithDefaultField: <T, P = {
        text: string;
    }>(val: T | undefined | null, payload?: P) => T | P;
    cloneDeep: <T>(value: T, cache?: WeakMap<object, any>) => T;
    toTypeString: (value: unknown) => string;
};

export declare const _m: {
    debounce: <T extends (...args: any[]) => any>(func: T, wait: number, immediate?: boolean) => ((...args: Parameters<T>) => void);
    polling: <T extends (...args: any[]) => any>(func: T, interval: number) => {
        start: () => void;
        stop: () => void;
    };
};

declare interface Options {
    recursive: boolean;
    recursiveInArray?: boolean;
    keepTypesOnRecursion?: any[];
}

export declare const _p: {
    toSnakeCaseCollection: typeof toSnakeCaseCollection;
    toSnakeCasePrimitive: typeof toSnakeCasePrimitive;
    toCamelCasePrimitive: typeof toCamelCasePrimitive;
    toCamelCaseCollection: typeof toCamelCaseCollection;
};

export declare const _t: {};

declare function toCamelCaseCollection(obj: any, opt?: Options): object | null;

declare function toCamelCasePrimitive(str?: string): string;

declare function toSnakeCaseCollection(obj: any, opt?: Options): object | null;

declare function toSnakeCasePrimitive(str?: string): string;

export { }
