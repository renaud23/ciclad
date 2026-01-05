import { useCallback } from 'react'

import { OidcSecure } from '@axa-fr/react-oidc'
import type { RootState } from '@src/App'
import { GridContainer } from '@src/components/grid/GridContainer'
import { GridRow } from '@src/components/grid/GridRow'
import { Layout } from '@src/components/layout/Layout'
import { Stepper } from '@src/components/stepper/Stepper'
import { StepperNavigation } from '@src/components/stepper/StepperNavigation'
import { classNames } from '@src/components/utils/classNames'
import { useDispatch, useSelector } from 'react-redux'

import { BlankStep } from '../../pages/uploadCsv/steps/BlankStep'
import { UploadFile } from '../../pages/uploadCsv/steps/UploadFile'
import './index.css'
import { goNext, goPrevious } from './slice/uploadCsvSlice'
import { Verification } from './steps/Verification'

function getCurrentStep(index: number) {
  switch (index) {
    case 1:
      return <UploadFile />
    case 2:
      return <Verification />
    default:
      return <BlankStep />
  }
}

export function UploadCsv() {
  const currentStep = useSelector(
    (state: RootState) => state.uploadCsv.currentStep,
  )
  const currentTitle = useSelector(
    (state: RootState) => state.uploadCsv.currentTitle,
  )

  const nextTitle = useSelector((state: RootState) => state.uploadCsv.nextTitle)

  const locked = useSelector(
    (state: RootState) => state.uploadCsv.navigationLocked,
  )

  const nbSteps = useSelector((state: RootState) => state.uploadCsv.nbSteps)

  const dispatch = useDispatch()

  const handleNextStep = useCallback(() => {
    dispatch(goNext())
  }, [dispatch])

  const handlePreviousStep = useCallback(() => {
    dispatch(goPrevious())
  }, [dispatch])

  return (
    <OidcSecure>
      <Layout>
        <GridContainer className={classNames('fr-mt-6w', 'fr-mb-4w')}>
          <GridRow>
            <Stepper
              nbSteps={nbSteps}
              title={currentTitle}
              titleNextStep={nextTitle}
              currentStep={currentStep}
            ></Stepper>
          </GridRow>
          <GridRow>{getCurrentStep(currentStep)}</GridRow>
          <GridRow>
            <StepperNavigation
              goBack={handlePreviousStep}
              goNext={handleNextStep}
              locked={locked}
              isFirstStep={currentStep === 1}
              isLastStep={currentStep === nbSteps}
            />
          </GridRow>
        </GridContainer>
      </Layout>
    </OidcSecure>
  )
}
