import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const RED = "#EF4444";
const BLUE = "#3B82F6";
const BLACK = "#111111";

/** Halftone dot field via radial gradients */
function BenDay({ color = RED, opacity = 0.35 }: { color?: string; opacity?: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.6px, transparent 1.7px)`,
        backgroundSize: "14px 14px",
        opacity,
      }}
    />
  );
}

export default function PopArtDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#FFFDF2] p-6 font-sans" style={{ color: BLACK }}>
      <BenDay color="#FDE047" opacity={0.4} />

      <div className="relative mx-auto max-w-5xl space-y-7">
        {/* Nav — comic strip panel */}
        <nav className="flex flex-wrap items-center justify-between gap-3 border-4 bg-white px-6 py-4" style={{ borderColor: BLACK, boxShadow: "8px 8px 0 rgba(0,0,0,0.85)" }}>
          <span className="text-2xl font-black italic tracking-tight">
            {copy.product}<span style={{ color: RED }}>!</span>
          </span>
          <div className="flex items-center gap-6 text-xs font-black uppercase">
            {copy.navLinks.map((l) => (
              <span key={l}>{l} <span className="text-[#3B82F6]">★</span></span>
            ))}
            <span className="px-5 py-2 text-white" style={{ background: RED, border: `3px solid ${BLACK}`, boxShadow: "4px 4px 0 #111" }}>
              {copy.ctaPrimary}!
            </span>
          </div>
        </nav>

        {/* Hero — shout + bubbles */}
        <section className="relative grid items-center gap-8 py-12 md:grid-cols-2">
          <div>
            <p className="inline-block -rotate-2 border-2 px-3 py-1 text-[11px] font-black uppercase" style={{ borderColor: BLACK, background: "#FDE047" }}>
              {copy.eyebrow}!!
            </p>
            <h1 className="mt-5 text-6xl font-black uppercase leading-[0.95] tracking-tight" style={{ textShadow: "5px 5px 0 #FDE047" }}>
              turn messy ideas into{" "}
              <span style={{ color: BLUE, textShadow: "5px 5px 0 rgba(0,0,0,0.15)" }}>finished designs</span>!
            </h1>
            <p className="mt-5 max-w-md text-sm font-bold leading-relaxed">{copy.heroSubtitle}</p>
            <div className="mt-8 flex gap-4">
              <span className="px-8 py-4 text-xs font-black uppercase text-white" style={{ background: RED, border: `3px solid ${BLACK}`, boxShadow: "6px 6px 0 #111" }}>
                {copy.ctaPrimary} ✸
              </span>
              <span className="px-8 py-4 text-xs font-black uppercase" style={{ border: `3px solid ${BLACK}`, background: "#fff", boxShadow: "6px 6px 0 #FDE047" }}>
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          {/* Speech bubble card + POW */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative border-4 bg-white p-8" style={{ borderColor: BLACK, borderRadius: "3rem", boxShadow: "10px 10px 0 rgba(0,0,0,0.85)" }}>
              <BenDay color={BLUE} opacity={0.18} />
              <p className="relative text-center text-5xl">💥</p>
              <p className="relative mt-3 text-center text-lg font-black uppercase">the big idea boom!</p>
              <p className="relative mt-2 text-center text-xs font-bold">{copy.testimonial.quote}</p>
              <span aria-hidden className="absolute bottom-[-14px] left-14 size-6 rotate-45 border-b-4 border-r-4 bg-white" style={{ borderColor: BLACK }} />
            </div>
            <span aria-hidden className="absolute -top-8 -right-6 grid size-20 rotate-12 place-items-center rounded-full border-4 bg-[#FDE047] text-xl font-black" style={{ borderColor: BLACK, boxShadow: "5px 5px 0 rgba(0,0,0,0.8)" }}>
              POW!
            </span>
          </div>
        </section>

        {/* Features — ben-day panels */}
        <section>
          <h2 className="text-3xl font-black uppercase" style={{ textShadow: "4px 4px 0 rgba(59,130,246,0.4)" }}>
            {copy.featuresHeading}!
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article key={f.title} className="relative overflow-hidden border-4 bg-white p-7" style={{ borderColor: BLACK, boxShadow: "7px 7px 0 rgba(0,0,0,0.8)" }}>
                <BenDay color={[RED, BLUE, "#FDE047"][i]} opacity={0.5} />
                <span className="relative text-4xl">{["💥", "✏️", "🚀"][i]}</span>
                <h3 className="relative mt-4 text-base font-black uppercase">{f.title}</h3>
                <p className="relative mt-2 text-xs font-bold leading-relaxed">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="relative mx-auto max-w-3xl">
          <div className="relative border-4 bg-white p-9 text-center" style={{ borderColor: BLACK, borderRadius: "2.5rem", boxShadow: "9px 9px 0 rgba(0,0,0,0.8)" }}>
            <BenDay color={RED} opacity={0.15} />
            <p className="relative text-xl font-black uppercase italic">“{copy.testimonial.quote}”</p>
            <p className="relative mt-4 text-xs font-black uppercase">
              — {copy.testimonial.name}, {copy.testimonial.role} ★
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-3xl font-black uppercase" style={{ textShadow: "4px 4px 0 rgba(239,68,68,0.35)" }}>
            {copy.pricingHeading}!
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {copy.plans.map((p, i) => (
              <div
                key={p.name}
                className="relative overflow-hidden border-4 bg-white p-7"
                style={{
                  borderColor: BLACK,
                  boxShadow: p.popular ? "9px 9px 0 #111" : "7px 7px 0 rgba(0,0,0,0.8)",
                  transform: `rotate(${[1, -0.8, 0.6][i]}deg)`,
                }}
              >
                <BenDay color={p.popular ? "#FDE047" : BLUE} opacity={p.popular ? 0.7 : 0.25} />
                {p.popular && (
                  <p className="relative mb-3 inline-block -rotate-2 border-2 px-2.5 py-0.5 text-[10px] font-black uppercase" style={{ borderColor: BLACK, background: "#FDE047" }}>
                    wow!! best value ✸
                  </p>
                )}
                <p className="relative text-xs font-black uppercase tracking-widest">{p.name}</p>
                <p className="relative mt-2 text-4xl font-black italic">
                  {p.price}
                  <span className="text-sm not-italic">{p.period}</span>
                </p>
                <p className="relative mt-2 text-xs font-bold">{p.desc}</p>
                <span
                  className="relative mt-5 block border-2 py-2.5 text-center text-xs font-black uppercase"
                  style={p.popular ? { background: BLACK, color: "#fff", borderColor: BLACK } : { borderColor: BLACK, background: "#fff" }}
                >
                  {p.cta}!
                </span>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-[11px] font-black uppercase tracking-widest">{copy.pricingNote}</p>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t-4 py-5 text-xs font-black uppercase" style={{ borderColor: BLACK }}>
          <span>{copy.copyright}</span>
          <div className="flex gap-5" style={{ color: RED }}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}!</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
