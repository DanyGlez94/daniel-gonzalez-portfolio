'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Honors the OS "reduce motion" setting for every Framer Motion animation:
 * transform/layout animations are skipped, opacity fades are kept.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
