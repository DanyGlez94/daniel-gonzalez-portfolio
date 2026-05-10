'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/DanyGlez94' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/danyglez94/' },
  { icon: Mail, label: 'Email', href: 'mailto:daniel_glez94@hotmail.com' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
      aria-label="Hero section"
    >
      {/* Content */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-balance"
        >
          <span className="gradient-text glow-text">Daniel</span>
          <br />
          <span className="text-foreground/90">Gonzalez</span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-lg md:text-xl font-medium text-primary tracking-wide font-mono">
            Frontend Engineer
          </p>
          <p className="text-[11px] md:text-xs font-mono text-muted-foreground/70 tracking-[0.3em] uppercase mt-2">
            Fullstack · UX · Accessibility
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-pretty"
        >
          Fullstack JavaScript engineer with 5+ years across React, Node.js, and UX. Currently
          shipping multi-tenant compliance features, UX mockups, and accessibility work for U.S.
          government licensing & tax platforms used by 800+ agencies.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border/70 text-foreground/80 hover:text-foreground hover:border-primary/50 hover:bg-secondary/50 transition-all duration-200"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/40 bg-secondary/20 hover:bg-secondary/60 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
