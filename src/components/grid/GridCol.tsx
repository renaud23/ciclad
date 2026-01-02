import type { PropsWithChildren } from 'react'

import { appendClassNames } from '../utils/classNames'

type GridColProps = { classNames?: string[]; additionnalClassNames?: string[] }

function getClassName(classNames?: string[]) {
  if (classNames) {
    return classNames.join(' ')
  }
  return 'fr-col-12 fr-col-lg-8'
}

export function GridCol({
  children,
  classNames,
  additionnalClassNames = [],
}: PropsWithChildren<GridColProps>) {
  return (
    <div
      className={appendClassNames(
        getClassName(classNames),
        additionnalClassNames,
      )}
    >
      {children}
    </div>
  )
}
