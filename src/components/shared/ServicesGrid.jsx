import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function ServicesGrid({ title = "Services", subtitle, services, accentClass = "text-blue-600 bg-blue-50" }) {
  if (!services || services.length === 0) return null

  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title={title} description={subtitle} />
        
        <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-[24px] bg-white border border-slate-100 p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center size-12 rounded-xl mb-6 ${accentClass}`}>
                  <CheckCircle2 size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-normal text-[#0B1120] mb-3">{service.title}</h3>
                <p className="text-[14px] leading-[1.6] text-slate-500">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
