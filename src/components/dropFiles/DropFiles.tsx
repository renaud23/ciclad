import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { UploadFileImage } from '../images/UploadFileImage'
import { classNames } from '../utils/classNames'
import './index.css'

function getItemsFromDragEvent(e: DragEvent) {
  return [...(e?.dataTransfer?.items ?? [])].filter((it) => it.kind === 'file')
}

type DropFilesProps = {
  onDropFile?: (file: File) => void
}

export function DropFiles({ onDropFile }: DropFilesProps) {
  const [file, setFile] = useState<File | null>(null)
  const zoneEl = useRef<HTMLDivElement>(null)
  const inputEl = useRef<HTMLInputElement>(null)

  const drop = useCallback((e: DragEvent) => {
    const items = getItemsFromDragEvent(e)
    if (items.length) {
      e.preventDefault()
    }
  }, [])

  const dragAndDrop = useCallback((e: DragEvent) => {
    const items = getItemsFromDragEvent(e)
    if (items.length) {
      e.preventDefault()
      if (!zoneEl.current?.contains(e.target as Node)) {
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none'
        }
      }
    }
  }, [])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }, [])

  useEffect(() => {
    window.addEventListener('drop', drop)
    window.addEventListener('dragover', dragAndDrop)
    return () => {
      window.removeEventListener('drop', drop)
      window.removeEventListener('dragover', dragAndDrop)
    }
  }, [drop, dragAndDrop])

  useEffect(() => {
    if (file) {
      onDropFile?.(file)
    }
  }, [file, onDropFile])

  return (
    <div
      className="drag-drop-files"
      ref={zoneEl}
      onDragOver={(e) => {
        const items = [...e.dataTransfer.items].filter(
          (it) => it.kind === 'file',
        )
        if (items.length > 0) {
          e.preventDefault()
          if (items.some((it) => it.type.startsWith('text/csv'))) {
            e.dataTransfer.dropEffect = 'copy'
          } else {
            e.dataTransfer.dropEffect = 'none'
          }
        }
      }}
      onDrop={(e) => {
        e.preventDefault()
        const files = [...e.dataTransfer.items]
          .map((it) => it.getAsFile())
          .filter((f) => f)
        if (files.length) {
          setFile(files[0])
        }
      }}
    >
      <UploadFileImage />
      <label>
        <p>Glissez-déposez votre fichier CSV</p>
      </label>
      <input
        className="input-file"
        type="file"
        accept=".csv"
        onChange={onChange}
        ref={inputEl}
      />
      <button
        type="button"
        className={classNames(
          'fr-btn',
          'fr-btn--icon-right',
          'fr-icon-upload-2-line',
          'upload-button',
        )}
        onClick={() => {
          inputEl?.current?.click()
        }}
      >
        Sélectionner un fichier CSV
      </button>
    </div>
  )
}
