import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const RULE = "border-t border-black";

export default function SwissDesignDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-white p-4 font-sans text-black sm:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Nav on grid, flush left */}
        <nav className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-4 ${RULE}`}>
          <span className="text-sm font-medium lowercase">lumio<sup className="text-red-600">®</sup></span>
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-widest sm:gap-8">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden sm:inline">{l}</span>
            ))}
            <span className="text-red-600">{copy.ctaPrimary} →</span>
          </div>
        </nav>

        {/* Hero in 12-col grid, flush left */}
        <section className="grid grid-cols-1 gap-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-red-600">
              {copy.eyebrow}
            </p>
            <h1 className="text-4xl leading-[0.95] font-medium lowercase tracking-tight sm:text-6xl">
              {copy.heroTitle.toLowerCase()}<span className="text-red-600">.</span>
            </h1>
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:mt-0">
            {[
              ["Product", "Canvas · Copilot · Export"],
              ["Format", "One calm workspace"],
              ["Release", "N° 04 — 2026"],
            ].map(([k, v]) => (
              <div key={k} className={`${RULE} pt-2`}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">{k}</p>
                <p className="mt-1 text-xs font-medium">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features: objective hairline columns */}
        <section>
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em]">
            {copy.featuresHeading} — 01
          </p>
          <div className={`grid gap-0 sm:grid-cols-3 sm:divide-x divide-black ${RULE}`}>
            {copy.featureCards.map((f, i) => (
              <article key={f.title} className="border-black px-0 py-8 sm:px-6 sm:first:pl-0">
                <p className="text-4xl font-medium text-red-600">0{i + 1}</p>
                <h3 className="mt-5 text-base font-medium lowercase">{f.title.toLowerCase()}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial: statement + red square */}
        <section className={`mt-20 border-black py-16 ${RULE}`}>
          <div className="flex gap-6">
            <span className="mt-2 size-3 shrink-0 bg-red-600" />
            <div>
              <p className="max-w-2xl text-2xl leading-snug font-medium lowercase">
                “{copy.testimonial.quote.toLowerCase()}”
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                {copy.testimonial.name}, {copy.testimonial.role}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing: objective table */}
        <section className="mt-20">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em]">
            {copy.pricingHeading} — 02
          </p>
          <div className={`${RULE}`}>
            {copy.plans.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-black py-5 sm:grid-cols-[5rem_1fr_7rem_auto]`}
              >
                <span className="text-xs font-medium uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium lowercase">{p.name.toLowerCase()}{p.popular ? <span className="text-red-600"> — chosen</span> : null}</span>
                <span className="text-2xl font-medium text-red-600">{p.price}</span>
                <span className="hidden text-[11px] uppercase tracking-widest sm:inline">{p.cta}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            {copy.pricingNote}
          </p>
        </section>

        {/* Footer */}
        <footer className={`mt-20 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t-2 border-black pt-4 pb-2`}>
          <span className="text-[11px] font-medium lowercase">{copy.copyright}</span>
          <div className="flex flex-wrap gap-4 text-[11px] uppercase tracking-widest sm:gap-6">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <span className="text-[11px] text-neutral-400">1/1</span>
        </footer>
      </div>
    </div>
  );
}
