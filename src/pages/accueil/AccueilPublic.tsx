import { GridContainer } from '@src/components/grid/GridContainer'
import { Layout } from '@src/components/layout/Layout'
import { classNames } from '@src/components/utils/classNames'

export function AccueilPublic() {
  return (
    <Layout>
      <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
        Accueil Public Page
      </GridContainer>
    </Layout>
  )
}
