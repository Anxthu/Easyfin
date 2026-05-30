import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Three Pillars', path: '/companies' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative bg-[#0B1120] text-white pt-16 lg:pt-20 pb-6 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] mx-4 lg:mx-8 mb-4 lg:mx-8 mt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 flex flex-col h-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-md">
              <h2 className="text-[28px] sm:text-[36px] leading-[1.1] font-light tracking-tight mb-8">
                Growth is complicated.<br />
                Reaching us isn't.<br />
                <span className="text-white/60">Contact the Easyfin team anytime.</span>
              </h2>
              
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-[14px] font-semibold text-slate-900 transition-all hover:bg-slate-200 hover:scale-105 active:scale-95"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right Column: Massive Links */}
          <div className="flex flex-col w-full mt-8 lg:mt-0">
            <div className="border-t border-white/10" />
            {links.map((link, i) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center justify-between py-4 lg:py-5 transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl"
                >
                  <span className="text-[24px] sm:text-[32px] font-light tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  <ArrowRight className="text-white/0 group-hover:text-white/100 transition-all -translate-x-4 group-hover:translate-x-0" size={24} strokeWidth={1.5} />
                </Link>
                <div className="border-t border-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-auto gap-8 lg:gap-0">
          
          {/* Massive Logo Bottom Left (Inverted to White) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src="/logo.png" 
              alt="Easyfin Group" 
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain [filter:brightness(0)_invert(1)] opacity-90 -translate-y-6 lg:-translate-y-10"
            />
          </div>

          {/* Copyright and Socials */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-between lg:justify-end gap-6 text-[14px] text-white/50">
            <div className="flex items-center gap-6 font-medium uppercase tracking-wider text-[12px]">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
            
            <div className="flex items-center gap-4 text-center sm:text-right">
              <span>© {currentYear} Easyfin Group</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
