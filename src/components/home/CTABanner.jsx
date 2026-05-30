import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="bg-[#0B1120] py-24 sm:py-32 lg:py-40 relative overflow-hidden px-4 sm:px-6 lg:px-8 mx-4 lg:mx-8 mb-8 mt-20 rounded-[2rem] lg:rounded-[2.5rem]">
      {/* Symmetrical, minimal glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-[12px] font-medium tracking-widest uppercase text-slate-300 mb-6 sm:mb-8 backdrop-blur-sm">
            Partner With Us
          </span>
          
          <h2 className="text-[36px] sm:text-[56px] lg:text-[72px] font-semibold tracking-[-0.03em] text-white leading-[1.1] sm:leading-[1.05] max-w-4xl px-2">
            Driving inclusive growth and lasting impact.
          </h2>

          <p className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-slate-400 max-w-2xl font-medium px-4">
            Join individuals, farmers, and businesses growing with Easyfin Group's integrated solutions.
          </p>

          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="group inline-flex w-full sm:w-auto h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-[15px] font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] active:scale-95"
            >
              Get in Touch
              <ArrowRight size={18} aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/companies"
              className="inline-flex w-full sm:w-auto h-14 items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 text-[15px] font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] active:scale-95"
            >
              Explore Our Divisions
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
