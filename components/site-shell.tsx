'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import CommandMenu from '@/components/command-menu'

export default function SiteShell() {
  const [commandOpen, setCommandOpen] = useState(false)

  // In-page links (#about, #work, ...) scroll to their section, but browsers
  // leave focus on <body>, so keyboard and screen-reader users lose their place.
  // Move focus to the target section, like the command menu does.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      const id = link?.getAttribute('href')?.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return

      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  )
}
