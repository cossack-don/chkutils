import {_ch} from '@/index'

export const defaultTo = <T, P = {}>(val: T | undefined, payload: P = {text:'Нет данных'} as P): T | P => {
  if (_ch.isAllUnDef(val)) return payload;
  return val;
};
