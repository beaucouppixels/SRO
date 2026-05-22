import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero } from './components/Hero'
import { VoteBreakdown } from './components/VoteBreakdown'
import { DataIgnored } from './components/DataIgnored'
import { Quotes } from './components/Quotes'
import { Timeline } from './components/Timeline'
import { UnansweredQuestions } from './components/UnansweredQuestions'
import { WhatYouCanDo } from './components/WhatYouCanDo'
import { TakeAction } from './components/TakeAction'
import { Footer } from './components/Footer'
import { TabNav } from './components/TabNav'

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'vote', label: 'The Vote' },
  { id: 'data', label: 'The Data' },
  { id: 'quotes', label: 'In Their Words' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'questions', label: 'Questions' },
  { id: 'action', label: 'What You Can Do' },
]

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="min-h-full"
          >
            {activeTab === 'home' && <Hero />}
            {activeTab === 'vote' && <VoteBreakdown />}
            {activeTab === 'data' && <DataIgnored />}
            {activeTab === 'quotes' && <Quotes />}
            {activeTab === 'timeline' && <Timeline />}
            {activeTab === 'questions' && <UnansweredQuestions />}
            {activeTab === 'action' && (
              <>
                <WhatYouCanDo />
                <TakeAction />
              </>
            )}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  )
}

export default App
