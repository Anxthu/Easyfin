import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Three Pillars', path: '/companies' },
    { name: 'Leadership', path: '/leadership' },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'pt-4 px-4 sm:px-6' : 'pt-6 px-6 lg:px-8'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'max-w-5xl bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-sm shadow-slate-200/20 rounded-full px-6 py-3' 
              : 'max-w-7xl bg-transparent px-0 py-2'
          }`}
        >
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-full"
            aria-label="Easyfin Group Home"
          >
            <img 
              src="/logo.png" 
              alt="Easyfin Group" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105 group-active:scale-95" 
            />
            <span className="font-medium text-[16px] tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Easyfin Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-full px-4 py-1.5 ${
                    isActive 
                      ? 'bg-blue-600/10 text-blue-600 border border-blue-600/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-sm'
                      : 'text-slate-600 hover:text-[#0B1120] hover:bg-slate-100/50 border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-[#0B1120] px-5 text-[13px] font-medium text-white transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-full active:scale-95 transition-transform"
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 z-[70] bg-white rounded-b-[32px] px-6 py-8 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-medium text-[15px] tracking-tight text-slate-900">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-full active:scale-95 transition-transform"
                  aria-label="Close mobile menu"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-[20px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl px-4 py-3 ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <div className="h-px w-full bg-slate-100 my-4" />
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center justify-between rounded-2xl bg-blue-600 px-6 text-[16px] font-medium text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Get in Touch
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
