import { Star, Crown, Gem, TreePine, Flower2, Home as HomeIcon } from 'lucide-react'
import { companies } from '../../data/content'
import SectionHeading from '../shared/SectionHeading'
import AnimatedSection from '../shared/AnimatedSection'

const careIcons = [Star, Crown, Gem]
const careTiers = ['silver', 'golden', 'platinum']
const careAccents = [
  'border-l-muted bg-bg',
  'border-l-gold bg-blue-50/50',
  'border-l-forest bg-emerald-50/50',
]

const initiativeIcons = [TreePine, Flower2, HomeIcon]

export default function AgroInitiatives() {
  const agro = companies.find((c) => c.id === 'agro')

  return (
    <>
      {/* Farm Care Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Farm Care Services"
            title="From essential support to premium care plans"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {agro.farmCare.map((item, i) => {
              const Icon = careIcons[i]
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <article
                    className={`rounded-2xl border border-border border-l-[3px] ${careAccents[i]} p-8 transition-all duration-300 hover:shadow-card`}
                  >
                    <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-surface text-muted">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                      {careTiers[i]} Tier
                    </p>
                    <h3 className="font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Initiatives"
            title="Projects creating measurable rural impact"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {agro.initiatives.map((item, i) => {
              const Icon = initiativeIcons[i]
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <article className="group rounded-2xl border border-border bg-bg p-8 transition-all duration-300 hover:shadow-card">
                    <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-200 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.desc}
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
