import { siteContent } from '@/lib/content'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export default function Page() {
  const service = siteContent.services.find((s) => s.slug === 'outsource')!
  return <ServicePageTemplate service={service} />
}
