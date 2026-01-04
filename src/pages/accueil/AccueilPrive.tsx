import { Banner } from '@src/components/banners/Banner'
import { Card } from '@src/components/cards/Card'
import { GridContainer } from '@src/components/grid/GridContainer'
import { GridRow } from '@src/components/grid/GridRow'
import { UploadFileImage } from '@src/components/images/UploadFileImage'
import { Layout } from '@src/components/layout/Layout'
import { classNames } from '@src/components/utils/classNames'

export function AccueilPrive() {
  return (
    <Layout>
      <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
        <GridRow>
          <Banner />
          <h1>Recensement de la communnauté - [...]</h1>
        </GridRow>
        <GridRow className="fr-grid-row--center">
          <Card
            image={<UploadFileImage className="fr-mt-1w" />}
            to="/upload-csv"
          >
            <h2>Import CSV</h2>
            <p>
              Importez un fichier CSV existant contenant les données des membres
              de votre communauté
            </p>
          </Card>
        </GridRow>
      </GridContainer>
    </Layout>
  )
}
