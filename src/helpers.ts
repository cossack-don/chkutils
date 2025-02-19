import {_checks} from './'

const defaultTo = <T, P = {}>(val: T | undefined, payload: P = {} as P): T | P => {
  if (_checks.isUndef(val)) return payload;
  return val;
};


export const _h = {
  defaultTo
}
