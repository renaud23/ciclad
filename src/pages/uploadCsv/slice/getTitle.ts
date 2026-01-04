export function getTitle(step: number) {
  switch (step) {
    case 1:
      return 'Import CSV'
    case 2:
      return 'Vérification'
    case 3:
      return 'Prévisualisation'
    case 4:
      return 'Envoi'
    default:
      return undefined
  }
}
