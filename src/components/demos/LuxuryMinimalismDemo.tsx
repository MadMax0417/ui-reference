import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const GOLD = "#C6A15B";
const rule = { background: "linear-gradient(90deg, transparent, #C6A15B, transparent)" };

export default function LuxuryMinimalismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#FAF8F4] p-8 font-serif text-[#2A2723]">
      <div className="mx-auto max-w-5xl">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6">
          <span className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#8B8377]">
            Maison
          </span>
          <span className="text-sm font-semibold tracking-[0.5em] uppercase">{copy.product}</span>
          <span
            className="text-[11px] font-medium tracking-[0.3em] uppercase"
            style={{ color: GOLD }}
          >
            {copy.ctaPrimary}
          </span>
        </nav>
        <div className="h-px opacity-50" style={rule} />

        {/* Hero */}
        <section className="px-6 py-32 text-center">
          <p className="text-[11px] font-medium tracking-[0.55em] uppercase" style={{ color: GOLD }}>
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-7 max-w-3xl text-5xl leading-[1.15] font-light md:text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed font-light text-[#6E675C]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-12 flex items-center justify-center gap-10">
            <span
              className="px-10 py-3.5 text-[11px] font-medium tracking-[0.3em] uppercase text-[#FAF8F4]"
              style={{ background: "#2A2723" }}
            >
              {copy.ctaPrimary}
            </span>
            <span className="text-[11px] tracking-[0.3em] uppercase border-b pb-0.5" style={{ borderColor: GOLD }}>
              {copy.ctaSecondary}
            </span>
          </div>
        </section>
        <div className="h-px opacity-50" style={rule} />

        {/* Features */}
        <section className="px-6 py-24">
          <p className="text-center text-[11px] font-medium tracking-[0.5em] uppercase text-[#8B8377]">
            {copy.featuresHeading}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article key={f.title} className="text-center">
                <p className="text-sm font-light" style={{ color: GOLD }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mx-auto mt-4 h-px w-8 opacity-80" style={rule} />
                <h3 className="mt-4 text-lg font-normal tracking-wide">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-[#6E675C]">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-6 py-24 text-center">
          <div className="mx-auto h-px w-16 opacity-80" style={rule} />
          <blockquote className="mx-auto mt-10 max-w-2xl text-2xl leading-relaxed font-light italic">
            “{copy.testimonial.quote}”
          </blockquote>
          <p className="mt-6 text-[11px] font-medium tracking-[0.4em] uppercase text-[#8B8377]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
          <div className="mx-auto mt-10 h-px w-16 opacity-80" style={rule} />
        </section>

        {/* Pricing */}
        <section className="px-6 pt-24 pb-8">
          <p className="text-center text-[11px] font-medium tracking-[0.5em] uppercase text-[#8B8377]">
            {copy.pricingHeading}
          </p>
          <div className="mt-14 grid gap-px bg-[#E5E0D6] sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div
                key={p.name}
                className={`bg-[#FAF8F4] p-10 text-center ${p.popular ? "relative" : ""}`}
              >
                {p.popular && (
                  <span
                    className="absolute top-5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-medium tracking-[0.3em] uppercase text-[#FAF8F4]"
                    style={{ background: GOLD }}
                  >
                    Signature
                  </span>
                )}
                <p className="mt-6 text-xs font-medium tracking-[0.35em] uppercase">{p.name}</p>
                <p className="mt-5 text-5xl font-light">
                  {p.price}
                  <span className="text-base font-light text-[#8B8377]">{p.period}</span>
                </p>
                <p className="mt-4 text-sm font-light text-[#6E675C]">{p.desc}</p>
                <span
                  className={`mt-8 inline-block border px-6 py-2.5 text-[10px] font-medium tracking-[0.3em] uppercase ${
                    p.popular ? "" : "border-[#2A2723]/25"
                  }`}
                  style={p.popular ? { borderColor: GOLD, color: GOLD } : undefined}
                >
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[10px] tracking-[0.3em] uppercase text-[#8B8377]">
            {copy.pricingNote}
          </p>
        </section>

        {/* Footer */}
        <footer className="px-6 pt-8 pb-12 text-center">
          <div className="h-px opacity-50" style={rule} />
          <p className="mt-8 text-sm font-semibold tracking-[0.5em] uppercase">{copy.product}</p>
          <div className="mt-5 flex justify-center gap-8 text-[10px] tracking-[0.3em] uppercase text-[#8B8377]">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#B7B0A3]">{copy.copyright}</p>
        </footer>
      </div>
    </div>
  );
}
