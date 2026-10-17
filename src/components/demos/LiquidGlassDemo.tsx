import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const SPECULAR =
  "shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1.5px_1px_rgba(255,255,255,0.4),0_20px_50px_rgba(96,120,255,0.25)]";

export default function LiquidGlassDemo({ copy }: { copy: Landing }) {
  const pillBase = `rounded-full bg-white/35 border border-white/60 backdrop-blur-2xl ${SPECULAR}`;
  return (
    <div
      className="relative min-h-full overflow-hidden p-6 font-sans text-[#1C2437]"
      style={{
        background:
          "linear-gradient(140deg, #CFE1FF 0%, #E8D9FF 30%, #FFD9EC 60%, #D5F3FF 100%)",
      }}
    >
      {/* Vivid backdrop shapes to refract against */}
      <div aria-hidden className="absolute -top-28 left-1/4 size-[26rem] rounded-full bg-[#7C9CFF] opacity-50 blur-2xl" style={{ animation: "float-slow 16s ease-in-out infinite" }} />
      <div aria-hidden className="absolute right-0 bottom-0 size-[28rem] rounded-full bg-[#FF9AD5] opacity-40 blur-2xl" style={{ animation: "float-slower 19s ease-in-out infinite" }} />
      <div aria-hidden className="absolute top-1/2 left-0 size-[22rem] rounded-full bg-[#8FE3C0] opacity-40 blur-2xl" style={{ animation: "float-slow 15s ease-in-out infinite" }} />

      <div className="relative mx-auto max-w-5xl space-y-8">
        {/* Floating pill nav — the Liquid Glass signature */}
        <nav className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/40 border border-white/60 px-3 py-2 backdrop-blur-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),0_16px_40px_rgba(96,120,255,0.28)]">
          <span className="ml-2 mr-3 text-sm font-bold tracking-tight text-[#3A4A8C]">◍ {copy.product}</span>
          {copy.navLinks.map((l) => (
            <span key={l} className="hidden rounded-full px-4 py-1.5 text-xs font-medium text-[#3A4A8C]/80 hover:bg-white/50 sm:inline-block">
              {l}
            </span>
          ))}
          <span className={`ml-2 px-5 py-2 text-xs font-semibold text-[#2A3C6E] ${pillBase}`}>
            {copy.ctaPrimary} ✦
          </span>
        </nav>

        {/* Hero */}
        <section className="py-16 text-center">
          <p className={`mx-auto w-fit px-5 py-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#3A4A8C] ${pillBase}`}>
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-7 max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-[#243059] sm:text-5xl">
            <span className="bg-white/40 rounded-[1.4rem] border border-white/50 px-4 py-1 inline-block backdrop-blur-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95)]">
              {copy.heroTitle}
            </span>
          </h1>
          <p className={`mx-auto mt-7 max-w-lg rounded-3xl border border-white/50 bg-white/30 px-6 py-4 text-sm leading-relaxed backdrop-blur-2xl text-[#3A4A8C] ${SPECULAR}`}>
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <span className={`px-9 py-4 text-xs font-semibold text-[#243059] ${pillBase}`}>
              {copy.ctaPrimary} →
            </span>
            <span className={`px-9 py-4 text-xs text-[#3A4A8C]/90 ${pillBase}`}>
              {copy.ctaSecondary} ▷
            </span>
          </div>
        </section>

        {/* Features — refractive GlassPills */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article
              key={f.title}
              className="rounded-[2rem] border border-white/60 bg-white/30 p-8 backdrop-blur-2xl"
              style={{
                boxShadow:
                  "inset 0 2px 1.5px rgba(255,255,255,0.95), inset 0 -2px 2px rgba(255,255,255,0.35), 0 24px 55px rgba(96,120,255,0.22)",
              }}
            >
              <span
                className={`grid size-13 place-items-center rounded-full text-xl text-[#2A3C6E] ${pillBase}`}
              >
                ✦
              </span>
              <h3 className="mt-5 text-sm font-semibold text-[#243059]">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#3A4A8C]/75">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial — a wide lens */}
        <section
          className="rounded-[2.75rem] border border-white/60 bg-white/25 px-6 py-14 text-center backdrop-blur-2xl sm:px-12"
          style={{
            boxShadow:
              "inset 0 2px 2px rgba(255,255,255,0.95), inset 0 -2px 2px rgba(255,255,255,0.3), 0 30px 70px rgba(96,120,255,0.25)",
          }}
        >
          <p className="text-2xl leading-relaxed font-medium text-[#243059]">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-5 text-xs font-medium text-[#3A4A8C]/70">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className="rounded-[2rem] border border-white/60 bg-white/35 p-8 text-center backdrop-blur-2xl"
              style={{
                boxShadow: p.popular
                  ? "inset 0 2px 2px rgba(255,255,255,0.95), 0 30px 70px rgba(96,120,255,0.35)"
                  : "inset 0 2px 1.5px rgba(255,255,255,0.95), 0 20px 50px rgba(96,120,255,0.2)",
                transform: p.popular ? "translateY(-8px)" : undefined,
              }}
            >
              {p.popular && (
                <span className={`mx-auto mb-3 inline-block px-4 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-[#2A3C6E] ${pillBase}`}>
                  Favorite ✦
                </span>
              )}
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#3A4A8C]/80">{p.name}</p>
              <p className="mt-3 text-4xl font-semibold text-[#243059]">
                {p.price}
                <span className="text-sm text-[#3A4A8C]/60">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-[#3A4A8C]/70">{p.desc}</p>
              <span className={`mt-6 inline-block px-7 py-2.5 text-xs font-semibold text-[#243059] ${pillBase}`}>
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] text-[#3A4A8C]/60">{copy.pricingNote}</p>

        {/* Footer pill */}
        <footer className={`mx-auto flex w-fit items-center justify-between gap-10 rounded-full border border-white/60 bg-white/30 px-8 py-3 text-xs backdrop-blur-2xl text-[#3A4A8C]/80 ${SPECULAR}`}>
          <span>{copy.copyright}</span>
          <div className="flex gap-5 font-medium">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
