'use client'

import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { company, nav, contact } = siteContent

  return (
    <footer className="border-t border-white/10 bg-navy-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sakura-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                SSS
              </div>
              <span className="text-white font-semibold">{company.name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {company.tagline}
            </p>
            <p className="text-white/30 text-xs mt-4">
              Est. {company.founded} · Singapore
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">Pages</h4>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-sakura-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-sakura-400" />
                <span>{contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-white/50 hover:text-sakura-300 text-sm transition-colors"
                >
                  <Phone size={14} className="shrink-0 text-sakura-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-white/50 hover:text-sakura-300 text-sm transition-colors"
                >
                  <Mail size={14} className="shrink-0 text-sakura-400" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {company.fullName}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            {company.registration}
          </p>
        </div>
      </div>
    </footer>
  )
}
