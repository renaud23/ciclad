import type { PropsWithChildren } from 'react'

import { classNames } from '@src/components/utils/classNames'

type GridContainerProps = {
  className?: string
}

export function GridContainer(props: PropsWithChildren<GridContainerProps>) {
  return (
    <div
      className={classNames(
        'fr-container',
        'fr-container-md',
        props.className ?? '',
      )}
    >
      {props.children}
    </div>
  )
}
