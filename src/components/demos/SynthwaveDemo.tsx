import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const NEON_P = "#FF29E5";
const NEON_C = "#00F0FF";

export default function SynthwaveDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#0A0214] p-7 font-mono text-[#E8E6F2]">
      {/* Streaks */}
      <div aria-hidden className="absolute left-0 top-24 h-0.5 w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#FF29E5]/60 to-transparent" />
      <div aria-hidden className="absolute right-0 top-56 h-0.5 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />

      {/* Grid floor — low band under content */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-44 overflow-hidden" style={{ perspective: "260px" }}>
        <div
          className="absolute inset-[-70%]"
          style={{
            transform: "rotateX(58deg)",
            transformOrigin: "bottom",
            backgroundImage:
              `linear-gradient(${NEON_P}66 2px, transparent 2px), linear-gradient(90deg, ${NEON_P}66 2px, transparent 2px)`,
            backgroundSize: "44px 44px",
          }}
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,41,229,0.14),transparent_60%)]" />

      {/* Content sits above the floor */}
      <div className="relative mx-auto max-w-5xl space-y-5 pb-40">
        {/* Nav — left aligned, italic */}
        <nav className="flex items-center justify-between border-b border-[#FF29E5]/40 pb-4">
          <span
            className="text-lg font-black italic tracking-tight"
            style={{
              backgroundImage: "linear-gradient(90deg, #00F0FF, #FF29E5)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 0 10px rgba(255,41,229,0.6))",
            }}
          >
            {copy.product}.exe
          </span>
          <div className="flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-[#B9A9D9]">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span
              className="border px-4 py-1.5 italic text-white"
              style={{ borderColor: NEON_P, boxShadow: `0 0 16px ${NEON_P}55` }}
            >
              start ▸
            </span>
          </div>
        </nav>

        {/* Hero — LEFT aligned to contrast with Vaporwave */}
        <section className="pt-16 text-left">
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase" style={{ color: NEON_C }}>
            [ {copy.eyebrow} — NIGHT DRIVE MODE ]
          </p>
          <h1
            className="mt-5 max-w-2xl text-5xl leading-[1.02] font-black italic tracking-tight"
            style={{
              backgroundImage: "linear-gradient(92deg, #FFFFFF 0%, #FF9CFF 40%, #FF29E5 70%, #00F0FF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 0 18px rgba(255,41,229,0.45))",
            }}
          >
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-md text-xs leading-relaxed text-[#B9A9D9]">{copy.heroSubtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <span
              className="px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase italic text-white"
              style={{
                background: `linear-gradient(90deg, ${NEON_P}, #8B2FC9)`,
                boxShadow: `0 0 28px ${NEON_P}66`,
              }}
            >
              {copy.ctaPrimary} ⏵
            </span>
            <span
              className="border px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase italic"
              style={{ borderColor: NEON_C, color: NEON_C, boxShadow: `0 0 18px ${NEON_C}33` }}
            >
              {copy.ctaSecondary} ⏵
            </span>
          </div>
        </section>

        {/* Features — left neon spine */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className="border border-[#FF29E5]/30 bg-[#150426]/80 p-7 backdrop-blur"
              style={{ boxShadow: `inset 3px 0 0 0 ${i % 2 ? NEON_C : NEON_P}` }}
            >
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: i % 2 ? NEON_C : NEON_P }}>
                track_0{i + 1}
              </p>
              <h3 className="mt-3 text-sm font-black italic tracking-wide">{f.title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-[#B9A9D9]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial — bold, left */}
        <section className="border-l-2 pl-8" style={{ borderColor: NEON_C }}>
          <p className="text-xl font-black italic leading-relaxed text-white/90">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-3 text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: NEON_C }}>
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — italic cards */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <div
              key={p.name}
              className={`border bg-[#150426]/80 p-7 backdrop-blur ${
                p.popular
                  ? "shadow-[0_0_30px_rgba(255,41,229,0.35)]"
                  : "border-white/10"
              }`}
              style={p.popular ? { borderColor: NEON_P } : undefined}
            >
              {p.popular && (
                <p className="mb-3 inline-block px-2 py-0.5 text-[10px] font-black uppercase italic text-white" style={{ background: NEON_P }}>
                  neon pro ★
                </p>
              )}
              <p className={`text-[11px] font-bold tracking-[0.3em] uppercase ${p.popular ? "text-white" : "text-[#B9A9D9]"}`}>
                {p.name}
              </p>
              <p
                className="mt-3 text-4xl font-black italic"
                style={{
                  backgroundImage: "linear-gradient(180deg, #FFFFFF, #FF9CFF 60%, #00F0FF)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {p.price}
                <span className="text-sm [-webkit-text-fill-color:#B9A9D9]">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-[#B9A9D9]">{p.desc}</p>
              <span
                className={`mt-6 block py-2.5 text-center text-[11px] font-bold tracking-[0.2em] uppercase italic ${
                  p.popular ? "text-white" : "text-[#B9A9D9] border border-white/15"
                }`}
                style={p.popular ? { background: `linear-gradient(90deg, ${NEON_P}, #8B2FC9)`, boxShadow: `0 0 20px ${NEON_P}55` } : undefined}
              >
                {p.cta} ⏵
              </span>
              {i === 0 && <p className="mt-2 text-center text-[9px] tracking-widest text-[#B9A9D9]/60 uppercase">first cassette free</p>}
            </div>
          ))}
        </section>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#B9A9D9]/70">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-dashed border-[#FF29E5]/40 pt-4 text-[10px] font-bold tracking-[0.25em] uppercase text-[#B9A9D9]">
          <span>{copy.copyright}</span>
          <div className="flex gap-5" style={{ color: NEON_P }}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
