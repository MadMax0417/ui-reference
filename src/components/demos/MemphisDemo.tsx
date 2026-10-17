import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function MemphisDemo({ copy }: { copy: Landing }) {
  return (
    <div
      className="relative min-h-full overflow-hidden font-sans text-[#27233A]"
      style={{ background: "#FDF0D5" }}
    >
      {/* Confetti field */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.4" fill="#F49AC1" opacity="0.55" />
            <circle cx="17" cy="15" r="2" fill="#5CB1B6" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
        <path d="M-20 90 Q 60 30, 140 90 T 300 90" fill="none" stroke="#7A6FF0" strokeWidth="7" strokeLinecap="round" />
        <path d="M1150 40 Q 1230 100, 1310 40 T 1470 40" fill="none" stroke="#FF6B6B" strokeWidth="7" strokeLinecap="round" />
        <path d="M120 640 l14 26 l-28 0 Z" fill="#FFD93D" transform="rotate(14 127 653)" />
        <path d="M1330 560 l14 26 l-28 0 Z" fill="#5CB1B6" transform="rotate(-16 1337 573)" />
        <circle cx="1390" cy="130" r="16" fill="none" stroke="#7A6FF0" strokeWidth="6" />
        <circle cx="70" cy="480" r="12" fill="none" stroke="#FF6B6B" strokeWidth="6" />
        <path d="M1260 330 l30 52 l-60 0 Z" fill="none" stroke="#27233A" strokeWidth="6" />
      </svg>

      <div className="relative mx-auto max-w-5xl p-6">
        {/* Nav */}
        <nav className="flex items-center justify-between rounded-2xl border-4 border-[#27233A] bg-white px-6 py-4 shadow-[8px_8px_0_0_#27233A]">
          <span className="text-lg font-black tracking-tight text-[#FF6B6B]">{copy.product}</span>
          <div className="flex items-center gap-3 text-xs font-bold uppercase">
            {copy.navLinks.map((l, i) => (
              <span
                key={l}
                className="rounded-full border-2 border-[#27233A] px-4 py-1.5"
                style={{ background: ["#F9C74F", "#90E1EF", "#F6D6FD"][i % 3] }}
              >
                {l}
              </span>
            ))}
            <span className="rounded-full border-2 border-[#27233A] bg-[#FF6B6B] px-4 py-1.5 text-white shadow-[3px_3px_0_0_#27233A]">
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="relative rounded-3xl border-4 border-[#27233A] bg-[#90E1EF] p-10 shadow-[10px_10px_0_0_#27233A] lg:col-span-3">
            <span className="absolute -top-5 -right-4 grid size-14 rotate-12 place-items-center rounded-2xl border-4 border-[#27233A] bg-[#F9C74F] text-2xl">
              ★
            </span>
            <p className="inline-block -rotate-2 rounded-lg border-2 border-[#27233A] bg-[#F6D6FD] px-3 py-1 text-[11px] font-black uppercase tracking-widest">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl leading-[0.98] font-black tracking-tight">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm font-bold leading-relaxed">{copy.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-xl border-4 border-[#27233A] bg-[#7A6FF0] px-7 py-3.5 text-xs font-black text-white uppercase shadow-[5px_5px_0_0_#27233A]">
                {copy.ctaPrimary} ★
              </span>
              <span className="rounded-xl border-4 border-[#27233A] bg-white px-7 py-3.5 text-xs font-black uppercase shadow-[5px_5px_0_0_#27233A]">
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          <div className="relative grid place-items-center rounded-3xl border-4 border-[#27233A] bg-[#F9C74F] p-8 shadow-[10px_10px_0_0_#27233A] lg:col-span-2">
            <div className="grid size-32 place-items-center rounded-full border-4 border-[#27233A] bg-[#FF6B6B] text-6xl">
              💿
            </div>
            <p className="mt-4 rounded-lg border-2 border-[#27233A] bg-white px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase">
              1981 · MILANO
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-6">
          <h2 className="text-3xl font-black">{copy.featuresHeading}</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article
                key={f.title}
                className="rounded-2xl border-4 border-[#27233A] p-7 shadow-[7px_7px_0_0_#27233A]"
                style={{ background: ["#F6D6FD", "#90E1EF", "#F9C74F"][i % 3], transform: `rotate(${[-1.2, 0.8, -0.6][i % 3]}deg)` }}
              >
                <span className="inline-block -rotate-6 rounded-lg border-2 border-[#27233A] bg-white px-2.5 py-0.5 text-lg font-black">
                  {["✺", "◍", "✦"][i % 3]}
                </span>
                <h3 className="mt-4 text-base font-black">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed font-bold">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-6 rounded-3xl border-4 border-[#27233A] bg-[#7A6FF0] p-10 text-center text-white shadow-[10px_10px_0_0_#27233A]">
          <p className="text-2xl font-black leading-snug">“{copy.testimonial.quote}”</p>
          <p className="mt-4 text-xs font-black uppercase tracking-widest opacity-90">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="mt-6">
          <h2 className="text-3xl font-black">{copy.pricingHeading}</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {copy.plans.map((p, i) => (
              <div
                key={p.name}
                className="rounded-2xl border-4 border-[#27233A] p-7 shadow-[7px_7px_0_0_#27233A]"
                style={{
                  background: p.popular ? "#27233A" : "#FFFFFF",
                  color: p.popular ? "#FFFFFF" : "#27233A",
                  transform: `rotate(${[0.9, -0.7, 0.5][i % 3]}deg)`,
                }}
              >
                {p.popular && (
                  <span className="mb-3 -rotate-2 inline-block rounded-lg border-2 border-[#27233A] bg-[#F9C74F] px-2.5 py-0.5 text-[10px] font-black text-[#27233A] uppercase">
                    Most popular
                  </span>
                )}
                <p className={`text-xs font-black uppercase tracking-widest ${p.popular ? "text-[#F9C74F]" : ""}`}>
                  {p.name}
                </p>
                <p className="mt-3 text-4xl font-black">
                  {p.price}
                  <span className="text-sm">{p.period}</span>
                </p>
                <p className="mt-2 text-xs font-bold">{p.desc}</p>
                <span
                  className={`mt-6 block rounded-xl border-4 py-2.5 text-center text-xs font-black uppercase ${
                    p.popular ? "border-[#F9C74F] bg-[#F9C74F] text-[#27233A]" : "border-[#27233A] bg-[#90E1EF]"
                  }`}
                >
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] font-black uppercase">{copy.pricingNote}</p>
        </section>

        {/* Footer */}
        <footer className="mt-6 flex items-center justify-between rounded-2xl border-4 border-[#27233A] bg-white px-6 py-5 text-xs font-black uppercase shadow-[8px_8px_0_0_#27233A]">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-[#FF6B6B]">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
