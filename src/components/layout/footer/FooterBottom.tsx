export function FooterBottom() {
  return (
    <div className="fr-footer__bottom">
      <ul className="fr-footer__bottom-list">
        <li className="fr-footer__bottom-item">
          <a className="fr-footer__bottom-link" href="/plan-du-site">
            Plan du Site
          </a>
        </li>
      </ul>
      <div className="fr-footer__bottom-copy">
        <p>
          <span>
            Sauf mention contraire, tous les contenus de ce site sont sous{' '}
          </span>
          <a
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            rel="noopener noreferrer"
            target="_blank"
            title="licence etalab-2.0 - nouvelle fenêtre"
            data-fr-js-footer-link-actionee="true"
          >
            licence etalab-2.0
            <span
              className="fr-icon-external-link-fill fr-icon--sm fr-ml-1v"
              aria-hidden="true"
            ></span>
          </a>
        </p>
      </div>
    </div>
  )
}
