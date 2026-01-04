export type DataBrut = {
  header: string[]
  rows: Record<string, string | number | boolean | null>
  nbRows: number
  file: File
}
