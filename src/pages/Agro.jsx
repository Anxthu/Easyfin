import { companies, contact } from '../data/content'
import AgroHero from '../components/agro/AgroHero'
import AgroStory from '../components/agro/AgroStory'
import AgroFarmCare from '../components/agro/AgroFarmCare'
import AgroFarmCredit from '../components/agro/AgroFarmCredit'
import AgroProjects from '../components/agro/AgroProjects'

export default function Agro() {
  const c = companies.find((x) => x.id === 'agro')
  const contactInfo = contact.companies.find((x) => x.name === 'Easyfarm Agro Producer Company')

  return (
    <div className="bg-[#F8F9F5] text-[#283628] font-sans antialiased">
      <AgroHero />
      <AgroStory content={c} />
      <AgroFarmCare content={c.farmCare} />
      <AgroFarmCredit content={c.farmCredit} />
      <AgroProjects content={c} contactInfo={contactInfo} />
    </div>
  )
}
