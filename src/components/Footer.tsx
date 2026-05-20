export function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-slate-500 mb-2">
          This site presents verified reporting from KIRO 7, KOMO News, and Northshore School District public records.
        </p>
        <p className="text-sm text-slate-500 mb-4">
          Sections marked as opinion/analysis are clearly labeled. All quotes are attributed to their sources.
        </p>
        <div className="flex justify-center gap-4 text-xs text-slate-600">
          <a
            href="https://mynorthwest.com/kiro-opinion/bothell-school-resource-officer-2/4239778"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            KIRO 7 Report
          </a>
          <span>·</span>
          <a
            href="https://resources.finalsite.net/images/v1716432406/nsdorg/ymu62qilgl00vwydhyz0/Report-2024-SROAnnualReview-Final-V2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            District SRO Evaluation (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
