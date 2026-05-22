import { Quote } from 'lucide-react'

const quotes = [
  {
    text: "You can go around and ask every single person here, and no one will say they feel unsafe. It's just a myth. Everyone feels safer with him.",
    author: 'Julian Mercado',
    role: 'Bothell High Senior',
    source: 'Board meeting, May 2026',
  },
  {
    text: "We were in lockdown in our classrooms for around an hour, and he was there to respond right away. It just is such a sense of security at our school.",
    author: 'Avery Jensen',
    role: 'ASB President, Bothell High',
    source: 'KOMO News',
  },
  {
    text: "They're not representing the community.",
    author: 'Brady Minneman',
    role: 'Bothell High Senior, petition organizer (3,600+ signatures)',
    source: 'KIRO 7',
  },
  {
    text: "The board was projecting personal prejudices onto the student body.",
    author: 'Ray Harless',
    role: 'Bothell High Sophomore',
    source: 'KIRO 7',
  },
  {
    text: "I'm not able to support renewal of this contract because this district owes our community something more comprehensive and equitable and more empowering to all community members.",
    author: 'Hân Trần',
    role: 'Board Vice President (voted to remove)',
    source: 'KIRO 7',
    isBoard: true,
  },
]

export function Quotes() {
  return (
    <section id="quotes" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          In Their Own Words
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Direct quotes from students, staff, and board members - sourced from public meetings and news reporting.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q) => (
            <div
              key={q.author}
              className={`rounded-xl p-6 border ${
                q.isBoard
                  ? 'bg-red-vote/5 border-red-vote/20'
                  : 'bg-navy-light border-white/5'
              }`}
            >
              <Quote className={`mb-3 ${q.isBoard ? 'text-red-vote' : 'text-gold'}`} size={24} />
              <p className="text-lg italic mb-4">"{q.text}"</p>
              <div>
                <p className="font-bold">{q.author}</p>
                <p className="text-sm text-slate-400">{q.role}</p>
                <p className="text-xs text-slate-500 mt-1">Source: {q.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
