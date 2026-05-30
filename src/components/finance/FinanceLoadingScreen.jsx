import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function FinanceLoadingScreen({ onComplete }) {
  const containerRef = useRef(null)
  const ringRef = useRef(null)
  const textRef = useRef(null)
  const bgRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 1. Simulate Loading Progress
    const duration = 2000 // 2 seconds of loading
    const interval = 20
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100)
      setProgress(newProgress)

      if (currentStep >= steps) {
        clearInterval(timer)
        startExitAnimation()
      }
    }, interval)

    // 2. Initial Spinning Animation
    gsap.to(ringRef.current, {
      rotateY: 360,
      rotateX: 15,
      duration: 3,
      repeat: -1,
      ease: "linear",
    })

    // 3. The Cinematic Exit Sequence (The Dive)
    const startExitAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        }
      })

      // Fade out the text
      tl.to(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power2.inOut'
      })
      
      // Stop the continuous spin and face forward
      tl.to(ringRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, "<")

      // Massive Dive (Scale the ring up hugely so the camera goes "through" it)
      tl.to(ringRef.current, {
        scale: 25,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.inOut'
      }, "+=0.1")

      // Fade out the dark background completely to reveal the site underneath
      tl.to(bgRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      }, "-=0.6")
    }

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Dark Void Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[#020817]"
      />
      
      {/* The Golden Ring */}
      <div 
        ref={ringRef}
        className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[12px] sm:border-[16px] border-amber-500/80 shadow-[0_0_80px_rgba(245,158,11,0.4),inset_0_0_40px_rgba(245,158,11,0.4)] flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Inner frosted glass pane */}
        <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md" />
        {/* Outer glowing rim */}
        <div className="absolute -inset-[12px] sm:-inset-[16px] rounded-full border border-amber-300/30 blur-sm" />
      </div>

      {/* Loading Text */}
      <div 
        ref={textRef}
        className="relative z-20 mt-16 flex flex-col items-center gap-3"
      >
        <span className="text-amber-500 font-mono text-sm uppercase tracking-[0.4em] font-semibold">
          Loading
        </span>
        <div className="text-white font-light text-5xl tabular-nums tracking-tighter">
          {progress}%
        </div>
      </div>
    </div>
  )
}
