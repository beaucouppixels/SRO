// Timeline events - all dates verified from news sources (KOMO, Herald, FOX 13, Lynnwood Times)
const events = [
  { 
    year: '2017', 
    title: 'Officer Ware Assigned to Bothell High', 
    description: 'Officer Garrett Ware becomes the School Resource Officer at Bothell High School, continuing a program that had been in place for over 30 years.',
    source: 'HeraldNet, KOMO News'
  },
  { 
    year: '2020', 
    title: 'Edmonds Ends SRO Program', 
    description: 'The Edmonds school board unanimously votes to end its school resource officer program district-wide following the murder of George Floyd.',
    source: 'HeraldNet'
  },
  { 
    year: '2022', 
    title: 'Woodinville High SRO Terminated', 
    description: 'Northshore School Board votes to end the SRO program at Woodinville High School. Bothell High remains the only school in the district with an SRO.',
    source: 'KOMO News'
  },
  { 
    year: 'June 2023', 
    title: 'Board Vote: 4-0 (Approved)', 
    description: 'Board approves continuing the SRO program.',
    source: 'NSD Board Records'
  },
  { 
    year: 'June 2024', 
    title: 'Board Vote: 4-1 (Approved)', 
    description: 'Board approves again. Hân Trần casts the first "no" vote.',
    source: 'NSD Board Records'
  },
  { 
    year: 'May 2024', 
    title: 'Annual SRO Evaluation Released', 
    description: 'Craig Foster, PhD (NSD Director of Research) releases the SRO Annual Review. 78.6% of students agree or strongly agree the SRO promotes safety. Parents (89%) and staff (88%) show even stronger support.',
    source: 'NSD SRO Annual Review Report (PDF)'
  },
  { 
    year: 'June 2025', 
    title: 'Board Vote: 3-2 (Approved)', 
    description: 'Margin narrows. Elisabeth Sotak joins Hân Trần in voting no.',
    source: 'NSD Board Records'
  },
  { 
    year: 'Nov 2025', 
    title: 'Board Election', 
    description: 'Carson Sanderson (District 1) and Kimberlee Kelly (District 5) join the school board.',
    source: 'Lynnwood Times'
  },
  { 
    year: 'May 11, 2026', 
    title: 'The Vote: 4-1 (Terminated)', 
    description: 'After more than an hour of public testimony with dozens of students and parents speaking in support, the board votes 4-1 to not renew the $103,000 SRO contract. Sandy Hayes is the lone vote in favor. No one spoke against the program at the meeting.',
    source: 'KOMO News, HeraldNet',
    highlight: true
  },
  { 
    year: 'May 14, 2026', 
    title: 'Kitchen Knife Incident', 
    description: 'Bothell High School briefly goes into a hold in response to an incident involving a student with a kitchen knife. Officer Ware responds.',
    source: 'HeraldNet, KOMO News'
  },
  { 
    year: 'May 18, 2026', 
    title: 'Student Walkout', 
    description: 'More than 200 Bothell High School students walk out of class and march to Bothell City Hall, chanting "We want Ware" and "Vote them out." Malik Lopez-Terron, president of the Black Student Union, helps organize the protest.',
    source: 'HeraldNet, FOX 13 Seattle, Lynnwood Times'
  },
  { 
    year: 'May 18, 2026', 
    title: 'Petition Reaches 4,300+ Signatures', 
    description: 'The Change.org petition "Save Bothell High School\'s SRO program with Officer Ware," created by student Brady Minneman on May 11, gathers more than 4,300 signatures.',
    source: 'Lynnwood Times, FOX 13 Seattle'
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-navy/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Timeline of Events
        </h2>
        <p className="text-center text-slate-400 text-sm mb-12">
          All dates verified from news sources: KOMO News, Everett Herald, FOX 13 Seattle, Lynnwood Times
        </p>
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
                  {event.source && (
                    <p className="text-xs text-slate-500 mt-2 italic">Source: {event.source}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
