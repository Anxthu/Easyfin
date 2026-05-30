import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PremiumFooter from '../shared/PremiumFooter'
import MobileGlassMenu from './MobileGlassMenu'

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
      { label: 'Home', href: '/agro' },
      { label: 'Internship', href: '/agro/internship' },
      { label: 'Collaboration', href: '/agro/collaboration' },
    ],
  },
  '/strategic': {
    name: 'Easyfin Strategic',
    links: [
      { label: 'Our Story', href: '#story' },
      { label: 'Services', href: '#services' },
      { label: 'Get in Touch', href: '#contact' },
    ],
  },
}

export default function CompanyLayout() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  
  // Extract base path (e.g. '/agro/internship' -> '/agro') to correctly resolve nav configs for sub-pages
  const basePath = '/' + location.pathname.split('/')[1]
  const config = navConfigs[basePath] || { name: '', links: [] }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dynamic styling for routes with Dark Cinematic Hero sections
  const isDarkHero = location.pathname === '/agro' || location.pathname === '/finance' || location.pathname === '/strategic'
  const isTransparentDark = !scrolled && isDarkHero

  const navTextColor = isTransparentDark ? 'text-[#EEEDDD]/80' : 'text-slate-500'
  const navHoverColor = isTransparentDark ? 'hover:text-white' : 'hover:text-slate-900'
  const brandTextColor = isTransparentDark ? 'text-white' : 'text-slate-900'
  const backBtnBorder = isTransparentDark ? 'border-white/20' : 'border-slate-200'
  const backBtnHover = isTransparentDark ? 'group-hover:bg-white/10' : 'group-hover:bg-slate-50'
  const navBgColor = scrolled 
    ? 'rgba(255, 255, 255, 0.85)' 
    : (isDarkHero ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.6)')

  let bgOuter = 'bg-white'
  if (basePath === '/agro') bgOuter = 'bg-[#F9FAF6]'
  else if (basePath === '/finance') bgOuter = 'bg-slate-50'
  else if (basePath === '/strategic') bgOuter = 'bg-[#0a0a0f]'

  return (
    <div className={`flex min-h-screen flex-col font-sans text-text antialiased selection:bg-blue-200 ${bgOuter}`}>
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
            backgroundColor: navBgColor,
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled
              ? '0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)'
              : '0 0px 0px rgba(0,0,0,0)',
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Back to main site */}
          <Link to="/" className={`flex items-center gap-2.5 group shrink-0 ${brandTextColor} transition-colors duration-300`}>
            <div className={`flex items-center justify-center size-8 rounded-full border ${backBtnBorder} ${backBtnHover} transition-colors duration-300`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] font-medium tracking-tight">
              {config.name}
            </span>
          </Link>

          {/* Local Links */}
          <div className="hidden md:flex items-center gap-8">
            {config.links.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium ${navTextColor} ${navHoverColor} transition-colors duration-300 cursor-pointer`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[13px] font-medium ${navTextColor} ${navHoverColor} transition-colors duration-300 cursor-pointer`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Spacer for centering */}
          <div className="hidden md:block w-[120px]"></div>
        </motion.nav>
      </motion.header>

      {/* Render Mobile Bottom Menu */}
      <MobileGlassMenu config={config} />

      <main className="flex-1">
        <Outlet />
      </main>

      <PremiumFooter />
    </div>
  )
}
