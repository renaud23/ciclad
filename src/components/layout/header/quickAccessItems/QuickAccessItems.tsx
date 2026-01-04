import { useOidc } from '@axa-fr/react-oidc'
import { classNames } from '@src/components/utils/classNames'
import { useNavigate } from 'react-router'

export function QuickAccessItems() {
  // fr-icon-lock-line
  const { isAuthenticated, login, logout } = useOidc()
  const navigate = useNavigate()

  const title = isAuthenticated ? 'Se déconnecter' : 'Se connecter'

  return (
    <>
      <ul className="fr-btns-group">
        <li>
          <button
            aria-controls="Se connecter"
            data-fr-opened="false"
            title={title}
            type="button"
            className={classNames('fr-btn fr-btn--icon-left', {
              'fr-icon-lock-unlock-line': isAuthenticated,
              'fr-icon-lock-line': !isAuthenticated,
            })}
            onClick={async () => {
              if (isAuthenticated) {
                navigate('/')
                await logout()
              } else {
                login()
              }
            }}
          >
            {title}
          </button>
        </li>
      </ul>
    </>
  )
}
