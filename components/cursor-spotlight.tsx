'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const SIZE = 1400

/**
 * Site-wide cursor spotlight. Soft radial glow that follows the pointer.
 * Skipped on touch devices (no mouse). Pointer-events none so it never blocks clicks.
 * The gradient is painted once on a fixed-size layer and moved with transforms,
 * so pointer movement only costs compositing (no full-viewport repaints).
 */
export default function CursorSpotlight() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25, mass: 0.5 })

  const x = useTransform(springX, (v) => v - SIZE / 2)
  const y = useTransform(springY, (v) => v - SIZE / 2)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const handleLeave = () => {
      mouseX.set(-1000)
      mouseY.set(-1000)
    }

    window.addEventListener('mousemove', handleMouse, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouse)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [mouseX, mouseY])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden"
    >
      <motion.div
        className="absolute top-0 left-0 will-change-transform"
        style={{
          x,
          y,
          width: SIZE,
          height: SIZE,
          background:
            'radial-gradient(circle closest-side, oklch(0.65 0.22 250 / 0.08), transparent 75%)',
        }}
      />
    </div>
  )
}
