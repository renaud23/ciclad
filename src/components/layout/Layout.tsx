import { type PropsWithChildren } from 'react'

import { GridContainer } from '@components/grid/GridContainer'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main id="main" role="main" lang="fr-FR">
        <GridContainer>{children}</GridContainer>
      </main>

      <Footer />
    </>
  )
}
