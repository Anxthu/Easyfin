import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StrategicStory({ content }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade in paragraphs as they scroll into view
      gsap.utils.toArray('.story-para').forEach((para) => {
        gsap.fromTo(para, 
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: para,
              start: "top 80%",
            }
          }
        )
      })
      
      // Divider line expansion
      gsap.fromTo('.story-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: '.story-divider',
            start: "top 90%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="story" ref={containerRef} className="relative py-32 bg-[#0a0a0f] text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        
        {/* Animated Divider */}
        <div className="story-divider w-full h-px bg-white/10 origin-left mb-32" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <h2 className="text-[40px] sm:text-[56px] font-normal tracking-tight leading-[1.1] text-white mb-6">
              Empowering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Decision Makers.
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Over 10 years of specialized expertise in corporate finance and regulatory frameworks.
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-16 pt-4 lg:pt-0">
            {content.story.split('\n\n').map((para, index) => (
              <p 
                key={index} 
                className="story-para text-[20px] sm:text-[24px] leading-[1.6] text-slate-300 font-light"
              >
                {para}
              </p>
            ))}

            {/* Stats / Numbers Grid */}
            <div className="story-para grid grid-cols-2 gap-8 pt-12 border-t border-white/10 mt-8">
              <div>
                <div className="text-4xl sm:text-5xl font-light text-white mb-2 tabular-nums tracking-tighter">10+</div>
                <div className="text-sm text-slate-400 font-mono uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-light text-white mb-2 tabular-nums tracking-tighter">360°</div>
                <div className="text-sm text-slate-400 font-mono uppercase tracking-wider">Financial Strategy</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
