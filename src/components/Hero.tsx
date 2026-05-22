import officerWareImg from '../assets/officer-ware.jpg'
import { motion } from 'framer-motion'

export function Hero({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <section id="main-content" className="pt-28 pb-20 px-4 text-center bg-gradient-to-b from-navy to-slate-bg">
      <div className="max-w-4xl mx-auto">
        <motion.img
          src={officerWareImg}
          alt="Officer Garrett Ware, Bothell High School Resource Officer"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-gold/50 shadow-lg"
          loading="eager"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <motion.p
          className="text-gold uppercase tracking-widest text-sm mb-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Northshore School District · May 2026
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          4 Adults Overruled
          <br />
          <span className="text-gold">An Entire Community</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          The Northshore School Board voted 4-1 to remove Bothell High's School Resource Officer - 
          against the recommendation of their own evaluation, the principal, the faculty, the parents, 
          and 3,600+ students who signed a petition to keep him. The position costs the district nothing - it's federally grant-funded.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button onClick={() => onNavigate('data')} className="bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-gold-light transition cursor-pointer">
            See the Data
          </button>
          <button onClick={() => onNavigate('action')} className="border border-gold text-gold font-bold px-6 py-3 rounded-lg hover:bg-gold/10 transition cursor-pointer">
            Take Action
          </button>
        </motion.div>
      </div>
    </section>
  )
}
