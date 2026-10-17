import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const BG = "#E0E5EC";
const SURFACE = "#E0E5EC";
const RAISED = "8px 8px 16px #c3cad6, -8px -8px 16px #ffffff";
const PRESSED = "inset 6px 6px 12px #c3cad6, inset -6px -6px 12px #ffffff";
const SOFT = "4px 4px 8px #c3cad6, -4px -4px 8px #ffffff";

export default function NeumorphismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full p-8 font-sans" style={{ background: BG, color: "#4A5568" }}>
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Nav */}
        <nav
          className="flex items-center justify-between rounded-2xl px-6 py-4"
          style={{ background: SURFACE, boxShadow: RAISED }}
        >
          <span className="text-sm font-bold tracking-tight text-[#5B6B8C]">{copy.product}</span>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7A99]">
            {copy.navLinks.map((l) => (
              <span
                key={l}
                className="rounded-full px-4 py-2 transition-shadow"
                style={{ background: SURFACE, boxShadow: RAISED }}
              >
                {l}
              </span>
            ))}
            <span
              className="rounded-full px-5 py-2 text-[#5B6B8C]"
              style={{ background: SURFACE, boxShadow: PRESSED }}
            >
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section
          className="rounded-[2rem] px-12 py-16 text-center"
          style={{ background: SURFACE, boxShadow: RAISED }}
        >
          <span
            className="mx-auto grid size-20 place-items-center rounded-full text-3xl text-[#5B6B8C]"
            style={{ background: SURFACE, boxShadow: RAISED }}
          >
            ◈
          </span>
          <p className="mt-8 text-[11px] font-bold tracking-[0.25em] text-[#93A3C1] uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-xl text-4xl leading-tight font-extrabold text-[#4A5568]">
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#93A3C1]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex justify-center gap-5">
            <span
              className="rounded-full px-7 py-3 text-xs font-bold text-[#5B9CFF]"
              style={{ background: SURFACE, boxShadow: PRESSED }}
            >
              {copy.ctaPrimary}
            </span>
            <span
              className="rounded-full px-7 py-3 text-xs font-bold text-[#6B7A99]"
              style={{ background: SURFACE, boxShadow: RAISED }}
            >
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="grid gap-8 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article
                key={f.title}
                className="rounded-[1.75rem] p-8"
                style={{ background: SURFACE, boxShadow: RAISED }}
              >
                <span
                  className="grid size-14 place-items-center rounded-2xl text-xl text-[#5B9CFF]"
                  style={{ background: SURFACE, boxShadow: RAISED }}
                >
                  {["◐", "◈", "◇"][i % 3]}
                </span>
                <h3 className="mt-6 text-sm font-bold text-[#4A5568]">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#93A3C1]">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section
          className="rounded-[2rem] px-12 py-12 text-center"
          style={{ background: SURFACE, boxShadow: SOFT }}
        >
          <p className="text-xl leading-relaxed font-medium text-[#5B6B8C] italic">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-xs font-semibold text-[#93A3C1]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section>
          <div className="grid gap-8 sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div
                key={p.name}
                className="rounded-[1.75rem] p-8"
                style={{
                  background: SURFACE,
                  boxShadow: p.popular ? PRESSED : RAISED,
                }}
              >
                <p className="text-xs font-bold tracking-widest text-[#93A3C1] uppercase">
                  {p.name}
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#4A5568]">
                  {p.price}
                  <span className="text-sm text-[#93A3C1]">{p.period}</span>
                </p>
                <p className="mt-1 text-xs text-[#93A3C1]">{p.desc}</p>
                <span
                  className="mt-6 block rounded-full py-2.5 text-center text-xs font-bold text-[#5B9CFF]"
                  style={{ background: SURFACE, boxShadow: p.popular ? RAISED : PRESSED }}
                >
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-[#93A3C1]">{copy.pricingNote}</p>
        </section>

        {/* Footer */}
        <footer
          className="flex items-center justify-between rounded-2xl px-8 py-5 text-xs text-[#93A3C1]"
          style={{ background: SURFACE, boxShadow: SOFT }}
        >
          <span>{copy.copyright}</span>
          <div className="flex gap-5">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
