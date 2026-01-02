import type { PropsWithChildren } from 'react'

export function FooterContainer(props: PropsWithChildren) {
  return (
    <footer id="footer" className="fr-footer" role="contentinfo">
      <div className="fr-container">{props.children}</div>
    </footer>
  )
}
