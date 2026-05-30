import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function AgroHero() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background parallax
      gsap.to('.hero-bg', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Title animation
      gsap.fromTo('.hero-title-line', 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: 'power4.out',
          delay: 0.2
        }
      )

      // Glass cards float in
      gsap.fromTo('.glass-card',
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          delay: 0.8
        }
      )

      // Floating animation loop for cards
      gsap.to('.glass-float', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      
      gsap.to('.glass-float-alt', {
        y: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      })
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#F9FAF6]">
      {/* Vibrant 3D Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center h-[120%] -top-[10%]"
          style={{ backgroundImage: "url('/hero_farm.jpg')" }}
        />
        {/* Top gradient for Nav Bar legibility */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#2C5E2E]/40 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-[1280px] w-full flex flex-col justify-center items-center px-6 pt-20">
        
        {/* Massive Typography */}
        <div className="relative text-center z-10 w-full max-w-[1200px]">
          <h1 
            className="text-[12vw] sm:text-[9vw] lg:text-[130px] font-medium tracking-tighter leading-[0.95] text-[#0A1F0C]"
            style={{ textShadow: '0 20px 40px rgba(255,255,255,0.6), 0 0 100px rgba(255,255,255,0.3)' }}
          >
            <div className="relative pb-2">
              <div className="hero-title-line">Intelligent</div>
            </div>
            <div className="relative pb-2">
              <div className="hero-title-line relative z-20">Agriculture.</div>
            </div>
            <div className="relative pb-2">
              <div className="hero-title-line text-[#0A1F0C]">Grown Better.</div>
            </div>
          </h1>
        </div>

        {/* Floating Glass Card (Top Right - Moved from center to prevent text collision) */}
        <div className="glass-card glass-float absolute top-[25%] right-6 sm:right-12 lg:right-24 w-[180px] sm:w-[220px] rounded-3xl bg-white/70 backdrop-blur-2xl border border-white shadow-[0_30px_60px_rgba(44,94,46,0.15)] p-5 flex flex-col items-center justify-center z-30 hidden md:flex">
          <div className="size-14 rounded-full bg-[#2C5E2E] flex items-center justify-center text-white mb-3 shadow-xl shadow-[#2C5E2E]/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#2C5E2E]/60 font-semibold text-center mb-1">Yield Increase</span>
          <span className="text-[32px] font-semibold text-[#2C5E2E] leading-none">+40%</span>
        </div>

        {/* Floating Glass Card (Bottom Left) */}
        <div className="glass-card glass-float-alt absolute bottom-[15%] left-1/2 -translate-x-1/2 sm:bottom-32 sm:left-12 sm:translate-x-0 lg:left-12 rounded-full bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_40px_rgba(44,94,46,0.15)] px-6 py-4 flex items-center gap-4 z-30 w-max max-w-[90vw]">
          <div className="size-10 rounded-full bg-[#2C5E2E] flex items-center justify-center text-white shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#2C5E2E]/60 mb-0.5">Integrated Approach</span>
            <span className="text-[13px] font-semibold text-[#2C5E2E]">FarmCare & FarmCredit</span>
          </div>
        </div>

        {/* Floating Glass Card (Bottom Right) */}
        <div className="glass-card glass-float hidden lg:flex absolute bottom-32 right-12 lg:right-12 w-[260px] rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-[0_30px_60px_rgba(44,94,46,0.2)] p-5 flex-col gap-4 z-30">
          <div className="w-full h-[120px] rounded-2xl overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800')] bg-cover bg-center"></div>
          </div>
          <p className="text-[13px] leading-relaxed text-[#2C5E2E] font-medium">
            Strengthen your farm's ecosystem with precision agriculture and expert advisory.
          </p>
        </div>

      </div>
    </section>
  )
}
