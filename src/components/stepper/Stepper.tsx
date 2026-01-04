import { Activity, type ReactNode } from 'react'

import './index.css'

type StepperProps = {
  nbSteps: number
  title: ReactNode
  currentStep: number
  titleNextStep?: ReactNode
}

export function Stepper({
  nbSteps,
  currentStep,
  title,
  titleNextStep,
}: StepperProps) {
  return (
    <div className="fr-stepper">
      <h2 className="fr-stepper__title">
        {title}
        <span className="fr-stepper__state">
          Étape {currentStep} sur {nbSteps}
        </span>
      </h2>
      <div
        className="fr-stepper__steps"
        data-fr-current-step={currentStep}
        data-fr-steps={nbSteps}
      ></div>
      <Activity mode={titleNextStep ? 'visible' : 'hidden'}>
        <p className="fr-stepper__details">
          <span className="fr-text--bold">Étape suivante&nbsp;:&nbsp;</span>
          {titleNextStep}
        </p>
      </Activity>
    </div>
  )
}
