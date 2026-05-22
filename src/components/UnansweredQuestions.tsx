import { HelpCircle } from 'lucide-react'

const questions = [
  {
    question: 'What replaces the SRO?',
    context: 'The board did not articulate any replacement plan for school safety after removing Officer Ware.',
  },
  {
    question: 'Why override your own evaluation?',
    context: 'The district\'s 2025-26 SRO Program Evaluation - their own internal review - recommended continuing the program.',
  },
  {
    question: 'Where is the evidence for "psychological safety concerns"?',
    context: 'The board cited concerns from students of color but has not presented survey data or evidence supporting this claim. The district\'s own student survey shows most students feel safe.',
  },
  {
    question: 'Why override the population you represent?',
    context: 'Students, parents, faculty, the principal, and 3,600+ petition signers all supported the SRO. The board voted against every constituency.',
  },
  {
    question: 'Why won\'t the board president respond to press inquiries?',
    context: 'KIRO 7 reached out to the board president for clarification on what was driving the decision. The board president did not respond.',
  },
]

export function UnansweredQuestions() {
  return (
    <section id="questions" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Unanswered Questions
        </h2>
        <p className="text-center text-slate-300 mb-2 max-w-2xl mx-auto">
          Questions the board has not answered publicly.
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
