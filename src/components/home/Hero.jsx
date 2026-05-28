import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { group } from '../../data/content'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const textContainerRef = useRef(null)
  const bottomElementsRef = useRef(null)

  useLayoutEffect(() => {
    let mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const words = textContainerRef.current.querySelectorAll('.hero-word')
      const tagline = textContainerRef.current.querySelector('.hero-tagline')
      
      const tl = gsap.timeline({ delay: 0.1 })

      // Animate the massive words
      tl.from(words, {
        y: '100%',
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      })
      
      // Animate the tagline
      tl.from(tagline, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.8")

      // Animate the bottom floating elements
      tl.from(bottomElementsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }, "-=0.6")

      return () => tl.kill()
    })
    
    return () => mm.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] w-full flex flex-col overflow-hidden bg-white"
    >
      {/* Generated 3D Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      />
      
      {/* Subtle fade overlay on the left to guarantee text readability against the image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:from-white/80 md:via-white/30" />

      {/* Top Spacer to account for Navbar */}
      <div className="pt-20 sm:pt-24 lg:pt-28 xl:pt-24" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex-grow flex flex-col justify-center">
        
        <div ref={textContainerRef} className="flex flex-col items-start max-w-4xl relative z-20">
          {/* Full sentence, resized to fit gracefully, with padding/negative-margin trick to prevent g/p cutoff */}
          <h1 className="flex flex-col font-semibold text-[#0B1120] tracking-[-0.04em] leading-[0.85] sm:leading-[0.85] mb-6 sm:mb-8">
            <div className="overflow-hidden pb-6 -mb-6 sm:pb-8 sm:-mb-8"><span className="hero-word block text-[56px] sm:text-[72px] md:text-[80px] lg:text-[80px] xl:text-[90px] 2xl:text-[120px]">a modern</span></div>
            <div className="overflow-hidden pb-6 -mb-6 sm:pb-8 sm:-mb-8"><span className="hero-word block text-[56px] sm:text-[72px] md:text-[80px] lg:text-[80px] xl:text-[90px] 2xl:text-[120px]">business group</span></div>
            <div className="overflow-hidden pb-6 -mb-6 sm:pb-8 sm:-mb-8"><span className="hero-word block text-[56px] sm:text-[72px] md:text-[80px] lg:text-[80px] xl:text-[90px] 2xl:text-[120px]">making a</span></div>
            <div className="overflow-hidden pb-6 -mb-6 sm:pb-8 sm:-mb-8"><span className="hero-word block text-[56px] sm:text-[72px] md:text-[80px] lg:text-[80px] xl:text-[90px] 2xl:text-[120px]">difference.</span></div>
          </h1>

          <p className="hero-tagline text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-slate-800 max-w-md font-medium">
            {group.tagline}
          </p>
        </div>

      </div>

      {/* Floating Bottom Elements - Changed from absolute to flex flow to prevent collisions on short screens */}
      <div 
        ref={bottomElementsRef}
        className="relative z-20 w-full px-4 sm:px-8 lg:px-12 pb-4 sm:pb-6 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mt-auto"
      >
        {/* Micro-typography Left */}
        <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#0B1120] opacity-80 hidden sm:block flex-1">
          Finance &bull; Agro &bull; Strategic
        </div>

        {/* Floating Dark Pill CTA */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#0B1120] px-8 sm:px-10 text-[14px] sm:text-[15px] font-medium text-white transition-all hover:bg-black hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 w-full sm:w-auto"
          >
            Get in Touch
          </Link>
        </div>

        {/* Micro-typography Right */}
        <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#0B1120] opacity-80 flex items-center justify-end gap-2 flex-1">
          Scroll to explore <ArrowRight size={14} className="rotate-90" />
        </div>
      </div>
      
    </section>
  )
}
