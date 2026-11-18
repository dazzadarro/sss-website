'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'
import { CheckCircle2 } from 'lucide-react'

export default function CareersPage() {
  const { careers, contact } = siteContent

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">
            Careers
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-navy-900 mt-3 mb-5 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-navy-900/60 text-lg leading-relaxed max-w-2xl">{careers.intro}</p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
          {careers.benefits.map((b) => (
            <div key={b} className="flex items-start gap-2 glass border border-sakura-400/15 rounded-2xl p-4">
              <CheckCircle2 size={16} className="text-sakura-500 mt-0.5 shrink-0" />
              <span className="text-sm text-navy-900/70">{b}</span>
            </div>
          ))}
        </div>

        {/* Roles */}
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-5">Open Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {careers.roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass border border-sakura-400/15 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{role.title}</h3>
              <p className="text-navy-900/55 text-sm leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-strong border border-sakura-400/15 rounded-3xl p-8 text-center">
          <p className="text-navy-900/70 mb-4">Interested in applying? Reach out to us directly.</p>
          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
            className="inline-block px-7 py-3.5 bg-navy-900 text-white font-semibold rounded-full hover:opacity-90 transition-all"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </main>
  )
}
