import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import CompanyLayout from './components/layout/CompanyLayout'
import ScrollToTop from './components/shared/ScrollToTop'
import LoadingScreen from './components/shared/LoadingScreen'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Companies from './pages/Companies'
import Leadership from './pages/Leadership'
import Contact from './pages/Contact'

// Company Sub-Sites
import Finance from './pages/Finance'
import Agro from './pages/Agro'
import Strategic from './pages/Strategic'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* We render Router but hide it or let it render underneath the fixed loader */}
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.1s' }}>
        <Router>
          <ScrollToTop />
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
              <Route path="/strategic" element={<Strategic />} />
            </Route>
            
          </Routes>
        </Router>
      </div>
    </>
  )
}
