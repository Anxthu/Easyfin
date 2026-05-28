import { TrendingUp, Briefcase, Target, PiggyBank } from 'lucide-react'
import { companies } from '../../data/content'
import SectionHeading from '../shared/SectionHeading'
import AnimatedSection from '../shared/AnimatedSection'

const serviceIcons = [TrendingUp, Briefcase, Target, PiggyBank]

export default function StrategicServices() {
  const strategic = companies.find((c) => c.id === 'strategic')

  return (
    <>
      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                <span className="mr-3 inline-block h-px w-6 bg-indigo-600/40 align-middle" />
                Our Story
              </p>
              <p className="font-display text-2xl leading-relaxed text-text/90 md:text-3xl">
                <span className="float-left mr-3 mt-1 font-display text-5xl font-bold leading-none text-indigo-600 md:text-6xl">
                  {strategic.story.charAt(0)}
                </span>
                {strategic.story.slice(1)}
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
            title="Consulting frameworks that become real execution plans"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {strategic.services.map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <article className="group rounded-2xl border border-border border-l-[3px] border-l-navy bg-bg p-8 transition-all duration-300 hover:shadow-card">
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:bg-indigo-600 group-hover:text-white">
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
