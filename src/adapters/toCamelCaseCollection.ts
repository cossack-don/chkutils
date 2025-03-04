import {
  belongToTypes,
  DefaultOption,
  isArrayObject,
  isValidObject,
  Options,
  validateOptions,
} from "./utilsCase";
import { toCamelCasePrimitive } from "./toCamelCasePrimitive";

export function toCamelCaseCollection(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toCamelCasePrimitive(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        if (!belongToTypes(value, opt.keepTypesOnRecursion)) {
          value = toCamelCaseCollection(value, opt);
        }
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            if (!belongToTypes(ret, opt.keepTypesOnRecursion)) {
              ret = toCamelCaseCollection(v, opt);
            }
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = toCamelCaseCollection(
              {
                key: v,
              },
              opt
            );
            ret = temp.key;
          }
          return ret;
        });
      }
    }
    res[nkey] = value;
  });

  return res;
}
