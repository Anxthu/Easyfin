import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function WhyChooseUs({ reasons, accentClass = "text-blue-500" }) {
  if (!reasons || reasons.length === 0) return null

  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center text-[#0B1120]">
        <SectionHeading title="Why Choose Us" />
        
        <div className="mt-16 text-left">
          <ul className="grid gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6"
              >
                <div className={`shrink-0 ${accentClass}`}>
                  <ArrowRight size={20} strokeWidth={2} />
                </div>
                <span className="text-[16px] font-medium text-slate-700">{reason}</span>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
