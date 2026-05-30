import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AgroStory({ content }) {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.story-bg', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // Reveal text
      gsap.from('.story-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=200",
        }
      })
      
      // Animate line
      gsap.from('.story-line', {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const paragraphs = content.story.split('\n\n')

  return (
    <section ref={containerRef} id="story" className="relative min-h-screen py-32 overflow-hidden bg-[#F9FAF6] rounded-t-[24px] sm:rounded-t-[32px] -mt-10 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Minimalist Title & Connecting Line */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start relative">
            <span className="story-text text-[12px] uppercase tracking-[0.4em] text-[#2C5E2E]/60 font-medium mb-12">
              Our Roots
            </span>
            <div className="hidden lg:block absolute left-4 top-24 bottom-[-100%] w-px bg-[#2C5E2E]/10 story-line" />
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-16 pt-8">
            <h2 className="story-text text-[36px] sm:text-[44px] lg:text-[56px] font-normal tracking-tight text-[#2C5E2E] leading-[1.1]">
              A heritage of cultivating the earth with respect, intelligence, and foresight.
            </h2>
            
            <div className="flex flex-col gap-8 max-w-2xl pl-0 lg:pl-12 border-l-0 lg:border-l border-[#2C5E2E]/10">
              {paragraphs.map((para, i) => (
                <p key={i} className="story-text text-[16px] sm:text-[18px] leading-[1.8] text-[#2C5E2E]/80 font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
