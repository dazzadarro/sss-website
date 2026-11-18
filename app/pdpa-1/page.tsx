'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'

export default function PdpaPage() {
  const { pdpa } = siteContent

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">
            Policy
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mt-3 mb-5 tracking-tight">
            Personal Data Protection Act
          </h1>
          <p className="text-navy-900/60 leading-relaxed">{pdpa.intro}</p>
        </motion.div>

        <div className="space-y-6">
          {pdpa.sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-sakura-400/10 pb-6"
            >
              <h2 className="text-lg font-semibold text-navy-900 mb-2">{section.title}</h2>
              <p className="text-navy-900/60 text-sm leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-navy-900/50 text-sm mt-10">
          Questions about website security can be sent to{' '}
          <a href={`mailto:${pdpa.contactEmail}`} className="text-sakura-500 hover:underline">
            {pdpa.contactEmail}
          </a>
          .
        </p>
      </div>
    </main>
  )
}
