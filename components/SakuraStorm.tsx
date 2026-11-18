'use client'

import { useEffect, useRef } from 'react'

// Senbonzakura-style interactive petal storm: petals ride a sweeping
// vortex flow-field (the curling "wave" look of the thousand-cherry-
// -blossoms art), scatter away from the cursor, and burst outward on
// click. Rendered on canvas for performance.

type Petal = {
  x: number
  y: number
  size: number
  spin: number
  spinSpeed: number
  vx: number
  vy: number
  opacity: number
  hue: number
  phase: number
}

const PETAL_COLORS = ['#f0a8bc', '#e685a0', '#d97791', '#f8d0da', '#fce7ec']

function makePetal(w: number, h: number): Petal {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: 6 + Math.random() * 11,
    spin: Math.random() * Math.PI * 2,
    spinSpeed: (Math.random() - 0.5) * 0.05,
    vx: 0,
    vy: 0,
    opacity: 0.45 + Math.random() * 0.45,
    hue: Math.floor(Math.random() * PETAL_COLORS.length),
    phase: Math.random() * Math.PI * 2,
  }
}

function drawPetal(ctx: CanvasRenderingContext2D, p: Petal) {
  ctx.save()
  ctx.translate(p.x, p.y)
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

export default function SakuraStorm({ density = 90 }: { density?: number }) {
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
    let t = 0

    const tick = () => {
      t += 0.012
      ctx.clearRect(0, 0, width, height)

      const mouse = mouseRef.current
      // two slow-drifting vortex centers sweep across the hero, giving
      // the large curling "wave" shape seen in senbonzakura art
      const vortices = [
        {
          x: width * (0.3 + 0.22 * Math.sin(t * 0.35)),
          y: height * (0.45 + 0.18 * Math.cos(t * 0.3)),
          strength: 1,
          spin: 1,
        },
        {
          x: width * (0.72 + 0.18 * Math.cos(t * 0.28 + 1.4)),
          y: height * (0.55 + 0.2 * Math.sin(t * 0.32 + 1.1)),
          strength: 0.75,
          spin: -1,
        },
      ]

      for (const p of petals) {
        let vx = 0
        let vy = 0.35 // gentle overall fall

        for (const v of vortices) {
          const dx = p.x - v.x
          const dy = p.y - v.y
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
          const falloff = Math.exp(-dist / (width * 0.42)) * v.strength
          // tangential (swirl) component
          vx += (-dy / dist) * falloff * v.spin * 1.6
          vy += (dx / dist) * falloff * v.spin * 1.6
        }

        // fine wind ripple so the swirl isn't perfectly smooth
        vx += Math.sin(p.phase + t * 1.3 + p.y * 0.01) * 0.3
        vy += Math.cos(p.phase + t * 1.1 + p.x * 0.01) * 0.2

        // scatter away from the cursor
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
          const radius = 110
          if (dist < radius) {
            const force = (1 - dist / radius) * 3.5
            vx += (dx / dist) * force
            vy += (dy / dist) * force
          }
        }

        // click bursts
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

        p.vx += (vx - p.vx) * 0.09
        p.vy += (vy - p.vy) * 0.09
        p.x += p.vx
        p.y += p.vy
        p.spin += p.spinSpeed

        if (p.y > height + 20) {
          p.x = Math.random() * width
          p.y = -20
        }
        if (p.x < -40) p.x = width + 20
        if (p.x > width + 40) p.x = -20

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
