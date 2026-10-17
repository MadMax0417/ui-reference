import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const DARK = "#14161A";
const LIGHT = "#FAFAF7";

export default function SplitScreenDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full font-sans" style={{ color: DARK }}>
      {/* Nav — split in two */}
      <nav className="grid grid-cols-1 items-center sm:grid-cols-2">
        <div className="flex items-center justify-between px-5 text-white h-full sm:px-8" style={{ background: DARK }}>
          <span className="text-sm font-bold tracking-tight">{copy.product}</span>
          <span className="text-xs text-white/60">{copy.ctaSecondary} ↗</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-black/10 px-5 py-3 text-xs font-medium text-[#52565E] sm:h-full sm:justify-end sm:border-t-0 sm:border-l sm:gap-7 sm:py-0 sm:pl-8" style={{ background: LIGHT }}>
          {copy.navLinks.map((l) => (
            <span key={l}>{l}</span>
          ))}
          <span className="rounded-none bg-[#14161A] px-4 py-2 text-xs font-semibold text-white">
            {copy.ctaPrimary}
          </span>
        </div>
      </nav>

      {/* Hero — statement/proof */}
      <section className="grid md:grid-cols-2" style={{ minHeight: "30rem" }}>
        <div className="flex flex-col justify-center px-5 py-14 text-white sm:px-12 sm:py-16" style={{ background: DARK }}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/50">
            {copy.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
            {copy.heroTitle}
          </h1>
        </div>
        <div className="flex flex-col justify-center border-t border-black/10 px-5 py-14 sm:border-t-0 sm:border-l sm:px-12 sm:py-16" style={{ background: LIGHT }}>
          <p className="max-w-md text-base leading-relaxed text-[#52565E]">{copy.heroSubtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <span className="bg-[#14161A] px-7 py-3.5 text-xs font-semibold text-white">
              {copy.ctaPrimary} →
            </span>
            <span className="border border-[#14161A]/25 px-7 py-3.5 text-xs font-medium">
              {copy.ctaSecondary}
            </span>
          </div>
          <ul className="mt-10 max-w-md space-y-3 text-sm text-[#52565E]">
            {copy.featureCards.map((f) => (
              <li key={f.title} className="flex items-start gap-3 border-b border-dashed border-[#14161A]/15 pb-3">
                <span className="mt-0.5 font-semibold text-[#14161A]">✓</span>
                <span>
                  <span className="font-semibold text-[#14161A]">{f.title}</span> — {f.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial — quote/critic split */}
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 border-t border-white/10 px-5 py-14 text-white sm:px-12 sm:py-16" style={{ background: DARK }}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/50">
            Field notes
          </p>
          <p className="text-3xl leading-snug font-light">“{copy.testimonial.quote}”</p>
        </div>
        <div className="flex flex-col justify-center border-t border-black/10 px-5 py-14 sm:border-t-0 sm:border-l sm:px-12 sm:py-16" style={{ background: LIGHT }}>
          <div className="flex items-center gap-4">
            <span className="grid size-14 place-items-center bg-[#14161A] text-lg font-bold text-white">
              MC
            </span>
            <div>
              <p className="font-semibold">{copy.testimonial.name}</p>
              <p className="text-xs text-[#52565E]">{copy.testimonial.role}</p>
            </div>
          </div>
          <div className="mt-8 h-px w-full" style={{ background: "rgba(0,0,0,0.12)" }} />
          <div className="mt-8 flex justify-between text-xs font-semibold">
            <span className="text-[#52565E]">Cycle time</span>
            <span>−48% with {copy.product}</span>
          </div>
        </div>
      </section>

      {/* Pricing — choose/the plans */}
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-14 text-white sm:px-12 sm:py-16" style={{ background: DARK }}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/50">
            {copy.pricingHeading}
          </p>
          <p className="mt-6 max-w-sm text-2xl leading-snug font-light text-white/90">
            One workspace. Three commitments. Zero surprises in the fine print.
          </p>
          <p className="mt-8 text-xs text-white/50">{copy.pricingNote}</p>
        </div>
        <div className="border-t border-black/10 px-5 py-14 sm:border-t-0 sm:border-l sm:px-10 sm:py-14" style={{ background: LIGHT }}>
          <div className="space-y-6">
            {copy.plans.map((p) => (
              <div
                key={p.name}
                className={`flex items-center justify-between border px-6 py-5 ${p.popular ? "border-[#14161A]" : "border-[#14161A]/15"}`}
                style={p.popular ? { background: DARK, color: LIGHT } : undefined}
              >
                <div>
                  <p className={`text-[11px] font-semibold tracking-[0.25em] uppercase ${p.popular ? "text-white/60" : "text-[#52565E]"}`}>
                    {p.name}
                    {p.popular && " ★"}
                  </p>
                  <p className={`mt-1 text-xs ${p.popular ? "text-white/60" : "text-[#52565E]"}`}>{p.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold">
                    {p.price}
                    <span className={`text-xs ${p.popular ? "text-white/60" : "text-[#52565E]"}`}>{p.period}</span>
                  </p>
                  <p className={`mt-1 text-[11px] underline underline-offset-4 ${p.popular ? "text-white" : "text-[#14161A]"}`}>
                    {p.cta} →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer split */}
      <footer className="grid grid-cols-1 text-xs sm:grid-cols-2">
        <div className="flex items-center px-5 py-3 text-white/70 sm:py-0" style={{ background: DARK }}>
          {copy.copyright}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-black/10 px-5 py-3 font-medium text-[#52565E] sm:border-t-0 sm:border-l sm:justify-end sm:gap-8 sm:py-0" style={{ background: LIGHT }}>
          {copy.footerLinks.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
