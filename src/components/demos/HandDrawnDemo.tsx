import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

/** Sketchy border radii — the signature "wobble" of hand-drawn UI */
const WOB1 = { borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" };
const WOB2 = { borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" };
const BORDER = { border: "2.5px solid #2F2B27" };

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={className} fill="none" aria-hidden>
      <path d="M2 8 Q 18 2, 34 8 T 66 8 T 98 8 T 118 6" stroke="#2F2B27" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none" aria-hidden>
      <path d="M4 44 C 20 40, 40 28, 48 10" stroke="#2F2B27" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 12 L 50 6 L 51 17" stroke="#2F2B27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HandDrawnDemo({ copy }: { copy: Landing }) {
  return (
    <div
      className="min-h-full p-8 font-sans text-[#2F2B27]"
      style={{
        background:
          "repeating-linear-gradient(0deg, #FFFDF4 0 31px, rgba(59,90,120,0.08) 31px 32px), #FFFDF4",
      }}
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Nav */}
        <nav
          className="flex flex-wrap items-center justify-between gap-4 px-7 py-4 bg-white/70"
          style={{ ...BORDER, ...WOB1, boxShadow: "3px 4px 0 rgba(47,43,39,0.18)" }}
        >
          <span className="flex items-center gap-2 text-lg font-black">
            ✎ {copy.product}
            <Squiggle className="w-14 -mt-1" />
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            {copy.navLinks.map((l) => (
              <span key={l} className="rounded-full px-4 py-1.5 underline decoration-[#FFD93D] decoration-[3px] underline-offset-4">
                {l}
              </span>
            ))}
            <span className="px-4 py-2 italic font-black" style={{ ...BORDER, ...WOB2, background: "#FFD93D", boxShadow: "3px 3px 0 rgba(47,43,39,0.2)" }}>
              {copy.ctaPrimary} ✿
            </span>
          </div>
        </nav>
        <Arrow className="absolute -bottom-2 right-56 hidden h-12 w-14 rotate-12 sm:block" />

        {/* Hero */}
        <section className="px-4 py-20 text-center">
          <p className="inline-block -rotate-2 px-2 text-[12px] font-black tracking-widest uppercase" style={{ background: "#FFD93D" }}>
            {copy.eyebrow} — sketch № 12
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl text-5xl leading-[1.06] font-black tracking-tight">
            turn messy ideas into{" "}
            <span className="inline-block -rotate-1 bg-white/80 px-3 [text-decoration:underline]" style={{ ...BORDER, ...WOB2, textDecorationThickness: 3 }}>
              finished
            </span> designs!
          </h1>
          <Squiggle className="mx-auto mt-3 w-64" />
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed font-semibold text-[#57514A]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex justify-center gap-5">
            <span className="px-8 py-3.5 text-xs font-black italic" style={{ ...BORDER, ...WOB1, background: "#B5E5C8", boxShadow: "4px 4px 0 rgba(47,43,39,0.25)" }}>
              {copy.ctaPrimary} ✌
            </span>
            <span className="px-8 py-3.5 text-xs font-black" style={{ ...BORDER, ...WOB2, background: "#fff" }}>
              {copy.ctaSecondary} ▷
            </span>
          </div>
        </section>

        {/* Features — crooked cards */}
        <section>
          <h2 className="text-3xl font-black">
            ✏️ {copy.featuresHeading}
          </h2>
          <div className="mt-6 grid gap-7 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article
                key={f.title}
                className="p-7 bg-white"
                style={{
                  ...BORDER,
                  ...(i % 2 ? WOB2 : WOB1),
                  boxShadow: "4px 5px 0 rgba(47,43,39,0.18)",
                  transform: `rotate(${[-1.4, 1.1, -0.7][i % 3]}deg)`,
                }}
              >
                <span className="text-3xl">{["🖍️", "🌀", "📌"][i % 3]}</span>
                <h3 className="mt-3 text-base font-black">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed font-semibold text-[#57514A]">{f.desc}</p>
                <Squiggle className="mt-4 w-20" />
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial — a taped note */}
        <section className="relative mx-auto mt-14 max-w-2xl bg-[#FFF9DB] p-10 pb-9" style={{ ...BORDER, ...WOB2, boxShadow: "5px 6px 0 rgba(47,43,39,0.15)" }}>
          {/* Washi tape */}
          <span aria-hidden className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-2 bg-[#F5E6A8]/80 border border-black/10" />
          <p className="text-xl font-bold leading-relaxed italic">“{copy.testimonial.quote}”</p>
          <p className="mt-4 text-xs font-bold text-[#57514A]">
            — {copy.testimonial.name}, {copy.testimonial.role} ★
          </p>
        </section>

        {/* Pricing */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">💰 {copy.pricingHeading}</h2>
          <div className="mt-6 grid gap-7 sm:grid-cols-3">
            {copy.plans.map((p, i) => (
              <div key={p.name} className="p-7 bg-white" style={{ ...BORDER, ...(i % 2 ? WOB2 : WOB1), boxShadow: "4px 5px 0 rgba(47,43,39,0.18)", transform: `rotate(${[0.8, -1.2, 0.6][i % 3]}deg)` }}>
                {p.popular && (
                  <p className="inline-block -rotate-2 px-2 py-0.5 text-[10px] font-black uppercase" style={{ background: "#FFD93D" }}>
                    most picked ★
                  </p>
                )}
                <p className="mt-2 text-xs font-black tracking-widest uppercase">{p.name}</p>
                <p className="mt-3 text-4xl font-black">
                  {p.price}
                  <span className="text-sm font-bold">{p.period}</span>
                </p>
                <p className="mt-2 text-xs font-semibold text-[#57514A]">{p.desc}</p>
                <span className="mt-6 block px-4 py-2.5 text-center text-xs font-black" style={{ ...BORDER, ...WOB2, background: i === 1 ? "#B5E5C8" : "#fff" }}>
                  {p.cta} →
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[11px] font-bold text-[#57514A]">{copy.pricingNote} ✦</p>
        </section>

        {/* Footer */}
        <footer className="mt-16 flex items-center justify-between text-xs font-bold text-[#57514A]">
          <span>{copy.copyright}</span>
          <div className="flex gap-5">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l} ↗</span>
            ))}
          </div>
          <span className="italic">drawn by hand ✎</span>
        </footer>
      </div>
    </div>
  );
}
