import { useEffect, useRef, useState } from 'react'

import type { OidcConfiguration } from '@axa-fr/react-oidc'
import { getConfiguration } from '@src/lib/api/configuration'

export function useOidcConfiguration() {
  const [configuration, setConfiguration] = useState<OidcConfiguration>()
  const loading = useRef(false)
  const loaded = useRef(false)

  useEffect(() => {
    if (!configuration && !loading.current && !loaded.current) {
      loading.current = true
      getConfiguration()
        .then((c) => {
          setConfiguration({
            ...c,
            redirect_uri: `${window.location.origin}/login`,
            refresh_time_before_tokens_expiration_in_second: 40,
            service_worker_relative_url: '/OidcServiceWorker.js',
          })
          loaded.current = true
        })
        .catch(() => {
          // TODO gérer l'erreur
          loading.current = false
        })
    }
  }, [configuration])

  return configuration
}
