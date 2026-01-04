import languageEncoding from 'detect-file-encoding-and-language'
import Papa from 'papaparse'

export async function parseCsv(file: File) {
  const rows: Array<Record<string, unknown>> = []
  let header: string[]
  const info = await languageEncoding(file)

  return new Promise((resolve, reject) => {
    Papa.parse<Record<string, unknown>, File>(file, {
      delimiter: ',',
      header: true,
      dynamicTyping: true,
      encoding: info.encoding ?? 'UTF-8',
      complete: (r) => {
        resolve({ header, rows, nbRows: rows.length, fileName: file.name })
      },
      step: (r) => {
        header = r.meta.fields ?? []
        rows.push(r.data)
      },
      error: (err) => {
        reject(err)
      },
    })
  })
}
