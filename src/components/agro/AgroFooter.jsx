export default function AgroFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-[#F9FAF6] pb-8 px-4 lg:px-8">
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
              href="mailto:easyfarmagro@gmail.com" 
              className="text-[#D97706] hover:text-[#F59E0B] transition-colors text-sm font-mono tracking-wide flex items-center gap-1 group w-fit mb-3"
            >
              easyfarmagro@gmail.com 
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>

            <a 
              href="tel:+916235416189" 
              className="text-white/80 hover:text-white transition-colors text-sm font-mono tracking-wide flex items-center gap-1 group w-fit mb-8"
            >
              +91 6235416189
            </a>

            <p className="text-white/40 text-sm leading-relaxed">
              Registered office at Porloth building,<br />
              Kalpetta north,<br />
              Wayanad, 673122
            </p>
          </div>

          {/* Right: Copyright & Socials */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <span className="text-white/40 text-sm font-light">
              © {currentYear} Easyfarm Agro
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
          <span className="text-[28vw] lg:text-[22vw] leading-none font-bold text-white/[0.03] tracking-tighter w-full text-center whitespace-nowrap">
            easyfarm
          </span>
        </div>

      </div>
    </div>
  )
}
