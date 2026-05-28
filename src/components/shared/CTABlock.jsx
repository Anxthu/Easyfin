import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function CTABlock({ id, title, content, buttonText = "Learn More", buttonHref = "#", dark = false }) {
  if (!content) return null

  return (
    <section id={id} className={`py-24 sm:py-32 ${dark ? 'bg-[#0B1120] text-white' : 'bg-slate-50'}`}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className={`text-[40px] font-normal tracking-tight mb-6 ${dark ? 'text-white' : 'text-[#0B1120]'}`}>
          {title}
        </h2>
        
        <p className={`mx-auto max-w-2xl text-[16px] leading-[1.6] font-normal mb-10 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {content}
        </p>

        <a
          href={buttonHref}
          className={`inline-flex h-12 w-fit items-center justify-center rounded-full px-8 text-[14px] font-medium transition-transform hover:scale-[1.02] ${
            dark 
              ? 'bg-white text-slate-900 hover:bg-slate-100' 
              : 'bg-slate-900 text-white hover:bg-black'
          }`}
        >
          {buttonText}
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </section>
  )
}
