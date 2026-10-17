import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const SUMI = "#3B3730";
const HAIR = "rgba(59,55,48,0.25)";
const VERMILION = "#A63A2B";

function Enso() {
  return (
    <svg viewBox="0 0 80 80" className="mx-auto size-20" fill="none" aria-hidden>
      <circle
        cx="40"
        cy="40"
        r="32"
        stroke={SUMI}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="170 12 20 40"
        opacity="0.85"
      />
    </svg>
  );
}

export default function JapaneseMinimalismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#F5F1E8] p-4 font-sans sm:p-8" style={{ color: SUMI }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical accent on the left margin */}
        <div
          aria-hidden
          className="absolute top-40 hidden text-xs tracking-[0.3em] text-[#8B8377] lg:block"
          style={{ writingMode: "vertical-rl" }}
        >
          余白の美 — ma
        </div>

        {/* Nav — nearly invisible chrome */}
        <nav className="flex items-center justify-between border-b py-8 text-[11px] tracking-[0.35em] uppercase" style={{ borderColor: HAIR }}>
          <span className="text-sm font-medium tracking-[0.5em]">{copy.product} 墨</span>
          {copy.navLinks.map((l) => (
            <span key={l} className="hidden text-[#8B8377] sm:inline">{l}</span>
          ))}
          <span style={{ color: VERMILION }}>{copy.ctaPrimary}</span>
        </nav>

        {/* Hero — vast emptiness */}
        <section className="relative px-6 py-32 text-center">
          <Enso />
          <p className="mt-14 text-[11px] font-medium tracking-[0.6em] uppercase text-[#8B8377]">
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl text-4xl md:text-5xl leading-[1.35] font-light">
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-8 max-w-md text-sm leading-loose font-light text-[#6E6A60]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-12 flex flex-col items-center gap-5">
            <span
              className="px-10 py-3 text-xs tracking-[0.4em] uppercase text-[#F5F1E8]"
              style={{ background: SUMI }}
            >
              {copy.ctaPrimary}
            </span>
            <span className="border-b pb-1 text-[11px] tracking-[0.4em] uppercase" style={{ borderColor: VERMILION, color: VERMILION }}>
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Features — three quiet columns */}
        <section className="grid gap-16 py-20 sm:grid-cols-3 sm:gap-10">
          {copy.featureCards.map((f, i) => (
            <article key={f.title} className="text-center">
              <p className="text-2xl font-light text-[#A8A194]">{["一", "二", "三"][i]}</p>
              <div className="mx-auto mt-5 h-px w-10" style={{ background: HAIR }} />
              <h3 className="mt-5 text-sm tracking-[0.25em] uppercase">{f.title}</h3>
              <p className="mt-4 text-xs leading-loose font-light text-[#6E6A60]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial — one line, hushed */}
        <section className="py-24 text-center">
          <p className="mx-auto max-w-xl text-lg leading-relaxed font-light italic">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-6 text-[10px] tracking-[0.5em] uppercase text-[#8B8377]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — vermilion seal marks the choice */}
        <section className="py-10">
          <p className="pb-16 text-center text-[11px] tracking-[0.5em] uppercase text-[#8B8377]">
            {copy.pricingHeading}
          </p>
          <div className="grid gap-14 sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div key={p.name} className="relative border-t pt-8 text-center" style={{ borderColor: HAIR }}>
                {p.popular && (
                  <span
                    aria-hidden
                    className="absolute -top-3 left-1/2 grid size-6 -translate-x-1/2 place-items-center rounded-[3px] text-[9px] text-[#F5F1E8]"
                    style={{ background: VERMILION, fontFamily: "serif" }}
                  >
                    傑
                  </span>
                )}
                <p className="text-xs tracking-[0.4em] uppercase text-[#6E6A60]">{p.name}</p>
                <p className="mt-5 text-3xl font-light">
                  {p.price}
                  <span className="text-xs text-[#8B8377]">{p.period}</span>
                </p>
                <p className="mt-3 text-xs font-light text-[#6E6A60]">{p.desc}</p>
                <span
                  className="mt-7 inline-block border-b pb-0.5 text-[11px] tracking-[0.35em] uppercase"
                  style={{ borderColor: p.popular ? VERMILION : HAIR, color: p.popular ? VERMILION : SUMI }}
                >
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="pb-10 pt-14 text-center text-[10px] tracking-[0.4em] uppercase text-[#8B8377]">
            {copy.pricingNote}
          </p>
        </section>

        {/* Footer — one brushstroke */}
        <footer className="border-t py-12 text-center" style={{ borderColor: HAIR }}>
          <p className="text-lg font-light" style={{ fontFamily: "serif" }}>静</p>
          <p className="mt-4 text-[10px] tracking-[0.35em] uppercase text-[#8B8377]">{copy.copyright}</p>
          <div className="mt-3 flex justify-center gap-8 text-[10px] tracking-[0.35em] uppercase text-[#A8A194]">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
