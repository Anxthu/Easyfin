import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AgroFarmCare({ content }) {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to('.bark-bg', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // Animate intersecting circles
      gsap.from('.venn-circle', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.venn-container',
          start: "top center+=100",
        }
      })

      // Reveal features
      gsap.from('.feature-item', {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.features-container',
          start: "top center+=150",
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="farmcare" className="relative min-h-screen py-32 overflow-hidden bg-[#F9FAF6]">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        
        <div className="text-center mb-20 lg:mb-32">
          <span className="text-[12px] uppercase tracking-[0.4em] text-[#2C5E2E]/60 font-medium mb-6 block">
            FarmCare
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-normal tracking-tight text-[#2C5E2E] leading-[1.1] max-w-3xl mx-auto">
            {content.intro}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Features List with thin lines */}
          <div className="features-container flex flex-col gap-8">
            <h3 className="text-[14px] uppercase tracking-[0.3em] text-[#2C5E2E]/50 mb-4">Core Integrations</h3>
            {content.features.map((feature, i) => (
              <div key={i} className="feature-item relative pl-6 border-l border-[#2C5E2E]/10 group">
                <div className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-[#2C5E2E]/20 group-hover:bg-[#2C5E2E] transition-colors duration-500" />
                <p className="text-[16px] leading-[1.6] text-[#2C5E2E]/80 font-light">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Elegant Floating Circles for Plans */}
          <div className="relative h-[600px] sm:h-[700px] w-full">
            {/* Circle 1 */}
            <div className="absolute top-0 right-[20%] sm:right-[30%] size-[240px] sm:size-[280px] rounded-full border border-white/60 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-white to-[#F0F2EB] shadow-[0_30px_60px_rgba(20,50,25,0.15),_inset_0_4px_10px_rgba(255,255,255,1),_inset_0_-4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(20,50,25,0.2),_inset_0_4px_10px_rgba(255,255,255,1),_inset_0_-4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 z-10">
              <span className="text-[20px] text-[#2C5E2E] mb-3 font-medium">{content.plans[0].title}</span>
              <span className="text-[12px] text-[#2C5E2E]/70 leading-relaxed max-w-[180px]">{content.plans[0].desc}</span>
            </div>
            
            {/* Circle 2 */}
            <div className="absolute top-[30%] right-0 size-[240px] sm:size-[280px] rounded-full border border-white/60 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-white to-[#F0F2EB] shadow-[0_30px_60px_rgba(20,50,25,0.15),_inset_0_4px_10px_rgba(255,255,255,1),_inset_0_-4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(20,50,25,0.2),_inset_0_4px_10px_rgba(255,255,255,1),_inset_0_-4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 z-20">
              <span className="text-[20px] text-[#2C5E2E] mb-3 font-medium">{content.plans[1].title}</span>
              <span className="text-[12px] text-[#2C5E2E]/70 leading-relaxed max-w-[180px]">{content.plans[1].desc}</span>
            </div>
            
            {/* Circle 3 */}
            <div className="absolute top-[60%] right-[20%] sm:right-[30%] size-[260px] sm:size-[300px] rounded-full border border-white/60 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#2C5E2E] to-[#1A3A1C] shadow-[0_40px_70px_rgba(20,50,25,0.25),_inset_0_4px_10px_rgba(255,255,255,0.2),_inset_0_-4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_50px_90px_rgba(20,50,25,0.3),_inset_0_4px_10px_rgba(255,255,255,0.2),_inset_0_-4px_15px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 z-30">
              <span className="text-[22px] font-semibold text-white mb-3">{content.plans[2].title}</span>
              <span className="text-[12px] text-white/80 leading-relaxed max-w-[180px]">{content.plans[2].desc}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
