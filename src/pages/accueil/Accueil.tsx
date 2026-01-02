import { useOidc } from '@axa-fr/react-oidc'
import { useSetActiveMenuItem } from '@src/hooks/useSetActiveMenuItem'

import { AccueilPrive } from './AccueilPrive'
import { AccueilPublic } from './AccueilPublic'

export function Accueil() {
  useSetActiveMenuItem(0)
  const { isAuthenticated } = useOidc()
  if (isAuthenticated) {
    return <AccueilPrive />
  }
  return <AccueilPublic />
}
