import { ExternalLink, Signature, Mail, Calendar, Share2, Bell } from 'lucide-react'

export function TakeAction() {
  return (
    <section id="action" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Take Action Now</h2>
        <p className="text-center text-slate-300 mb-4 max-w-xl mx-auto">
          The vote is done. The community is not. Here's how you can make your voice heard.
        </p>
        <p className="text-center text-xs text-slate-500 mb-10 italic">
          Two of the four board members who voted to remove the SRO are up for re-election in 2027.
        </p>

        {/* Primary CTA - Sign Petition */}
        <div className="bg-gold/10 border-2 border-gold rounded-xl p-8 mb-10 text-center">
          <Signature className="text-gold mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-3">Sign the Petition</h3>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Over 4,300 community members have already signed. Add your name to show the board 
            that the community stands with Officer Ware and the SRO program.
          </p>
          <a
            href="https://www.change.org/p/save-bothell-high-school-s-sro-program-with-officer-ware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-lg hover:bg-gold/90 transition text-lg"
          >
            Sign the Petition <ExternalLink size={20} />
          </a>
          <p className="text-xs text-slate-500 mt-4">
            Change.org petition created by student Brady Minneman on May 11, 2026
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Mail className="text-gold mb-3" size={24} />
            <h3 className="font-bold text-lg mb-3">Contact the Board</h3>
            <p className="text-sm text-slate-400 mb-3">
              Email the board members who voted to remove the SRO. Be respectful but firm.
            </p>
            <ul className="space-y-2 text-sm text-slate-300 mb-4">
              <li>• <strong>Hân Trần</strong> - up for re-election 2027</li>
              <li>• <strong>Elisabeth Sotak</strong> - up for re-election 2027</li>
              <li>• <strong>Carson Sanderson</strong> - term ends 2029</li>
              <li>• <strong>Kimberlee Kelly</strong> - term ends 2029</li>
            </ul>
            <a
              href="https://www.nsd.org/our-district/leadership/school-board/meet-the-school-board"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold text-sm hover:underline"
            >
              Find Contact Info <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Calendar className="text-gold mb-3" size={24} />
            <h3 className="font-bold text-lg mb-3">Attend Board Meetings</h3>
            <p className="text-sm text-slate-300 mb-3">
              Show up. Be seen. Public comment periods are your opportunity to speak on record. 
              Bring friends and neighbors.
            </p>
            <p className="text-sm text-slate-400 mb-4">
              The board cannot ignore a room full of constituents meeting after meeting.
            </p>
            <a
              href="https://www.nsd.org/our-district/leadership/school-board/attend-a-school-board-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold text-sm hover:underline"
            >
              View Meeting Schedule <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Share2 className="text-gold mb-3" size={24} />
            <h3 className="font-bold text-lg mb-3">Share This Site</h3>
            <p className="text-sm text-slate-300 mb-4">
              Help other parents, students, and community members see the full picture. 
              The data speaks for itself - it just needs to be seen.
            </p>
            <button
              onClick={() => {
                const shareUrl = 'https://bit.ly/49byjOm'
                if (navigator.share) {
                  navigator.share({ 
                    title: 'Keep Our SRO - Bothell High School', 
                    text: 'The Northshore School Board voted 4-1 to remove Bothell High\'s SRO despite overwhelming community support. See the data they ignored.',
                    url: shareUrl 
                  })
                } else {
                  navigator.clipboard.writeText(shareUrl)
                  alert('Link copied to clipboard!')
                }
              }}
              className="inline-flex items-center gap-1 text-gold text-sm hover:underline cursor-pointer"
            >
              Share or Copy Link <ExternalLink size={14} />
            </button>
          </div>

          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Bell className="text-gold mb-3" size={24} />
            <h3 className="font-bold text-lg mb-3">Stay Informed</h3>
            <p className="text-sm text-slate-300 mb-3">
              Follow local news coverage for updates on this story and the community response.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://komonews.com/news/crisis-in-the-classroom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold text-sm hover:underline"
              >
                KOMO News <ExternalLink size={14} />
              </a>
              <a
                href="https://www.heraldnet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold text-sm hover:underline"
              >
                Everett Herald <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
