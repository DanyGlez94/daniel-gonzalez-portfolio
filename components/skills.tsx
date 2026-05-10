'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techLogos = [
  { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Redux', src: 'https://cdn.simpleicons.org/redux/764ABC' },
  { name: 'Tailwind', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Express', src: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'MUI', src: 'https://cdn.simpleicons.org/mui/007FFF' },
  { name: 'Ant Design', src: 'https://cdn.simpleicons.org/antdesign/0170FE' },
  { name: 'Sass', src: 'https://cdn.simpleicons.org/sass/CC6699' },
  { name: 'Figma', src: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Jest', src: 'https://cdn.simpleicons.org/jest/C21325' },
  { name: 'Cypress', src: 'https://cdn.simpleicons.org/cypress/17202C' },
  { name: 'Git', src: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'Podman', src: 'https://cdn.simpleicons.org/podman/892CA0' },
  { name: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'MariaDB', src: 'https://cdn.simpleicons.org/mariadb/ffffff' },
  { name: 'DBeaver', src: 'https://cdn.simpleicons.org/dbeaver/ffffff' },
  { name: 'Jira', src: 'https://cdn.simpleicons.org/jira/0052CC' },
]

const skillGroups = [
  {
    category: 'Frontend',
    color: 'oklch(0.65 0.22 250)',
    skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Redux Toolkit', 'React Native'],
  },
  {
    category: 'Backend & Data',
    color: 'oklch(0.75 0.18 200)',
    skills: ['Node.js', 'Express', 'REST APIs', 'MariaDB', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'UI / Styling',
    color: 'oklch(0.72 0.16 280)',
    skills: ['Tailwind CSS', 'Material UI', 'Ant Design', 'SASS / LESS', 'Figma', 'Framer Motion'],
  },
  {
    category: 'Accessibility',
    color: 'oklch(0.72 0.18 140)',
    skills: ['WCAG 2.1 AA', 'ARIA', 'Screen Readers', 'Keyboard Nav', 'Color Contrast'],
  },
  {
    category: 'Testing & Tools',
    color: 'oklch(0.68 0.16 60)',
    skills: ['Jest', 'Cypress', 'Vitest', 'Git / GitHub', 'Podman / Docker', 'DBeaver', 'Jira / Agile', 'Webpack'],
  },
]

function LogoMarquee() {
  const items = [...techLogos, ...techLogos]
  return (
    <div
      className="relative overflow-hidden py-6"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-14 items-center w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 shrink-0 group"
            title={tech.name}
          >
            <img
              src={tech.src}
              alt=""
              className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
            />
            <span className="text-[11px] font-mono text-muted-foreground/60 tracking-wider uppercase">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="group relative z-40 p-6 rounded-2xl border border-border/50 bg-card hover:border-border/80 transition-colors duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: group.color,
            boxShadow: `0 0 8px ${group.color}`,
          }}
        />
        <h3
          className="text-sm font-semibold uppercase tracking-widest font-mono"
          style={{ color: group.color }}
        >
          {group.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-full text-xs font-medium border border-border/50 text-foreground/80 bg-secondary/30 hover:bg-secondary/60 hover:border-primary/30 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-secondary/5"
      aria-label="Skills section"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            The <span className="gradient-text">tech I work with</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            5+ years of hands-on experience across the modern web stack, with a deep focus on
            frontend craft and accessibility.
          </p>
        </motion.div>

        {/* Tech logo marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <LogoMarquee />
        </motion.div>

        {/* Categorized chips */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
