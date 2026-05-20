import { ThumbsDown, ThumbsUp } from 'lucide-react'

const boardMembers = [
  { name: 'Sandy Hayes', position: 'President', vote: 'keep', label: 'No (To keep the SRO)' },
  { name: 'Hân Trần', position: 'Vice President', vote: 'remove', label: 'Yes (To end the program)' },
  { name: 'Carson Sanderson', position: 'Director', vote: 'remove', label: 'Yes (To end the program)' },
  { name: 'Kimberlee Kelly', position: 'Director', vote: 'remove', label: 'Yes (To end the program)' },
  { name: 'Elisabeth Sotak', position: 'Director', vote: 'remove', label: 'Yes (To end the program)' },
]

export function VoteBreakdown() {
  return (
    <section id="vote" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Vote</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          On May 2026, the Northshore School Board voted <span className="text-red-vote font-bold">4-1</span> to 
          terminate the SRO contract. The position costs the district nothing — it's federally grant-funded.
        </p>
        <div className="grid gap-4">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                member.vote === 'remove'
                  ? 'border-red-vote/30 bg-red-vote/5'
                  : 'border-green-vote/30 bg-green-vote/5'
              }`}
            >
              <div>
                <p className="font-bold text-lg">{member.name}</p>
                <p className="text-sm text-slate-400">{member.position}</p>
              </div>
              <div className="flex items-center gap-2">
                {member.vote === 'remove' ? (
                  <ThumbsDown className="text-red-vote" size={20} />
                ) : (
                  <ThumbsUp className="text-green-vote" size={20} />
                )}
                <span className={`font-semibold text-sm ${
                  member.vote === 'remove' ? 'text-red-vote' : 'text-green-vote'
                }`}>
                  {member.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-6">
          Source: Northshore School Board meeting records, May 2026
        </p>
      </div>
    </section>
  )
}
