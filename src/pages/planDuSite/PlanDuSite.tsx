import { Layout } from '@src/components/layout/Layout'
import { useSetActiveMenuItem } from '@src/hooks/useSetActiveMenuItem'

export function PlanDuSite() {
  useSetActiveMenuItem(1)

  return (
    <Layout>
      <div>plan du site</div>
    </Layout>
  )
}
