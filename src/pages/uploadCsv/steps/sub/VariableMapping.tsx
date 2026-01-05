import { Activity } from 'react'

import type { RootState } from '@src/App'
import { useSelector } from 'react-redux'

type VariableMappingProps = {
  name: string
  expectedType: string
}

function getOptions(names?: string[]) {
  if (names && names.length) {
    const other = names.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))
    return [
      <option key={'-1'} value="" selected disabled>
        Sélectionnez une option
      </option>,
      ...other,
    ]
  }
  return []
}

export function VariableMapping(props: VariableMappingProps) {
  const { name, expectedType } = props
  const dataBrut = useSelector((s: RootState) => s.uploadCsv.dataBrut)
  return (
    <Activity mode={dataBrut ? 'visible' : 'hidden'}>
      <div className="fr-select-group">
        <label className="fr-label" htmlFor="select-1">
          Champ attendu : <b>{name}</b> de type {expectedType}
        </label>
        <select
          className="fr-select"
          aria-describedby="select-1-messages"
          id="select-1"
          name="select-1"
        >
          {getOptions(dataBrut?.header)}
        </select>
        <div
          className="fr-messages-group"
          id="select-1-messages"
          aria-live="polite"
        ></div>
      </div>
    </Activity>
  )
}
