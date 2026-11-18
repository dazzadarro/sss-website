'use client'

import dynamic from 'next/dynamic'
import SakuraBranch from './SakuraBranch'

// Canvas-based, so load client-side only
const SakuraStorm = dynamic(() => import('./SakuraStorm'), { ssr: false })

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none">
      {/* Sakura branches drooping from both top corners, matching the
          real site's hero framing */}
      <SakuraBranch className="absolute -top-8 -right-10 w-64 h-64 md:w-[26rem] md:h-[26rem] pointer-events-none z-[1]" />
      <SakuraBranch
        className="absolute -top-8 -left-10 w-64 h-64 md:w-[26rem] md:h-[26rem] pointer-events-none z-[1]"
        style={{ transform: 'scaleX(-1)' }}
      />

      {/* Interactive senbonzakura-style petal ribbon: sweeps diagonally
          across the hero, scatters off the cursor, bursts on click */}
      <SakuraStorm density={140} />
    </div>
  )
}
