const events = [
  { year: '2017', title: 'Officer Ware Assigned', description: 'Officer Garrett Ware becomes the School Resource Officer at Bothell High School.' },
  { year: '2025-26', title: 'District Evaluation', description: 'The district\'s own SRO Annual Review recommends the program continue. Surveys show strong support from students, parents, and faculty.' },
  { year: 'May 2026', title: 'Kitchen Knife Incident', description: 'A student-related incident involving a kitchen knife leads to a building evacuation. Officer Ware responds immediately, keeping students safe.' },
  { year: 'May 2026', title: 'Board Meeting', description: 'Students, parents pack the board meeting to testify in support of Officer Ware. 3,600+ petition signatures presented.' },
  { year: 'May 2026', title: 'The Vote', description: 'Board votes 4-1 to terminate the SRO contract, citing "equity." No replacement plan articulated.', highlight: true },
  { year: 'May 2026', title: 'Student Walkout', description: 'A large portion of the Bothell High student body walks out of class in protest the following Monday morning.' },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-navy/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          📰 Timeline of Events
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/30"></div>
          <div className="space-y-8">
            {events.map((event, i) => (
              <div key={i} className="relative pl-12">
                <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${
                  event.highlight ? 'bg-red-vote' : 'bg-gold'
                }`}></div>
                <div className={`rounded-lg p-4 ${
                  event.highlight ? 'bg-red-vote/10 border border-red-vote/30' : 'bg-navy-light'
                }`}>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wide mb-1">{event.year}</p>
                  <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
