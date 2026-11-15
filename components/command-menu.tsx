'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function CommandMenu({ open, onClose }: CommandMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const firstItemRef = useRef<HTMLButtonElement>(null)
  // Element that had focus before opening; focus returns here on close.
  const returnFocusRef = useRef<HTMLElement | null>(null)
  // Section to move focus to after closing via navigation (instead of the trigger).
  const navigateTargetRef = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Open: remember the trigger, focus the first item, make the rest of the page
  // inert (unreachable by Tab and screen readers) and lock background scroll.
  // Close: undo all of that and restore focus.
  useEffect(() => {
    if (!open) return

    returnFocusRef.current = document.activeElement as HTMLElement | null
    navigateTargetRef.current = null
    firstItemRef.current?.focus()

    const panelRoot = panelRef.current?.closest('[data-command-menu-root]')
    const inerted: HTMLElement[] = []
    for (const el of Array.from(document.body.children) as HTMLElement[]) {
      if (el === panelRoot || el.inert || el.tagName === 'SCRIPT') continue
      el.inert = true
      inerted.push(el)
    }
    const { overflow } = document.documentElement.style
    document.documentElement.style.overflow = 'hidden'

    return () => {
      inerted.forEach((el) => (el.inert = false))
      document.documentElement.style.overflow = overflow

      const target = navigateTargetRef.current
      if (target) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      } else {
        returnFocusRef.current?.focus()
      }
    }
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
      return
    }

    const panel = panelRef.current
    if (!panel) return
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (focusable.length === 0) return
    const index = focusable.indexOf(document.activeElement as HTMLElement)

    // Focus trap: wrap Tab / Shift+Tab inside the dialog.
    if (e.key === 'Tab') {
      e.preventDefault()
      const next = e.shiftKey
        ? (index <= 0 ? focusable.length : index) - 1
        : (index + 1) % focusable.length
      focusable[next].focus()
      return
    }

    // Command-palette conventions: arrows move between items, Home/End jump.
    const items = Array.from(panel.querySelectorAll<HTMLElement>('[data-command-item]'))
    const itemIndex = items.indexOf(document.activeElement as HTMLElement)
    let nextItem: number | null = null
    if (e.key === 'ArrowDown') nextItem = (itemIndex + 1) % items.length
    if (e.key === 'ArrowUp') nextItem = (itemIndex <= 0 ? items.length : itemIndex) - 1
    if (e.key === 'Home') nextItem = 0
    if (e.key === 'End') nextItem = items.length - 1
    if (nextItem !== null) {
      e.preventDefault()
      items[nextItem]?.focus()
    }
  }

  const handleNavigate = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector<HTMLElement>(href)
      navigateTargetRef.current = el
      onClose()
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      onClose()
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  if (!mounted) return null

  return createPortal(
    <div data-command-menu-root>
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
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
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-menu-title"
            onKeyDown={handleKeyDown}
          >
            <div className="glass rounded-2xl border border-border/60 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40">
                <Command className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <h2 id="command-menu-title" className="text-sm font-normal text-muted-foreground flex-1 font-mono">
                  Quick navigation
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Close command menu"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="p-2">
                {/* Sections */}
                <div className="mb-2" role="group" aria-labelledby="command-menu-navigate">
                  <p id="command-menu-navigate" className="px-3 py-1.5 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Navigate
                  </p>
                  {SECTIONS.map((item, i) => (
                    <motion.button
                      key={item.label}
                      ref={i === 0 ? firstItemRef : undefined}
                      data-command-item
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-secondary/50 focus-visible:bg-secondary/50 focus-visible:outline-2 focus-visible:outline-primary/60 group transition-colors duration-150"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/50 group-hover:bg-primary/10 group-focus-visible:bg-primary/10 border border-border/50 group-hover:border-primary/30 group-focus-visible:border-primary/30 flex items-center justify-center transition-all duration-200 shrink-0">
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground/90 group-hover:text-foreground font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0 shrink-0" aria-hidden="true" />
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-border/30 my-2 mx-3" />

                {/* Socials */}
                <div role="group" aria-labelledby="command-menu-connect">
                  <p id="command-menu-connect" className="px-3 py-1.5 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Connect
                  </p>
                  {SOCIALS.map((item, i) => (
                    <motion.button
                      key={item.label}
                      data-command-item
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (SECTIONS.length + i) * 0.04 }}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-secondary/50 focus-visible:bg-secondary/50 focus-visible:outline-2 focus-visible:outline-primary/60 group transition-colors duration-150"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/50 group-hover:bg-primary/10 group-focus-visible:bg-primary/10 border border-border/50 group-hover:border-primary/30 group-focus-visible:border-primary/30 flex items-center justify-center transition-all duration-200 shrink-0">
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground/90 group-hover:text-foreground font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground font-mono truncate">{item.description}</p>
                        {!item.href.startsWith('mailto:') && <span className="sr-only">(opens in a new tab)</span>}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0 shrink-0" aria-hidden="true" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-end gap-3 px-4 py-2 border-t border-border/30" aria-hidden="true">
                <span className="text-xs text-muted-foreground font-mono">Press</span>
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-secondary/60 border border-border/60 rounded text-muted-foreground">Esc</kbd>
                <span className="text-xs text-muted-foreground font-mono">to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </div>,
    document.body,
  )
}
