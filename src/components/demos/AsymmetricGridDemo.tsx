import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const ACCENT = "#F14E6D";

export default function AsymmetricGridDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-white p-4 font-sans text-[#171717] sm:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Nav on the 12-col grid */}
        <nav className="grid grid-cols-1 items-center gap-3 border-b border-[#171717]/15 py-5 sm:grid-cols-12 sm:gap-6">
          <span className="text-sm font-bold tracking-tight sm:col-span-4">Lumio<sup className="text-[#F14E6D]">†</sup></span>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[#6B6B6B] sm:col-span-5 sm:gap-8">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <span className="justify-self-center bg-[#171717] px-5 py-2 text-xs font-semibold text-white sm:col-span-3 sm:justify-self-end">
            {copy.ctaPrimary}
          </span>
        </nav>

        {/* Hero — oversized numeral, offset pairing */}
        <section className="relative grid grid-cols-12 gap-6 py-20">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-0 hidden select-none text-[11rem] font-black leading-none text-transparent sm:block"
            style={{ WebkitTextStroke: `1.5px rgba(241, 78, 109, 0.35)` }}
          >
            01
          </span>
          <div className="relative col-span-12 lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F14E6D]">
              {copy.eyebrow} / Vol.01
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl sm:leading-[1.0]">
              Turn messy ideas into finished designs
            </h1>
          </div>
          <div className="col-span-12 mt-6 flex flex-col justify-end gap-5 lg:col-span-4 lg:col-start-9 lg:mt-28">
            <p className="text-sm leading-relaxed text-[#5B5B5B]">{copy.heroSubtitle}</p>
            <span className="w-fit bg-[#F14E6D] px-7 py-3.5 text-xs font-semibold text-white">
              {copy.ctaPrimary} →
            </span>
            <span className="text-xs underline underline-offset-4">{copy.ctaSecondary}</span>
          </div>
        </section>

        {/* Features — broken 12-col with offsets */}
        <section className="grid grid-cols-12 gap-6">
          <article className="col-span-12 border border-[#171717]/15 bg-[#FAFAFA] p-9 lg:col-span-5">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#9A9A9A]">§02·A</p>
            <h3 className="mt-6 text-xl font-bold">{copy.featureCards[0].title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-[#5B5B5B]">{copy.featureCards[0].desc}</p>
            <div className="mt-8 h-16 bg-gradient-to-tr from-[#F14E6D]/15 to-transparent" />
          </article>
          <article className="col-span-12 bg-[#171717] p-9 text-white lg:col-span-4 lg:col-start-7 lg:translate-y-12">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">§02·B</p>
            <h3 className="mt-6 text-xl font-bold">{copy.featureCards[1].title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-white/60">{copy.featureCards[1].desc}</p>
          </article>
          <article className="col-span-12 border border-[#171717]/15 p-9 lg:col-span-4 lg:col-start-2 lg:-translate-y-4">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#9A9A9A]">§03·A</p>
            <h3 className="mt-6 text-xl font-bold">{copy.featureCards[2].title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-[#5B5B5B]">{copy.featureCards[2].desc}</p>
          </article>
          <div className="col-span-12 mt-10 flex items-end lg:col-span-5 lg:col-start-9">
            <span className="text-5xl font-black text-[#F14E6D]">1.2M</span>
            <span className="ml-3 text-xs leading-snug text-[#6B6B6B]">
              internal canvases
              <br />
              shipped since 2026 ①
            </span>
          </div>
        </section>

        {/* Testimonial — right-weighted */}
        <section className="grid grid-cols-12 gap-6 border-t border-[#171717]/15 py-20">
          <p className="col-span-12 self-end text-sm text-[#6B6B6B] lg:col-span-3">
            sec.04
            <br />
            <span className="text-[10px] tracking-[0.25em] uppercase">what people say</span>
          </p>
          <blockquote className="col-span-12 text-2xl leading-snug font-light lg:col-span-8 lg:col-start-5">
            <span className="text-[#F14E6D]">“</span>
            {copy.testimonial.quote}
            <span className="text-[#F14E6D]">”</span>
          </blockquote>
          <p className="col-span-12 text-xs text-[#6B6B6B] lg:col-span-4 lg:col-start-9">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — staggered heights, mixed widths */}
        <section className="border-t border-[#171717]/15 pt-16">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#9A9A9A]">
            sec.05 — {copy.pricingHeading}
          </p>
          <div className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 border border-[#171717]/15 p-8 lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-widest">Starter</p>
              <p className="mt-3 text-4xl font-bold">{copy.plans[0].price}<span className="text-sm text-[#6B6B6B]">{copy.plans[0].period}</span></p>
              <p className="mt-2 text-xs text-[#5B5B5B]">{copy.plans[0].desc}</p>
              <p className="mt-6 text-xs underline underline-offset-4">{copy.plans[0].cta} →</p>
            </div>
            <div className="col-span-12 bg-[#171717] p-9 text-white lg:col-span-4 lg:col-start-5 lg:mt-16">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F14E6D]">Pro — most picked</p>
              <p className="mt-3 text-5xl font-bold">{copy.plans[1].price}<span className="text-sm text-white/50">{copy.plans[1].period}</span></p>
              <p className="mt-2 text-xs text-white/60">{copy.plans[1].desc}</p>
              <p className="mt-6 text-xs underline underline-offset-4">{copy.plans[1].cta} →</p>
            </div>
            <div className="col-span-12 border border-[#171717]/15 p-8 lg:col-span-3 lg:col-start-10 lg:mt-6">
              <p className="text-xs font-bold uppercase tracking-widest">Team</p>
              <p className="mt-3 text-4xl font-bold">{copy.plans[2].price}<span className="text-sm text-[#6B6B6B]">{copy.plans[2].period}</span></p>
              <p className="mt-2 text-xs text-[#5B5B5B]">{copy.plans[2].desc}</p>
              <p className="mt-6 text-xs underline underline-offset-4">{copy.plans[2].cta} →</p>
            </div>
          </div>
          <p className="mt-10 pb-2 text-center text-[10px] tracking-[0.25em] uppercase text-[#9A9A9A]">
            {copy.pricingNote} ① tax not included
          </p>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-t border-[#171717]/15 pt-6 pb-3 text-xs text-[#6B6B6B]">
          <span>{copy.copyright}</span>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <span aria-hidden className="hidden text-[10rem] font-black leading-none text-transparent sm:block" style={{ WebkitTextStroke: "1.5px rgba(23,23,23,0.12)" }}>
            37
          </span>
        </footer>
      </div>
    </div>
  );
}
