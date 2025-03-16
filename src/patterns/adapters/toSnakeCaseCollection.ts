import {
  belongToTypes,
  DefaultOption,
  isArrayObject,
  isValidObject,
  Options,
  validateOptions
} from "./utilsCase";
import { toSnakeCasePrimitive } from "./toSnakeCasePrimitive";

export function toSnakeCaseCollection(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toSnakeCasePrimitive(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        if (!belongToTypes(value, opt.keepTypesOnRecursion)) {
          value = toSnakeCaseCollection(value, opt);
        }
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            if (!belongToTypes(ret, opt.keepTypesOnRecursion)) {
              ret = toSnakeCaseCollection(v, opt);
            }
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = toSnakeCaseCollection(
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
