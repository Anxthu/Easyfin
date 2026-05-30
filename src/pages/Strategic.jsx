import { useState, useEffect } from 'react'
import { companies } from '../data/content'
import StrategicLoadingScreen from '../components/strategic/StrategicLoadingScreen'
import StrategicHero from '../components/strategic/StrategicHero'
import StrategicStory from '../components/strategic/StrategicStory'
import StrategicServices from '../components/strategic/StrategicServices'

export default function Strategic() {
  const [isLoading, setIsLoading] = useState(true)
  const c = companies.find((x) => x.id === 'strategic')

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
        <StrategicLoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      <div className={`bg-[#0a0a0f] text-slate-100 font-sans antialiased ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <StrategicHero content={c} />
        <StrategicStory content={c} />
        <StrategicServices content={c.services} />
      </div>
    </>
  )
}
