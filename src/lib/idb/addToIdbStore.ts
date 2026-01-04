export async function addToIdbStore<U>(
  db: IDBDatabase,
  storeName: string,
  entity: U | U[],
): Promise<boolean> {
  const transaction = db.transaction(storeName, 'readwrite')
  const store = transaction.objectStore(storeName)
  if (Array.isArray(entity)) {
    entity.forEach((e) => store.put(e))
  } else {
    store.put(entity)
  }

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve(true)
    transaction.onerror = () => reject(false)
  })
}
