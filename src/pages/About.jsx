import AboutGroup from '../components/home/AboutGroup'

export default function About() {
  return (
    <>
      {/* Title Header */}
      <section className="bg-white pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-[44px] sm:text-[56px] font-normal tracking-tight text-[#0B1120] leading-[1.08]">
            About Easyfin Group
          </h1>
        </div>
      </section>

      <AboutGroup />
    </>
  )
}
