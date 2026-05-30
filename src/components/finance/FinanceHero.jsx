import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Clock, ShieldCheck, Zap } from 'lucide-react'

export default function FinanceHero({ content }) {
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

      // Trust Bar markers fade in
      gsap.fromTo('.trust-marker',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 1
        }
      )
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#020817]">
      {/* Dark Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center h-[120%] -top-[10%] opacity-60 mix-blend-screen"
          style={{ backgroundImage: "url('/finance_dark_bg.png')" }}
        />
        {/* Gradients for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/50 to-transparent z-10" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#020817]/90 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative z-20 h-full mx-auto max-w-[1280px] w-full flex flex-col justify-center px-6 pt-20">
        
        {/* Massive Typography */}
        <div className="relative z-10 max-w-[900px] mt-[-8vh]">
          <div className="hero-title-line flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-slate-400">
              Easyfin {content.sector} <span className="mx-2 text-slate-600">/</span> Licensed & Transparent
            </span>
          </div>

          <h1 
            className="text-[12vw] sm:text-[9vw] lg:text-[100px] font-medium tracking-tighter leading-[0.95] text-white"
            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            <div className="relative pb-2">
              <div className="hero-title-line text-white">Trust.</div>
            </div>
            <div className="relative pb-2">
              <div className="hero-title-line text-slate-300">Transparency.</div>
            </div>
            <div className="relative pb-2 flex flex-wrap gap-4 items-end">
              <div className="hero-title-line text-blue-500">Growth.</div>
            </div>
          </h1>
          
          <div className="hero-title-line mt-12 max-w-xl">
            <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
              {content.pillarsDesc}
            </p>
          </div>
        </div>

      </div>

      {/* Option 2: Anchored Trust Bar (Bottom of screen) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/5 bg-slate-900/40 backdrop-blur-md hidden sm:block">
        <div className="mx-auto max-w-[1280px] w-full px-6 py-5 lg:px-12 flex flex-wrap items-center justify-between gap-6">
          <div className="trust-marker flex items-center gap-3 text-slate-500">
            <Clock size={16} strokeWidth={2} />
            <span className="text-[13px] text-slate-300 font-mono tracking-wider uppercase">Est. 15+ Years</span>
          </div>
          <div className="trust-marker flex items-center gap-3 text-slate-500">
            <ShieldCheck size={16} strokeWidth={2} />
            <span className="text-[13px] text-slate-300 font-mono tracking-wider uppercase">Kerala Money Lending License</span>
          </div>
          <div className="trust-marker flex items-center gap-3 text-slate-500">
            <Zap size={16} strokeWidth={2} />
            <span className="text-[13px] text-slate-300 font-mono tracking-wider uppercase">Fast & Secure Approvals</span>
          </div>
        </div>
      </div>

    </section>
  )
}
