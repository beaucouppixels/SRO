export function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 text-center bg-gradient-to-b from-navy to-slate-bg">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold uppercase tracking-widest text-sm mb-4 font-semibold">
          Northshore School District · May 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          4 Adults Overruled
          <br />
          <span className="text-gold">An Entire Community</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          The Northshore School Board voted 4-1 to remove Bothell High's School Resource Officer — 
          against the recommendation of their own evaluation, the principal, the faculty, the parents, 
          and 3,600+ students who signed a petition to keep him.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#data" className="bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-gold-light transition">
            See the Data
          </a>
          <a href="#action" className="border border-gold text-gold font-bold px-6 py-3 rounded-lg hover:bg-gold/10 transition">
            Take Action
          </a>
        </div>
      </div>
    </section>
  )
}
