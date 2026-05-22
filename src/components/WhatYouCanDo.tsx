import { Scale, FileText, Megaphone, Vote, Users, AlertTriangle, ExternalLink, CheckCircle } from 'lucide-react'

export function WhatYouCanDo() {
  return (
    <section id="strategy" className="py-20 px-4 bg-navy/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Long-Term Strategy
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Accountability doesn't end at the board meeting. Washington law 
          provides multiple paths forward.
        </p>

        {/* Key Insight - up top */}
        <div className="mb-10 bg-gold/10 border border-gold/30 rounded-xl p-6 text-center">
          <CheckCircle className="text-gold mx-auto mb-3" size={28} />
          <p className="text-lg font-semibold text-gold mb-2">The Most Effective Path Forward</p>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Build the narrative. Centralize the evidence. Show the disconnect. Sustain public attention. 
            Then channel that into the <strong>2027 elections</strong> where two of the four "no" votes 
            (Trần and Sotak) are on the ballot.
          </p>
        </div>

        {/* Alternative Strategies - FIRST */}
        <h3 className="text-2xl font-bold text-center mb-6">
          Strategies That Work
        </h3>
        <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto text-sm">
          A data-driven transparency campaign may be more effective than a recall attempt. 
          The San Francisco school board recalls succeeded because organizers built a narrative, 
          centralized evidence, showed disconnect from community priorities, and sustained attention for months.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Organize for Elections */}
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Vote className="text-gold mb-3" size={24} />
            <h4 className="font-bold text-lg mb-2">Organize for 2027 Elections</h4>
            <p className="text-sm text-slate-400 mb-3">
              School board races are low-turnout and highly influenceable by organized local groups.
            </p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• <strong>Elisabeth Sotak</strong> (District 2) - term expires <strong className="text-gold">2027</strong></li>
              <li>• <strong>Hân Trần</strong> (District 3) - term expires <strong className="text-gold">2027</strong></li>
              <li>• Carson Sanderson (District 1) - term expires 2029</li>
              <li>• Kimberlee Kelly (District 5) - term expires 2029</li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">
              Two of the four votes to remove are up in 2027. That's next year.
            </p>
          </div>

          {/* Public Records Requests */}
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <FileText className="text-gold mb-3" size={24} />
            <h4 className="font-bold text-lg mb-2">Public Records Requests</h4>
            <p className="text-sm text-slate-400 mb-3">
              Washington's Public Records Act gives you the right to request government documents. Look for:
            </p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Internal emails about the SRO decision</li>
              <li>• Survey data discussions</li>
              <li>• Safety data and incident reports</li>
              <li>• Communications with advocacy groups</li>
              <li>• Communications with district counsel</li>
              <li>• Communications with city officials/police</li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">
              This can uncover procedural or transparency problems that strengthen other efforts.
            </p>
          </div>

          {/* Media Pressure */}
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Megaphone className="text-gold mb-3" size={24} />
            <h4 className="font-bold text-lg mb-2">Sustained Media Pressure</h4>
            <p className="text-sm text-slate-400 mb-3">
              You already have public sentiment, anecdotal evidence, and news coverage. Keep building:
            </p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Share this site widely</li>
              <li>• Write letters to editors (KIRO, KOMO, Seattle Times, Herald)</li>
              <li>• Attend every board meeting with cameras</li>
              <li>• Document everything publicly</li>
              <li>• Keep the story in the news cycle</li>
            </ul>
          </div>

          {/* No Confidence / OPMA */}
          <div className="bg-navy-light rounded-xl p-6 border border-white/5">
            <Users className="text-gold mb-3" size={24} />
            <h4 className="font-bold text-lg mb-2">Political Pressure Campaigns</h4>
            <p className="text-sm text-slate-400 mb-3">
              While not legally binding, these create significant political pressure:
            </p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Parent association "no confidence" votes</li>
              <li>• Teacher union resolutions</li>
              <li>• Student government statements</li>
              <li>• City council statements</li>
              <li>• Community referendums</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-sm font-semibold text-amber-300 mb-1">OPMA Complaints</p>
              <p className="text-xs text-slate-400">
                If decisions were coordinated privately outside legal meetings, that's an 
                Open Public Meetings Act violation - a serious legal matter in Washington.
              </p>
            </div>
          </div>
        </div>

        {/* Recall Section - LAST */}
        <div className="bg-navy-light rounded-xl p-8 border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="text-gold" size={28} />
            <h3 className="text-2xl font-bold">The Harder Path: Recall Election</h3>
          </div>
          <p className="text-slate-300 mb-6">
            In Washington, the primary legal mechanism to remove an elected school board member 
            before their term ends is a <strong>recall election</strong>. However, Washington has 
            one of the strictest recall standards in the country.
          </p>

          <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <AlertTriangle className="text-amber-400 shrink-0 mt-1" size={18} />
              <p className="text-amber-200 text-sm">
                <strong>Important:</strong> You cannot legally recall officials simply because you disagree 
                with their policy vote. Courts generally reject recalls based only on political disagreement.
              </p>
            </div>
          </div>

          <h4 className="font-bold text-lg text-gold mb-3">The recall must allege specific wrongdoing:</h4>
          <ul className="space-y-2 text-slate-300 mb-6 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span> Malfeasance or misfeasance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span> Violation of oath of office
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span> Violating state law or mandatory procedures
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span> Knowingly withholding required public information
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span> Open Public Meetings Act violations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span> Abuse of authority or failure to perform legally required duties
            </li>
          </ul>

          <h4 className="font-bold text-lg text-gold mb-4">How a School Board Recall Works in WA:</h4>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <p className="font-semibold">File a recall charge</p>
                <p className="text-sm text-slate-400">A registered voter files formal allegations including the official's name, office, factual allegations, and supporting evidence. (RCW 29A.56.110)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <p className="font-semibold">Court review (before signatures)</p>
                <p className="text-sm text-slate-400">A judge reviews whether allegations are legally sufficient, factually sufficient, and specific enough. Most WA recalls fail at this stage.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <p className="font-semibold">Signature gathering</p>
                <p className="text-sm text-slate-400">If the court approves, petitioners must gather signatures equal to <strong>35% of votes cast for that office</strong> in the previous election. This is a very high threshold.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <p className="font-semibold">Recall election</p>
                <p className="text-sm text-slate-400">If enough verified signatures are gathered, a special election is scheduled. A majority vote removes the official from office.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <a href="https://app.leg.wa.gov/rcw/default.aspx?cite=29A.56" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gold hover:underline">
              RCW 29A.56 (Recall Law) <ExternalLink size={12} />
            </a>
            <a href="https://www.law.uw.edu/news-events/news/2020/legal-tips-recalling-elected-officials/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gold hover:underline">
              UW Law: Recalling Officials <ExternalLink size={12} />
            </a>
            <a href="https://ballotpedia.org/Laws_governing_recall_in_Washington" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gold hover:underline">
              Ballotpedia: WA Recall Laws <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
