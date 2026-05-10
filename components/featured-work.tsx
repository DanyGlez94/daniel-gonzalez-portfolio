'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Full-stack Multi-Tenant Compliance Features',
    description:
      'End-to-end ownership of new features in a U.S. government revenue compliance suite — from UX mockups through React UI implementation and Node.js backend connectors integrating with REST APIs and PostgreSQL/MariaDB. Built configurable widgets that adapt per-tenant across multiple state and local deployments, with feature-flag gating for gradual rollouts.',
    image: '/project-workflow.jpg',
    tags: ['React', 'Node.js', 'REST APIs', 'PostgreSQL', 'MariaDB', 'Multi-tenant'],
    category: 'Fullstack / GovTech',
    featured: true,
  },
  {
    id: 2,
    title: 'Event Platform — Full-stack Next.js 14',
    description:
      'A full-stack events platform with end-to-end ticket purchasing — Stripe-powered checkout, Clerk authentication, MongoDB persistence, file uploads via UploadThing, and React Hook Form + Zod for validation. Built on Next.js 14 with Server Actions, Tailwind CSS, and Shadcn UI. Production-deployed on Vercel.',
    image: '/project-event-platform.png',
    tags: ['Next.js 14', 'TypeScript', 'Stripe', 'MongoDB', 'Clerk', 'Tailwind', 'Shadcn'],
    category: 'Personal · Fullstack',
    liveUrl: 'https://event-platform-danyglez.vercel.app/',
    githubUrl: 'https://github.com/DanyGlez94/event_platform',
  },
  {
    id: 3,
    title: 'Krypto — Web3 Blockchain dApp',
    description:
      'A decentralized application on the Ethereum blockchain for managing peer-to-peer transactions. Smart contracts written in Solidity (Hardhat) and a React + Vite frontend with Ethers.js for chain interaction and Tailwind CSS for the UI. Tracks transaction events emitted by the contract in real time.',
    image: '/project-krypto.png',
    tags: ['Solidity', 'React', 'Vite', 'Hardhat', 'Ethers.js', 'Tailwind'],
    category: 'Personal · Web3',
    liveUrl: 'https://danyglez94.github.io/Krypto_App/',
    githubUrl: 'https://github.com/DanyGlez94/Krypto_App',
  },
  {
    id: 4,
    title: 'WCAG 2.1 AA Accessibility Remediation',
    description:
      'Accessibility remediation work on customer-facing portals of a SaaS serving 800+ state and local agencies. Shipped 20+ tickets covering focus management, ARIA roles & names, programmatic error identification, keyboard navigation, color contrast, and reflow — across registration, contact, FAQ, and self-service compliance flows.',
    image: '/project-forms.jpg',
    tags: ['React', 'JavaScript', 'ARIA', 'WCAG 2.1 AA', 'CSS', 'Screen Readers'],
    category: 'Accessibility',
  },
  {
    id: 5,
    title: 'Enterprise React / RN / Next.js Components',
    description:
      'Built production features and components for enterprise clients including a major U.S. home improvement retail corporation and a food delivery platform. Worked across React, React Native, and Next.js with Redux Toolkit and Ant Design. Also delivered an internal desk & room booking system that streamlined office reservations.',
    image: '/project-tool.jpg',
    tags: ['React', 'React Native', 'Next.js', 'Redux Toolkit', 'Ant Design', 'Jest'],
    category: 'Enterprise Frontend',
  },
]

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: (typeof projects)[0]
  index: number
  featured?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`group relative z-40 rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 ${
        featured ? 'md:col-span-2' : ''
      }`}
      whileHover={{ y: -6 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, oklch(0.65 0.22 250 / 0.06), transparent 60%)' }}
      />

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-72 md:h-80' : 'h-52'}`}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-primary/30 bg-background/80 text-primary backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Action links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="p-2 rounded-xl glass hover:bg-secondary/80 text-foreground/80 hover:text-foreground transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-2 rounded-xl glass hover:bg-secondary/80 text-foreground/80 hover:text-foreground transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {project.title}
          <ArrowUpRight
            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
            aria-hidden="true"
          />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-border/50 text-muted-foreground bg-secondary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedWork() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section id="work" className="relative py-32 px-6" aria-label="Featured work section">
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
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Things I&apos;ve{' '}
              <span className="gradient-text">shipped</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            A selection of production systems and case studies from my engineering career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
