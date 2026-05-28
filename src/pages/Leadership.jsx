import { motion } from 'framer-motion'
import { leadership } from '../data/content'

export default function Leadership() {
  return (
    <>
      <section className="bg-white pb-8 pt-32 md:pt-40 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Our Team</span>
          <h1 className="text-[44px] sm:text-[56px] font-normal tracking-tight text-[#0B1120] leading-[1.08]">
            Leadership
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((lead, index) => (
              <motion.div
                key={lead.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-[24px] bg-white border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Name header block */}
                <div className="bg-[#0B1120] relative overflow-hidden px-8 py-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10" />
                  <div className="relative">
                    <h3 className="text-[24px] font-normal tracking-tight text-white">{lead.name}</h3>
                    <p className="text-[13px] text-slate-400 mt-1">{lead.role}</p>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium uppercase tracking-wider rounded-md mb-5 w-fit">
                    {lead.company}
                  </span>
                  <p className="text-[14px] leading-[1.7] text-slate-500">
                    {lead.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
