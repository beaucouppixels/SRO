const events = [
  { year: '2017', title: 'Officer Ware Assigned', description: 'Officer Garrett Ware becomes the School Resource Officer at Bothell High School.' },
  { year: 'Aug-Sep 2022', title: 'Community Begins Fighting', description: 'Community members begin actively fighting to keep the SRO program after it comes under scrutiny.' },
  { year: 'Nov 2022 - Jun 2023', title: 'Student Wellness & Safety Task Force', description: 'NSD convenes a task force. Their work concludes with a recommendation to maintain the status quo with a three-year implementation timeline.' },
  { year: 'June 2023', title: 'Board Vote: 4-0 (Approved)', description: 'Board unanimously approves continuing the SRO program. (McGourty, Cogan, Cast, Hayes; Swain absent)' },
  { year: 'June 2024', title: 'Board Vote: 4-1 (Approved)', description: 'Board approves again. Han Tran casts the first "no" vote. (Hayes, McGourty, Sotak, Cast vote yes)' },
  { year: 'Nov 2025', title: 'Board Election', description: 'Carson Sanderson and Kimberlee Kelly join the board after the November 2025 election.' },
  { year: 'June 2025', title: 'Board Vote: 3-2 (Approved)', description: 'Margin narrows. Sotak joins Tran in voting no. (Hayes, Cast, McGourty vote yes)' },
  { year: 'March 9, 2026', title: 'SRO Program Evaluation Presented', description: 'Craig Foster (NSD Director of Research) presents the annual review. Eight forms of evidence over three years show strong support. Zero student complaints. Principal recommends continuation.' },
  { year: 'May 2026', title: 'Kitchen Knife Incident', description: 'A student-related incident involving a kitchen knife leads to a building evacuation. Officer Ware responds immediately.' },
  { year: 'May 11, 2026', title: 'The Vote', description: 'Board votes 4-1 to terminate the SRO contract, citing "equity." No replacement plan articulated. Sanderson and Kelly vote to remove in their first vote on the issue.', highlight: true },
  { year: 'May 12, 2026', title: 'Student Walkout', description: 'A large portion of the Bothell High student body walks out of class in protest.' },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-navy/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Timeline of Events
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
