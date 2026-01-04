export function getAllFromIdbStore<T>(
  db: IDBDatabase,
  storeName: string,
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly')
    const store = transaction.objectStore(storeName)
    const request = store.getAll()

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(`Error getting Entites from ${storeName}`)
  })
}
