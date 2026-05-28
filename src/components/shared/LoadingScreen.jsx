import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('easyfin_loaded')
    if (hasLoaded) {
      onComplete()
      return
    }

    let mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('easyfin_loaded', 'true')
          onComplete()
        }
      })

      tl.fromTo(textRef.current.children, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      )
      
      tl.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1, ease: "power3.inOut" },
        "-=0.4"
      )

      tl.to([textRef.current, lineRef.current], {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      }, "+=0.3")

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut"
      }, "-=0.2")

      return () => tl.kill()
    })

    // Skip animation entirely for reduced motion users
    mm.add("(prefers-reduced-motion: reduce)", () => {
      sessionStorage.setItem('easyfin_loaded', 'true')
      onComplete()
    })

    return () => mm.revert()
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 flex overflow-hidden pb-2"
        >
          {['E', 'a', 's', 'y', 'f', 'i', 'n'].map((char, index) => (
            <span key={index} className="inline-block opacity-0">{char}</span>
          ))}
        </h1>
        <div 
          ref={lineRef}
          className="w-full h-[2px] bg-blue-600 mt-4 scale-x-0"
        />
      </div>
    </div>
  )
}
