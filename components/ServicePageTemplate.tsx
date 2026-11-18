'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { siteContent } from '@/lib/content'

type Service = (typeof siteContent.services)[number]

export default function ServicePageTemplate({ service }: { service: Service }) {
  const { contact } = siteContent

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-navy-900/50 mb-8"
        >
          <Link href="/" className="hover:text-sakura-500 transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Home
          </Link>
          <span>/</span>
          <span className="text-navy-900/70">{service.title}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-navy-900 mt-3 mb-5 tracking-tight">
            {service.title}
          </h1>
          <p className="text-navy-900/60 text-lg leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </motion.div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {service.capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass border border-sakura-400/15 rounded-2xl p-6 hover:border-sakura-400/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{cap.title}</h3>
              <p className="text-navy-900/55 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-strong border border-sakura-400/15 rounded-3xl p-10 text-center"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 mb-3">
            Have Questions or Need a Quote?
          </h2>
          <p className="text-navy-900/55 mb-7">
            Reach out and our team will get back to you shortly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
              className="group flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="#services"
              className="px-7 py-3.5 glass border border-sakura-400/25 text-navy-900/80 font-medium rounded-full hover:border-sakura-400/50 hover:text-navy-900 transition-all"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
