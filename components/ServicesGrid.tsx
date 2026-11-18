'use client'

import { motion } from 'framer-motion'
import { Monitor, Code2, BarChart3, Zap, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { siteContent } from '@/lib/content'

const iconMap: Record<string, React.ElementType> = {
  Monitor, Code2, BarChart3, Zap, Users,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesGrid() {
  const [featured, ...rest] = siteContent.services

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mt-2">
            Our Services
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {/* Featured tile — large */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.01 }}
            className="md:col-span-3 md:row-span-2 glass border border-sakura-400/15 rounded-3xl p-8 flex flex-col justify-between min-h-[300px] glow-pink relative overflow-hidden group cursor-pointer"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-sakura-400/10 rounded-full blur-2xl group-hover:bg-sakura-400/20 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 glass border border-sakura-400/30 rounded-2xl flex items-center justify-center mb-6">
                <Monitor size={24} className="text-sakura-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">{featured.title}</h3>
              <p className="text-navy-900/60 leading-relaxed">{featured.description}</p>
            </div>

            <Link
              href={`/services/${featured.id}`}
              className="relative z-10 mt-6 inline-flex items-center gap-2 text-sakura-500 text-sm font-medium hover:gap-3 transition-all"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Remaining 4 tiles */}
          {rest.map((service) => {
            const Icon = iconMap[service.icon] || Monitor
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="md:col-span-3 glass border border-sakura-400/15 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sakura-300/10 rounded-full blur-xl group-hover:bg-sakura-300/20 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-11 h-11 glass border border-sakura-400/25 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={18} className="text-sakura-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-navy-900/50 text-sm leading-relaxed">{service.description}</p>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="relative z-10 mt-4 inline-flex items-center gap-2 text-sakura-500 text-xs font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={12} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
