import { Hero } from './components/Hero'
import { VoteBreakdown } from './components/VoteBreakdown'
import { DataIgnored } from './components/DataIgnored'
import { Quotes } from './components/Quotes'
import { Timeline } from './components/Timeline'
import { UnansweredQuestions } from './components/UnansweredQuestions'
import { TakeAction } from './components/TakeAction'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <VoteBreakdown />
      <DataIgnored />
      <Quotes />
      <Timeline />
      <UnansweredQuestions />
      <TakeAction />
      <Footer />
    </div>
  )
}

export default App
