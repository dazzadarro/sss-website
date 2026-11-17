import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import ServicesGrid from '@/components/ServicesGrid'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <CTASection />
    </main>
  )
}
