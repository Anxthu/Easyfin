import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const navConfigs = {
  '/finance': {
    name: 'Easyfin Finance',
    links: [
      { label: 'Our Story', href: '#story' },
      { label: 'Services', href: '#services' },
      { label: 'Get in Touch', href: '#contact' },
    ],
  },
  '/agro': {
    name: 'Easyfarm Agro',
    links: [
      { label: 'Our Story', href: '#story' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Internship', href: '#internship' },
      { label: 'Collaborate', href: '#collaborate' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  '/strategic': {
    name: 'Easyfin Strategic',
    links: [
      { label: 'Our Story', href: '#story' },
      { label: 'Services', href: '#services' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Internship', href: '#internship' },
      { label: 'Contact', href: '#contact' },
    ],
  },
}

export default function CompanyLayout() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const config = navConfigs[location.pathname] || { name: '', links: [] }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans text-text antialiased selection:bg-blue-200 bg-white">
      {/* Specialized Local Navbar */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 w-full"
        animate={{
          paddingTop: scrolled ? 12 : 32,
          paddingLeft: 16,
          paddingRight: 16,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.nav
          className="mx-auto flex max-w-[1280px] items-center justify-between"
          animate={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 9999,
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled
              ? '0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)'
              : '0 0px 0px rgba(0,0,0,0)',
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Back to main site */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="flex items-center justify-center size-8 rounded-full border border-slate-200 group-hover:bg-slate-50 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] font-medium tracking-tight text-slate-900 hidden sm:block">
              {config.name}
            </span>
          </Link>

          {/* Local Links */}
          <div className="hidden md:flex items-center gap-8">
            {config.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Spacer for centering */}
          <div className="hidden md:block w-[120px]"></div>
        </motion.nav>
      </motion.header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
