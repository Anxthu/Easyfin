import { useState, useEffect } from 'react'
import { companies } from '../data/content'
import FinanceHero from '../components/finance/FinanceHero'
import FinanceStory from '../components/finance/FinanceStory'
import FinanceServices from '../components/finance/FinanceServices'
import FinanceLoadingScreen from '../components/finance/FinanceLoadingScreen'

export default function Finance() {
  const [isLoading, setIsLoading] = useState(true)
  const c = companies.find((x) => x.id === 'finance')

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <FinanceLoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      <div className={`bg-[#020817] text-slate-900 font-sans antialiased ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <FinanceHero content={c} />
        <FinanceStory content={c} />
        <FinanceServices content={c.services} />
      </div>
    </>
  )
}
