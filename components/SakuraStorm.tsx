'use client'

import { useEffect, useRef } from 'react'

// Senbonzakura-style interactive petal storm: a dense swirl of sakura
// petals that react to the cursor (scattering away as you move through
// them) and burst outward on click, rendered on a canvas for performance.
// A stylized sakura branch sits in the corner as the "tree" anchor.

type Petal = {
  x: number
  y: number
  size: number
  angle: number
  spin: number
  spinSpeed: number
  baseVX: number
  baseVY: number
  vx: number
  vy: number
  sway: number
  swaySpeed: number
  opacity: number
  hue: number
}

const PETAL_COLORS = ['#f0a8bc', '#e685a0', '#d97791', '#f8d0da']

function makePetal(w: number, h: number, seed = Math.random()): Petal {
  const size = 6 + seed * 10
  const angle = Math.random() * Math.PI * 2
  return {
    x: Math.random() * w,
    y: Math.random() * h - h,
    size,
    angle,
    spin: Math.random() * Math.PI * 2,
    spinSpeed: (Math.random() - 0.5) * 0.04,
    baseVX: 0.6 + Math.random() * 0.9,
    baseVY: 0.5 + Math.random() * 0.8,
    vx: 0,
    vy: 0,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.02 + Math.random() * 0.02,
    opacity: 0.45 + Math.random() * 0.4,
    hue: Math.floor(Math.random() * PETAL_COLORS.length),
  }
}

function drawPetal(ctx: CanvasRenderingContext2D, p: Petal) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.spin)
  ctx.globalAlpha = p.opacity
  ctx.fillStyle = PETAL_COLORS[p.hue]
  ctx.beginPath()
  // simple petal shape: two curved lobes meeting at tip
  const s = p.size
  ctx.moveTo(0, -s)
  ctx.bezierCurveTo(s * 0.8, -s * 0.6, s * 0.6, s * 0.4, 0, s)
  ctx.bezierCurveTo(-s * 0.6, s * 0.4, -s * 0.8, -s * 0.6, 0, -s)
  ctx.fill()
  ctx.restore()
}

export default function SakuraStorm({ density = 55 }: { density?: number }) {
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
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = prefersReduced ? 0 : density
    const petals: Petal[] = Array.from({ length: count }, () => makePetal(width, height))

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
      for (const p of petals) {
        p.sway += p.swaySpeed
        p.spin += p.spinSpeed

        // base senbonzakura drift: fast diagonal wind
        let vx = p.baseVX + Math.sin(p.sway) * 0.4
        let vy = p.baseVY + Math.cos(p.sway * 0.7) * 0.2

        // scatter away from the cursor
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
          const radius = 110
          if (dist < radius) {
            const force = (1 - dist / radius) * 3.2
            vx += (dx / dist) * force
            vy += (dy / dist) * force
          }
        }

        // bursts push petals outward with decaying force
        for (const b of burstsRef.current) {
          const dx = p.x - b.x
          const dy = p.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
          const radius = 220
          if (dist < radius) {
            const force = (1 - dist / radius) * 6 * b.life
            vx += (dx / dist) * force
            vy += (dy / dist) * force
          }
        }

        p.vx += (vx - p.vx) * 0.08
        p.vy += (vy - p.vy) * 0.08
        p.x += p.vx
        p.y += p.vy

        if (p.y > height + 20 || p.x > width + 40) {
          p.x = -20 - Math.random() * 60
          p.y = Math.random() * height * 0.6 - height * 0.2
        }
        if (p.x < -60) p.x = width + 20

        drawPetal(ctx, p)
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
