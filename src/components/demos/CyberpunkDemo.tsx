import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const CLIP = "clip-path polygon 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px";

export default function CyberpunkDemo({ copy }: { copy: Landing }) {
  const clip = { clipPath: CLIP };
  return (
    <div className="relative min-h-full overflow-hidden bg-[#05060A] font-mono text-[#E4E4E4]">
      {/* Grid floor background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,#05060A_90%)]" />

      <div className="relative mx-auto max-w-5xl space-y-5 p-6">
        {/* Nav */}
        <nav
          className="flex items-center justify-between border border-cyan-400/40 bg-[#0A0F14]/80 px-5 py-3.5 backdrop-blur"
          style={clip}
        >
          <span className="text-sm font-bold tracking-[0.3em] text-cyan-300 uppercase">
            {copy.product}
          </span>
          <div className="flex items-center gap-5 text-[11px] tracking-widest text-cyan-100/70 uppercase">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden hover:text-cyan-300 sm:inline">
                {l}
              </span>
            ))}
            <span
              className="border border-fuchsia-400/70 bg-fuchsia-500/10 px-4 py-1.5 font-bold text-fuchsia-300"
              style={clip}
            >
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section
          className="border border-cyan-400/40 bg-[#0A0F14]/80 px-5 py-12 text-center backdrop-blur sm:px-8 sm:py-16"
          style={clip}
        >
          <p className="text-[11px] tracking-[0.4em] text-fuchsia-300 uppercase">
            {"//"} {copy.eyebrow}
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl text-4xl leading-tight font-bold tracking-wide text-cyan-100 uppercase"
            style={{ textShadow: "0 0 18px rgba(34,211,238,0.55), 0 0 60px rgba(34,211,238,0.25)" }}
          >
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-cyan-100/60">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <span
              className="border border-cyan-300 bg-cyan-400/10 px-8 py-3.5 text-xs font-bold tracking-widest text-cyan-200 uppercase"
              style={{ ...clip, boxShadow: "0 0 24px rgba(34,211,238,0.35), inset 0 0 18px rgba(34,211,238,0.12)" }}
            >
              {copy.ctaPrimary} ▸
            </span>
            <span
              className="border border-fuchsia-400/60 px-8 py-3.5 text-xs font-bold tracking-widest text-fuchsia-300 uppercase"
              style={clip}
            >
              {copy.ctaSecondary}
            </span>
          </div>
          <p className="mt-6 text-[10px] tracking-widest text-cyan-100/40 uppercase">
            status: online · ready · 0 downtime
          </p>
        </section>

        {/* Features */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className="border border-cyan-400/30 bg-[#0A0F14]/80 p-7 backdrop-blur"
              style={clip}
            >
              <p className="text-[10px] tracking-widest text-fuchsia-300/80 uppercase">
                module_0{i + 1}
              </p>
              <h3
                className="mt-3 text-sm font-bold tracking-wide text-cyan-100 uppercase"
                style={{ textShadow: "0 0 12px rgba(34,211,238,0.45)" }}
              >
                {f.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-cyan-100/55">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section
          className="border border-fuchsia-400/40 bg-[#0F0A14]/80 px-8 py-10 text-center backdrop-blur"
          style={clip}
        >
          <p
            className="text-xl leading-relaxed text-fuchsia-100"
            style={{ textShadow: "0 0 16px rgba(232,121,249,0.45)" }}
          >
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-[11px] tracking-widest text-fuchsia-200/60 uppercase">
            {copy.testimonial.name} :: {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className={`border bg-[#0A0F14]/80 p-7 backdrop-blur ${
                p.popular ? "border-fuchsia-400/70 bg-fuchsia-500/[0.06]" : "border-cyan-400/30"
              }`}
              style={clip}
            >
              <p className="text-[10px] tracking-widest uppercase">
                <span className={p.popular ? "text-fuchsia-300" : "text-cyan-300/70"}>
                  {p.name}
                </span>
                {p.popular && <span className="ml-2 text-fuchsia-200/70">★ best_value</span>}
              </p>
              <p className="mt-3 text-4xl font-bold text-cyan-100">
                {p.price}
                <span className="text-sm text-cyan-100/50">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-cyan-100/50">{p.desc}</p>
              <span
                className={`mt-6 block border py-2.5 text-center text-[11px] font-bold tracking-widest uppercase ${
                  p.popular
                    ? "border-fuchsia-300 text-fuchsia-200"
                    : "border-cyan-300/60 text-cyan-200"
                }`}
                style={clip}
              >
                {p.cta} ▸
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[10px] tracking-widest text-cyan-100/40 uppercase">
          {copy.pricingNote}
        </p>

        {/* Footer */}
        <footer
          className="flex items-center justify-between border border-cyan-400/30 bg-[#0A0F14]/80 px-5 py-4 text-[10px] tracking-widest text-cyan-100/50 uppercase"
          style={clip}
        >
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-fuchsia-300/70">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
