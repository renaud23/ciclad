import type { PropsWithChildren } from 'react'

import { appendClassNames, classNames } from '../utils/classNames'

type GridRowProps = {
  center?: boolean
  gutters?: boolean
  className?: string
}
//
export function GridRow(props: PropsWithChildren<GridRowProps>) {
  const { children, center = false, gutters = false, className = '' } = props
  return (
    <div
      className={appendClassNames(
        classNames('fr-grid-row', className, {
          'fr-grid-row--center': center,
          'fr-grid-row--gutters': gutters,
        }),
      )}
    >
      {children}
    </div>
  )
}
