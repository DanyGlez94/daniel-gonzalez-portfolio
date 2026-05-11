import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, Globe, MapPin } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { CV_LOCATION } from '@/lib/site-config'
import PrintButton from './print-button'

const CV_TITLE = 'CV'
const CV_DESCRIPTION =
  'Frontend Engineer · Accessibility & Compliance. 5+ years building secure, accessible web applications for U.S. government and enterprise clients.'

export const metadata: Metadata = {
  title: CV_TITLE,
  description: CV_DESCRIPTION,
  alternates: {
    canonical: '/cv',
  },
  openGraph: {
    title: `${CV_TITLE} — Daniel Gonzalez`,
    description: CV_DESCRIPTION,
    type: 'website',
    url: '/cv',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CV_TITLE} — Daniel Gonzalez`,
    description: CV_DESCRIPTION,
  },
}

const CONTACT = {
  email: 'daniel_glez94@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/danyglez94/',
  linkedinHandle: 'in/danyglez94',
  github: 'https://github.com/DanyGlez94',
  githubHandle: '@DanyGlez94',
  portfolio: 'https://danygonzalez.dev',
  location: CV_LOCATION,
}

const EXPERIENCE = [
  {
    company: 'GlobalLogic',
    client: 'U.S. revenue compliance SaaS — licensing & tax (state and local government)',
    role: 'Frontend Software Engineer',
    specialty: 'Fullstack, UX & Accessibility',
    period: 'Jun 2024 — Present',
    current: true,
    bullets: [
      'Own end-to-end features across the stack: UX mockups, React UI, and Node.js backend connectors (REST APIs, PostgreSQL/MariaDB) — including configurable per-tenant widgets and feature-flag rollouts across multiple state and local agencies, serving 800+ U.S. agencies in total.',
      'Contribute to the team’s incremental migration of legacy PHP/HTML to React across customer-facing portals, alongside earlier work on frontend features and mobile-compatibility improvements.',
      'Design complete UX mockup flows for new compliance features — covering edge cases, validation errors, loading and confirmation states — aligned with the existing design system.',
      'Shipped 20+ WCAG 2.1 AA remediation tickets across 7 customer-facing routes — focus management, screen reader support, programmatic error identification, keyboard navigation, and color contrast.',
    ],
  },
  {
    company: 'Grid Dynamics',
    role: 'JavaScript Software Engineer',
    specialty: 'React, React Native & Next.js',
    period: 'May 2022 — Jun 2024',
    bullets: [
      'Built production features and components for a major U.S. home improvement retail corporation across React, React Native, and Next.js.',
      'Delivered customer-facing features for a food delivery app, plus an internal desk & room booking system that streamlined office reservations.',
    ],
  },
  {
    company: 'Just Trading',
    role: 'Software Developer & IT Support',
    period: 'Oct 2019 — Sep 2021',
    bullets: [
      'Built a VBA-based payment control system and Excel macro automation that replaced manual financial processes; provided IT support and operational tooling.',
    ],
  },
  {
    company: 'Jabil',
    role: 'Automation Intern / Technician',
    period: 'Aug 2016 — Jan 2018',
    bullets: [
      'Developed production-line automation software, integrating custom hardware (Arduino, C++) to keep manufacturing tooling highly available.',
    ],
  },
]

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Programming Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass', 'Solidity', 'Python', 'VBA'],
  },
  {
    label: 'Libraries & Frameworks',
    items: [
      'React',
      'Next.js',
      'React Native',
      'Redux Toolkit',
      'React Query',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'Material UI',
      'Ant Design',
      'Framer Motion',
      'Jest',
      'Cypress',
      'Vitest',
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Vercel',
      'Jira',
      'Webpack',
      'Podman',
      'Docker',
      'DBeaver',
      'Figma',
      'PostgreSQL',
      'MariaDB',
      'MongoDB',
      'MySQL',
    ],
  },
]

const EDUCATION = [
  { title: 'Industrial Engineering', org: 'CETI', period: '2013 — 2016' },
  {
    title: 'JavaScript Professional Certificate',
    org: 'Platzi',
    period: '2020 — 2021',
  },
  {
    title: 'Google Cloud Digital Leader Training',
    org: 'Coursera',
    period: '2022',
  },
]

const LANGUAGES = [
  { lang: 'English', level: 'C1' },
  { lang: 'Spanish', level: 'Native' },
]

const INTERESTS =
  'Crypto, video games (Hollow Knight, Clash Royale), horror movies, and my Yorkie Ponky.'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 print:p-0 print:bg-white print:min-h-0">
      <div className="max-w-5xl mx-auto">
        {/* Top toolbar — hidden in print */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to portfolio
          </Link>
          <PrintButton />
        </div>

        {/* CV document — always light, both screen and print */}
        <article className="relative z-40 bg-white text-zinc-900 rounded-2xl shadow-2xl shadow-black/40 print:shadow-none print:rounded-none border border-zinc-200 print:border-0 p-10 md:p-14 print:px-12 print:py-10">
          {/* Header */}
          <header className="border-b border-zinc-200 pb-6 mb-8 print:pb-4 print:mb-5">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-700 print:text-3xl">
              Daniel Gonzalez
            </h1>
            <p className="mt-2 text-zinc-700 max-w-2xl leading-relaxed print:text-sm print:leading-snug print:mt-1">
              Frontend engineer with 5+ years building accessible, compliance-focused web
              applications for U.S. government and enterprise clients.
            </p>

            <div className="mt-5 print:mt-3 grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-x-6 gap-y-2 print:gap-y-1 text-sm print:text-[12px] text-zinc-700">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-zinc-500" aria-hidden="true" />
                {CONTACT.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-zinc-500" aria-hidden="true" />
                {CONTACT.location}
              </span>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-zinc-500" aria-hidden="true" />
                {CONTACT.linkedinHandle}
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors"
              >
                <Github className="w-4 h-4 shrink-0 text-zinc-500" aria-hidden="true" />
                {CONTACT.githubHandle}
              </a>
              <a
                href={CONTACT.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors break-all"
              >
                <Globe className="w-4 h-4 shrink-0 text-zinc-500" aria-hidden="true" />
                {CONTACT.portfolio.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </header>

          {/* Two-column body */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] print:grid-cols-[1fr_2fr] gap-10 print:gap-6">
            {/* Sidebar */}
            <aside className="space-y-8 print:space-y-4 text-sm print:text-[12px]">
              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-3">
                  Skills
                </h2>
                <div className="space-y-3">
                  {SKILL_GROUPS.map((g) => (
                    <div key={g.label}>
                      <h3 className="font-semibold text-zinc-800 mb-1.5">{g.label}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {g.items.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded-md text-[11px] print:text-[10px] bg-zinc-100 border border-zinc-200 text-zinc-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-3">
                  Education
                </h2>
                <ul className="space-y-2 print:space-y-1.5">
                  {EDUCATION.map((e) => (
                    <li key={e.title}>
                      <p className="font-semibold text-zinc-800 leading-snug">{e.title}</p>
                      <p className="text-zinc-600 text-[12px] leading-snug">
                        {e.org} <span className="text-zinc-500 font-mono">· {e.period}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-3 print:mb-2">
                  Languages
                </h2>
                <p className="text-zinc-700 leading-snug">
                  {LANGUAGES.map((l, i) => (
                    <span key={l.lang}>
                      <span className="font-medium">{l.lang}</span>
                      <span className="text-zinc-500 font-mono text-[12px] ml-1">
                        ({l.level})
                      </span>
                      {i < LANGUAGES.length - 1 && <span className="text-zinc-400"> · </span>}
                    </span>
                  ))}
                </p>
              </section>

              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-3 print:mb-2">
                  Interests
                </h2>
                <p className="text-zinc-700 leading-snug">{INTERESTS}</p>
              </section>
            </aside>

            {/* Main */}
            <main className="space-y-8 print:space-y-5">
              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-4">
                  Experience
                </h2>
                <div className="space-y-7 print:space-y-4">
                  {EXPERIENCE.map((e) => (
                    <article
                      key={e.company}
                      className={`break-inside-avoid ${
                        e.current ? 'border-l-4 border-blue-500 pl-4' : ''
                      }`}
                    >
                      <div className="mb-1">
                        <h3 className="text-base font-bold text-zinc-900">
                          {e.role}
                          {e.specialty && (
                            <span className="text-zinc-500 font-normal text-sm">
                              {' '}· {e.specialty}
                            </span>
                          )}{' '}
                          <span className="text-blue-700 font-semibold">— {e.company}</span>
                        </h3>
                        <p className="text-[12px] font-mono text-zinc-500 mt-0.5">
                          {e.period}
                        </p>
                      </div>
                      {e.client && (
                        <p className="text-[13px] text-zinc-600 italic mb-2">{e.client}</p>
                      )}
                      <ul className="space-y-1.5 print:space-y-1">
                        {e.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-zinc-800 leading-relaxed text-[14px] print:text-[12px] print:leading-snug"
                          >
                            <span
                              className="text-zinc-400 select-none leading-none mt-0.75"
                              aria-hidden="true"
                            >
                              ▪
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </article>

        {/* Footer hint — screen only */}
        <p className="text-center text-xs text-muted-foreground/70 mt-6 print:hidden">
          Tip: in your browser&apos;s print dialog, uncheck &quot;Headers and footers&quot; for a
          cleaner one-page PDF.
        </p>
      </div>
    </div>
  )
}
