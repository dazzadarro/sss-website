'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/lib/content'
import { Phone, Printer, MapPin } from 'lucide-react'

export default function Footer() {
  const { company, footer, contact } = siteContent

  return (
    <footer className="border-t border-sakura-400/15 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-sakura-50">
                <Image
                  src="/logo.png"
                  alt="Sakura System Service logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-navy-900 font-semibold">{company.name}</span>
            </div>
            <p className="text-navy-900/50 text-sm leading-relaxed max-w-xs">
              {company.tagline}
            </p>
            <p className="text-navy-900/30 text-xs mt-4">
              Est. {company.founded} · Singapore
            </p>
          </div>

          {/* Company Information */}
          <div>
            <h4 className="text-navy-900/70 text-xs font-semibold tracking-widest uppercase mb-4">
              Company Information
            </h4>
            <ul className="space-y-2">
              {footer.companyInfo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-900/50 hover:text-sakura-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Services */}
          <div>
            <h4 className="text-navy-900/70 text-xs font-semibold tracking-widest uppercase mb-4">
              Solution Services
            </h4>
            <ul className="space-y-2">
              {footer.solutionServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-900/50 hover:text-sakura-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="border-t border-sakura-400/15 mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-navy-900/70 text-xs font-semibold tracking-widest uppercase mb-4">
              Get In Touch With Us
            </h4>
            <p className="text-navy-900/70 text-sm font-medium">{company.fullName}</p>
            <div className="flex items-start gap-2 text-navy-900/50 text-sm mt-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-sakura-500" />
              <span>{contact.address}</span>
            </div>
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2 text-navy-900/50 hover:text-sakura-500 text-sm transition-colors mt-2"
            >
              <Phone size={14} className="shrink-0 text-sakura-500" />
              {contact.phone}
            </a>
            <div className="flex items-center gap-2 text-navy-900/50 text-sm mt-2">
              <Printer size={14} className="shrink-0 text-sakura-500" />
              {contact.fax}
            </div>
          </div>
        </div>

        <div className="border-t border-sakura-400/15 mt-10 pt-6">
          <p className="text-navy-900/30 text-xs text-center">{footer.copy}</p>
        </div>
      </div>
    </footer>
  )
}
