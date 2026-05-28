import AnimatedSection from './AnimatedSection'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  delay = 0,
}) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <AnimatedSection delay={delay} className={alignment}>
      {eyebrow && (
        <p className="mb-4 text-[12px] font-medium tracking-[0.02em] text-blue-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight text-[#0B1120] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-[1.6] text-slate-500 max-w-2xl">
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}
