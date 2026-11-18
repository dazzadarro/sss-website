'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'

export default function AboutUsPage() {
  const { company, contact } = siteContent

  const profile = [
    { label: 'Registered Name', value: company.fullName },
    { label: 'Established', value: company.foundedMonth },
    { label: 'Capital', value: company.capital },
    { label: 'Address', value: contact.address },
    { label: 'Tel', value: contact.phone },
    { label: 'Fax', value: contact.fax },
    { label: 'Parent Company', value: company.parentCompany },
    { label: 'Managing Director', value: company.managingDirector },
    { label: 'General Manager', value: company.generalManager },
  ]

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">
            About Us
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-navy-900 mt-3 mb-5 tracking-tight">
            Sakura System Service
          </h1>
          <p className="text-navy-900/60 text-lg leading-relaxed">
            Founded in 1990, we provide Japanese-quality IT solutions to Japanese companies
            expanding into the ASEAN region from Singapore — spanning system development,
            network design, cloud solutions, and IT consulting tailored to industries from
            finance to manufacturing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass border border-sakura-400/15 rounded-3xl overflow-hidden"
        >
          <h2 className="font-heading text-xl font-bold text-navy-900 px-6 pt-6 pb-2">
            Company Profile
          </h2>
          <dl>
            {profile.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-3 ${
                  i !== profile.length - 1 ? 'border-b border-sakura-400/10' : ''
                }`}
              >
                <dt className="text-navy-900/50 text-sm sm:w-48 shrink-0">{row.label}</dt>
                <dd className="text-navy-900 text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h2 className="font-heading text-xl font-bold text-navy-900 mb-4">Business Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              'Web application development and maintenance',
              'Office network design and maintenance',
              'IT consulting',
            ].map((area) => (
              <div key={area} className="glass border border-sakura-400/15 rounded-2xl p-5 text-sm text-navy-900/70">
                {area}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
