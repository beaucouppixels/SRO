import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { CheckCircle, XCircle } from 'lucide-react'
import { FadeIn } from './Animations'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Short labels for mobile display
const shortLabels = ['Safety', 'Climate', 'Educates', 'Counselor', 'Role Model']
const fullLabels = ['SRO promotes safety', 'SRO improves climate', 'SRO educates on laws', 'SRO is a good counselor', 'SRO is a positive role model']

// Responsive chart options helper
const getResponsiveOptions = (maxY = 100) => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      labels: {
        color: '#94a3b8',
        boxWidth: 12,
        padding: 8,
        font: { size: 11 },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: maxY,
      ticks: { color: '#94a3b8', font: { size: 11 } },
      grid: { color: '#ffffff10' },
    },
    x: {
      ticks: {
        color: '#94a3b8',
        font: { size: 10 },
        maxRotation: 45,
        minRotation: 0,
        callback: function (value: string | number, index: number) {
          // Use short labels on small screens
          if (typeof window !== 'undefined' && window.innerWidth < 640) {
            return shortLabels[index] || value
          }
          return fullLabels[index] || value
        },
      },
      grid: { color: '#ffffff10' },
    },
  },
})

const stakeholders = [
  { group: 'Students (survey 2024, N=786; survey 2026, N=235)', supported: true },
  { group: 'Parents (survey, N=447)', supported: true },
  { group: 'Faculty/Staff (survey, N=133)', supported: true },
  { group: 'Town Hall attendees (50 responses, all positive)', supported: true },
  { group: 'Principal Jensen (zero complaints received)', supported: true },
  { group: 'NSD Director of Research (Craig Foster, PhD)', supported: true },
  { group: 'Student Wellness & Safety Task Force (2022-23)', supported: true },
  { group: 'Community Petition (4,300+)', supported: true },
  { group: '100+ public commenters since 2022', supported: true },
  { group: 'School Board (4 of 5 members)', supported: false },
]

// Table 1: Frequency of Student Responses (May 2024, N=786)
// From Craig Foster PhD Annual Review - combining Agree + Strongly Agree
const surveyData = {
  labels: shortLabels,
  datasets: [
    {
      label: 'Agree + Strongly Agree (%)',
      data: [78.6, 65.4, 53.4, 68.4, 84.6], // Students: Agree + Strongly Agree from Table 1
      backgroundColor: '#d4a039',
      borderRadius: 6,
    },
    {
      label: 'Somewhat Agree (%)',
      data: [8.9, 13.2, 10.9, 9.5, 4.2],
      backgroundColor: '#38bdf8',
      borderRadius: 6,
    },
    {
      label: 'Disagree + Strongly Disagree (%)',
      data: [2.2, 3.6, 5.6, 2.7, 2.0], // Strongly Disagree + Disagree
      backgroundColor: '#dc2626',
      borderRadius: 6,
    },
  ],
}

// Parents (N=447) - Agree + Strongly Agree for each item
const parentStaffData = {
  labels: shortLabels,
  datasets: [
    {
      label: 'Parents (N=447) - Agree + Strongly Agree (%)',
      data: [89.0, 86.0, 76.5, 80.4, 89.1], // 12.5+76.5, 18.3+67.3, 49.0+27.5, 19.5+60.9, 9.2+79.9
      backgroundColor: '#d4a039',
      borderRadius: 6,
    },
    {
      label: 'Staff (N=133) - Agree + Strongly Agree (%)',
      data: [87.9, 85.2, 76.1, 88.7, 91.0], // 10.5+77.4, 9.8+75.2, 15.0+61.7 (wait, 15+61.7=76.7), 15.0+73.7, 6.0+85.0
      backgroundColor: '#16a34a',
      borderRadius: 6,
    },
  ],
}

// Table 3: By ethnicity - "Agree" + "Strongly Agree" for Safety (N=786 students)
const demographicLabelsShort = ['Asian', 'Black', 'Hispanic', 'White', 'Two+']
const demographicLabelsFull = ['Asian (N=122)', 'Black (N=31)', 'Hispanic/Latino (N=76)', 'White (N=422)', 'Two or More (N=98)']
const demographicData = {
  labels: demographicLabelsShort,
  datasets: [
    {
      label: 'Agree + Strongly Agree: SRO Promotes Safety (%)',
      data: [73.8, 73.1, 76.3, 79.2, 85.7], // Agree + Strongly Agree from Table 3
      backgroundColor: '#16a34a',
      borderRadius: 6,
    },
  ],
}

// Voting history
const votingHistory = [
  { date: 'June 2023', result: '4-0 (Approve)', yes: ['McGourty', 'Cogan', 'Cast', 'Hayes'], no: [], absent: ['Swain'] },
  { date: 'June 2024', result: '4-1 (Approve)', yes: ['Hayes', 'McGourty', 'Sotak', 'Cast'], no: ['Tran'], absent: [] },
  { date: 'June 2025', result: '3-2 (Approve)', yes: ['Hayes', 'Cast', 'McGourty'], no: ['Tran', 'Sotak'], absent: [] },
  { date: 'May 2026', result: '1-4 (Removed)', yes: ['Hayes'], no: ['Tran', 'Sotak', 'Sanderson', 'Kelly'], absent: [] },
]

export function DataIgnored() {
  return (
    <section id="data" className="py-20 px-4 bg-navy/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The Data They Ignored
        </h2>
        <p className="text-center text-slate-300 mb-4 max-w-2xl mx-auto">
          In May 2024, the district's own Director of Research surveyed 786 students, 447 parents, and 133 staff.
          The conclusion was unambiguous: strong support across all groups and demographics.
          The board overruled all of it.
        </p>
        <p className="text-center text-sm text-slate-500 mb-12">
          Source:{' '}
          <a
            href="https://resources.finalsite.net/images/v1716432406/nsdorg/ymu62qilgl00vwydhyz0/Report-2024-SROAnnualReview-Final-V2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            NSD SRO Program Annual Review Report, 6 May 2024 (PDF)
          </a>
          {' '}· Prepared by Craig A. Foster, PhD, Director of Research and Evaluation
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <FadeIn delay={0}>
            <div className="bg-navy-light rounded-xl p-5 text-center h-full flex flex-col justify-center">
              <p className="text-3xl font-extrabold text-gold">4,300+</p>
              <p className="text-slate-400 mt-1 text-sm">Petition signatures</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-navy-light rounded-xl p-5 text-center h-full flex flex-col justify-center">
              <p className="text-3xl font-extrabold text-gold">$0</p>
              <p className="text-slate-400 mt-1 text-sm">Cost to district</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-navy-light rounded-xl p-5 text-center h-full flex flex-col justify-center">
              <p className="text-3xl font-extrabold text-gold">0</p>
              <p className="text-slate-400 mt-1 text-sm">Student complaints</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-navy-light rounded-xl p-5 text-center h-full flex flex-col justify-center">
              <p className="text-3xl font-extrabold text-gold">100+</p>
              <p className="text-slate-400 mt-1 text-sm">Public commenters</p>
            </div>
          </FadeIn>
        </div>

        {/* Student Survey Chart - Table 1 */}
        <div className="bg-navy-light rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl mb-2">Student Survey Results (May 2024, N=786)</h3>
          <p className="text-sm text-slate-400 mb-4">
            45.2% response rate (786 of 1,739 students). Survey open April 18, 25, and May 2.
            Prepared by Craig A. Foster, PhD, Director of Research and Evaluation.
          </p>
          <Bar
            data={surveyData}
            options={getResponsiveOptions(100)}
          />
        </div>

        {/* Parent & Staff Chart */}
        <div className="bg-navy-light rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl mb-2">Parent and Staff Support (May 2024)</h3>
          <p className="text-sm text-slate-400 mb-4">
            Parents (N=447) and staff (N=133) reported even stronger support than students.
            "Students, parents, and faculty members reported strong support for the SRO program and for the current SRO."
          </p>
          <Bar
            data={parentStaffData}
            options={getResponsiveOptions(100)}
          />
        </div>

        {/* Demographic Breakdown Chart - Table 2 */}
        <div className="bg-navy-light rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl mb-2">Support by Student Ethnicity: SRO Promotes Safety</h3>
          <p className="text-sm text-slate-400 mb-4">
            "Student support did not vary detectably between relevant student groups" (Table 3, N=786)
          </p>
          <Bar
            data={demographicData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  labels: {
                    color: '#94a3b8',
                    boxWidth: 12,
                    padding: 8,
                    font: { size: 11 },
                  },
                },
                tooltip: {
                  callbacks: {
                    title: (items) => demographicLabelsFull[items[0].dataIndex] || items[0].label,
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: { color: '#94a3b8', font: { size: 11 } },
                  grid: { color: '#ffffff10' },
                },
                x: {
                  ticks: {
                    color: '#94a3b8',
                    font: { size: 10 },
                    maxRotation: 0,
                    minRotation: 0,
                  },
                  grid: { color: '#ffffff10' },
                },
              },
            }}
          />
          <p className="text-xs text-slate-500 mt-3 italic">
            Support is consistent across all ethnic groups. The elevated "strongly disagree" among Black students (6.5%, N=31) is based on two respondents; the report notes this makes the statistic "highly variable."
          </p>
        </div>

        {/* Stakeholder Support Matrix */}
        <div className="bg-navy-light rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl mb-4">Who Supported Keeping the SRO?</h3>
          <div className="grid gap-3">
            {stakeholders.map((s) => (
              <div key={s.group} className="flex items-center gap-3">
                {s.supported ? (
                  <CheckCircle className="text-green-vote shrink-0" size={20} />
                ) : (
                  <XCircle className="text-red-vote shrink-0" size={20} />
                )}
                <span className={`${s.supported ? 'text-slate-200' : 'text-red-vote font-semibold'}`}>
                  {s.group}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Voting History */}
        <div className="bg-navy-light rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl mb-4">Board Voting History - SRO Program</h3>
          <p className="text-sm text-slate-400 mb-4">
            The community has fought to keep the SRO since August 2022. Watch the erosion:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="py-2 pr-4 text-slate-400 font-medium">Date</th>
                  <th className="py-2 pr-4 text-slate-400 font-medium">Result</th>
                  <th className="py-2 pr-4 text-slate-400 font-medium">Yes (Keep)</th>
                  <th className="py-2 text-slate-400 font-medium">No (Remove)</th>
                </tr>
              </thead>
              <tbody>
                {votingHistory.map((v) => (
                  <tr key={v.date} className={`border-b border-white/5 ${v.date === 'May 2026' ? 'bg-red-vote/10' : ''}`}>
                    <td className="py-3 pr-4 font-medium">{v.date}</td>
                    <td className={`py-3 pr-4 font-bold ${v.date === 'May 2026' ? 'text-red-vote' : 'text-green-vote'}`}>
                      {v.result}
                    </td>
                    <td className="py-3 pr-4 text-green-vote">{v.yes.join(', ')}</td>
                    <td className="py-3 text-red-vote">{v.no.join(', ') || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3 italic">
            Note: Sanderson and Kelly joined the board after the Nov 2025 election and immediately voted to remove.
          </p>
        </div>

        {/* Additional Key Findings */}
        <div className="bg-navy-light rounded-xl p-6">
          <h3 className="font-bold text-xl mb-4">Key Findings from the 2024 Annual Review</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1 shrink-0">&#9679;</span>
              <span>"<strong>Students, parents, and faculty members reported strong support for the SRO program and for the current SRO.</strong>" (p.3)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1 shrink-0">&#9679;</span>
              <span>"The survey was in this respect a success. In particular, <strong>the student participation was strong enough to demonstrate that BHS students strongly support the SRO program across various student groups.</strong>" (p.9)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1 shrink-0">&#9679;</span>
              <span>Town hall: All 50 typed open-ended responses were <strong>consistently positive</strong>. "There were no concerns about the existing SRO program other than the program possibly being removed." (p.8)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1 shrink-0">&#9679;</span>
              <span>10 publicly shared comments at the town hall were <strong>uniformly supportive</strong>, including a community member identifying as Hispanic/Latino who stated "some people believe that the Hispanic or Latino community does not want an SRO and that this claim is not accurate." (p.8)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1 shrink-0">&#9679;</span>
              <span>Principal Jensen reported receiving <strong>zero student-driven complaints</strong> about the SRO program during the 2025-26 year</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1 shrink-0">&#9679;</span>
              <span>The NSD Student Wellness & Safety Task Force (Nov 2022 - June 2023) recommended <strong>maintaining the status quo</strong></span>
            </li>
          </ul>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          <a href="https://www.change.org/p/save-bothell-high-school-s-sro-program-with-officer-ware" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            Change.org Petition
          </a>
          {' '}·{' '}
          <a href="https://docs.google.com/document/d/10qpUE-TTXMbrffCUcDH5lCa7KhpvvNWidKe1w1zi-aY/edit" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            Public Comments Record
          </a>
        </p>
      </div>
    </section>
  )
}
