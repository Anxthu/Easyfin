import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AgroFarmCredit({ content }) {
  const containerRef = useRef(null)
  const pathRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.soil-bg', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // Draw SVG Path
      const pathLength = pathRef.current.getTotalLength()
      gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength })
      
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      })

      // Reveal nodes and text
      gsap.utils.toArray('.credit-node').forEach((node, i) => {
        gsap.from(node, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: node,
            start: "top center+=100",
          }
        })
      })

      gsap.utils.toArray('.credit-text').forEach((text, i) => {
        gsap.from(text, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top center+=100",
          }
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="credit" className="relative min-h-[120vh] py-32 overflow-hidden bg-[#F9FAF6]">

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        
        <div className="text-center mb-24 lg:mb-40">
          <span className="text-[12px] uppercase tracking-[0.4em] text-[#2C5E2E]/60 font-medium mb-6 block font-['Helvetica',_Arial,_sans-serif]">
            FarmCredit
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold tracking-tight text-[#2C5E2E] leading-[1.1] font-['Helvetica',_Arial,_sans-serif]">
            Financial Growth Path
          </h2>
        </div>

        {/* Roadmap Container */}
        <div className="relative max-w-5xl mx-auto h-[2000px] hidden md:block mt-12">
          {/* Curved SVG Road */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1600" preserveAspectRatio="none">
            <path 
              ref={pathRef}
              d="M 500 0 C 500 160, 200 160, 200 320 C 200 480, 800 480, 800 640 C 800 800, 200 800, 200 960 C 200 1120, 800 1120, 800 1280 C 800 1440, 500 1440, 500 1600" 
              fill="none" 
              stroke="#2C5E2E" 
              strokeOpacity="0.1"
              strokeWidth="2"
            />
          </svg>

          {/* Nodes (Manually positioned exactly on the curve apexes) */}
          {content.map((service, index) => {
            // Nodes mapped perfectly to the mathematical apex of the 4 SVG curves
            const refined = [
              { top: '20%', left: '20%', textStyle: { left: '45%', top: '15%', textAlign: 'left', width: '400px' } },  // Node 1: Left Curve Apex
              { top: '40%', left: '80%', textStyle: { right: '45%', top: '35%', textAlign: 'right', width: '400px' } }, // Node 2: Right Curve Apex
              { top: '60%', left: '20%', textStyle: { left: '45%', top: '55%', textAlign: 'left', width: '400px' } },  // Node 3: Left Curve Apex
              { top: '80%', left: '80%', textStyle: { right: '45%', top: '75%', textAlign: 'right', width: '400px' } }, // Node 4: Right Curve Apex
            ]

            const pos = refined[index % refined.length]

            return (
              <div key={service.title}>
                {/* Node Dot */}
                <div 
                  className="credit-node absolute size-4 rounded-full bg-[#2C5E2E] shadow-[0_0_20px_rgba(44,94,46,0.1)] transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ top: pos.top, left: pos.left }}
                />
                <div 
                  className="credit-node absolute size-12 rounded-full border border-[#2C5E2E]/20 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#2C5E2E]/5 backdrop-blur-sm"
                  style={{ top: pos.top, left: pos.left }}
                />

                {/* Text Block */}
                <div 
                  className="credit-text absolute z-30"
                  style={pos.textStyle}
                >
                  <span className="text-[16px] font-bold text-[#2C5E2E] mb-2 block leading-none font-['Helvetica',_Arial,_sans-serif]">0{index + 1}.</span>
                  <h3 className="text-[24px] font-bold text-[#2C5E2E] mb-3 font-['Helvetica',_Arial,_sans-serif]">{service.title}</h3>
                  <p className="text-[16px] leading-[1.8] text-[#2C5E2E] font-medium font-['Helvetica',_Arial,_sans-serif]">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Fallback (Simple Vertical Line) */}
        <div className="md:hidden flex flex-col gap-16 relative pl-6 border-l border-[#2C5E2E]/10 mt-12">
          {content.map((service, index) => (
            <div key={service.title} className="credit-text relative">
              <div className="absolute -left-[31px] top-6 size-3 rounded-full bg-[#2C5E2E] shadow-[0_0_15px_rgba(44,94,46,0.1)] credit-node" />
              <span className="text-[16px] font-bold text-[#2C5E2E] mb-2 block leading-none font-['Helvetica',_Arial,_sans-serif]">0{index + 1}.</span>
              <h3 className="text-[22px] font-bold text-[#2C5E2E] mb-3 font-['Helvetica',_Arial,_sans-serif]">{service.title}</h3>
              <p className="text-[16px] leading-[1.8] text-[#2C5E2E] font-medium font-['Helvetica',_Arial,_sans-serif]">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
