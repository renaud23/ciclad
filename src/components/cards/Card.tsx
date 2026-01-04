import type { PropsWithChildren, ReactNode } from 'react'

import { classNames } from '@components/utils/classNames'
import { useNavigate } from 'react-router'

type CardProps = {
  image?: ReactNode
  to?: string
}

export function Card(props: PropsWithChildren<CardProps>) {
  const { image, to, children } = props
  const navigate = useNavigate()

  return (
    <div
      className={classNames('fr-card fr-enlarge-link', 'fr-col-4')}
      onClick={() => {
        if (to) {
          navigate(to)
        }
      }}
    >
      <div className="fr-card__body">
        <div className="fr-card__content">{children}</div>
      </div>
      <div className="fr-card__header">
        <div className="fr-card__img">{image}</div>
      </div>
    </div>
  )
}
