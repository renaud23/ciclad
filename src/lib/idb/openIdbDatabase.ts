import { isIdbCompatible } from './isIdbCompatible'

export function openIdbDatabase(
  name: string,
  version: number,
  initialize?: (db: IDBDatabase) => void,
): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (isIdbCompatible()) {
      const request = window.indexedDB.open(name, version)

      request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
        const db = (e.target as IDBRequest).result as IDBDatabase
        initialize?.(db)
      }

      request.onerror = function () {
        reject(`Failed to open indexedDB database: ${name}`)
      }
      request.onsuccess = function (e: Event) {
        resolve((e.target as IDBRequest).result)
      }
    }
  })
}
