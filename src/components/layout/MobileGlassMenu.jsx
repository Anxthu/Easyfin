import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export default function MobileGlassMenu({ config }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  if (!config || !config.links || config.links.length === 0) return null

  return (
    <>
      {/* Floating Bottom Pill (Mobile Only) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] md:hidden">
        <div className="bg-black/40 backdrop-blur-2xl p-1.5 rounded-full flex items-center gap-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/20">
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-white text-black px-6 py-3 rounded-full text-[15px] font-semibold tracking-tight shadow-sm hover:scale-105 transition-transform"
          >
            Menu
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-white text-black size-[46px] rounded-full flex items-center justify-center text-2xl font-light shadow-sm hover:rotate-90 hover:scale-105 active:scale-90 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-3xl text-white flex flex-col md:hidden overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-lg font-medium">{config.name}</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col p-8 gap-8 flex-1 justify-center">
              {config.links.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.label}
                >
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-light tracking-tight hover:text-white/70 transition-colors block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-light tracking-tight hover:text-white/70 transition-colors block"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-white/10 text-white/50 text-sm">
              © {new Date().getFullYear()} {config.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
