import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const TEAL = "#0E7C7B";
const TANGERINE = "#F2884B";
const INK = "#1E2A32";

function Orbit({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden
    >
      <circle cx="50" cy="50" r="46" stroke={TEAL} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="30" stroke={TEAL} strokeWidth="0.75" strokeDasharray="3 4" />
      <circle cx="82" cy="50" r="5" fill={TANGERINE} />
      <circle cx="50" cy="20" r="3" fill={TEAL} />
    </svg>
  );
}

export default function RetroFuturismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#F4EFE2] p-8 font-sans" style={{ color: INK }}>
      <div className="relative mx-auto max-w-5xl">
        {/* Nav */}
        <nav
          className="flex items-center justify-between border-y-2 py-3.5"
          style={{ borderColor: INK }}
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase">
            {copy.product} <span style={{ color: TEAL }}>✦</span>
          </span>
          <div className="flex items-center gap-7 text-[11px] font-bold tracking-[0.2em] uppercase">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span
              className="rounded-full px-5 py-1.5 text-white"
              style={{ background: TEAL }}
            >
              {copy.ctaPrimary}
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative grid items-center gap-10 py-16 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase" style={{ color: TEAL }}>
              {copy.eyebrow} · EST. TOMORROW 1958
            </p>
            <h1 className="mt-4 text-5xl leading-[1.05] font-bold tracking-tight uppercase">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed font-semibold text-[#3C4A52]">
              {copy.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span
                className="rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white"
                style={{ background: TANGERINE, boxShadow: `0 3px 0 ${INK}` }}
              >
                {copy.ctaPrimary} →
              </span>
              <span
                className="rounded-full border-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
                style={{ borderColor: INK }}
              >
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          <div className="relative grid place-items-center md:col-span-2">
            <Orbit size={220} />
            <div
              className="absolute grid size-16 place-items-center rounded-full text-2xl text-white"
              style={{ background: TANGERINE, boxShadow: `0 0 0 6px #F4EFE2, 0 0 0 7.5px ${TEAL}` }}
            >
              ✦
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t-2 pt-10" style={{ borderColor: INK }}>
          <h2 className="text-center text-2xl font-bold tracking-[0.2em] uppercase">
            {copy.featuresHeading}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article
                key={f.title}
                className="border-2 p-7"
                style={{
                  borderColor: INK,
                  background: ["#FFFFFF", "#FDF9EC", "#FFFFFF"][i % 3],
                  boxShadow: `5px 5px 0 0 ${TEAL}`,
                  borderRadius: "1.5rem 0.4rem 1.5rem 0.4rem",
                }}
              >
                <span
                  className="grid size-11 place-items-center rounded-full text-lg text-white"
                  style={{ background: [TEAL, TANGERINE, TEAL][i % 3] }}
                >
                  {["◐", "✦", "➤"][i % 3]}
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-widest">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed font-semibold text-[#3C4A52]">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 text-center">
          <p className="mx-auto max-w-2xl text-2xl leading-relaxed font-bold" style={{ color: TEAL }}>
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-[11px] font-bold tracking-[0.3em] uppercase">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — the space-age plans */}
        <section className="border-t-2 pt-10" style={{ borderColor: INK }}>
          <h2 className="text-center text-2xl font-bold tracking-[0.2em] uppercase">
            {copy.pricingHeading}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div
                key={p.name}
                className="border-2 p-7 text-center"
                style={{
                  borderColor: INK,
                  background: p.popular ? TEAL : "#FFFFFF",
                  color: p.popular ? "#FFFFFF" : INK,
                  borderRadius: "0.4rem 1.5rem 0.4rem 1.5rem",
                  boxShadow: p.popular ? `6px 6px 0 0 ${TANGERINE}` : undefined,
                }}
              >
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase">
                  {p.name} {p.popular && "★★"}
                </p>
                <p className="mt-3 text-4xl font-bold">
                  {p.price}
                  <span className="text-sm">{p.period}</span>
                </p>
                <p className={`mt-2 text-xs font-semibold ${p.popular ? "text-white/80" : "text-[#3C4A52]"}`}>
                  {p.desc}
                </p>
                <span
                  className={`mt-6 block rounded-full py-2.5 text-center text-xs font-bold uppercase tracking-widest ${
                    p.popular
                      ? "bg-white"
                      : "border-2"
                  }`}
                  style={p.popular ? { color: TEAL } : { borderColor: INK }}
                >
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#3C4A52]">
            {copy.pricingNote}
          </p>
        </section>

        {/* Footer */}
        <footer
          className="mt-14 flex items-center justify-between border-t-2 py-5 text-[11px] font-bold tracking-[0.25em] uppercase"
          style={{ borderColor: INK }}
        >
          <span>{copy.copyright}</span>
          <div className="flex gap-6" style={{ color: TEAL }}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l} ✦</span>
            ))}
          </div>
          <span>ALL SYSTEMS NOMINAL</span>
        </footer>
      </div>
    </div>
  );
}
