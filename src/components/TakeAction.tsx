import { ExternalLink } from 'lucide-react'

export function TakeAction() {
  return (
    <section id="action" className="py-20 px-4 bg-gradient-to-b from-navy/50 to-slate-bg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">🎯 Take Action</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          The vote is done. The community is not. Here's how you can make your voice heard.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <h3 className="font-bold text-lg mb-3 text-gold">Contact the Board</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Hân Trần (Vice President)</li>
              <li>• Carson Sanderson (Director)</li>
              <li>• Kimberlee Kelly (Director)</li>
              <li>• Elisabeth Sotak (Director)</li>
            </ul>
            <a
              href="https://www.nsd.org/school-board"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-gold text-sm hover:underline"
            >
              NSD Board Contact Page <ExternalLink size={14} />
            </a>
          </div>
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <h3 className="font-bold text-lg mb-3 text-gold">Attend Meetings</h3>
            <p className="text-sm text-slate-300 mb-3">
              Show up at Northshore School Board meetings. Public comment periods are your opportunity to be heard on record.
            </p>
            <a
              href="https://www.nsd.org/school-board/board-meetings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold text-sm hover:underline"
            >
              Meeting Schedule <ExternalLink size={14} />
            </a>
          </div>
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <h3 className="font-bold text-lg mb-3 text-gold">Share This Page</h3>
            <p className="text-sm text-slate-300">
              Share this information with other parents, students, and community members so they can see the full picture.
            </p>
          </div>
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <h3 className="font-bold text-lg mb-3 text-gold">Stay Informed</h3>
            <p className="text-sm text-slate-300">
              Follow local news coverage from KIRO 7 and KOMO News for updates on this story.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
