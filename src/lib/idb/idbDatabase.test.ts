import { describe, expect, it } from 'vitest'

import { addToIdbStore } from './addToIdbStore'
import { getAllFromIdbStore } from './getAllFromIdbStore'
import { openIdbDatabase } from './openIdbDatabase'

type TestType = { id?: number; value: string }

async function createAndFillStore() {
  return await openIdbDatabase('test-db', 1, (db) => {
    db.createObjectStore('store-test', { keyPath: 'id', autoIncrement: true })
  })
}

describe('Test IdbDatabase', () => {
  it('opend db', async () => {
    const idb = await createAndFillStore()
    expect(idb).toBeDefined()
    expect(idb.objectStoreNames.contains('store-test')).toBe(true)
  })

  it('put and get all', async () => {
    const idb = await createAndFillStore()

    expect(
      addToIdbStore<TestType>(idb, 'store-test', [
        { value: 'test1' },
        { value: 'test2' },
      ]),
    ).resolves.toBe(true)

    expect(
      getAllFromIdbStore<TestType>(idb, 'store-test'),
    ).resolves.toHaveLength(2)
  })
})
