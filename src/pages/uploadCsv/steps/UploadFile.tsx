import { useCallback } from 'react'

import type { RootState } from '@src/App'
import { DropFiles } from '@src/components/dropFiles/DropFiles'
import { parseCsv } from '@src/lib/csvParser/parseCsv'
import type { DataBrut } from '@src/types'
import { useDispatch, useSelector } from 'react-redux'

import { updateData, updateTypes } from '../slice/uploadCsvSlice'

function prepareSize(nbBytes = 0) {
  if (nbBytes < 1024) {
    return `${nbBytes} octets`
  }
  if (nbBytes < 1024 * 1024) {
    return `${Math.ceil(nbBytes / 1024)} ko`
  }
  return `${Math.ceil(nbBytes / (1024 * 2))} Mo`
}

function Metadata({ data }: { data?: DataBrut }) {
  if (data) {
    return (
      <p>
        Votre fichier {data.fileName} de {prepareSize(data.fileSize)} a été
        chargé avec succés. Il contient&nbsp;{data.nbRows}&nbsp;
        {data.nbRows > 1 ? 'lignes' : 'ligne'}.
      </p>
    )
  }
  return null
}

/**
 *
 * @returns
 */
export function UploadFile() {
  const data = useSelector((state: RootState) => state.uploadCsv.dataBrut)

  const dispatch = useDispatch()

  const onDropFile = useCallback(
    async (file?: File) => {
      if (file) {
        const result = (await parseCsv(file)) as DataBrut
        dispatch(updateData(result as DataBrut))
      } else {
        dispatch(updateData(undefined))
        dispatch(updateTypes(undefined))
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
