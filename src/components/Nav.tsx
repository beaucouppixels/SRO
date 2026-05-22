import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#vote', label: 'The Vote' },
  { href: '#data', label: 'The Data' },
  { href: '#quotes', label: 'In Their Words' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#questions', label: 'Questions' },
  { href: '#what-you-can-do', label: 'What You Can Do' },
  { href: '#action', label: 'Take Action' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="fixed top-0 w-full bg-slate-bg/90 backdrop-blur-md z-50 border-b border-white/10">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-gold focus:text-navy focus:px-3 focus:py-1 focus:rounded focus:z-50">
        Skip to content
      </a>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-gold text-lg">Keep Our SRO</span>
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold focus-visible:text-gold focus-visible:outline-none focus-visible:underline transition">
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-slate-300 hover:text-gold"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-bg/95 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm hover:text-gold transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
