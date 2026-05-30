import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, LineChart, Leaf, Building2 } from 'lucide-react'
import { companies } from '../data/content'

const icons = {
  finance: LineChart,
  agro: Leaf,
  strategic: Building2,
}

const accentStyles = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
}

export default function Companies() {
  return (
    <>
      <section className="bg-white pb-8 pt-32 md:pt-40 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Three Pillars</span>
          <h1 className="text-[44px] sm:text-[56px] font-normal tracking-tight text-[#0B1120] leading-[1.08]">
            Our Divisions
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {companies.map((company, index) => {
              const Icon = icons[company.id] || Building2
              const accent = accentStyles[company.accent] || accentStyles.blue
              const bgImage = `url('/${company.id}_light_bg.png')`
              
              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col rounded-[24px] border border-slate-100 p-8 sm:p-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden min-h-[400px]"
                >
                  {/* High-Key Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: bgImage }}
                  />
                  {/* Light Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/20 transition-opacity duration-700 group-hover:opacity-90" />

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`inline-flex items-center justify-center size-12 rounded-xl backdrop-blur-md shadow-sm border border-white/50 ${accent.bg} ${accent.text}`}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-wide uppercase backdrop-blur-md shadow-sm border border-white/50 ${accent.bg} ${accent.text}`}>
                      {company.sector}
                    </span>
                  </div>

                  <h3 className="text-[22px] font-normal tracking-tight text-[#0B1120] mb-2 relative z-10 mt-auto">
                    {company.name}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-slate-600 mb-2 relative z-10">
                    {company.tagline}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-slate-500 mb-8 relative z-10">
                    {company.pillarsDesc}
                  </p>

                  <div className="pt-6 border-t border-slate-200 mt-auto relative z-10">
                    <Link
                      to={company.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-[14px] font-medium ${accent.text} hover:opacity-80 transition-opacity before:absolute before:inset-0 focus-visible:outline-none focus-visible:underline`}
                    >
                      Explore Division
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
