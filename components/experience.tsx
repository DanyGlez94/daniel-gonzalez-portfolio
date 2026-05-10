'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Frontend Software Engineer',
    specialty: 'Fullstack, UX & Accessibility',
    company: 'GlobalLogic',
    companyUrl: 'https://www.globallogic.com/',
    description:
      'Embedded as a fullstack engineer with a U.S. govtech client providing transaction and compliance software to 800+ state and local agencies. Contribute to the team’s PHP/HTML → React migration, design UX mockups for new compliance flows, build full-stack features (React UI + Node.js backend connectors + REST APIs + PostgreSQL/MariaDB), and ship WCAG 2.1 AA accessibility remediation across customer-facing portals. Earlier work included frontend features, mobile-compatibility improvements, and UI/UX polish across multiple sprint releases. Mentor junior engineers and conduct technical interviews alongside HR.',
    tags: ['React', 'Node.js', 'REST APIs', 'PostgreSQL', 'MariaDB', 'UX / Mockups', 'WCAG 2.1 AA'],
  },
  {
    period: '2022 — 2024',
    role: 'JavaScript Software Engineer',
    specialty: 'React, React Native & Next.js',
    company: 'Grid Dynamics',
    companyUrl: 'https://www.griddynamics.com/',
    description:
      'Shipped production features and components across multiple enterprise engagements, including a major U.S. home improvement retail corporation and a food delivery platform. Built an internal desk & room booking system that streamlined office reservations. Mentored new engineers and led technical Spikes to evaluate solutions across the React / React Native / Next.js stack.',
    tags: ['React', 'React Native', 'Next.js', 'Redux Toolkit', 'Node.js', 'Ant Design', 'Jest'],
  },
  {
    period: '2019 — 2021',
    role: 'Software Developer & IT Support',
    company: 'Just Trading',
    companyUrl: '#',
    description:
      'Built a custom VBA-based payment control system that replaced manual processes and improved accuracy in financial records. Enhanced an internal customer management tool with macros to optimize daily workflows, and provided IT support and operational tooling for the business.',
    tags: ['VBA', 'Excel Macros', 'IT Support'],
  },
  {
    period: '2016 — 2018',
    role: 'Automation Intern / Technician',
    company: 'Jabil',
    companyUrl: 'https://www.jabil.com/',
    description:
      'Developed and tested automation software to improve manufacturing production workflows. Integrated custom hardware with software solutions and provided technical support for automation tools to keep them highly available on the production floor.',
    tags: ['VBA', 'Arduino', 'C++', 'Hardware Integration'],
  },
]

function ExperienceItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="group relative"
    >
      <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 py-8 border-b border-border/40 last:border-b-0">
        {/* Period + company */}
        <div className="shrink-0">
          <p className="text-xs font-mono text-muted-foreground tracking-wider mb-1">{experience.period}</p>
          <a
            href={experience.companyUrl}
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 group/link"
          >
            {experience.company}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" aria-hidden="true" />
          </a>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {experience.role}
            {experience.specialty && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                · {experience.specialty}
              </span>
            )}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-border/60 text-muted-foreground bg-secondary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-32 px-6" aria-label="Experience section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Where I&apos;ve{' '}
              <span className="gradient-text">made an impact</span>
            </h2>
          </div>
          <a
            href="/cv"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-mono shrink-0"
          >
            Full Resume
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-border/40" aria-hidden="true" />

          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
