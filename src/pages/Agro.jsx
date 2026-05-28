import { motion } from 'framer-motion'
import { companies, contact } from '../data/content'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Agro() {
  const c = companies.find((x) => x.id === 'agro')
  const contactInfo = contact.companies.find((x) => x.name === 'Easyfarm Agro Producer Company')

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 bg-emerald-50/40" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700 mb-8">
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

      {/* Services Intro */}
      <section id="services" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Services</span>
          <div className="max-w-3xl mb-20">
            {c.servicesIntro.split('\n\n').map((para, i) => (
              <p key={i} className="text-[16px] leading-[1.75] text-slate-500 mb-4">{para}</p>
            ))}
          </div>

          {/* FarmCare Services */}
          <div className="mb-20">
            <h3 className="text-[28px] sm:text-[32px] font-normal tracking-tight text-[#0B1120] leading-[1.1] mb-8">
              FarmCare Services
            </h3>
            <p className="text-[16px] leading-[1.75] text-slate-500 mb-8 max-w-3xl">
              {c.farmCare.intro}
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {c.farmCare.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl bg-white border border-slate-100 p-4"
                >
                  <ArrowRight size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-600 leading-[1.5]">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Plans */}
            <h4 className="text-[18px] font-medium text-[#0B1120] mb-6">Easyfarm offers tiered service packages:</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {c.farmCare.plans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-[24px] bg-white border border-slate-100 p-8 hover:shadow-sm transition-all"
                >
                  <h5 className="text-[18px] font-normal text-[#0B1120] mb-3">{plan.title}</h5>
                  <p className="text-[14px] leading-[1.6] text-slate-500">{plan.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FarmCredit Services */}
          <div>
            <h3 className="text-[28px] sm:text-[32px] font-normal tracking-tight text-[#0B1120] leading-[1.1] mb-8">
              FarmCredit Services
            </h3>
            <div className="flex flex-col gap-6">
              {c.farmCredit.map((service, index) => (
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
                      <h4 className="text-[20px] font-normal text-[#0B1120] mb-3">{service.title}</h4>
                      <p className="text-[15px] leading-[1.7] text-slate-500">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Projects</span>
          <p className="text-[16px] leading-[1.75] text-slate-500 mb-16 max-w-3xl">
            {c.projectsIntro}
          </p>
          <div className="flex flex-col gap-8">
            {c.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[24px] bg-slate-50 border border-slate-100 p-8 sm:p-10"
              >
                <h3 className="text-[22px] font-normal text-[#0B1120] mb-4">{project.title}</h3>
                <p className="text-[15px] leading-[1.7] text-slate-500">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Internship Opportunity</span>
              <div className="flex flex-col gap-5">
                {c.internship.split('\n\n').map((para, i) => (
                  <p key={i} className="text-[16px] leading-[1.75] text-slate-500">{para}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-medium text-[#0B1120] mb-6">Areas of Internship</h4>
              <div className="flex flex-col gap-3">
                {c.internshipAreas.map((area, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white border border-slate-100 p-4">
                    <ArrowRight size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[14px] text-slate-600 leading-[1.5]">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section id="collaborate" className="bg-[#0B1120] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-emerald-400 mb-6 block">Collaborate with Us</span>
          <p className="text-[18px] sm:text-[20px] leading-[1.6] text-slate-300 mb-12 max-w-3xl">
            {c.collaborate}
          </p>
          <p className="text-[14px] text-slate-400 mb-4">Whether you are:</p>
          <div className="flex flex-col gap-4 mb-12">
            {c.collaboratePartners.map((partner, i) => (
              <div key={i} className="flex items-start gap-3 pl-1">
                <ArrowRight size={16} className="text-emerald-400 shrink-0 mt-1" />
                <span className="text-[15px] text-slate-300 leading-[1.6]">{partner}</span>
              </div>
            ))}
          </div>
          <p className="text-[16px] leading-[1.75] text-slate-400 max-w-3xl">
            {c.collaborateClosing}
          </p>
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
                  <Mail className="text-emerald-600 shrink-0" size={20} strokeWidth={1.5} />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-slate-900 transition-colors">{contactInfo.email}</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-emerald-600 shrink-0" size={20} strokeWidth={1.5} />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-emerald-600 shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
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
