import { useCallback } from 'react'

import { OidcSecure } from '@axa-fr/react-oidc'
import { DropFiles } from '@src/components/dropFiles/DropFiles'
import { GridContainer } from '@src/components/grid/GridContainer'
import { GridRow } from '@src/components/grid/GridRow'
import { Layout } from '@src/components/layout/Layout'
import { classNames } from '@src/components/utils/classNames'
import { parseCsv } from '@src/lib/csvParser/parseCsv'

export function UploadCsv() {
  const onDropFile = useCallback((file: File) => {
    parseCsv(file).then((result) => {
      console.log(result)
    })
  }, [])

  return (
    <OidcSecure>
      <Layout>
        <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
          <GridRow>
            <DropFiles onDropFile={onDropFile} />
          </GridRow>
        </GridContainer>
      </Layout>
    </OidcSecure>
  )
}
