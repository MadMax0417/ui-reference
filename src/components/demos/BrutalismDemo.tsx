import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const BORDER = "border-4 border-black";
const SHADOW = "shadow-[8px_8px_0_0_#000]";

export default function BrutalismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#F5F0E8] font-mono text-black">
      {/* Marquee bar */}
      <div className="overflow-hidden border-b-4 border-black bg-black py-1.5 text-[10px] font-bold tracking-widest text-[#F5F0E8] uppercase">
        <div className="whitespace-nowrap">
          ★ LUMIO ★ DESIGN FASTER ★ NO BULLSHIT ★ LUMIO ★ DESIGN FASTER ★ NO BULLSHIT ★ LUMIO ★
        </div>
      </div>

      {/* Nav */}
      <nav className={`flex flex-wrap items-center justify-between gap-3 border-b-4 border-black bg-[#FFDC00] px-6 py-4`}>
        <span className="text-xl font-black uppercase">{copy.product}</span>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
          {copy.navLinks.map((l) => (
            <span key={l} className={`bg-white px-3 py-1.5 ${BORDER} ${SHADOW}`}>
              {l}
            </span>
          ))}
          <span className={`bg-[#FF6B6B] px-3 py-1.5 text-white ${BORDER} ${SHADOW}`}>Start free</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid gap-0 border-b-4 border-black lg:grid-cols-5">
        <div className="border-b-4 border-black p-10 lg:col-span-3 lg:border-r-4 lg:border-b-0">
          <p className="inline-block bg-[#2EC4B6] px-3 py-1 text-xs font-black uppercase text-black">
            {copy.eyebrow}
          </p>
          <h1 className="mt-6 text-5xl leading-[0.95] font-black tracking-tight uppercase">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed font-bold">
            {copy.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className={`bg-black px-8 py-4 text-sm font-black uppercase text-white ${BORDER} shadow-[8px_8px_0_0_#FF6B6B]`}>
              {copy.ctaPrimary} →
            </span>
            <span className={`bg-white px-8 py-4 text-sm font-black uppercase ${BORDER} ${SHADOW}`}>
              {copy.ctaSecondary}
            </span>
          </div>
        </div>
        <div className="grid place-items-center bg-[#FF6B6B] p-10 lg:col-span-2">
          <div className={`grid place-items-center bg-[#2EC4B6] p-10 text-7xl ${BORDER} ${SHADOW} -rotate-3`}>
            ✱
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b-4 border-black p-10">
        <h2 className="text-3xl font-black uppercase">{copy.featuresHeading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className={`p-6 ${BORDER} ${SHADOW} ${
                ["bg-[#2EC4B6]", "bg-[#FFDC00]", "bg-[#FF9F6B]"][i % 3]
              }`}
            >
              <p className="text-5xl font-black">{["1.", "2.", "3."][i % 3]}</p>
              <h3 className="mt-4 text-base font-black uppercase">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed font-bold">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b-4 border-black bg-[#FF6B6B] p-10 text-white">
        <p className="text-2xl font-black uppercase leading-tight">“{copy.testimonial.quote}”</p>
        <p className="mt-4 text-xs font-black uppercase">
          {copy.testimonial.name} — {copy.testimonial.role}
        </p>
      </section>

      {/* Pricing */}
      <section className="border-b-4 border-black p-10">
        <h2 className="text-3xl font-black uppercase">{copy.pricingHeading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {copy.plans.map((p) => (
            <div key={p.name} className={`bg-white p-6 ${BORDER} ${SHADOW}`}>
              <p className="inline-block bg-black px-2 py-0.5 text-xs font-black uppercase text-white">
                {p.name}
              </p>
              <p className="mt-4 text-5xl font-black">
                {p.price}
                <span className="text-base font-bold">{p.period}</span>
              </p>
              <p className="mt-2 border-y-4 border-black py-2 text-xs font-bold uppercase">{p.desc}</p>
              <span className={`mt-5 block bg-[#FFDC00] py-3 text-center text-xs font-black uppercase ${BORDER}`}>
                {p.cta}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] font-bold uppercase">{copy.pricingNote}</p>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-3 bg-black px-6 py-5 text-xs font-black uppercase text-[#F5F0E8]">
        <span>{copy.copyright}</span>
        <div className="flex gap-5">
          {copy.footerLinks.map((l) => (
            <span key={l} className="text-[#FFDC00]">
              {l.toUpperCase()}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}
