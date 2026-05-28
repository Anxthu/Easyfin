import { Coins, Building2, BadgeDollarSign } from 'lucide-react'
import { companies } from '../../data/content'
import SectionHeading from '../shared/SectionHeading'
import AnimatedSection from '../shared/AnimatedSection'

const serviceIcons = [Coins, Building2, BadgeDollarSign]

export default function FinanceServices() {
  const finance = companies.find((c) => c.id === 'finance')

  return (
    <>
      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                <span className="mr-3 inline-block h-px w-6 bg-blue-600/40 align-middle" />
                Our Story
              </p>
              <p className="font-display text-2xl leading-relaxed text-text/90 md:text-3xl">
                <span className="float-left mr-3 mt-1 font-display text-5xl font-bold leading-none text-blue-600 md:text-6xl">
                  {finance.story.charAt(0)}
                </span>
                {finance.story.slice(1)}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Services"
            title="Solutions built for speed and trust"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {finance.services.map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <article className="group rounded-2xl border border-border border-l-[3px] border-l-gold bg-bg p-8 transition-all duration-300 hover:shadow-card">
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
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
