/**
 * Type brut du fichier cvs de l'utilisateur, probablement fournit par leur Sirh
 */
export type DataBrut = {
  header: string[] // colonnes du fichier
  rows: Record<string, string | number | boolean | null>[] // rangs du csv
  nbRows: number // nombre total de rangs
  fileName: string // nom du fichier uploader
  fileSize: number // taille du fichier
}

/**
 *
 */
export type DataExpected = {
  nom: string
}

/**
 * mapping entre les champs attendus et les nom de colonne du fichier utilisateur.
 */
export type Mapping = {
  nom?: string
}
