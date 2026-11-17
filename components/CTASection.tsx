'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative glass-strong border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-sakura-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="text-sakura-400 text-sm font-medium tracking-widest uppercase">Ready to get started?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Let's build something
              <span className="bg-gradient-to-r from-sakura-300 to-blue-300 bg-clip-text text-transparent"> great together</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Whether you need IT infrastructure, custom software, or digital transformation — our team is ready.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sakura-400 to-pink-500 text-white font-semibold rounded-2xl hover:opacity-90 transition-all glow-pink"
              >
                Contact Us Today
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 glass border border-white/15 text-white/80 font-medium rounded-2xl hover:border-white/30 hover:text-white transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
