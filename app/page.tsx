import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesGrid from '@/components/ServicesGrid'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <StatsSection />
      <CTASection />
    </main>
  )
}
