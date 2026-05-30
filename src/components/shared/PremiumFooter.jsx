import { contact } from '../../data/content'
import { useLocation } from 'react-router-dom'

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  
  // Determine which company data to show based on the route
  let companyName = ''
  let watermarkText = ''
  let accentColor = 'text-[#D97706]'
  let accentHover = 'hover:text-[#F59E0B]'
  let bgOuter = 'bg-[#F9FAF6]'
  
  if (location.pathname.startsWith('/agro')) {
    companyName = 'Easyfarm Agro Producer Company'
    watermarkText = 'easyfarm'
    accentColor = 'text-[#D97706]'
    accentHover = 'hover:text-[#F59E0B]'
    bgOuter = 'bg-[#F9FAF6]'
  } else if (location.pathname.startsWith('/finance')) {
    companyName = 'Easyfin Finance'
    watermarkText = 'easyfin'
    accentColor = 'text-[#3B82F6]'
    accentHover = 'hover:text-[#60A5FA]'
    bgOuter = 'bg-slate-50' // Changed from bg-[#020817] to match the section above
  } else if (location.pathname.startsWith('/strategic')) {
    companyName = 'Easyfin Strategic Management Pvt Ltd'
    watermarkText = 'strategic'
    accentColor = 'text-[#818CF8]'
    accentHover = 'hover:text-[#A5B4FC]'
    bgOuter = 'bg-[#0a0a0f]'
  } else {
    return null // Fallback if not a company page
  }

  const contactInfo = contact.companies.find((x) => x.name === companyName)

  if (!contactInfo) return null

  return (
    <div id="contact" className={`${bgOuter} pt-8 lg:pt-12 pb-8 px-4 lg:px-8`}>
      <div className="relative overflow-hidden bg-[#1E1E1E] rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 flex flex-col min-h-[400px] lg:min-h-[500px]">
        
        {/* Corner Screws/Rivets */}
        <div className="absolute top-6 left-6 lg:top-8 lg:left-8 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 w-2 h-2 rounded-full bg-white/20 z-10" />
        <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 w-2 h-2 rounded-full bg-white/20 z-10" />

        {/* Top Content */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Left: Contacts */}
          <div className="flex flex-col max-w-sm">
            <h2 className="text-white text-3xl lg:text-4xl font-light mb-8">Start a Conversation</h2>
            
            <a 
              href={`mailto:${contactInfo.email}`} 
              className={`${accentColor} ${accentHover} transition-colors text-sm font-mono tracking-wide flex items-center gap-1 group w-fit mb-3`}
            >
              {contactInfo.email} 
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>

            <a 
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
              className="text-white/80 hover:text-white transition-colors text-sm font-mono tracking-wide flex items-center gap-1 group w-fit mb-8"
            >
              {contactInfo.phone}
            </a>

            <p className="text-white/40 text-sm leading-relaxed whitespace-pre-line">
              {contactInfo.address}
            </p>
          </div>

          {/* Right: Copyright & Socials */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <span className="text-white/40 text-sm font-light">
              © {currentYear} {companyName}
            </span>
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-white/80 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                Instagram <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 text-[10px]">↗</span>
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                LinkedIn <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 text-[10px]">↗</span>
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                Twitter <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 text-[10px]">↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Massive Background Watermark */}
        <div className="absolute bottom-[-10%] lg:bottom-[-20%] left-0 w-full flex justify-center items-end pointer-events-none select-none">
          <span className="text-[25vw] lg:text-[20vw] leading-none font-bold text-white/[0.03] tracking-tighter w-full text-center whitespace-nowrap">
            {watermarkText}
          </span>
        </div>

      </div>
    </div>
  )
}
