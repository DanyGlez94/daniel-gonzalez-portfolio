'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { CONTACT_INTRO } from '@/lib/site-config'
import { useState } from 'react'

const EMAIL = 'daniel_glez94@hotmail.com'

const socials = [
  { icon: Github, label: 'GitHub', handle: '@DanyGlez94', href: 'https://github.com/DanyGlez94' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'in/danyglez94', href: 'https://www.linkedin.com/in/danyglez94/' },
  { icon: Mail, label: 'Email', handle: EMAIL, href: `mailto:${EMAIL}` },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden" aria-label="Contact section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.65 0.22 250 / 0.08), transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Let&apos;s build something{' '}
            <span className="gradient-text">worth using</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            {CONTACT_INTRO}
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all duration-200"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Send me an email
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-mono border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 bg-secondary/20 hover:bg-secondary/50 transition-all duration-200"
            aria-label="Copy email address"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : EMAIL}
          </button>
        </motion.div>

        {/* Social grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {socials.map(({ icon: Icon, label, handle, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative z-40 flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/50 group-hover:bg-primary/10 border border-border/50 group-hover:border-primary/30 flex items-center justify-center transition-all duration-300">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
              </div>
              <div className="text-center">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-200">{handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
