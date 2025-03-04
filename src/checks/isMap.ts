import { _h } from "@/index";

export const isMap = (val: unknown): val is Map<any, any> => _h.toTypeString(val) === '[object Map]'
