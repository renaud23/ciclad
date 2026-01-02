import type { PropsWithChildren } from 'react'

import { Link } from 'react-router'

type MenuItemProps = {
  to: string
  title: string
  active: boolean
}

export function MenuItem(props: PropsWithChildren<MenuItemProps>) {
  return (
    <li className="fr-nav__item" data-fr-js-navigation-item="true">
      <Link
        className="fr-nav__link fr-insee-nav-link"
        to={props.to}
        target="_self"
        title={props.title}
        aria-current={props.active}
      >
        {props.children}
      </Link>
    </li>
  )
}
