import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const GLASS = "bg-white/10 backdrop-blur-xl border border-white/25";

export default function GlassmorphismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#3B0764] font-sans text-white">
      {/* Color orbs behind the glass */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-fuchsia-500 opacity-50 blur-3xl"
        style={{ animation: "float-slow 12s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute top-40 right-[-6rem] size-[26rem] rounded-full bg-cyan-400 opacity-50 blur-3xl"
        style={{ animation: "float-slower 14s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-indigo-500 opacity-40 blur-3xl"
        style={{ animation: "float-slow 16s ease-in-out infinite" }}
      />

      <div className="relative mx-auto max-w-5xl px-8 py-8">
        {/* Nav */}
        <nav className={`flex items-center justify-between rounded-2xl px-6 py-4 ${GLASS}`}>
          <span className="text-sm font-bold tracking-tight">{copy.product}</span>
          <div className="flex items-center gap-6 text-xs font-medium text-white/80">
            {copy.navLinks.map((l) => (
              <span key={l} className="hover:text-white">
                {l}
              </span>
            ))}
            <span className="rounded-full bg-white/90 px-4 py-1.5 font-semibold text-[#3B0764]">
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 text-center">
          <p className={`mx-auto w-fit rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase ${GLASS}`}>
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl text-5xl leading-[1.1] font-bold">
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/75">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex justify-center gap-4">
            <span className="rounded-full bg-white px-7 py-3 text-xs font-bold text-[#3B0764] shadow-lg shadow-black/20">
              {copy.ctaPrimary}
            </span>
            <span className={`rounded-full px-7 py-3 text-xs font-semibold text-white/90 ${GLASS}`}>
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article
              key={f.title}
              className={`rounded-3xl p-8 shadow-xl shadow-black/10 ${GLASS}`}
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white/20 text-xl">
                ✦
              </span>
              <h3 className="mt-5 text-sm font-semibold">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section className={`mt-6 rounded-3xl px-10 py-14 text-center shadow-xl shadow-black/10 ${GLASS}`}>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-xs text-white/70">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="mt-6 grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 shadow-xl shadow-black/10 ${GLASS} ${
                p.popular ? "ring-2 ring-white/60" : ""
              }`}
            >
              {p.popular && (
                <p className="mb-3 inline-block rounded-full bg-white/25 px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase">
                  Most popular
                </p>
              )}
              <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                {p.name}
              </p>
              <p className="mt-2 text-3xl font-bold">
                {p.price}
                <span className="text-sm text-white/60">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-white/70">{p.desc}</p>
              <span className="mt-6 block rounded-full bg-white/90 py-2.5 text-center text-xs font-bold text-[#3B0764]">
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <p className="mt-6 mb-4 text-center text-[11px] text-white/60">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className={`flex items-center justify-between rounded-2xl px-6 py-4 text-xs text-white/70 ${GLASS}`}>
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
