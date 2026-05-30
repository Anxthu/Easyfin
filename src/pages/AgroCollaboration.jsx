import { companies } from '../data/content'

export default function AgroCollaboration() {
  const c = companies.find((x) => x.id === 'agro')

  return (
    <div className="min-h-screen bg-[#F9FAF6] text-[#2C5E2E] font-sans antialiased pt-40 pb-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        
        {/* Editorial Header */}
        <div className="mb-24">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#2C5E2E]/50 font-bold mb-8 block font-['Helvetica',_Arial,_sans-serif]">
            Programs // Collaboration
          </span>
          <h1 className="text-[48px] lg:text-[80px] font-light text-[#2C5E2E] mb-8 leading-[1.1] tracking-tight max-w-4xl">
            Building sustainable ecosystems through strategic partnerships.
          </h1>
          <p className="text-[18px] leading-[1.8] text-[#2C5E2E]/80 font-normal max-w-2xl">
            {c.collaborate}
          </p>
        </div>

        {/* Editorial List */}
        <div className="flex flex-col w-full max-w-4xl border-t border-[#2C5E2E]/20 mb-12">
          {c.collaboratePartners.map((partner, i) => (
            <div 
              key={i} 
              className="py-6 lg:py-8 border-b border-[#2C5E2E]/20 flex items-center group cursor-pointer"
            >
              <span className="text-[14px] text-[#2C5E2E]/40 font-mono w-12 group-hover:text-[#2C5E2E] transition-colors">0{i+1}</span>
              <span className="text-[16px] lg:text-[20px] text-[#2C5E2E] font-medium tracking-wide">{partner}</span>
            </div>
          ))}
        </div>
        
        <p className="text-[16px] leading-[1.8] text-[#2C5E2E]/60 italic font-medium max-w-2xl mb-32">
          {c.collaborateClosing}
        </p>

        {/* CTA Footer for the Page */}
        <div className="pt-24 border-t border-[#2C5E2E]/10 flex flex-col items-start">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#2C5E2E]/50 font-bold mb-6 block font-['Helvetica',_Arial,_sans-serif]">
            Partner With Us
          </span>
          <h3 className="text-[32px] font-light text-[#2C5E2E] mb-8">
            Interested in creating impact together?
          </h3>
          <a 
            href="#contact"
            className="inline-flex items-center gap-4 border border-[#2C5E2E]/20 px-8 py-4 rounded-full text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-[#2C5E2E] hover:text-[#F9FAF6] transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </div>
  )
}
