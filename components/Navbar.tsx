'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'glass-strong border border-sakura-400/15 shadow-sm'
              : 'bg-white/70 backdrop-blur-sm border border-sakura-400/10'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full glass border border-sakura-400/30 flex items-center justify-center glow-pink overflow-hidden p-1.5">
              <Image
                src="/logo.png"
                alt="Sakura System Service logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-heading text-navy-900 font-bold text-sm hidden sm:block">
              Sakura System Service
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {siteContent.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-navy-900/70 hover:text-navy-900 rounded-full hover:bg-sakura-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 px-5 py-2 text-sm font-medium text-white bg-navy-900 rounded-full hover:opacity-90 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-full glass border border-sakura-400/20 text-navy-900"
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
              className="md:hidden mt-2 glass-strong border border-sakura-400/10 rounded-3xl px-6 pb-6 pt-4 overflow-hidden"
            >
              {siteContent.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-navy-900/70 hover:text-navy-900 border-b border-sakura-400/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 block text-center px-5 py-3 text-sm font-medium text-white bg-navy-900 rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
