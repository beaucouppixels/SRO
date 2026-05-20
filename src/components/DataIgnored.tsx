import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'
import { CheckCircle, XCircle } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const stakeholders = [
  { group: 'Students (survey)', supported: true },
  { group: 'Parents (survey)', supported: true },
  { group: 'Faculty (survey)', supported: true },
  { group: 'Principal', supported: true },
  { group: 'District Officials', supported: true },
  { group: 'Community Petition (3,600+)', supported: true },
  { group: 'School Board (4 members)', supported: false },
]

export function DataIgnored() {
  // Placeholder chart data — replace with actual survey percentages from district PDF
  const chartData = {
    labels: ['Feel Safe\n"Frequently"', 'Feel Safe\n"Almost Always"', 'Support SRO\n(Parents)', 'Support SRO\n(Faculty)'],
    datasets: [
      {
        label: '% Positive',
        data: [null, null, null, null], // TODO: Fill from district evaluation PDF
        backgroundColor: '#d4a039',
        borderRadius: 6,
      },
    ],
  }

  const hasChartData = chartData.datasets[0].data.some(d => d !== null)

  return (
    <section id="data" className="py-20 px-4 bg-navy/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          📊 The Data They Ignored
        </h2>
        <p className="text-center text-slate-400 mb-4 max-w-2xl mx-auto">
          The district's own 2025-26 SRO Program Evaluation recommended continuing the program.
          Every stakeholder group supported it. The board overruled all of them.
        </p>
        <p className="text-center text-sm text-slate-500 mb-12">
          Source:{' '}
          <a
            href="https://resources.finalsite.net/images/v1716432406/nsdorg/ymu62qilgl00vwydhyz0/Report-2024-SROAnnualReview-Final-V2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Northshore SD SRO Annual Review (PDF)
          </a>
          {' '}· KOMO News reporting
        </p>

        {/* Stakeholder Support Matrix */}
        <div className="bg-navy-light rounded-xl p-6 mb-12">
          <h3 className="font-bold text-xl mb-4">Who Supported Keeping the SRO?</h3>
          <div className="grid gap-3">
            {stakeholders.map((s) => (
              <div key={s.group} className="flex items-center gap-3">
                {s.supported ? (
                  <CheckCircle className="text-green-vote shrink-0" size={22} />
                ) : (
                  <XCircle className="text-red-vote shrink-0" size={22} />
                )}
                <span className={`text-lg ${s.supported ? 'text-slate-200' : 'text-red-vote font-semibold'}`}>
                  {s.group}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-navy-light rounded-xl p-6 text-center">
            <p className="text-4xl font-extrabold text-gold">3,600+</p>
            <p className="text-slate-400 mt-2">Petition signatures to keep Officer Ware</p>
          </div>
          <div className="bg-navy-light rounded-xl p-6 text-center">
            <p className="text-4xl font-extrabold text-gold">$0</p>
            <p className="text-slate-400 mt-2">Cost to district (federally grant-funded)</p>
          </div>
          <div className="bg-navy-light rounded-xl p-6 text-center">
            <p className="text-4xl font-extrabold text-gold">~9 years</p>
            <p className="text-slate-400 mt-2">Officer Ware's tenure at Bothell High</p>
          </div>
        </div>

        {/* Chart placeholder */}
        {hasChartData ? (
          <div className="bg-navy-light rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Survey Results</h3>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                scales: {
                  y: { beginAtZero: true, max: 100, ticks: { color: '#94a3b8' } },
                  x: { ticks: { color: '#94a3b8' } },
                },
              }}
            />
          </div>
        ) : (
          <div className="bg-navy-light rounded-xl p-6 border border-dashed border-gold/30 text-center">
            <p className="text-gold font-semibold mb-2">📋 Survey Chart Placeholder</p>
            <p className="text-slate-400 text-sm">
              Exact percentages from the district's SRO Annual Review PDF will be added here.
              The review confirmed students feel safe "frequently" or "almost always" and 
              parents/faculty support the program.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
