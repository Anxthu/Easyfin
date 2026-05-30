import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AgroProjects({ content, contactInfo }) {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal lines
      gsap.utils.toArray('.proj-line').forEach(line => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top bottom-=100",
          }
        })
      })

      // Reveal text blocks
      gsap.utils.toArray('.proj-text').forEach(text => {
        gsap.from(text, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top bottom-=50",
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative bg-[#F9FAF6] py-32 text-[#2C5E2E]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        
        {/* Projects */}
        <div className="mb-40">
          <span className="proj-text text-[12px] uppercase tracking-[0.4em] text-[#2C5E2E]/50 font-medium mb-12 block">
            Initiatives
          </span>
          <p className="proj-text text-[20px] lg:text-[28px] leading-[1.6] text-[#2C5E2E] font-light max-w-4xl mb-24">
            {content.projectsIntro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {/* Background Blob for Glassmorphism Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#2C5E2E]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            
            {content.projects.map((project, i) => {
              const images = [
                "/rubber.png",     // Rubber Mitra Project
                "/mushroom.png",   // Mushroom Livelihood Mission
                "/people.png"      // People Guild Credit
              ]

              return (
                <div 
                  key={i} 
                  className="group relative overflow-hidden h-[500px] rounded-[2rem] bg-gradient-to-br from-white to-[#F9FAF6] border border-white shadow-[0_30px_60px_rgba(20,50,25,0.08),_inset_0_4px_10px_rgba(255,255,255,1)] hover:shadow-[0_50px_100px_rgba(20,50,25,0.15),_inset_0_4px_10px_rgba(255,255,255,1)] hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                >
                  {/* Image Container */}
                  <div className="absolute inset-0 top-0 h-[380px] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={images[i]} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[10s] ease-out" 
                      alt={project.title} 
                    />
                    {/* Soft fade at the bottom of the image so the transition to the title block is seamless */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Title Area (always visible at bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[120px] flex items-center px-8 bg-white z-10 border-t border-[#2C5E2E]/5">
                    <h3 className="text-[22px] lg:text-[26px] font-bold text-[#2C5E2E] leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Sliding Glass Drawer for Description (The "White Box") */}
                  <div className="absolute inset-0 top-[100%] group-hover:top-0 bg-white/95 backdrop-blur-3xl z-20 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col p-10 border-t border-white/80 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[26px] font-bold text-[#2C5E2E] mb-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                      {project.title}
                    </h3>
                    <div className="w-12 h-[3px] bg-[#2C5E2E]/20 mb-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-150" />
                    <p className="text-[16px] leading-[1.8] text-[#2C5E2E]/90 font-medium overflow-y-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                      {project.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
