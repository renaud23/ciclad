import { useOidc } from '@axa-fr/react-oidc'
import { Banner } from '@src/components/banners/Banner'
import { GridContainer } from '@src/components/grid/GridContainer'
import { GridRow } from '@src/components/grid/GridRow'
import { Layout } from '@src/components/layout/Layout'
import { classNames } from '@src/components/utils/classNames'

export function AccueilPublic() {
  const { login } = useOidc()
  return (
    <Layout>
      <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
        <GridRow>
          <Banner />
          <h1>
            Bienvenue sur l'application de collecte des communautés du rencement
            de la population.
          </h1>
        </GridRow>
        <GridRow>
          <p>Veuillez vous connecter pour accéder à l'application.</p>
        </GridRow>
        <GridRow>
          <button
            className={classNames(
              'fr-btn',
              'fr-btn--icon-right',
              'fr-icon-lock-line',
            )}
            type="button"
            onClick={() => {
              login()
            }}
          >
            Connexion
          </button>
        </GridRow>
      </GridContainer>
    </Layout>
  )
}
