import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { contact } from '../data/content'

export default function Contact() {
  return (
    <>
      <section className="bg-white pb-8 pt-32 md:pt-40 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[12px] font-medium tracking-widest uppercase text-slate-400 mb-6 block">Get in Touch</span>
          <h1 className="text-[44px] sm:text-[56px] font-normal tracking-tight text-[#0B1120] leading-[1.08]">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {contact.companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[24px] bg-slate-50 border border-slate-100 p-8 sm:p-10"
              >
                <h3 className="text-[20px] font-normal text-[#0B1120] mb-8">{company.name}</h3>
                <div className="flex flex-col gap-5 text-[15px] text-slate-600">
                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-600 shrink-0" size={20} strokeWidth={1.5} />
                    <a href={`mailto:${company.email}`} className="hover:text-slate-900 transition-colors break-all">{company.email}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-blue-600 shrink-0" size={20} strokeWidth={1.5} />
                    <span>Ph: {company.phone}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-600 shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                    <span className="whitespace-pre-line leading-[1.6]">{company.address}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
