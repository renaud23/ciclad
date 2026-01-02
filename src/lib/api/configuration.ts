import type { OidcConfiguration } from '@axa-fr/react-oidc'

export function getConfiguration(): Promise<OidcConfiguration> {
  return fetch('/configuration.json').then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to load configuration: ${response.status} ${response.statusText}`,
      )
    }
    return response.json()
  })
}
