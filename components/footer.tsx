'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-40 py-8 px-6 border-t border-border/30 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs text-muted-foreground font-mono"
        >
          {`© ${year} Daniel Gonzalez. Built with Next.js & Framer Motion.`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-1 text-xs font-mono text-muted-foreground"
        >
          <span>Designed &amp; engineered by</span>
          <span className="text-primary ml-1">Daniel Gonzalez</span>
        </motion.div>
      </div>
    </footer>
  )
}
