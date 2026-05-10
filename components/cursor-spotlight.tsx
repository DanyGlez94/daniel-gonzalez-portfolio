'use client'

import { useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'

/**
 * Site-wide cursor spotlight. Soft radial glow that follows the pointer.
 * Skipped on touch devices (no mouse). Pointer-events none so it never blocks clicks.
 */
export default function CursorSpotlight() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25, mass: 0.5 })

  const background = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, oklch(0.65 0.22 250 / 0.08), transparent 75%)`

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
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 print:hidden"
      style={{ background }}
    />
  )
}
