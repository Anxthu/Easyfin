import { Sprout, Wheat, Users, Banknote, Tractor } from 'lucide-react'
import { companies } from '../../data/content'
import SectionHeading from '../shared/SectionHeading'
import AnimatedSection from '../shared/AnimatedSection'

const creditIcons = [Sprout, Wheat, Users, Banknote, Tractor]

export default function AgroServices() {
  const agro = companies.find((c) => c.id === 'agro')

  return (
    <>
      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                <span className="mr-3 inline-block h-px w-6 bg-emerald-600/40 align-middle" />
                Our Story
              </p>
              <p className="font-display text-2xl leading-relaxed text-text/90 md:text-3xl">
                <span className="float-left mr-3 mt-1 font-display text-5xl font-bold leading-none text-emerald-600 md:text-6xl">
                  {agro.story.charAt(0)}
                </span>
                {agro.story.slice(1)}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Farm Credit Services */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Farm Credit Services"
            title="Credit lines crafted for farming realities"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {agro.farmCredit.map((service, i) => {
              const Icon = creditIcons[i] || Sprout
              return (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <article className="rounded-2xl border border-border border-l-[3px] border-l-forest bg-bg p-7 transition-all duration-300 hover:shadow-card">
                    <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.desc}
                    </p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
