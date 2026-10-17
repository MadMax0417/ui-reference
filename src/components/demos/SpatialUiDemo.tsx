import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const PANEL =
  "rounded-[1.6rem] border border-black/[0.06] bg-white/65 backdrop-blur-2xl";
const DEEP = "shadow-[0_24px_70px_rgba(15,20,40,0.14),0_6px_18px_rgba(15,20,40,0.07)]";
const NEAR = "shadow-[0_14px_40px_rgba(15,20,40,0.10),0_4px_12px_rgba(15,20,40,0.05)]";

export default function SpatialUiDemo({ copy }: { copy: Landing }) {
  return (
    <div
      className="relative min-h-full p-8 font-sans text-[#1D1D24]"
      style={{
        background:
          "radial-gradient(60rem 40rem at 50% 20%, #F2F3F6 0%, #E2E4EA 60%, #CDD0D9 100%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl space-y-8">
        {/* Floating pill nav */}
        <nav className={`relative z-10 mx-auto flex w-fit items-center gap-5 rounded-full px-6 py-3 ${PANEL} ${DEEP}`}>
          <span className="text-sm font-semibold tracking-tight">◎ {copy.product}</span>
          {copy.navLinks.map((l) => (
            <span key={l} className="text-xs text-[#4A4C55]">{l}</span>
          ))}
          <span className="rounded-full bg-[#1D1D24] px-4 py-1.5 text-xs font-medium text-white">
            {copy.ctaPrimary}
          </span>
        </nav>

        {/* Hero glass window at depth — with ghost layers behind */}
        <section className="relative py-14">
          <div aria-hidden className={`absolute inset-x-10 top-10 h-72 ${PANEL}`} style={{ transform: "translateZ(-40px) scale(0.96) rotate(-1.2deg)", opacity: 0.45 }} />
          <div aria-hidden className={`absolute inset-x-24 top-20 h-72 ${PANEL}`} style={{ transform: "translateZ(-70px) scale(0.92) rotate(1.6deg)", opacity: 0.35 }} />

          <div className={`relative ${PANEL} ${DEEP} px-12 py-16 text-center`}>
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#8A8C96]">
              {copy.eyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl md:text-5xl leading-[1.12] font-semibold tracking-tight">
              {copy.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#55565F]">
              {copy.heroSubtitle}
            </p>
            {/* Segmented control instead of loud buttons */}
            <div className="mx-auto mt-9 flex w-fit items-center rounded-full bg-black/[0.06] p-1.5 backdrop-blur">
              <span className="rounded-full bg-white px-6 py-2.5 text-xs font-medium shadow-[0_4px_14px_rgba(15,20,40,0.14)]">
                {copy.ctaPrimary}
              </span>
              <span className="px-6 py-2.5 text-xs text-[#55565F]">{copy.ctaSecondary}</span>
            </div>
          </div>
        </section>

        {/* Features — panels at staggered depths */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className={`${PANEL} ${i === 1 ? DEEP : NEAR} p-8`}
              style={{ transform: `translateY(${[8, -6, 14][i]}px)` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#1D1D24]/[0.06] text-lg">
                  {["⚫a", "⌬", "◍"][i % 3]}
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#9A9CA6]">
                  {i === 1 ? "near ★" : "panel"}
                </span>
              </div>
              <h3 className="mt-5 text-sm font-semibold">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#55565F]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial — wide panel */}
        <section className={`${PANEL} ${NEAR} px-12 py-12 text-center`}>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-[#2C2D35]">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-xs text-[#55565F]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — depth-stacked */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <div
              key={p.name}
              className={`${PANEL} ${p.popular ? `${DEEP} border-white/80` : NEAR} p-8`}
              style={{ transform: `translateY(${p.popular ? "-10px" : [0, 0, 10][i]}px) scale(${p.popular ? 1.02 : 1})` }}
            >
              <p className="flex items-center justify-between text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8A8C96]">
                {p.name}
                {p.popular && <span className="rounded-full bg-[#1D1D24] px-2 py-0.5 text-[9px] text-white">Focus</span>}
              </p>
              <p className="mt-3 text-4xl font-semibold">
                {p.price}
                <span className="text-sm text-[#8A8C96]">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-[#55565F]">{p.desc}</p>
              <span
                className={`mt-6 block rounded-full py-2.5 text-center text-xs font-medium ${
                  p.popular ? "bg-[#1D1D24] text-white" : "bg-black/[0.05] text-[#3A3B44]"
                }`}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] text-[#8A8C96]">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className={`${PANEL} ${NEAR} mx-auto mb-4 flex w-fit items-center justify-between gap-10 rounded-full px-8 py-3 text-xs text-[#55565F]`}>
          <span>{copy.copyright}</span>
          <div className="flex gap-6 font-medium">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
