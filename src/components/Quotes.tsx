import { Quote } from 'lucide-react'

const quotes = [
  // Student quotes from May 11, 2026 board meeting
  {
    text: "Officer Ware didn't just help me adjust to a new school. He changed my entire perspective. He helped turn a place that once felt intimidating and unfamiliar into somewhere I could actually feel comfortable in.",
    author: 'Ariana Bonita',
    role: 'Bothell High Junior',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "As a student of color, I'm tired of watching people assume that they already know how students of color feel. We are not all the same. There are many students of color at Bothell who feel safer having an SRO on campus, including myself.",
    author: 'Natalie Banks',
    role: 'Bothell High Freshman',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "I think it's unfair that you are claiming that we feel uncomfortable. As not only a Latino student on campus but as a woman on campus, I know Officer Ware is going to be there for me no matter what.",
    author: 'Valyrian Nava',
    role: 'Bothell High Junior',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "I hope the conversation is not only about budget numbers. When students see how much money is already spent on high level administration salaries, it's hard not to question why funding one school resource officer is suddenly considered too expensive.",
    author: 'Elena Reer (read by Cambria Smith)',
    role: 'Bothell High Junior',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "I hope that you don't remove this program for the reason that Black students feel uncomfortable. Number one, because that's a misrepresentation. And number two, it would allow other institutions in the future to abuse our voice.",
    author: 'Malik',
    role: 'Junior, Black Student Union President',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "He has helped me a lot to not be scared of police. I have learned to reach out without fear when I need help now and for the future.",
    author: 'Kathy',
    role: 'Bothell High Sophomore',
    source: 'Board meeting, May 11, 2026 (translated from Spanish)',
  },
  {
    text: "Two weeks ago, roughly 11 students positively spoke on behalf of Officer Ware. In total, 85 people have spoken since March 2022. 30+ students, 25+ staff members, 20+ parents, and 10+ community members. Yet still, you try and take our SRO program.",
    author: 'Ray Harless',
    role: 'Bothell High Sophomore',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "I have friends who teach in all levels of schooling in many different states across the country. All of them are honestly shocked this is even a discussion or a debate.",
    author: 'Alex Warren',
    role: '10-year Special Education Teacher, Aspire Program',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "Please don't assume that because you don't see us in many of your meetings is because we don't care. We're here to keep Officer Ware at Bothell High School. He is more than a necessity. The Hispanic community is supporting him very much.",
    author: 'Martha Flores',
    role: 'Parent, Hispanic Community Representative',
    source: 'Board meeting, May 11, 2026',
  },
  {
    text: "This is not a community asking for change. This is a community saying that the SRO program at BHS is a success story for NSD and should be celebrated and modeled at other high schools as well.",
    author: 'John Corrian',
    role: 'Parent of three NSD students (2019-2032)',
    source: 'Board meeting, May 11, 2026',
  },
  // Previously sourced quotes
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
    role: 'Bothell High Senior, petition organizer (4,300+ signatures)',
    source: 'KIRO 7',
  },
  // Board member quote
  {
    text: "I'm not able to support renewal of this contract because this district owes our community something more comprehensive and equitable and more empowering to all community members.",
    author: 'Han Tran',
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
        <p className="text-center text-slate-300 mb-4 max-w-2xl mx-auto">
          Direct quotes from the May 11, 2026 board meeting where students, parents, and staff spoke in favor of keeping the SRO program. No one spoke against it.
        </p>
        <p className="text-center text-sm text-slate-500 mb-12">
          Source:{' '}
          <a
            href="https://www.youtube.com/watch?v=m-rLmjKLFpY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Full Board Meeting Recording (YouTube)
          </a>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div
              key={`${q.author}-${i}`}
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
