import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const MESH =
  "radial-gradient(38rem 24rem at 12% 8%, rgba(124,58,237,0.22) 0%, transparent 60%)," +
  "radial-gradient(30rem 22rem at 88% 18%, rgba(20,184,166,0.18) 0%, transparent 60%)," +
  "radial-gradient(26rem 20rem at 70% 90%, rgba(168,85,247,0.16) 0%, transparent 60%)";

export default function AiNativeDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#07070C] p-6 font-sans text-[#E7E4F5]">
      {/* Mesh + sparkles */}
      <div aria-hidden className="absolute inset-0" style={{ background: MESH }} />
      {["✦", "✧", "✦", "✧"].map((s, i) => (
        <span
          key={i}
          aria-hidden
          className={`absolute text-lg text-violet-300/60`}
          style={{
            top: [12, 68, 22, 80][i] + "%",
            left: [8, 86, 92, 14][i] + "%",
            animation: `float-${i % 2 ? "slower" : "slow"} ${8 + i * 2}s ease-in-out infinite`,
          }}
        >
          {s}
        </span>
      ))}

      <div className="relative mx-auto max-w-4xl space-y-7">
        {/* Nav */}
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 backdrop-blur-xl">
          <span className="flex items-center gap-2.5 text-sm font-semibold">
            <span
              className="grid size-7 place-items-center rounded-lg text-xs font-black text-white"
              style={{ background: "linear-gradient(135deg,#8B5CF6,#14B8A6)" }}
            >
              ✦
            </span>
            {copy.product}
          </span>
          <div className="flex items-center gap-6 text-xs text-violet-100/60">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden sm:inline">{l}</span>
            ))}
            <span className="rounded-xl bg-white/10 px-4 py-1.5 text-white/90">Sign in</span>
          </div>
        </nav>

        {/* Hero — the prompt IS the hero */}
        <section className="pt-14 text-center">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-violet-300/80">
            {copy.eyebrow} ✦ ask-first
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl">
            Turn messy ideas into{" "}
            <span
              className="
              "
              style={{
                backgroundImage: "linear-gradient(92deg,#A78BFA,#67E8F9 55%,#5EEAD4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              finished designs
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-violet-100/60">
            {copy.heroSubtitle}
          </p>

          {/* Prompt bar */}
          <div className="mx-auto mt-9 max-w-xl rounded-2xl border border-white/15 bg-white/[0.05] p-2 backdrop-blur-xl transition-colors" style={{ boxShadow: "0 0 40px rgba(139,92,246,0.25), inset 0 1px 1px rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-3 px-4 py-2.5 text-left">
              <span className="text-lg" style={{ color: "#A78BFA" }}>✦</span>
              <span className="flex-1 text-sm italic text-violet-100/45">
                Describe what you need — a landing page, a pitch deck, anything…
              </span>
              <span
                className="rounded-xl px-4 py-2 text-xs font-semibold text-white"
                style={{ background: "linear-gradient(135deg,#8B5CF6,#6366F1)" }}
              >
                ⏎ Generate
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Landing page", "Pitch deck", "Brand kit", "Rebrand"].map((c) => (
              <span key={c} className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[11px] text-violet-100/70">
                ✦ {c}
              </span>
            ))}
          </div>
        </section>

        {/* Features — shimmer gradient borders + skeletons */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl p-[1px]"
              style={{
                background: [
                  "linear-gradient(140deg, rgba(139,92,246,0.7), rgba(255,255,255,0.06))",
                  "linear-gradient(140deg, rgba(20,184,166,0.6), rgba(255,255,255,0.06))",
                  "linear-gradient(140deg, rgba(168,85,247,0.6), rgba(99,102,241,0.35))",
                ][i],
              }}
            >
              <article className="h-full rounded-2xl bg-[#0B0B12] p-6">
                <span className="text-xl" style={{ color: ["#A78BFA", "#5EEAD4", "#C4B5FD"][i] }}>✦</span>
                <h3 className="mt-3 text-sm font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-violet-100/55">{f.desc}</p>
                {/* skeleton hint */}
                <div className="mt-4 space-y-1.5">
                  <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                  <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
                  <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                </div>
              </article>
            </div>
          ))}
        </section>

        {/* Testimonial */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] px-9 py-10 text-center backdrop-blur-xl">
          <p className="text-lg leading-relaxed text-white/90">
            <span className="text-violet-300">“</span>
            {copy.testimonial.quote}
            <span className="text-violet-300">”</span>
          </p>
          <p className="mt-3 text-xs text-violet-100/50">
            {copy.testimonial.name} — {copy.testimonial.role}{" "}
            <span className="ml-1 rounded-full border border-teal-300/30 px-2 py-0.5 text-[9px] text-teal-300/90">
              ✔ token use: approved
            </span>
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className={p.popular ? "rounded-2xl p-[1px]" : ""}
              style={p.popular ? { background: "linear-gradient(135deg,#8B5CF6,#EC4899 50%,#14B8A6)" } : undefined}
            >
              <div
                className={`h-full rounded-2xl border p-6 ${
                  p.popular ? "border-0 bg-[#0B0B12]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                {p.popular && (
                  <span className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white" style={{ background: "linear-gradient(135deg,#8B5CF6,#EC4899)" }}>
                    ✦ most generated
                  </span>
                )}
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-violet-100/60">{p.name}</p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {p.price}
                  <span className="text-xs text-violet-100/40">{p.period}</span>
                </p>
                <p className="mt-1.5 text-xs text-violet-100/55">{p.desc}</p>
                <span
                  className={`mt-5 block rounded-xl py-2.5 text-center text-xs font-semibold ${
                    p.popular ? "text-white" : "border border-white/15 text-violet-100/80"
                  }`}
                  style={p.popular ? { background: "linear-gradient(135deg,#8B5CF6,#6366F1)" } : undefined}
                >
                  {p.cta}
                </span>
              </div>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] text-violet-100/40">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1 border-t border-white/10 pt-5 pb-2 text-[11px] text-violet-100/40">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-violet-100/60">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
