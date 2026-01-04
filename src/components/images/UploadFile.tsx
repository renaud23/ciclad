import { classNames } from '../utils/classNames'
import './index.css'

export function UploadFile(props: { className?: string }) {
  return (
    <img
      className={classNames(
        'fr-responsive-img',
        'upload-file-image',
        props?.className ?? '',
      )}
      src="images/upload-file.svg"
      alt="upload file"
    />
  )
}
