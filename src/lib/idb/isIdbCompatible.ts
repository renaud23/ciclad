export function isIdbCompatible() {
  if (!window.indexedDB) {
    return false
  }
  return true
}
