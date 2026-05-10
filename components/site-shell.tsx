'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import CommandMenu from '@/components/command-menu'

export default function SiteShell() {
  const [commandOpen, setCommandOpen] = useState(false)

  return (
    <>
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  )
}
