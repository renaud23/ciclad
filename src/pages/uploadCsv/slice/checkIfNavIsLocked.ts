import type { UploadCsvState } from './uploadCsvSlice'

export function checkIfNavIsLocked(state: UploadCsvState) {
  if (state.currentStep === 1 && state.dataBrut) {
    return false
  }
  return true
}
