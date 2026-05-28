import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, LineChart, Leaf, Building2 } from 'lucide-react'
import { companies, group } from '../../data/content'

const icons = {
  finance: LineChart,
  agro: Leaf,
  strategic: Building2,
}

const accentStyles = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:border-blue-200 hover:shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'hover:border-emerald-200 hover:shadow-emerald-900/5 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'hover:border-indigo-200 hover:shadow-indigo-900/5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2' },
}

export default function ThreePillars() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100 relative" id="pillars">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-4 sm:mb-6 block">
              Three Pillars of Easyfin Group
            </span>
            <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-semibold tracking-tight text-[#0B1120] leading-[1.1] mb-6 sm:mb-8">
              What We Do
            </h2>
            
            <blockquote className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-slate-500 font-medium italic mb-6 border-l-2 border-blue-600 pl-4 sm:pl-6">
              "{group.pillarsQuote}"
            </blockquote>
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-widest text-slate-400 pl-4 sm:pl-6">
              — Easyfin Group Leadership
            </p>
          </div>

          {/* Scrolling Right Column (Stacked Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-12 pt-8 lg:pt-0">
            {companies.map((company, index) => {
              const Icon = icons[company.id] || Building2
              const accent = accentStyles[company.accent] || accentStyles.blue
              
              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`group flex flex-col rounded-[24px] sm:rounded-[32px] bg-white border border-slate-100 p-8 sm:p-10 lg:p-14 shadow-sm transition-all duration-500 ${accent.hover} relative`}
                >
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <div className={`inline-flex items-center justify-center size-12 sm:size-14 rounded-2xl ${accent.bg} ${accent.text}`}>
                      <Icon size={24} aria-hidden="true" strokeWidth={1.5} className="sm:w-7 sm:h-7" />
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase ${accent.bg} ${accent.text}`}>
                      {company.sector}
                    </span>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold tracking-tight text-[#0B1120] mb-3 sm:mb-4">
                    {company.name}
                  </h3>
                  
                  <p className="text-[16px] sm:text-[18px] font-medium leading-[1.6] text-slate-700 mb-3 sm:mb-4">
                    {company.tagline}
                  </p>
                  
                  <p className="text-[15px] sm:text-[16px] leading-[1.75] text-slate-500 mb-8 sm:mb-10">
                    {company.pillarsDesc}
                  </p>

                  <div className="pt-6 sm:pt-8 border-t border-slate-100 mt-auto">
                    {/* Make the link stretch over the whole card pseudo-element for easier tapping, and add focus styles */}
                    <Link
                      to={company.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-[14px] sm:text-[15px] font-medium ${accent.text} transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:underline active:scale-[0.98] before:absolute before:inset-0`}
                    >
                      Explore {company.name.split(' ')[0]} {company.name.split(' ')[1]}
                      <ArrowRight size={18} aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
