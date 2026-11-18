'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// A coded stand-in for the original hero composite (digital cityscape +
// drifting sakura branches): a simple SVG skyline silhouette with soft
// pink wireframe accents, plus petals drifting from the brand logo.
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

const PETALS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${(i * 97) % 100}%`,
  size: 14 + ((i * 7) % 20),
  delay: i * 1.3,
  duration: 14 + (i % 5) * 3,
  drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 10),
}))

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* City skyline silhouette, bottom-anchored, low-contrast wireframe */}
      <svg
        viewBox="0 0 520 320"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.07]"
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
        {/* window grid lines for a faint "digital" texture */}
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

      {/* Drifting sakura petals, using the actual brand mark */}
      {PETALS.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: p.left, top: '-40px', width: p.size, height: p.size }}
          initial={{ y: -40, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ['-40px', '620px'],
            x: [0, p.drift],
            opacity: [0, 0.35, 0.35, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Image src="/logo.png" alt="" width={p.size} height={p.size} className="w-full h-full object-contain" />
        </motion.div>
      ))}
    </div>
  )
}
