import type { RootState } from '@src/App'
import { useSelector } from 'react-redux'

export function Verification() {
  const dataBrut = useSelector((s: RootState) => s.uploadCsv.dataBrut)
  return <div>Verification</div>
}
