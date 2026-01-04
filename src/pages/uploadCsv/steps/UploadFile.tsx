import { useCallback } from 'react'

import type { RootState } from '@src/App'
import { DropFiles } from '@src/components/dropFiles/DropFiles'
import { parseCsv } from '@src/lib/csvParser/parseCsv'
import type { DataBrut } from '@src/types'
import { useDispatch, useSelector } from 'react-redux'

import { updateData } from '../slice/uploadCsvSlice'

function Metadata({ data }: { data?: DataBrut }) {
  if (data) {
    return (
      <p>
        Votre fichier {data.fileName} a été chargé avec succés. Il
        contient&nbsp;{data.nbRows}&nbsp;{data.nbRows > 1 ? 'lignes' : 'ligne'}.
      </p>
    )
  }
  return null
}

export function UploadFile() {
  const data = useSelector((state: RootState) => state.uploadCsv.dataBrut)

  const dispatch = useDispatch()

  const onDropFile = useCallback(
    (file?: File) => {
      if (file) {
        parseCsv(file).then((result) => {
          dispatch(updateData(result as DataBrut))
        })
      } else {
        dispatch(updateData(undefined))
      }
    },
    [dispatch],
  )

  return (
    <>
      <DropFiles className="fr-mb-4w" onDropFile={onDropFile} />
      <Metadata data={data} />
    </>
  )
}
