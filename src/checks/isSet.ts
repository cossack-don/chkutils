import { _h } from "@/index";

export const isSet = (val: unknown): val is Set<any> => _h.toTypeString(val) === '[object Set]'
