import { motion } from 'framer-motion'
import { Calculator, FileSpreadsheet, SearchCheck, Workflow } from 'lucide-react'

export default function StrategicServices({ content }) {
  // Map icons to the 4 services
  const icons = [
    <Calculator className="text-violet-400" size={32} strokeWidth={1.5} />,
    <FileSpreadsheet className="text-indigo-400" size={32} strokeWidth={1.5} />,
    <SearchCheck className="text-fuchsia-400" size={32} strokeWidth={1.5} />,
    <Workflow className="text-blue-400" size={32} strokeWidth={1.5} />
  ]

  // Asymmetrical grid column spans for desktop (out of 12)
  const colSpans = [
    "lg:col-span-8", // 1. Tax
    "lg:col-span-4", // 2. Accounting
    "lg:col-span-5", // 3. Audits
    "lg:col-span-7"  // 4. Structuring
  ]

  // Different background subtle gradients for the bento boxes
  const bgGradients = [
    "bg-gradient-to-br from-white/[0.05] to-transparent",
    "bg-gradient-to-bl from-white/[0.05] to-transparent",
    "bg-gradient-to-tr from-white/[0.05] to-transparent",
    "bg-gradient-to-tl from-white/[0.05] to-transparent"
  ]

  return (
    <section id="services" className="relative py-32 bg-[#0a0a0f] border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="text-[12px] uppercase tracking-[0.4em] text-violet-500 font-semibold mb-6">
            Core Capabilities
          </span>
          <h2 className="text-[36px] sm:text-[44px] font-normal tracking-tight text-white leading-[1.1] max-w-2xl">
            Architecting financial resilience and compliance.
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {content.map((service, index) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative rounded-[2rem] border border-white/10 ${bgGradients[index]} backdrop-blur-sm p-8 lg:p-12 overflow-hidden flex flex-col h-full min-h-[320px] ${colSpans[index]}`}
            >
              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {icons[index]}
                </div>
                
                <h3 className="text-[24px] font-medium text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[16px] leading-[1.6] text-slate-400 font-light max-w-[90%]">
                  {service.desc}
                </p>
              </div>

              {/* Decorative abstract mesh in corners */}
              <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 transition-opacity duration-700 group-hover:opacity-40 ${
                index % 2 === 0 ? 'bg-violet-600' : 'bg-indigo-600'
              }`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
