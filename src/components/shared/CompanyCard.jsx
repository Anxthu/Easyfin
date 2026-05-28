import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Leaf, LineChart } from 'lucide-react'

const icons = {
  finance: LineChart,
  agro: Leaf,
  strategic: Building2,
}

const colorMap = {
  blue: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  emerald: { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  indigo: { iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600' }
}

export default function CompanyCard({ company, delay = 0 }) {
  const IconComponent = icons[company.id] || Building2
  const c = colorMap[company.accent] || colorMap.blue

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="group flex h-full flex-col relative overflow-hidden rounded-[24px] bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300"
    >
      <div className="flex flex-1 flex-col p-8 sm:p-10">
        
        {/* Header (Icon + Sector) */}
        <div className="mb-6 flex items-center justify-between">
          <div className={`flex items-center justify-center size-12 rounded-2xl ${c.iconBg} ${c.iconColor}`}>
             <IconComponent size={24} strokeWidth={1.5} />
          </div>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-wide uppercase ${c.iconBg} ${c.iconColor}`}>
            {company.sector}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-[24px] md:text-[28px] font-normal tracking-tight text-[#0B1120] mb-3">
          {company.name}
        </h3>
        <p className="flex-1 text-[15px] leading-[1.6] text-slate-500">
          {company.story}
        </p>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link
            to={company.route}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-[14px] font-medium ${c.iconColor} hover:opacity-80 transition-opacity`}
          >
            Explore Division
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
      </div>
    </motion.div>
  )
}
