import { motion } from 'framer-motion'
import { companies, contact } from '../data/content'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Finance() {
  const c = companies.find((x) => x.id === 'finance')
  const contactInfo = contact.companies.find((x) => x.name === 'Easyfin Finance')

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 bg-blue-50/40" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-medium text-blue-700 mb-8">
              {c.sector}
            </span>
            <h1 className="text-[44px] sm:text-[56px] font-normal tracking-tight text-[#0B1120] leading-[1.08]">
              {c.tagline}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="bg-white py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Our Story</span>
              <h2 className="text-[36px] sm:text-[44px] font-normal tracking-tight text-[#0B1120] leading-[1.1]">
                {c.name}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {c.story.split('\n\n').map((para, i) => (
                <p key={i} className="text-[16px] leading-[1.75] text-slate-500">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Services</span>
          <h2 className="text-[36px] sm:text-[44px] font-normal tracking-tight text-[#0B1120] leading-[1.1] mb-16">
            What We Offer
          </h2>
          <div className="flex flex-col gap-8">
            {c.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[24px] bg-white border border-slate-100 p-8 sm:p-10 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[13px] font-mono text-slate-300 mt-1 shrink-0">0{index + 1}</span>
                  <div>
                    <h3 className="text-[22px] font-normal text-[#0B1120] mb-4">{service.title}</h3>
                    <div className="flex flex-col gap-3">
                      {service.desc.split('\n\n').map((para, i) => (
                        <p key={i} className="text-[15px] leading-[1.7] text-slate-500">{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section id="contact" className="bg-white py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Get in Touch</span>
          <h2 className="text-[36px] sm:text-[44px] font-normal tracking-tight text-[#0B1120] leading-[1.1] mb-12">
            Contact {c.name}
          </h2>
          {contactInfo && (
            <div className="rounded-[24px] bg-slate-50 border border-slate-100 p-8 sm:p-10 max-w-xl">
              <div className="flex flex-col gap-5 text-[15px] text-slate-600">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600 shrink-0" size={20} strokeWidth={1.5} />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-slate-900 transition-colors">{contactInfo.email}</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600 shrink-0" size={20} strokeWidth={1.5} />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                  <span className="whitespace-pre-line leading-[1.6]">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
