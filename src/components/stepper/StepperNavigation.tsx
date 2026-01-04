import { Activity, type PropsWithChildren } from 'react'

import { classNames } from '../utils/classNames'

type StepperNavigationProps = {
  goBack: () => void
  goNext: () => void
  isFirstStep?: boolean
  isLastStep?: boolean
  locked: boolean
}

export function StepperNavigation(props: StepperNavigationProps) {
  return (
    <ul
      className={classNames(
        'fr-btns-group_',
        'fr-mt-4w',
        'fr-btns-group--inline',
      )}
    >
      <li>
        <Activity mode={props.isFirstStep ? 'hidden' : 'visible'}>
          <button
            type="button"
            className={classNames(
              'fr-btn',
              'fr-icon-arrow-left-line',
              'fr-btn--icon-left',
              'fr-btn--tertiary',
            )}
            onClick={props.goBack}
          >
            Retour
          </button>
        </Activity>
      </li>
      <li>
        <Activity mode={props.isLastStep ? 'hidden' : 'visible'}>
          <button
            type="button"
            className={classNames('fr-btn')}
            onClick={props.goNext}
            disabled={props.locked}
          >
            Suivant
          </button>
        </Activity>
      </li>
    </ul>
  )
}
