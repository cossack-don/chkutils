export interface Options {
  recursive: boolean;
  recursiveInArray?: boolean;
  keepTypesOnRecursion?: any[];
}

export const DefaultOption: Options = {
  recursive: false,
  recursiveInArray: false,
  keepTypesOnRecursion: [],
};

export const validateOptions = (opt: Options = DefaultOption): Options => {
  if (opt.recursive == null) {
    opt = DefaultOption;
  } else if (opt.recursiveInArray == null) {
    opt.recursiveInArray = false;
  }
  return opt;
};

export const isValidObject = (obj: any): boolean => obj != null && typeof obj === "object" && !Array.isArray(obj);

export const isArrayObject = (obj: any): boolean => obj != null && Array.isArray(obj);

export const belongToTypes = (obj: any, types?: any[]): boolean => (types || []).some((Type) => obj instanceof Type);
