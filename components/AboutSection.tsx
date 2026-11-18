'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'

export default function AboutSection() {
  const { about } = siteContent

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-sakura-500 text-sm font-medium tracking-wide uppercase mb-3"
        >
          About Us
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <p className="text-navy-900/70 text-base md:text-lg leading-relaxed">
            {about.body}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
