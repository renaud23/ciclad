import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { AggregatedTypes } from '@src/lib/csvAnalyzer/csvAnalyzer'
import type { DataBrut } from '@src/types'

import { checkIfNavIsLocked } from './checkIfNavIsLocked'
import { getTitle } from './getTitle'

export type UploadCsvState = {
  nbSteps: number
  currentStep: number
  currentTitle: string
  nextTitle?: string
  navigationLocked: boolean
  dataBrut?: DataBrut
  aggregatedTypes?: AggregatedTypes
}

const initialState: UploadCsvState = {
  nbSteps: 4,
  currentStep: 1,
  currentTitle: getTitle(1) ?? '',
  nextTitle: getTitle(2),
  navigationLocked: true,
  dataBrut: undefined,
  aggregatedTypes: undefined,
}

export const uploadCsvSlide = createSlice({
  name: 'upload-csv',
  initialState,
  reducers: {
    goNext: (state) => {
      state.currentStep = Math.min(state.currentStep + 1, state.nbSteps)
      state.currentTitle = getTitle(state.currentStep) ?? ''
      state.nextTitle = getTitle(state.currentStep + 1)
      state.navigationLocked = checkIfNavIsLocked(state)
    },
    goPrevious: (state) => {
      state.currentStep = Math.max(state.currentStep - 1, 1)
      state.currentTitle = getTitle(state.currentStep) ?? ''
      state.nextTitle = getTitle(state.currentStep + 1)
      state.navigationLocked = checkIfNavIsLocked(state)
    },
    lockNav: (state) => {
      state.navigationLocked = true
    },
    unlockNav: (state) => {
      state.navigationLocked = false
    },
    updateData: (state, action: PayloadAction<DataBrut | undefined>) => {
      state.dataBrut = action.payload
      state.navigationLocked = checkIfNavIsLocked(state)
    },
    updateTypes: (
      state,
      action: PayloadAction<AggregatedTypes | undefined>,
    ) => {
      state.aggregatedTypes = action.payload
    },
  },
})

export const {
  goNext,
  goPrevious,
  updateData,
  lockNav,
  unlockNav,
  updateTypes,
} = uploadCsvSlide.actions

export default uploadCsvSlide.reducer
