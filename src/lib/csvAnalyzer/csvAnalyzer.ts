import type { DataBrut } from '@src/types'

type AggregatedTypes = Record<string, Record<string, number>>

function appendType(ty: string, ag: Record<string, number>) {
  if (ty in ag) {
    ag[ty] = ag[ty] + 1
  } else {
    ag[ty] = 1
  }
}

export async function csvAnalyzer(data: DataBrut) {
  const { header, rows } = data
  const aggregatedTypes: AggregatedTypes = {}

  header.forEach((name) => {
    aggregatedTypes[name] = {}
    rows.forEach((r) => {
      if (name in r) {
        const value = r[name]
        switch (value) {
          case null:
            appendType('null', aggregatedTypes[name])
            break
          case undefined:
            appendType('undefined', aggregatedTypes[name])
            break
          case '':
            appendType('empty', aggregatedTypes[name])
            break
          default:
            appendType(`${typeof value}`, aggregatedTypes[name])
        }
      }
    })
  })

  return aggregatedTypes
}
