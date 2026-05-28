import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { group } from '../../data/content'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Reusable Accordion Item Component for High-End UX
function ValueAccordion({ value, index, isOpen, onToggle }) {
  const number = (index + 1).toString().padStart(2, '0')

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`value-content-${index}`}
        id={`value-header-${index}`}
        className="w-full py-8 sm:py-10 flex items-center justify-between text-left group focus-visible:outline-none focus-visible:bg-slate-50 transition-colors"
      >
        <div className="flex items-baseline gap-6 sm:gap-12">
          <span className="text-[16px] sm:text-[20px] font-medium text-slate-400 font-mono tracking-tighter">
            {number}
          </span>
          <h4 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold tracking-[-0.02em] text-[#0B1120] group-hover:text-blue-600 transition-colors">
            {value.title}
          </h4>
        </div>
        <div className="ml-6 flex-shrink-0 flex items-center justify-center size-10 rounded-full border border-slate-200 group-hover:border-blue-600 group-hover:bg-blue-50 transition-all text-slate-400 group-hover:text-blue-600">
          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`value-content-${index}`}
            role="region"
            aria-labelledby={`value-header-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[48px] sm:pl-[72px] lg:pl-[76px] pr-4 sm:pr-24">
              <p className="text-[16px] sm:text-[18px] leading-[1.7] text-slate-500 max-w-[65ch]">
                Our commitment to {value.title.toLowerCase()} is fundamental to how we operate, guiding our decisions and shaping our impact across all sectors.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AboutGroup() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0)
  const revealRef = useRef(null)

  // Split about text to isolate the first paragraph as a manifesto statement
  const aboutParagraphs = group.about.split('\n\n')
  const manifesto = aboutParagraphs[0]
  // Combine the rest into one large string for the cinematic reveal
  const fullText = aboutParagraphs.slice(1).join(' ')

  useEffect(() => {
    let mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const words = revealRef.current.querySelectorAll('.reveal-word')
      
      gsap.to(words, {
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1, // Smooth scrubbing
        },
        opacity: 1,
        stagger: 0.1,
        ease: "none"
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section className="bg-white py-32 lg:py-48" id="about">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Apple-Style Scroll Reveal "Who We Are" */}
        <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-24">
          <div className="flex flex-col items-center text-center">
            <span className="text-[13px] font-semibold tracking-widest uppercase text-blue-600 mb-8 block">
              Who We Are
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-[#0B1120] leading-[1.2]">
              {manifesto}
            </h2>
          </div>
          
          <div 
            ref={revealRef} 
            className="text-[24px] sm:text-[36px] lg:text-[48px] leading-[1.4] sm:leading-[1.4] text-[#0B1120] font-medium tracking-tight text-center max-w-5xl mx-auto"
          >
            {fullText.split(' ').map((word, i) => (
              <span key={i} className="reveal-word opacity-10 inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Editorial Vision & Mission (Pure Typography, No Cards) */}
        <div className="mt-32 border-t border-slate-200">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="py-16 lg:py-24 lg:pr-24 flex flex-col justify-start">
              <span className="text-[13px] font-semibold tracking-widest uppercase text-slate-400 mb-12 block">
                Our Vision
              </span>
              <p className="text-[20px] sm:text-[24px] font-medium leading-[1.6] text-[#0B1120] tracking-tight">
                {group.vision}
              </p>
            </div>

            <div className="py-16 lg:py-24 lg:pl-24 flex flex-col justify-start">
              <span className="text-[13px] font-semibold tracking-widest uppercase text-slate-400 mb-12 block">
                Our Mission
              </span>
              <div className="flex flex-col gap-8">
                {group.mission.split('\n\n').map((para, i) => (
                  <p key={i} className="text-[20px] sm:text-[24px] font-medium leading-[1.6] text-[#0B1120] tracking-tight">
                    {para}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Accordion - Core Values */}
        <div className="mt-16 pt-32 border-t border-slate-200" id="values">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-[13px] font-semibold tracking-widest uppercase text-blue-600 mb-6 block">
                Our Core Values
              </span>
              <h3 className="text-[40px] lg:text-[48px] font-semibold tracking-tight text-[#0B1120] leading-[1.1]">
                The principles driving our impact.
              </h3>
            </div>

            {/* Right Column: The Accordion */}
            <div className="lg:col-span-8 border-t border-slate-200">
              {group.values.map((value, index) => (
                <ValueAccordion
                  key={value.title}
                  value={value}
                  index={index}
                  isOpen={openAccordionIndex === index}
                  onToggle={() => setOpenAccordionIndex(index === openAccordionIndex ? -1 : index)}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
