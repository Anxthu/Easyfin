import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function StrategicLoadingScreen({ onComplete }) {
  const containerRef = useRef(null)
  const textContainerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 1. Simulate Loading Progress
    const duration = 1500
    const interval = 20
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setProgress(Math.min(Math.round((currentStep / steps) * 100), 100))

      if (currentStep >= steps) {
        clearInterval(timer)
        startExitAnimation()
      }
    }, interval)

    // 2. Exit Sequence (The Curtain Lift)
    const startExitAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        }
      })

      // Snap text out instantly
      tl.to(textContainerRef.current, {
        opacity: 0,
        duration: 0.1,
      })

      // Heavy curtain lift
      tl.to(containerRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: 'power4.inOut'
      }, "+=0.1")
    }

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#0a0a0f] flex items-center justify-center pointer-events-none"
    >
      <div 
        ref={textContainerRef}
        className="flex items-center gap-4 text-slate-400 font-mono text-[11px] uppercase tracking-[0.4em]"
      >
        <span>Strategic Division</span>
        <span className="text-slate-600">//</span>
        <span className="text-white tabular-nums w-8">{progress}%</span>
      </div>
    </div>
  )
}
