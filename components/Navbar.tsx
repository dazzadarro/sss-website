'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteContent } from '@/lib/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl glass border border-sakura-400/30 flex items-center justify-center glow-pink">
            <span className="text-sakura-300 font-bold text-sm">SSS</span>
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block">
            Sakura System Service
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2 text-sm font-medium text-navy-900 bg-gradient-to-r from-sakura-300 to-sakura-400 rounded-xl hover:opacity-90 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg glass border border-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-white/10 px-6 pb-6 pt-4"
          >
            {siteContent.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white/70 hover:text-white border-b border-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 block text-center px-5 py-3 text-sm font-medium text-navy-900 bg-gradient-to-r from-sakura-300 to-sakura-400 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
