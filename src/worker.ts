import { csvAnalyzer } from './lib/csvAnalyzer/csvAnalyzer'
import type { DataBrut } from './types'

export function analyze(data: DataBrut) {
  return csvAnalyzer(data)
}

export const add = (a: number, b: number) => a + b
