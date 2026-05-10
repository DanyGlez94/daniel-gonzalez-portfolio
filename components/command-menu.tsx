'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, Mail, User, Briefcase, Code2, Wrench, MessageSquare, X, ArrowRight } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'

const SECTIONS = [
  { label: 'About', icon: User, href: '#about', description: 'Who is Daniel' },
  { label: 'Experience', icon: Briefcase, href: '#experience', description: 'Career timeline' },
  { label: 'Work', icon: Code2, href: '#work', description: 'Featured projects' },
  { label: 'Skills', icon: Wrench, href: '#skills', description: 'Tech stack' },
  { label: 'Contact', icon: MessageSquare, href: '#contact', description: 'Get in touch' },
]

const SOCIALS = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/DanyGlez94', description: '@DanyGlez94' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/danyglez94/', description: 'in/danyglez94' },
  { label: 'Email', icon: Mail, href: 'mailto:daniel_glez94@hotmail.com', description: 'daniel_glez94@hotmail.com' },
]

interface CommandMenuProps {
  open: boolean
  onClose: () => void
}

export default function CommandMenu({ open, onClose }: CommandMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  const handleNavigate = (href: string) => {
    onClose()
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed top-[20vh] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg mx-4"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
          >
            <div className="glass rounded-2xl border border-border/60 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40">
                <Command className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground flex-1 font-mono">Quick navigation</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close command menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2">
                {/* Sections */}
                <div className="mb-2">
                  <p className="px-3 py-1.5 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Navigate
                  </p>
                  {SECTIONS.map((item, i) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-secondary/50 group transition-colors duration-150"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/50 group-hover:bg-primary/10 border border-border/50 group-hover:border-primary/30 flex items-center justify-center transition-all duration-200 shrink-0">
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground/90 group-hover:text-foreground font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 shrink-0" aria-hidden="true" />
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-border/30 my-2 mx-3" />

                {/* Socials */}
                <div>
                  <p className="px-3 py-1.5 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Connect
                  </p>
                  {SOCIALS.map((item, i) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (SECTIONS.length + i) * 0.04 }}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-secondary/50 group transition-colors duration-150"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/50 group-hover:bg-primary/10 border border-border/50 group-hover:border-primary/30 flex items-center justify-center transition-all duration-200 shrink-0">
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground/90 group-hover:text-foreground font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground font-mono truncate">{item.description}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 shrink-0" aria-hidden="true" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-end gap-3 px-4 py-2 border-t border-border/30">
                <span className="text-xs text-muted-foreground font-mono">Press</span>
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-secondary/60 border border-border/60 rounded text-muted-foreground">Esc</kbd>
                <span className="text-xs text-muted-foreground font-mono">to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
