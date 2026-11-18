'use client'

import dynamic from 'next/dynamic'
import SakuraBranch from './SakuraBranch'

// Canvas-based, so load client-side only
const SakuraStorm = dynamic(() => import('./SakuraStorm'), { ssr: false })

const BUILDINGS = [
  { x: 0, w: 60, h: 220 },
  { x: 55, w: 40, h: 160 },
  { x: 90, w: 70, h: 280 },
  { x: 155, w: 45, h: 190 },
  { x: 195, w: 55, h: 240 },
  { x: 245, w: 35, h: 140 },
  { x: 275, w: 65, h: 300 },
  { x: 335, w: 50, h: 200 },
  { x: 380, w: 40, h: 170 },
  { x: 415, w: 60, h: 260 },
  { x: 470, w: 45, h: 180 },
]

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none">
      {/* City skyline silhouette, bottom-anchored, low-contrast wireframe */}
      <svg
        viewBox="0 0 520 320"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.07] pointer-events-none"
      >
        {BUILDINGS.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={320 - b.h}
            width={b.w}
            height={b.h}
            fill="none"
            stroke="#9d3b56"
            strokeWidth={1.5}
          />
        ))}
        {BUILDINGS.map((b, i) =>
          Array.from({ length: Math.floor(b.h / 24) }).map((_, j) => (
            <line
              key={`${i}-${j}`}
              x1={b.x}
              x2={b.x + b.w}
              y1={320 - j * 24}
              y2={320 - j * 24}
              stroke="#9d3b56"
              strokeWidth={0.5}
            />
          ))
        )}
      </svg>

      {/* Sakura branch anchor, top-right */}
      <SakuraBranch className="absolute -top-6 -right-6 w-64 h-64 md:w-96 md:h-96 pointer-events-none" />

      {/* Interactive senbonzakura-style petal storm: cursor scatters
          petals, click bursts them outward */}
      <SakuraStorm density={60} />
    </div>
  )
}
