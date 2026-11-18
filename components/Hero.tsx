'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteContent } from '@/lib/content'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Radial glow blobs, kept clear of the top corners so they don't wash out the sakura branches */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sakura-300/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-sakura-400/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Cityscape + drifting sakura petals, echoing the original hero composite */}
      <HeroVisual />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass border border-sakura-400/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sakura-500 animate-pulse" />
          <span className="text-sm text-navy-900/70">Trusted IT Partner since {siteContent.company.founded}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-navy-900">{siteContent.hero.headline}</span>
          <br />
          <span className="bg-gradient-to-r from-sakura-500 via-sakura-400 to-sakura-500 bg-clip-text text-transparent">
            {siteContent.hero.headlineAccent}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-navy-900/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteContent.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#services"
            className="group flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-200 glow-pink"
          >
            {siteContent.hero.cta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 glass border border-sakura-400/30 text-navy-900/80 font-medium rounded-full hover:border-sakura-400/50 hover:text-navy-900 transition-all duration-200"
          >
            {siteContent.hero.ctaSecondary}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-900/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
