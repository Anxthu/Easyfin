import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import { leadership } from '../../data/content'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function LeadershipPreview() {
  const previewLeaders = leadership.filter((l) => l.featured).slice(0, 3)

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Our Team"
            title="Leadership Excellence"
            description="Meet the visionaries driving innovation across our global network."
          />
          <Link
            to="/leadership"
            className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-slate-900 px-6 text-[13px] font-medium text-white transition-all hover:bg-black hover:scale-[1.02]"
          >
            Meet the full team
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {previewLeaders.map((lead) => (
            <motion.div
              key={lead.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group flex flex-col rounded-[24px] bg-white border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Photo placeholder area */}
              <div className="h-48 w-full bg-[#0B1120] relative overflow-hidden flex flex-col justify-end p-6">
                 {/* Decorative visual instead of gray box */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                 <div className="relative z-20">
                   <h3 className="text-[24px] font-normal tracking-tight text-white">{lead.name}</h3>
                   <p className="text-[13px] text-slate-300 mt-1">{lead.role}</p>
                 </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium uppercase tracking-wider rounded-md mb-4">
                    {lead.company}
                  </span>
                  <p className="text-[14px] leading-[1.6] text-slate-500 line-clamp-3">
                    {lead.bio}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a href={lead.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                    <ArrowUpRight size={18} />
                  </a>
                  <span className="text-[12px] font-medium text-slate-400 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                    View Profile <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
