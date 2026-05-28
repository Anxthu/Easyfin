import { ArrowRight, Mail } from 'lucide-react'
import Button from './Button'

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Sleek background coordinate structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-100_1px,transparent_1px),linear-gradient(to_bottom,#slate-100_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03]"></div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center size-16 rounded-3xl bg-slate-50 border border-slate-100 mb-8 shadow-sm">
          <Mail size={24} className="text-slate-700" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-[36px] sm:text-[48px] font-normal tracking-tight text-[#0B1120] leading-[1.1]">
          Ready to elevate your <br className="hidden sm:block" />
          corporate strategy?
        </h2>
        
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] text-slate-500">
          Connect with our advisory board to discover how Easyfin Group can accelerate your growth across global markets.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/contact" variant="primary" className="w-full sm:w-auto !rounded-full !px-8">
            Get in touch <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button to="/companies" variant="secondary" className="w-full sm:w-auto !rounded-full !px-8 !border-slate-200">
            View our divisions
          </Button>
        </div>
      </div>
    </section>
  )
}
