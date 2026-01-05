import { useEffect, useRef } from 'react'

import type { RootState } from '@src/App'
import { classNames } from '@src/components/utils/classNames'
import { instance } from '@src/main'
import { useDispatch, useSelector } from 'react-redux'

import { updateTypes } from '../slice/uploadCsvSlice'
import { VariableMapping } from './sub/VariableMapping'

function DisplayHeader(props: { header?: string[] }) {
  if (props.header && props.header.length) {
    return (
      <div className="header-display">
        <h2>Champs détectés dans votre fichier :</h2>
        <ul className={classNames('fr-badges-group')}>
          {props.header.map((name: string) => (
            <li key={name}>
              <p
                className={classNames(
                  'fr-badge',
                  'fr-badge--sm',
                  'fr-badge--green-emeraude',
                )}
              >
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div className="headear-display">
      Pas de données identifiées dans le fichier.
    </div>
  )
}

export function Verification() {
  const init = useRef(false)
  const dataBrut = useSelector((s: RootState) => s.uploadCsv.dataBrut)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!init && dataBrut) {
      instance.analyze(dataBrut).then((ag) => {
        dispatch(updateTypes(ag))
      })
    }
  }, [dataBrut, dispatch])

  return (
    <>
      <DisplayHeader header={dataBrut?.header} />
      <VariableMapping name="nom" expectedType="string" />
    </>
  )
}
