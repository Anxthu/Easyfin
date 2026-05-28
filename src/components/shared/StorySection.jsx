import SectionHeading from './SectionHeading'

export default function StorySection({ title = "Our Story", content }) {
  if (!content) return null

  return (
    <section id="story" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <SectionHeading title={title} align="left" />
          </div>
          <div className="prose prose-slate prose-lg max-w-none text-slate-500 text-[16px] leading-[1.8] font-normal">
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}
