import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function CinematicDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#050505] p-6 font-sans text-[#E5E5E5]">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Nav */}
        <nav className="flex items-center justify-between border-b border-white/10 py-4">
          <span className="text-sm font-light tracking-[0.45em] uppercase">{copy.product}</span>
          <div className="flex items-center gap-8 text-[10px] font-light tracking-[0.3em] uppercase text-white/60">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span className="text-white">{copy.ctaPrimary} ⟶</span>
          </div>
        </nav>

        {/* Hero: widescreen letterbox "title card" */}
        <section className="relative">
          <div className="mx-auto flex aspect-[21/9] max-h-[26rem] items-center justify-center overflow-hidden border-y border-white/10">
            {/* Light leak + vignette */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 18% 0%, rgba(245,196,142,0.22) 0%, transparent 45%), radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%)",
              }}
            />
            <div className="relative text-center">
              <p className="text-[10px] font-light tracking-[0.6em] uppercase text-white/50">
                a lumio production
              </p>
              <h1 className="mx-auto mt-5 max-w-3xl px-6 text-4xl md:text-5xl leading-tight font-extralight tracking-[0.04em] text-white/95">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 text-[10px] font-light tracking-[0.35em] uppercase text-white/40">
                {copy.eyebrow} · scene 01 of 12
              </p>
            </div>
          </div>
          <span aria-hidden className="absolute bottom-2 left-2 text-[9px] tracking-[0.25em] text-white/25 uppercase">
            ©2026 · reel 1
          </span>
          <span aria-hidden className="absolute bottom-2 right-2 text-[9px] tracking-[0.25em] text-white/25 uppercase">
            rec ▸ 24fps
          </span>
        </section>

        {/* Credits block */}
        <section className="py-8 text-center">
          <div className="mx-auto grid max-w-xl gap-2 text-[11px] font-light tracking-[0.3em] uppercase text-white/60">
            {[
              ["Directed by", "Your Next Big Idea"],
              ["Composed with", copy.featureCards[0].title],
              ["Graded by", copy.featureCards[1].title],
            ].map(([role, name]) => (
              <p key={role}>
                <span className="text-white/35">{role}</span>
                <br />
                <span className="text-white">{name}</span>
              </p>
            ))}
          </div>
          <div className="mx-auto mt-8 flex items-center justify-center gap-6">
            <span className="h-px w-16 bg-white/20" />
            <span className="rounded-full border border-white/20 px-6 py-2 text-[10px] font-light tracking-[0.3em] uppercase">
              {copy.ctaPrimary}
            </span>
            <span className="h-px w-16 bg-white/20" />
          </div>
        </section>

        {/* Scenes 2-4 (features) */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article key={f.title} className="relative border border-white/10 bg-[#0B0B0B] p-7">
              <p className="text-[9px] font-light tracking-[0.35em] uppercase text-white/40">
                {`SC.0${i + 2} · `}{i === 0 ? "INT. CANVAS" : i === 1 ? "EXT. MINDSPACE" : "INT. PIPELINE"} — REC ▸
              </p>
              <h3 className="mt-4 text-base font-light tracking-wide text-white/95">{f.title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-white/55">{f.desc}</p>
              <span aria-hidden className="absolute bottom-3 right-4 text-[9px] tracking-[0.25em] text-white/25 uppercase">
                take {i + 3}
              </span>
            </article>
          ))}
        </section>

        {/* Testimonial — soft interview light */}
        <section className="relative overflow-hidden border border-white/10 bg-[#0B0B0B] px-10 py-16 text-center">
          <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,196,142,0.14), transparent 55%)" }} />
          <blockquote className="relative mx-auto max-w-2xl text-2xl leading-relaxed font-extralight">
            “{copy.testimonial.quote}”
          </blockquote>
          <p className="relative mt-6 text-[10px] font-light tracking-[0.4em] uppercase text-white/50">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — the cut } */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className="relative border border-white/10 bg-[#0B0B0B] p-8"
              style={p.popular ? { borderColor: "rgba(245,196,142,0.5)" } : undefined}
            >
              {p.popular ? (
                <p className="mb-3 inline-block px-2 py-0.5 text-[9px] font-light tracking-[0.3em] uppercase" style={{ background: "#F5C48E", color: "#151515" }}>
                  Director's cut
                </p>
              ) : (
                <p className="mb-3 text-[9px] font-light tracking-[0.3em] uppercase text-white/40">
                  Feature
                </p>
              )}
              <p className="text-[11px] font-light tracking-[0.35em] uppercase text-white/70">{p.name}</p>
              <p className="mt-3 text-4xl font-extralight text-white">
                {p.price}
                <span className="text-sm text-white/40">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-white/50">{p.desc}</p>
              <span className="mt-6 block border-b border-white/25 pb-1 text-[11px] font-light tracking-[0.2em] uppercase">
                {p.cta} ⟶
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[10px] font-light tracking-[0.3em] uppercase text-white/35">
          {copy.pricingNote}
        </p>

        {/* End credits */}
        <footer className="border-t border-white/10 py-12 text-center">
          <p className="text-[10px] font-light tracking-[0.45em] uppercase text-white/45 leading-loose">
            Lumio — {copy.copyright}
            <br />
            No pixels were harmed · {copy.footerLinks.join(" · ")}
          </p>
          <div aria-hidden className="mx-auto mt-8 h-16 w-full max-w-md bg-gradient-to-b from-transparent to-black" />
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/20">cut here</p>
        </footer>
      </div>
    </div>
  );
}
