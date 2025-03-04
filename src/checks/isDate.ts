import { _h } from "@/index"

export const isDate = (val: unknown): val is Date => _h.toTypeString(val) === '[object Date]'
