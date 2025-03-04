
// Object.prototype.toString.call(42); // "[object Number]"
// Object.prototype.toString.call("hello"); // "[object String]"
// Obj ect.prototype.toString.call([]); // "[object Array]"
// Object.prototype.toString.call({}); // "[object Object]"
export const objectToString: typeof Object.prototype.toString = Object.prototype.toString

export const toTypeString = (value: unknown): string => objectToString.call(value)
// examples
// console.log(toTypeString(42)); // "[object Number]"
// console.log(toTypeString("hello")); // "[object String]"
// console.log(toTypeString([])); // "[object Array]"
// console.log(toTypeString({})); // "[object Object]"
// console.log(toTypeString(null)); // "[object Null]"
// console.log(toTypeString(undefined)); // "[object Undefined]"
// console.log(toTypeString(() => {})); // "[object Function]"
