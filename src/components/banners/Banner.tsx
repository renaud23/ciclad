import { classNames } from '@components/utils/classNames'

export function Banner() {
  return (
    <img
      src="/banners/header-desktop-logo.webp"
      className={classNames('fr-mb-4w')}
      alt="banner"
      aria-hidden="true"
      width="100%"
    />
  )
}
