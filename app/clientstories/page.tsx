'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'
import { TrendingUp } from 'lucide-react'

export default function ClientStoriesPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">
            Client Stories
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-navy-900 mt-3 tracking-tight">
            Real Results, Real Impact
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {siteContent.clientStories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass border border-sakura-400/15 rounded-3xl p-8"
            >
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-sakura-500 bg-sakura-50 px-3 py-1 rounded-full mb-4">
                {story.industry}
              </span>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">{story.title}</h2>
              <p className="text-navy-900/60 leading-relaxed mb-5">{story.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {story.impact.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-navy-900/70">
                    <TrendingUp size={14} className="text-sakura-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
