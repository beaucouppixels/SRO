export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-slate-bg/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-gold text-lg">Keep Our SRO</span>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#vote" className="hover:text-gold transition">The Vote</a>
          <a href="#data" className="hover:text-gold transition">The Data</a>
          <a href="#quotes" className="hover:text-gold transition">In Their Words</a>
          <a href="#timeline" className="hover:text-gold transition">Timeline</a>
          <a href="#questions" className="hover:text-gold transition">Questions</a>
          <a href="#action" className="hover:text-gold transition">Take Action</a>
        </div>
      </div>
    </nav>
  )
}
