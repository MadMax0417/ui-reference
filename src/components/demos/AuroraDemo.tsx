import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function AuroraDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#0A0F1E] p-6 font-sans text-slate-200">
      {/* Aurora waves */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 size-[36rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #34D399 0%, transparent 65%)",
          animation: "float-slow 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-40 size-[32rem] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 65%)",
          animation: "float-slower 17s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 size-[30rem] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #A78BFA 0%, transparent 65%)",
          animation: "float-slow 19s ease-in-out infinite",
        }}
      />

      <div className="relative mx-auto max-w-5xl space-y-5">
        {/* Nav */}
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <span
            className="text-sm font-semibold tracking-tight text-white"
            style={{ textShadow: "0 0 18px rgba(125,226,209,0.5)" }}
          >
            {copy.product}
          </span>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            {copy.navLinks.map((l) => (
              <span key={l} className="hover:text-white">{l}</span>
            ))}
            <span className="rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-1.5 font-medium text-emerald-200">
              {copy.ctaPrimary}
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-4 py-24 text-center">
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-emerald-300/80">
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl text-5xl leading-[1.08] font-semibold text-white">
            Turn messy ideas into{" "}
            <span
              className=""
              style={{
                backgroundImage: "linear-gradient(92deg, #34D399, #7DE2D1 40%, #22D3EE 70%, #A78BFA)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              finished designs
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-400">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex justify-center gap-4">
            <span className="rounded-xl border border-emerald-300/50 bg-emerald-300/15 px-7 py-3 text-xs font-semibold text-emerald-100 backdrop-blur transition-colors hover:bg-emerald-300/25">
              {copy.ctaPrimary}
            </span>
            <span className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-xs text-slate-300 backdrop-blur">
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
            >
              <span
                className="inline-block bg-clip-text text-2xl text-transparent"
                style={{
                  backgroundImage: ["linear-gradient(135deg,#34D399,#22D3EE)", "linear-gradient(135deg,#7DE2D1,#A78BFA)", "linear-gradient(135deg,#22D3EE,#34D399)"][i % 3],
                }}
              >
                ✦
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.06] px-10 py-12 text-center backdrop-blur-xl">
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-100">
            <span className="text-emerald-300">“</span>
            {copy.testimonial.quote}
            <span className="text-emerald-300">”</span>
          </p>
          <p className="mt-4 text-xs text-slate-500">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) =>
            p.popular ? (
              <div
                key={p.name}
                className="rounded-2xl p-[1px]"
                style={{ background: "linear-gradient(160deg, #34D399, #22D3EE 45%, #A78BFA)" }}
              >
                <div className="h-full rounded-2xl bg-[#0B1220] p-7">
                  <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-emerald-300">
                    {p.name} ✦
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-white">
                    {p.price}
                    <span className="text-sm text-slate-500">{p.period}</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-400">{p.desc}</p>
                  <span className="mt-6 block rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 py-2.5 text-center text-xs font-semibold text-[#06281E]">
                    {p.cta}
                  </span>
                </div>
              </div>
            ) : (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">{p.name}</p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  {p.price}
                  <span className="text-sm text-slate-500">{p.period}</span>
                </p>
                <p className="mt-2 text-xs text-slate-400">{p.desc}</p>
                <span className="mt-6 block rounded-xl border border-white/15 py-2.5 text-center text-xs text-slate-300">
                  {p.cta}
                </span>
              </div>
            ),
          )}
        </section>
        <p className="text-center text-[11px] text-slate-500">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-white/10 px-2 pt-5 pb-3 text-[11px] text-slate-500">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-slate-400">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
