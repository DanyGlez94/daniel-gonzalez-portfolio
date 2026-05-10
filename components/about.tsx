'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Globe, PenTool, Eye, Code2, Users } from 'lucide-react'

const strengths = [
  {
    icon: Layers,
    title: 'React Ecosystem',
    description: 'Production experience across React, React Native, Next.js, Redux Toolkit, and React Query — from component design to state management to data layers.',
  },
  {
    icon: Globe,
    title: 'Fullstack Capability',
    description: 'Build end-to-end: React UI + Node.js / Express middle-layer connectors + REST APIs + PostgreSQL / MongoDB. Comfortable owning a feature from data layer to pixel.',
  },
  {
    icon: PenTool,
    title: 'UX Design & Mockups',
    description: 'Design complete user flow mockups for new features — covering edge cases, error states, and loading states — aligned with the existing design system.',
  },
  {
    icon: Eye,
    title: 'Accessibility & WCAG',
    description: 'WCAG 2.1 AA remediation across enterprise portals — focus management, ARIA, keyboard navigation, screen reader support, and color contrast at scale.',
  },
  {
    icon: Code2,
    title: 'Legacy Modernization',
    description: 'Migrating legacy PHP/HTML and jQuery codebases to modern React. Pragmatic and incremental — without halting feature development.',
  },
  {
    icon: Users,
    title: 'Mentorship & Cross-Functional',
    description: 'Active in agile ceremonies, technical interviews, and mentoring junior engineers. Comfortable bridging design, product, and engineering.',
  },
]

function StrengthCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Layers
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="group relative z-40 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(circle at 50% 0%, oklch(0.65 0.22 250 / 0.05), transparent 60%)' }}
      />
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-32 px-6" aria-label="About section">
      {/* Section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">About</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
              Product-minded engineer who{' '}
              <span className="gradient-text">sweats the details</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a JavaScript engineer with 5+ years building secure, accessible, and
                compliance-focused web applications for government and enterprise clients. I work
                fluently across the stack — React frontend, Node.js and middle-layer integrations, UX
                mockups, and accessibility — wherever a product needs me.
              </p>
              <p>
                Lately I&apos;m embedded with a U.S. govtech platform serving 800+ state and local
                agencies: contributing to the team&apos;s PHP&nbsp;→&nbsp;React modernization,
                building full-stack features for multi-tenant deployments, designing UX mockups
                for new compliance flows, shipping WCAG 2.1 AA accessibility, and supporting
                frontend / mobile-compatibility work across product releases. Before that I shipped
                React, React Native, and Next.js features for enterprise clients in retail, food
                delivery, and internal tools.
              </p>
              <p>When something matters to a real user, it matters to me.</p>
            </div>
          </div>
        </motion.div>

        {/* Strength grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.title} {...strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
