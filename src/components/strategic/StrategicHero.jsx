import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function StrategicHero({ content }) {
  const containerRef = useRef(null)
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background parallax
      gsap.to('.hero-bg-mesh', {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Title animation
      gsap.fromTo('.strat-title-line', 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power3.out',
          delay: 0.2
        }
      )

      // Slow floating orb animations for the mesh background
      gsap.to('.orb-1', {
        x: '10vw', y: '10vh', duration: 15, repeat: -1, yoyo: true, ease: 'sine.inOut'
      })
      gsap.to('.orb-2', {
        x: '-10vw', y: '-15vh', duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2
      })
      gsap.to('.orb-3', {
        x: '15vw', y: '-10vh', duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 5
      })

    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0a0f]">
      
      {/* Dynamic Mesh Gradient Background */}
      <div className="hero-bg-mesh absolute inset-0 overflow-hidden opacity-60">
        <div className="orb-1 absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/40 blur-[120px] mix-blend-screen" />
        <div className="orb-2 absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-900/30 blur-[150px] mix-blend-screen" />
        <div className="orb-3 absolute top-[40%] right-[40%] w-[40vw] h-[40vw] rounded-full bg-slate-800/50 blur-[100px] mix-blend-screen" />
      </div>

      {/* Dark fade at bottom to transition smoothly into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10" />

      <div className="relative z-20 h-full mx-auto max-w-[1280px] w-full flex flex-col justify-center px-6 pt-20">
        
        <div className="relative z-10 max-w-[1000px] mt-[-8vh]">
          
          {/* Editorial Eyebrow */}
          <div className="strat-title-line flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-violet-500/50" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-300/80">
              Easyfin {content.sector} <span className="mx-2 text-slate-700">/</span> B2B Consultancy
            </span>
          </div>

          {/* Typography */}
          <h1 
            className="text-[11vw] sm:text-[9vw] lg:text-[90px] font-medium tracking-tighter leading-[1] text-white mb-8"
          >
            <div className="overflow-hidden pb-2">
              <div className="strat-title-line text-white">Expertise.</div>
            </div>
            <div className="overflow-hidden pb-2">
              <div className="strat-title-line text-slate-400">Compliance.</div>
            </div>
            <div className="overflow-hidden pb-2">
              <div className="strat-title-line text-violet-400">Growth.</div>
            </div>
          </h1>
          
          <div className="overflow-hidden max-w-2xl">
            <p className="strat-title-line text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
              {content.tagline}. {content.pillarsDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
