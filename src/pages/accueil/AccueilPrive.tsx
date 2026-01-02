import { GridContainer } from '@src/components/grid/GridContainer'
import { Layout } from '@src/components/layout/Layout'
import { classNames } from '@src/components/utils/classNames'

export function AccueilPrive() {
  return (
    <Layout>
      <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
        Accueil Privé Page
      </GridContainer>
    </Layout>
  )
}
