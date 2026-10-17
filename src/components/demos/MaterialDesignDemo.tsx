import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const PRIMARY = "#6200EE";
const ELEV1 = "shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]";
const ELEV2 = "shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]";

export default function MaterialDesignDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#FAFAFA] font-sans text-[#212121] pb-16">
      {/* App bar */}
      <nav
        className="sticky top-0 z-10 flex h-16 items-center justify-between px-6 text-white"
        style={{ background: PRIMARY }}
      >
        <div className="flex items-center gap-5">
          <span aria-hidden className="text-lg">☰</span>
          <span className="text-sm font-medium">{copy.product}</span>
        </div>
        <div className="flex items-center gap-7 text-xs font-medium">
          {copy.navLinks.map((l) => (
            <span key={l} className="hidden opacity-90 sm:inline">{l}</span>
          ))}
          <span className="grid size-8 place-items-center rounded-full bg-white/20 text-base">🔮</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div
          aria-hidden
          className="h-52 w-full"
          style={{ background: "linear-gradient(120deg, #6200EE 0%, #3700B3 100%)" }}
        />
        <div className="mx-auto -mt-24 max-w-4xl px-6">
          <div className={`rounded-xl bg-white p-6 text-center sm:p-10 ${ELEV2}`}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6200EE]">
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-medium">{copy.heroTitle}</h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#616161]">
              {copy.heroSubtitle}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <span
                className="rounded-full px-6 py-2.5 text-xs font-medium text-white"
                style={{ background: PRIMARY, boxShadow: "0 2px 5px rgba(0,0,0,0.3)" }}
              >
                {copy.ctaPrimary}
              </span>
              <span className="px-6 py-2.5 text-xs font-medium text-[#6200EE]">{copy.ctaSecondary}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-16 max-w-4xl px-6">
        <h2 className="text-center text-2xl font-normal">{copy.featuresHeading}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article key={f.title} className={`rounded-xl bg-white p-7 text-left ${ELEV1}`}>
              <span
                className="grid size-12 place-items-center rounded-full text-xl text-white"
                style={{ background: PRIMARY }}
              >
                ✦
              </span>
              <h3 className="mt-5 text-sm font-medium">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#616161]">{f.desc}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[#6200EE]">
                Learn more →
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto mt-16 max-w-4xl px-6">
        <div className={`rounded-xl bg-[#F3E8FF] p-10 text-center ${ELEV1}`}>
          <p className="text-xl leading-relaxed font-normal text-[#38045C]">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-xs font-medium text-[#7E1CBE]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto mt-16 max-w-4xl px-6">
        <h2 className="text-center text-2xl font-normal">{copy.pricingHeading}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl bg-white p-7 text-left ${p.popular ? ELEV2 : ELEV1}`}
              style={p.popular ? { borderTop: "4px solid #6200EE" } : undefined}
            >
              {p.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-medium text-white"
                  style={{ background: PRIMARY }}
                >
                  Best value
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-wider text-[#616161]">{p.name}</p>
              <p className="mt-3 text-3xl font-medium">
                {p.price}
                <span className="text-sm text-[#9E9E9E]">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-[#616161]">{p.desc}</p>
              <span
                className={`mt-6 block rounded-full py-2.5 text-center text-xs font-medium ${
                  p.popular ? "text-white" : "text-[#6200EE]"
                }`}
                style={p.popular ? { background: PRIMARY } : { border: "1px solid #6200EE" }}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-[#9E9E9E]">{copy.pricingNote}</p>
      </section>

      {/* FAB */}
      <div className="fixed right-6 bottom-6 z-20">
        <span
          className="grid size-14 place-items-center rounded-2xl text-2xl text-white"
          style={{ background: PRIMARY, boxShadow: "0 6px 10px rgba(0,0,0,0.3)" }}
          aria-label="Floating action button"
        >
          +
        </span>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-16 max-w-4xl px-6">
        <div className="flex items-center justify-between rounded-t-xl bg-[#212121] px-6 py-5 text-xs text-white/70">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-white/90">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
