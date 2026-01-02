import './header.css'
import { Menu } from './menu/Menu'
import { QuickAccessItems } from './quickAccessItems/QuickAccessItems'

export function Header() {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    République
                    <br />
                    Française
                  </p>
                </div>
                <div className="fr-header__operator">
                  <img
                    className="header-logo"
                    src="/logo/insee-logo-light.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="fr-header__navbar">
                  <button
                    data-fr-opened="false"
                    aria-controls="modal-nav"
                    title="Menu"
                    type="button"
                    id="button-menu"
                    className="fr-btn--menu fr-btn"
                  >
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <a href="/" title="Collecte des Communautés">
                  <p className="fr-header__service-title">
                    Collecte des Communautés
                  </p>
                </a>
              </div>
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <QuickAccessItems />
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  )
}
