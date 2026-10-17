import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const GOLD = { color: "#D8B24A" };

export default function ArtDecoDemo({ copy }: { copy: Landing }) {
  const frame =
    "border border-[#8A6D2F]/60 bg-gradient-to-b from-[#141416] to-[#0C0C0E]";

  return (
    <div
      className="min-h-full p-8 font-sans"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #1B1B1F 0%, #0B0B0D 70%)",
        color: "#E7E3D8",
      }}
    >
      <div className="mx-auto max-w-5xl space-y-7">
        {/* Nav */}
        <nav className="flex items-center justify-between border border-[#8A6D2F]/50 bg-[#111114] px-7 py-4">
          <span className="text-sm font-semibold tracking-[0.45em] uppercase" style={GOLD}>
            {copy.product}
          </span>
          <div className="flex items-center gap-7 text-[11px] font-medium tracking-[0.3em] text-[#B9B3A2] uppercase">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span
              className="border px-5 py-1.5 tracking-[0.25em]"
              style={{ borderColor: "#8A6D2F", ...GOLD }}
            >
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative px-10 py-20 text-center">
          {/* Deco sunburst + frame */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-conic-gradient(from -20deg at 50% 120%, rgba(216,178,74,0.12) 0deg 2deg, transparent 2deg 8deg)",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-4 border border-[#8A6D2F]/40" />
          <div aria-hidden className="pointer-events-none absolute inset-6 border border-[#8A6D2F]/20" />

          <div className="relative">
            {/* Fan ornament */}
            <svg aria-hidden viewBox="0 0 200 40" className="mx-auto h-9 w-52" fill="none" stroke="#D8B24A" strokeWidth="1.4">
              <path d="M0 38 Q 100 -14 200 38" />
              <path d="M20 38 Q 100 2 180 38" />
              <path d="M40 38 Q 100 14 160 38" />
              <path d="M60 38 Q 100 24 140 38" />
              <circle cx="100" cy="36" r="3" fill="#D8B24A" stroke="none" />
            </svg>
            <p className="mt-5 text-[11px] font-medium tracking-[0.55em] uppercase" style={GOLD}>
              {copy.eyebrow}
            </p>
            <h1 className="mx-auto mt-4 max-w-2xl text-5xl leading-[1.12] font-semibold tracking-[0.08em] uppercase">
              {copy.heroTitle}
            </h1>
            <div aria-hidden className="mx-auto mt-6 flex w-72 items-center gap-2">
              <span className="h-px flex-1 bg-[#8A6D2F]/70" />
              <span className="size-1.5 rotate-45" style={{ background: "#D8B24A" }} />
              <span className="h-px flex-1 bg-[#8A6D2F]/70" />
            </div>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#B9B3A2]">
              {copy.heroSubtitle}
            </p>
            <div className="mt-9 flex justify-center gap-4">
              <span
                className="px-9 py-3.5 text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{
                  background: "linear-gradient(180deg, #E8C872 0%, #C9A227 55%, #A67C1B 100%)",
                  color: "#141412",
                  boxShadow: "0 4px 18px rgba(201,162,39,0.3)",
                }}
              >
                {copy.ctaPrimary}
              </span>
              <span
                className="border border-[#8A6D2F]/70 px-9 py-3.5 text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={GOLD}
              >
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article key={f.title} className={`${frame} p-8 text-center`}>
              {/* Stepped corner ornament */}
              <div aria-hidden className="mx-auto mb-5 grid place-items-center gap-0.5">
                <span className="block h-0.5 w-10" style={{ background: "#C9A227" }} />
                <span className="block h-0.5 w-6" style={{ background: "#8A6D2F" }} />
                <span className="block h-0.5 w-3" style={{ background: "#C9A227" }} />
              </div>
              <h3 className="text-sm font-semibold tracking-[0.25em] uppercase" style={GOLD}>
                {["I", "II", "III"][i % 3]}
              </h3>
              <p className="mt-2 text-xs tracking-widest text-[#B9B3A2] uppercase">{f.title}</p>
              <p className="mt-3 text-xs leading-relaxed text-[#8F8A7C]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section className={`${frame} px-12 py-14 text-center`}>
          <div aria-hidden className="mx-auto mb-6 flex w-56 items-center gap-2">
            <span className="h-px flex-1 bg-[#D8B24A]/60" />
            <span className="size-2 rotate-45 border border-[#D8B24A]" />
            <span className="h-px flex-1 bg-[#D8B24A]/60" />
          </div>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-[#E7E3D8] italic">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-5 text-[11px] tracking-[0.35em] uppercase" style={GOLD}>
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className="border bg-gradient-to-b from-[#15150F] to-[#0D0D0A] p-8"
              style={{
                borderColor: p.popular ? "#C9A227" : "rgba(138,109,47,0.5)",
                boxShadow: p.popular ? "0 0 34px rgba(201,162,39,0.18)" : undefined,
              }}
            >
              <p className="text-center text-[11px] font-semibold tracking-[0.45em] uppercase" style={GOLD}>
                {p.name}
              </p>
              <div aria-hidden className="mx-auto mt-4 flex w-24 items-center gap-2">
                <span className="h-px flex-1 bg-[#8A6D2F]/70" />
                <span className="size-1 rotate-45" style={{ background: "#C9A227" }} />
                <span className="h-px flex-1 bg-[#8A6D2F]/70" />
              </div>
              <p className="mt-4 text-center text-4xl font-semibold tracking-wide" style={GOLD}>
                {p.price}
                <span className="text-sm text-[#8F8A7C]">{p.period}</span>
              </p>
              <p className="mt-3 text-center text-[11px] tracking-widest text-[#8F8A7C] uppercase">
                {p.desc}
              </p>
              <span
                className="mt-7 block border py-3 text-center text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ borderColor: p.popular ? "#E8C872" : "rgba(138,109,47,0.8)", ...GOLD }}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[10px] tracking-[0.35em] text-[#8F8A7C] uppercase">
          {copy.pricingNote}
        </p>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#8A6D2F]/40 px-2 py-6 text-[11px] tracking-[0.25em] text-[#8F8A7C] uppercase">
          <span>{copy.copyright}</span>
          <div className="flex gap-6" style={GOLD}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
