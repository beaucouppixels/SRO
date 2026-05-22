import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface Tab {
  id: string
  label: string
}

interface Props {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
}

export function TabNav({ tabs, activeTab, onTabChange }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleTabChange = (id: string) => {
    onTabChange(id)
    setMenuOpen(false)
  }

  return (
    <nav aria-label="Main navigation" className="bg-slate-bg border-b border-white/10 shrink-0">
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-gold focus:text-navy focus:px-3 focus:py-1 focus:rounded focus:z-50"
      >
        Skip to main content
      </a>
      <div className="px-4 py-2 flex items-center justify-between">
        <span className="font-bold text-gold text-lg shrink-0">Keep Our SRO</span>
        
        {/* Desktop: show all tabs inline */}
        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-gold/15 text-gold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile: hamburger menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-gold p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile: dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-bg px-4 py-3 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                activeTab === tab.id
                  ? 'bg-gold/15 text-gold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
