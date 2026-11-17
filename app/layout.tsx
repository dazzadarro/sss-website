import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sakura System Service | IT Solutions for Japanese Business in ASEAN',
  description:
    'Since 1990, Sakura System Service has been the trusted IT partner for Japanese companies expanding across ASEAN. Office IT, Software, Data Analytics, RPA, and Outsourcing.',
  keywords: 'IT services Singapore, Japanese IT company, ASEAN IT solutions, RPA, data analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
