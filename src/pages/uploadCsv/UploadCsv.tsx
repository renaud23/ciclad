import { OidcSecure } from '@axa-fr/react-oidc'
import { Layout } from '@src/components/layout/Layout'

export function UploadCsv() {
  return (
    <OidcSecure>
      <Layout> Hello!</Layout>
    </OidcSecure>
  )
}
