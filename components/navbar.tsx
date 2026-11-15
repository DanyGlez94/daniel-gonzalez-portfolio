'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'
import { NAVBAR_CTA } from '@/lib/site-config'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  onCommandOpen: () => void
}

export default function Navbar({ onCommandOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMac, setIsMac] = useState<boolean | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Escape closes the mobile menu and returns focus to its toggle button.
  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMobileOpen(false)
      menuButtonRef.current?.focus()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  useEffect(() => {
    setIsMac(/Mac|iPod|iPhone|iPad/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onCommandOpen()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCommandOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? 'glass border-b border-border/60 shadow-2xl shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="p-2 -m-2 font-mono text-sm font-medium tracking-wider text-foreground/90 hover:text-primary hover:scale-[1.02] transition-[color,background-color,border-color,box-shadow,translate,scale] duration-200 ease-out"
          >
            <span className="text-primary">D</span>
            <span className="text-foreground/60">G</span>
            <span className="sr-only">, Daniel Gonzalez, back to top</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50 transition-[color,background-color,border-color,box-shadow,translate,scale] duration-200 ease-out"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={onCommandOpen}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-muted-foreground border border-border/60 hover:border-primary/40 hover:text-foreground bg-secondary/30 hover:bg-secondary/60 hover:scale-[1.02] active:scale-[0.98] transition-[color,background-color,border-color,box-shadow,translate,scale] duration-200 ease-out"
              aria-label="Open command menu"
              aria-haspopup="dialog"
              aria-keyshortcuts="Meta+K Control+K"
            >
              {isMac !== null &&
                (isMac ? (
                  <Command className="w-3 h-3" aria-hidden="true" />
                ) : (
                  <span className="text-[10px] font-semibold">Ctrl</span>
                ))}
              <span>K</span>
            </motion.button>

            <motion.a
              href="#contact"
              className="hidden md:flex items-center px-4 py-1.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-[color,background-color,border-color,box-shadow,translate,scale] duration-200 ease-out"
            >
              {NAVBAR_CTA}
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              ref={menuButtonRef}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="fixed top-16 left-0 right-0 z-50 glass border-b border-border/60 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border/50 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground"
                >
                  {NAVBAR_CTA}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
