'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContent } from '@/lib/content'

export default function CTASection() {
  const { contact } = siteContent

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative glass-strong border border-sakura-400/15 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-sakura-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sakura-300/15 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
              Let's build something
              <span className="bg-gradient-to-r from-sakura-500 to-sakura-300 bg-clip-text text-transparent"> great together</span>
            </h2>
            <p className="text-navy-900/60 text-lg max-w-xl mx-auto mb-10">
              Whether you need IT infrastructure, custom software, or digital transformation — our team is ready.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                className="group flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-full hover:opacity-90 transition-all glow-pink"
              >
                Call Us: {contact.phone}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="#services"
                className="px-8 py-4 glass border border-sakura-400/25 text-navy-900/80 font-medium rounded-full hover:border-sakura-400/50 hover:text-navy-900 transition-all"
              >
                View All Services
              </Link>
            </div>

            <div className="text-navy-900/50 text-sm space-y-1">
              <p>{contact.address}</p>
              <p>{contact.hours} &middot; {contact.hoursClosed}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
