'use client'

import { useEffect, useRef } from 'react'

// Senbonzakura-style petal ribbon: instead of ambient drift, petals ride
// along a sweeping S-curve band (top-right to bottom-left) and spiral
// around it as they travel — the dense, sculpted "wave" look of
// thousand-cherry-blossoms art — while still scattering off the cursor
// and bursting outward on click. Rendered on canvas for performance.

type Petal = {
  t: number // progress along the curve, 0..1, wraps
  speed: number
  radius: number // lateral offset from the curve's spine
  swirlAngle: number
  swirlSpeed: number
  size: number
  spin: number
  spinSpeed: number
  opacity: number
  hue: number
  // transient cursor/burst displacement, decays back to 0
  jx: number
  jy: number
}

const PETAL_COLORS = ['#f0a8bc', '#e685a0', '#d97791', '#f8d0da', '#fce7ec']

// Cubic bezier control points (fractions of width/height) describing the
// sweeping band: enters top-right, arcs through the middle, exits
// bottom-left — the classic senbonzakura diagonal.
const CURVE = [
  { x: 1.1, y: -0.1 },
  { x: 0.75, y: 0.35 },
  { x: 0.35, y: 0.55 },
  { x: -0.1, y: 1.05 },
]

function bezierPoint(t: number, w: number, h: number) {
  const [p0, p1, p2, p3] = CURVE
  const mt = 1 - t
  const a = mt * mt * mt
  const b = 3 * mt * mt * t
  const c = 3 * mt * t * t
  const d = t * t * t
  return {
    x: (a * p0.x + b * p1.x + c * p2.x + d * p3.x) * w,
    y: (a * p0.y + b * p1.y + c * p2.y + d * p3.y) * h,
  }
}

function bezierTangent(t: number, w: number, h: number) {
  const eps = 0.001
  const a = bezierPoint(Math.max(0, t - eps), w, h)
  const b = bezierPoint(Math.min(1, t + eps), w, h)
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.sqrt(dx * dx + dy * dy) || 1
  return { tx: dx / len, ty: dy / len, nx: -dy / len, ny: dx / len }
}

function makePetal(): Petal {
  return {
    t: Math.random(),
    speed: 0.035 + Math.random() * 0.03,
    radius: (Math.random() - 0.5) * 2,
    swirlAngle: Math.random() * Math.PI * 2,
    swirlSpeed: 1.4 + Math.random() * 2.2,
    size: 5 + Math.random() * 9,
    spin: Math.random() * Math.PI * 2,
    spinSpeed: (Math.random() - 0.5) * 0.08,
    opacity: 0.5 + Math.random() * 0.4,
    hue: Math.floor(Math.random() * PETAL_COLORS.length),
    jx: 0,
    jy: 0,
  }
}

function drawPetal(ctx: CanvasRenderingContext2D, x: number, y: number, p: Petal) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(p.spin)
  ctx.globalAlpha = p.opacity
  ctx.fillStyle = PETAL_COLORS[p.hue]
  ctx.beginPath()
  const s = p.size
  ctx.moveTo(0, -s)
  ctx.bezierCurveTo(s * 0.8, -s * 0.6, s * 0.6, s * 0.4, 0, s)
  ctx.bezierCurveTo(-s * 0.6, s * 0.4, -s * 0.8, -s * 0.6, 0, -s)
  ctx.fill()
  ctx.restore()
}

export default function SakuraStorm({ density = 140 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const burstsRef = useRef<{ x: number; y: number; life: number }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.clientWidth
    let height = canvas.clientHeight

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = prefersReduced ? 0 : density
    const petals: Petal[] = Array.from({ length: count }, makePetal)

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true }
    }
    const onLeave = () => {
      mouseRef.current.active = false
    }
    const onClick = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      burstsRef.current.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, life: 1 })
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)
    canvas.addEventListener('pointerdown', onClick)

    let raf = 0

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      const mouse = mouseRef.current
      const bandWidth = Math.min(width, height) * 0.42

      for (const p of petals) {
        p.t += p.speed * 0.016
        if (p.t > 1) {
          p.t -= 1
          p.radius = (Math.random() - 0.5) * 2
        }
        p.swirlAngle += p.swirlSpeed * 0.016
        p.spin += p.spinSpeed

        const center = bezierPoint(p.t, width, height)
        const { nx, ny } = bezierTangent(p.t, width, height)

        // taper the ribbon's width near its two ends so it reads as a
        // sweeping band rather than a uniform strip
        const taper = Math.sin(Math.min(1, p.t) * Math.PI)
        const lateral = p.radius * bandWidth * (0.25 + 0.75 * taper)
        const swirl = Math.sin(p.swirlAngle) * bandWidth * 0.12 * taper

        let x = center.x + nx * (lateral + swirl)
        let y = center.y + ny * (lateral + swirl)

        // cursor scatter (push the petal's transient jitter, which eases back)
        if (mouse.active) {
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
          const radius = 120
          if (dist < radius) {
            const force = (1 - dist / radius) * 55
            p.jx += (dx / dist) * force * 0.12
            p.jy += (dy / dist) * force * 0.12
          }
        }

        for (const b of burstsRef.current) {
          const dx = x - b.x
          const dy = y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
          const radius = 240
          if (dist < radius) {
            const force = (1 - dist / radius) * 90 * b.life
            p.jx += (dx / dist) * force * 0.12
            p.jy += (dy / dist) * force * 0.12
          }
        }

        p.jx *= 0.9
        p.jy *= 0.9
        x += p.jx
        y += p.jy

        if (x > -40 && x < width + 40 && y > -40 && y < height + 40) {
          drawPetal(ctx, x, y, p)
        }
      }

      burstsRef.current = burstsRef.current
        .map((b) => ({ ...b, life: b.life * 0.9 }))
        .filter((b) => b.life > 0.02)

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      canvas.removeEventListener('pointerdown', onClick)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'none' }}
      aria-hidden="true"
    />
  )
}
