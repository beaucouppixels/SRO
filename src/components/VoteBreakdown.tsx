import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'
import sandyImg from '../assets/board/sandy-hayes.jpg'
import hanImg from '../assets/board/han-tran.jpg'
import carsonImg from '../assets/board/carson-sanderson.jpg'
import kimberleeImg from '../assets/board/kimberlee-kelly.jpg'
import elisabethImg from '../assets/board/elisabeth-sotak.jpg'

const boardMembers = [
  { name: 'Sandy Hayes', position: 'President', vote: 'keep', label: 'No (To keep the SRO)', photo: sandyImg, email: 'sbdistrict4@nsd.org' },
  { name: 'Hân Trần', position: 'Vice President', vote: 'remove', label: 'Yes (To end the program)', photo: hanImg, email: 'sbdistrict3@nsd.org' },
  { name: 'Carson Sanderson', position: 'Director', vote: 'remove', label: 'Yes (To end the program)', photo: carsonImg, email: 'sbdistrict1@nsd.org' },
  { name: 'Kimberlee Kelly', position: 'Director', vote: 'remove', label: 'Yes (To end the program)', photo: kimberleeImg, email: 'sbdistrict5@nsd.org' },
  { name: 'Elisabeth Sotak', position: 'Director', vote: 'remove', label: 'Yes (To end the program)', photo: elisabethImg, email: 'sbdistrict2@nsd.org' },
]

export function VoteBreakdown() {
  return (
    <section id="vote" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Vote</h2>
        <div className="grid gap-4">
          {boardMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                member.vote === 'remove'
                  ? 'border-red-vote/30 bg-red-vote/5'
                  : 'border-green-vote/30 bg-green-vote/5'
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-lg">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.position}</p>
                </div>
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
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-6">
          Source: Northshore School Board meeting records, May 2026
        </p>
      </div>
    </section>
  )
}
