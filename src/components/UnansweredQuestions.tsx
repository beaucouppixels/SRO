import { HelpCircle, Info } from 'lucide-react'

// What we now know (verified from HeraldNet, May 12, 2026)
const knownFacts = {
  title: 'The Replacement Plan',
  source: 'HeraldNet, May 12, 2026',
  details: [
    'Starting next school year, Bothell High School will have two campus supervisors instead of a school resource officer.',
    'Campus supervisors are district employees that support proactive safety and security measures, respond to emergencies and mentor students.',
    'Bothell High School currently has one campus supervisor; the district will provide a second next year.',
    'Campus supervisors must complete school safety training including social-emotional learning, implicit bias, student-centered mentoring and restorative justice.',
    'The district\'s three other high schools also have two campus supervisors (no armed officers).',
  ],
}

const questions = [
  {
    question: 'Why override your own evaluation?',
    context: 'The district\'s 2024 SRO Program Evaluation - their own internal review prepared by Craig Foster, PhD - showed strong support and recommended continuing the program. The principal also recommended continuation.',
  },
  {
    question: 'Where is the evidence for concerns from students of color?',
    context: 'Board members said they received feedback from community members who were "scared to publicly oppose" the program. Board member Hân Trần said some felt "bullied or pressured into silence." However, no one spoke against the program at the May 11 meeting, and the district\'s own survey showed consistent support across all ethnic groups.',
  },
  {
    question: 'Why override the population you represent?',
    context: 'Students, parents, faculty, the principal, and 4,300+ petition signers all supported the SRO. About 11 students and 20 adults spoke in favor at the May 11 meeting. No one spoke against. The board voted against every constituency that testified.',
  },
  {
    question: 'How will unarmed campus supervisors respond to armed threats?',
    context: 'Campus supervisors are district employees, not law enforcement. In the May 14 kitchen knife incident, Officer Ware was able to respond. How would campus supervisors handle a similar or more serious threat?',
  },
  {
    question: 'Why didn\'t the board engage with student voices directly?',
    context: 'Malik Lopez-Terron, president of the Black Student Union, said at the meeting: "I hope that you don\'t remove this program for the reason that Black students feel uncomfortable. No. 1, because that\'s a misrepresentation, and No. 2, it would allow other institutions in the future to abuse our voice."',
  },
]

export function UnansweredQuestions() {
  return (
    <section id="questions" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* What We Know Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Replacement Plan
          </h2>
          <p className="text-center text-slate-400 text-sm mb-8">
            Source: <a href="https://www.heraldnet.com/2026/05/12/northshore-to-end-school-resource-officer-program-at-bothell-high-school/" target="_blank" rel="noopener noreferrer" className="text-gold underline">HeraldNet, May 12, 2026</a>
          </p>
          <div className="bg-navy-light rounded-xl p-6 border border-gold/20">
            <div className="flex items-start gap-3 mb-4">
              <Info className="text-gold shrink-0 mt-1" size={22} />
              <h3 className="font-bold text-lg">What the district has announced:</h3>
            </div>
            <ul className="space-y-3 text-slate-300 ml-9">
              {knownFacts.details.map((detail, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="text-gold shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unanswered Questions Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Remaining Questions
        </h2>
        <p className="text-center text-slate-300 mb-2 max-w-2xl mx-auto">
          Questions the board has not fully addressed.
        </p>
        <p className="text-center text-xs text-slate-500 mb-12 italic">
          Note: This section represents editorial analysis based on gaps in the board's public statements.
        </p>
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.question} className="bg-navy-light rounded-xl p-6 border border-white/5">
              <div className="flex items-start gap-3">
                <HelpCircle className="text-gold shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{q.question}</h3>
                  <p className="text-slate-400 text-sm">{q.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
