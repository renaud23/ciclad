import type { RootState } from '@src/main'
import { useSelector } from 'react-redux'

import { QuickAccessItems } from '../quickAccessItems/QuickAccessItems'
import { MenuItem } from './MenuItem'
import './index.css'

export function Menu() {
  const activeMenuItem = useSelector(
    (s: RootState) => s.application.activeMenuItem,
  )

  return (
    <div
      className="fr-header__menu fr-modal"
      id="modal-nav"
      aria-labelledby="button-menu"
    >
      <div className="fr-container">
        <button
          aria-controls="modal-nav"
          title="Fermer"
          type="button"
          id="button-2188"
          className="fr-btn--close fr-btn"
        >
          Fermer
        </button>
        <div className="fr-header__menu-links">
          <QuickAccessItems />
        </div>
        <nav
          className="fr-nav"
          id="nav-main"
          role="navigation"
          aria-label="Menu principal"
          data-fr-js-navigation="true"
        >
          <ul className="fr-nav__list">
            <MenuItem to="/" title="Accueil" active={activeMenuItem === 0}>
              <span className=" fr-displayed-lg  fr-icon-home-line"></span>
              <span className="fr-sr-only-lg fr-displayed-xs">Accueil</span>
            </MenuItem>
            <MenuItem
              to="/plan-du-site"
              title="Plan du site"
              active={activeMenuItem === 1}
            >
              <span>Plan du site</span>
            </MenuItem>
          </ul>
        </nav>
      </div>
    </div>
  )
}
