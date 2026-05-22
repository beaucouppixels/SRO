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
  return (
    <nav aria-label="Main navigation" className="bg-slate-bg border-b border-white/10 px-4 py-2 flex items-center gap-1 overflow-x-auto shrink-0">
      <span className="font-bold text-gold text-lg mr-4 shrink-0">Keep Our SRO</span>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition ${
            activeTab === tab.id
              ? 'bg-gold/15 text-gold'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
