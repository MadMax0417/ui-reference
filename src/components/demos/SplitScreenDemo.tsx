import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const DARK = "#14161A";
const LIGHT = "#FAFAF7";

export default function SplitScreenDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full font-sans" style={{ color: DARK }}>
      {/* Nav — split in two */}
      <nav className="grid grid-cols-2 items-center" style={{ minHeight: "4.5rem" }}>
        <div className="flex items-center justify-between px-8 text-white h-full" style={{ background: DARK }}>
          <span className="text-sm font-bold tracking-tight">{copy.product}</span>
          <span className="text-xs text-white/60">{copy.ctaSecondary} ↗</span>
        </div>
        <div className="flex h-full items-center justify-end gap-7 px-8 text-xs font-medium text-[#52565E]" style={{ background: LIGHT, borderLeft: "1px solid rgba(0,0,0,0.12)" }}>
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
        <div className="flex flex-col justify-center px-12 py-16 text-white" style={{ background: DARK }}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/50">
            {copy.eyebrow}
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight">
            {copy.heroTitle}
          </h1>
        </div>
        <div className="flex flex-col justify-center px-12 py-16" style={{ background: LIGHT, borderLeft: "1px solid rgba(0,0,0,0.12)" }}>
          <p className="max-w-md text-base leading-relaxed text-[#52565E]">{copy.heroSubtitle}</p>
          <div className="mt-9 flex gap-4">
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
        <div className="flex flex-col justify-center gap-6 px-12 py-16 text-white" style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/50">
            Field notes
          </p>
          <p className="text-3xl leading-snug font-light">“{copy.testimonial.quote}”</p>
        </div>
        <div className="flex flex-col justify-center px-12 py-16" style={{ background: LIGHT, borderLeft: "1px solid rgba(0,0,0,0.12)" }}>
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
        <div className="flex flex-col justify-center px-12 py-16 text-white" style={{ background: DARK }}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/50">
            {copy.pricingHeading}
          </p>
          <p className="mt-6 max-w-sm text-2xl leading-snug font-light text-white/90">
            One workspace. Three commitments. Zero surprises in the fine print.
          </p>
          <p className="mt-8 text-xs text-white/50">{copy.pricingNote}</p>
        </div>
        <div className="px-10 py-14" style={{ background: LIGHT, borderLeft: "1px solid rgba(0,0,0,0.12)" }}>
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
      <footer className="grid grid-cols-2 text-xs" style={{ minHeight: "4rem" }}>
        <div className="flex items-center px-8 text-white/70" style={{ background: DARK }}>
          {copy.copyright}
        </div>
        <div className="flex items-center justify-end gap-8 px-8 font-medium text-[#52565E]" style={{ background: LIGHT, borderLeft: "1px solid rgba(0,0,0,0.12)" }}>
          {copy.footerLinks.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
