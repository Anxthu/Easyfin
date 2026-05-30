import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import CompanyLayout from './components/layout/CompanyLayout'
import ScrollToTop from './components/shared/ScrollToTop'
import LoadingScreen from './components/shared/LoadingScreen'
import AgroLoadingScreen from './components/shared/AgroLoadingScreen'
import StrategicLoadingScreen from './components/strategic/StrategicLoadingScreen'
import FinanceLoadingScreen from './components/finance/FinanceLoadingScreen'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Companies from './pages/Companies'
import Leadership from './pages/Leadership'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Company Sub-Sites
import Finance from './pages/Finance'
import Agro from './pages/Agro'
import AgroInternship from './pages/AgroInternship'
import AgroCollaboration from './pages/AgroCollaboration'
import Strategic from './pages/Strategic'
import ScrollToTopButton from './components/layout/ScrollToTopButton'

// Helper to set title
function RouteMeta() {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    let title = "Easyfin Group of Companies";
    if (path.startsWith('/agro')) title = "Easyfarm Agro | Easyfin Group";
    if (path.startsWith('/finance')) title = "Easyfin Finance | Easyfin Group";
    if (path.startsWith('/strategic')) title = "Easyfin Strategic | Easyfin Group";
    if (path === '/about') title = "About Us | Easyfin Group";
    if (path === '/companies') title = "Three Pillars | Easyfin Group";
    if (path === '/leadership') title = "Leadership | Easyfin Group";
    if (path === '/contact') title = "Contact Us | Easyfin Group";
    document.title = title;
  }, [location]);
  return null;
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Check native browser path to determine which loading screen to show on initial load
  const isAgroPath = window.location.pathname === '/agro' || window.location.pathname.startsWith('/agro/')
  const isStrategicPath = window.location.pathname === '/strategic' || window.location.pathname.startsWith('/strategic/')
  const isFinancePath = window.location.pathname === '/finance' || window.location.pathname.startsWith('/finance/')

  const renderLoader = () => {
    if (isAgroPath) return <AgroLoadingScreen onComplete={() => setIsLoaded(true)} />
    if (isStrategicPath) return <StrategicLoadingScreen onComplete={() => setIsLoaded(true)} />
    if (isFinancePath) return <FinanceLoadingScreen onComplete={() => setIsLoaded(true)} />
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />
  }

  return (
    <>
      {!isLoaded && renderLoader()}
      
      {/* We render Router but hide it or let it render underneath the fixed loader */}
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.1s' }}>
        <Router>
          <RouteMeta />
          <ScrollToTop />
          <ScrollToTopButton />
          <Routes>
            
            {/* Global Site Layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Specialized Company Sub-Sites Layout */}
            <Route element={<CompanyLayout />}>
              <Route path="/finance" element={<Finance />} />
              <Route path="/agro" element={<Agro />} />
              <Route path="/agro/internship" element={<AgroInternship />} />
              <Route path="/agro/collaboration" element={<AgroCollaboration />} />
              <Route path="/strategic" element={<Strategic />} />
            </Route>
            
            {/* 404 Catch All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
