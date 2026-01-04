import { useEffect } from 'react'

import { GridContainer } from '@src/components/grid/GridContainer'
import { Layout } from '@src/components/layout/Layout'
import { classNames } from '@src/components/utils/classNames'
import { addToIdbStore } from '@src/lib/idb/addToIdbStore'
import { openIdbDatabase } from '@src/lib/idb/openIdbDatabase'

type CicladTest = { name: string }

export function AccueilPublic() {
  useEffect(() => {
    openIdbDatabase('omer-com-pock-db', 1, (db) => {
      db.createObjectStore('ciclad-store-test', {
        keyPath: 'id',
        autoIncrement: true,
      })
    }).then((db) => {
      addToIdbStore<CicladTest>(db, 'ciclad-store-test', { name: 'test' })
      addToIdbStore<CicladTest>(db, 'ciclad-store-test', [
        { name: 'test1' },
        { name: 'test2' },
      ])
    })
  }, [])
  return (
    <Layout>
      <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
        Accueil Public Page
      </GridContainer>
    </Layout>
  )
}
