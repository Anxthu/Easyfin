import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, TrendingUp, Landmark, ChevronDown } from 'lucide-react'

export default function FinanceServices({ content }) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Icon mapping for services
  const icons = [
    <Sparkles className="text-amber-500" size={24} strokeWidth={1.5} />,
    <TrendingUp className="text-blue-500" size={24} strokeWidth={1.5} />,
    <Landmark className="text-emerald-500" size={24} strokeWidth={1.5} />
  ]

  return (
    <section id="services" className="relative py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span className="text-[12px] uppercase tracking-[0.4em] text-blue-500 font-semibold mb-6">
            Financial Offerings
          </span>
          <h2 className="text-[36px] sm:text-[44px] font-normal tracking-tight text-slate-900 leading-[1.1] max-w-2xl">
            Reliable and responsible solutions for your future.
          </h2>
        </div>

        {/* Mobile Layout: Accordion (visible below lg) */}
        <div className="lg:hidden flex flex-col gap-4">
          {content.map((service, index) => {
            const isActive = activeIndex === index
            return (
              <div 
                key={service.title} 
                className={`flex flex-col rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isActive ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5' : 'bg-white border-slate-100'
                }`}
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-blue-50' : 'bg-slate-50'
                    }`}>
                      {icons[index % icons.length]}
                    </div>
                    <span className={`text-[18px] font-medium transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-8 pt-2">
                        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
                          {service.desc.split('\n\n').map((para, i) => (
                            <p key={i} className="text-[15px] leading-[1.6] text-slate-600">
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Desktop Layout: Split-Panel (visible lg and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          
          {/* Left: Navigation List */}
          <div className="col-span-5 flex flex-col gap-4 sticky top-40">
            {content.map((service, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left group flex items-center gap-6 p-6 rounded-3xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5' 
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-blue-50 scale-110' : 'bg-white border border-slate-100 group-hover:scale-105'
                  }`}>
                    {icons[index % icons.length]}
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-widest block mb-1">
                      0{index + 1}
                    </span>
                    <h3 className={`text-[20px] font-medium transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Detailed Content Display */}
          <div className="col-span-7 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeIndex !== -1 && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white border border-slate-100 rounded-[2.5rem] p-12 shadow-sm relative overflow-hidden"
                >
                  {/* Decorative background element */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    {content[activeIndex].desc.split('\n\n').map((para, i) => (
                      <p key={i} className="text-[17px] leading-[1.8] text-slate-600">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
