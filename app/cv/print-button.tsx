'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-colors print:hidden cursor-pointer"
      aria-label="Print CV or save as PDF"
    >
      <Printer className="w-4 h-4" aria-hidden="true" />
      Print / Save as PDF
    </button>
  )
}
