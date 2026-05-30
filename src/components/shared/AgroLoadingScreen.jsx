import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AgroLoadingScreen({ onComplete }) {
  const containerRef = useRef(null)
  const pillRef = useRef(null)
  const leftCapRef = useRef(null)
  const rightCapRef = useRef(null)
  const glassRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        onComplete()
      }
    })

    // Initial setup
    gsap.set(containerRef.current, { opacity: 1, backgroundColor: '#FAFAFA' })
    gsap.set(pillRef.current, { scale: 0.8, opacity: 0, y: 20 })
    gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 10 })
    gsap.set(imageRef.current, { scale: 1.4 })

    // Gently float the entire pill
    gsap.to(pillRef.current, {
      y: '-=15',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Animation Sequence
    // 1. Intro fade in
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
    .to(pillRef.current, { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' }, "-=0.6")
    .to(textRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.8")
    
    // 2. Subtle parallax of the image inside the glass to create depth
    .to(imageRef.current, { scale: 1.1, duration: 2.5, ease: 'sine.inOut' }, "-=1")

    // Wait a moment for admiration
    .to({}, { duration: 0.5 })

    // 3. Professional Outro Transition (No massive zoom)
    .to([logoRef.current, textRef.current], { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' })
    .to(leftCapRef.current, { x: -80, opacity: 0, duration: 1, ease: 'power3.inOut' }, "-=0.2")
    .to(rightCapRef.current, { x: 80, opacity: 0, duration: 1, ease: 'power3.inOut' }, "<")
    .to(glassRef.current, { scale: 1.2, opacity: 0, duration: 0.8, filter: 'blur(10px)', ease: 'power2.out' }, "-=0.6")
    
    // 4. Fade out the container to reveal the site seamlessly
    .to(containerRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, "-=0.4")

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center w-full h-full pointer-events-auto"
    >
      {/* Top Logo */}
      <div ref={logoRef} className="relative z-20 flex items-center gap-3 mb-24 drop-shadow-xl">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2C5E2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
        <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">EASYFARM</span>
      </div>

      {/* 3D Glass Capsule Pill */}
      <div ref={pillRef} className="relative z-10 w-[280px] h-[90px] sm:w-[320px] sm:h-[100px] flex justify-center items-center mb-24 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-white border border-black/5">
        
        {/* Massive Drop Shadows for Base */}
        <div className="absolute -bottom-14 w-[240px] h-[20px] bg-black/15 blur-2xl rounded-full" />
        <div className="absolute -bottom-6 w-[180px] h-[15px] bg-black/20 blur-xl rounded-full" />

        {/* The Capsule Structure */}
        <div className="w-full h-full rounded-full flex overflow-hidden relative shadow-[inset_0_2px_4px_rgba(255,255,255,1)] z-10 bg-white">
          
          {/* Left Cap - Solid White Plastic */}
          <div ref={leftCapRef} className="w-[30%] h-full relative bg-gradient-to-br from-white via-gray-100 to-gray-200 z-20 shadow-[4px_0_15px_rgba(0,0,0,0.2)] border-r border-black/5">
            <div className="absolute top-[10%] left-[20%] w-[40%] h-[20%] bg-white rounded-full blur-[3px] opacity-100" />
            <div className="absolute bottom-[10%] left-[20%] w-[50%] h-[15%] bg-gray-400 rounded-full blur-[5px] opacity-30" />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent opacity-80" />
          </div>

          {/* Center - Transparent Glass with vibrant image */}
          <div ref={glassRef} className="w-[40%] h-full relative z-10 overflow-hidden bg-white/20 border-y border-white/50">
            {/* Vibrant agricultural image inside */}
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
              <img 
                src="/farm_capsule_interior.png" 
                className="w-full h-full object-cover" 
                alt="vibrant agriculture" 
              />
            </div>
            
            {/* Glass reflections over the image */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/40 mix-blend-overlay" />
            <div className="absolute top-[5%] left-[5%] right-[5%] h-[25%] bg-gradient-to-b from-white/90 to-transparent rounded-full blur-[2px]" />
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Inner shadows for glass thickness */}
            <div className="absolute inset-0 shadow-[inset_0_5px_15px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>

          {/* Right Cap - Dark Green Plastic */}
          <div ref={rightCapRef} className="w-[30%] h-full relative bg-gradient-to-br from-[#2C5E2E] via-[#1B3B1C] to-[#0A1A0B] z-20 shadow-[-4px_0_15px_rgba(0,0,0,0.4)] border-l border-black/20">
            <div className="absolute top-[10%] right-[20%] w-[40%] h-[20%] bg-[#81C784] rounded-full blur-[3px] opacity-60" />
            <div className="absolute bottom-[10%] right-[20%] w-[50%] h-[15%] bg-black rounded-full blur-[5px] opacity-70" />
            <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent opacity-30" />
          </div>

        </div>
      </div>

      {/* Loading Text */}
      <div ref={textRef} className="relative z-20 text-[#888888] font-medium tracking-wide text-sm drop-shadow-sm">
        Loading your experience...
      </div>
    </div>
  )
}
