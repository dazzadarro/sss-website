'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'

export default function StatsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-strong border border-sakura-400/10 rounded-3xl p-8 md:p-12 glow-pink"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteContent.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sakura-500 to-sakura-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-900/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
