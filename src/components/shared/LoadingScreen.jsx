import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null)
  const logoContainerRef = useRef(null)
  const logoRef = useRef(null)
  const maskRef = useRef(null)
  const textRef = useRef(null)
  
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Initial State
    gsap.set(logoContainerRef.current, { opacity: 0, y: 10 })
    gsap.set(textRef.current, { opacity: 0, y: 5 })

    // Fade container in
    gsap.to(logoContainerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out'
    })

    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.2,
      ease: 'power2.out'
    })

    // Loading Simulation
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100)
      setProgress(currentProgress)

      // Animate the reveal mask based on progress (bottom to top liquid fill effect)
      if (maskRef.current) {
        maskRef.current.style.transform = `translateY(${100 - currentProgress}%)`
      }

      if (currentStep >= steps) {
        clearInterval(timer)
        startExitAnimation()
      }
    }, interval)

    // Elegant Exit
    const startExitAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          if (onComplete) onComplete()
        }
      })

      // Slight flash of the logo to signify completion
      tl.to(logoRef.current, {
        filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(255,255,255,0.4))',
        duration: 0.4,
        ease: 'power2.out'
      })

      // Fade everything up and out smoothly
      tl.to([logoContainerRef.current, textRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.inOut',
        stagger: 0.1
      }, "+=0.2")

      // Slowly lift the navy curtain to reveal the site
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
      }, "-=0.4")
    }

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#0B1120] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center">
        
        {/* Logo Container */}
        <div ref={logoContainerRef} className="relative h-32 sm:h-40 mb-10 overflow-hidden">
          
          {/* Base Logo (Dimmed outline/watermark) */}
          <img 
            src="/logo.png" 
            alt="Easyfin" 
            className="h-full w-auto object-contain brightness-0 invert opacity-20"
          />

          {/* Reveal Mask (The bright version that fills up) */}
          <div 
            ref={maskRef}
            className="absolute inset-0 overflow-hidden"
            style={{ transform: 'translateY(100%)', transition: 'transform 20ms linear' }}
          >
            <img 
              src="/logo.png" 
              alt="Easyfin" 
              ref={logoRef}
              className="absolute bottom-0 left-0 h-32 sm:h-40 w-auto object-contain brightness-0 invert opacity-100"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}
            />
          </div>
        </div>

        {/* Minimalist Typography */}
        <div 
          ref={textRef}
          className="flex flex-col items-center gap-2 mt-6"
        >
          <span 
            className="text-white text-[20px] sm:text-[24px] tracking-[0.3em]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 500 }}
          >
            Easyfin Group
          </span>
        </div>

      </div>
    </div>
  )
}
