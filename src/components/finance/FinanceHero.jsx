import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { companies } from '../../data/content'

export default function FinanceHero() {
  const content = companies.find((c) => c.id === 'finance')

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16">
      <div className="absolute inset-0 bg-blue-50/50" />
      
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-medium text-blue-700">
            {content.sector}
          </span>
          <h1 className="mt-8 text-[48px] sm:text-[64px] font-normal tracking-tight text-[#0B1120] leading-[1.05]">
            {content.tagline}
          </h1>
          <p className="mt-6 text-[16px] leading-[1.6] text-slate-500 max-w-2xl">
            {content.story}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#0B1120] px-8 text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Explore our services
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
