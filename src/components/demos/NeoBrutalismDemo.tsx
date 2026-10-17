import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const B = "border-2 border-[#1a1a1a]";
const S = "shadow-[4px_4px_0_#1a1a1a]";

export default function NeoBrutalismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#FFF6EC] p-5 font-sans text-[#1a1a1a]">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Nav */}
        <nav className={`flex flex-wrap items-center justify-between gap-3 rounded-full bg-white px-6 py-3 ${B} ${S}`}>
          <span className="flex items-center gap-2 text-lg font-black lowercase">
            <span className={`grid size-8 place-items-center rounded-full bg-[#FFD1DC] text-sm ${B}`}>✿</span>
            {copy.product}
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            {copy.navLinks.map((l) => (
              <span key={l} className="rounded-full border-2 border-transparent px-3 py-1.5 hover:bg-[#BDE3FF]">
                {l}
              </span>
            ))}
            <span className={`rounded-full bg-[#F9C74F] px-5 py-1.5 font-black lowercase ${B} ${S}`}>
              {copy.ctaPrimary} ✌
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className={`rounded-3xl bg-white p-10 lg:col-span-2 ${B} ${S}`}>
            <span className={`inline-block -rotate-1 rounded-lg bg-[#B8F1D9] px-3 py-1 text-[11px] font-black lowercase ${B}`}>
              {copy.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl leading-[1.02] font-black lowercase tracking-tight sm:text-5xl">
              <span className="inline-block -rotate-1 bg-[#F6D6FD] px-2">turn messy ideas</span>
              <br />
              into <span className="inline-block rotate-1 bg-[#BDE3FF] px-2">finished designs</span><span className="text-[#FF6B6B]">!</span>
            </h1>
            <p className="mt-5 max-w-md text-sm font-bold">{copy.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className={`rounded-full bg-[#F9C74F] px-7 py-3.5 text-xs font-black lowercase ${B} ${S}`}>
                {copy.ctaPrimary} ★
              </span>
              <span className={`rounded-full bg-white px-7 py-3.5 text-xs font-black lowercase ${B} ${S}`}>
                {copy.ctaSecondary} ▶
              </span>
            </div>
          </div>
          <div className={`grid place-items-center rounded-3xl bg-[#B8F1D9] p-8 lg:col-span-1 ${B} ${S}`}>
            <div className={`grid size-28 rotate-2 place-items-center rounded-2xl bg-white text-6xl ${B} ${S}`}>🎨</div>
            <span className={`mt-5 -rotate-2 rounded-lg bg-[#F6D6FD] px-3 py-1 text-[11px] font-black lowercase ${B}`}>
              free 30-day trial ★
            </span>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-black lowercase">{copy.featuresHeading}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article
                key={f.title}
                className={`rounded-2xl p-7 ${B} ${S}`}
                style={{ background: ["#FFD1DC", "#BDE3FF", "#F9C74F"][i % 3] }}
              >
                <span className={`grid size-12 place-items-center rounded-full bg-white text-xl ${B}`}>
                  {["✂️", "🪄", "📦"][i % 3]}
                </span>
                <h3 className="mt-4 text-base font-black lowercase">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed font-bold">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className={`flex flex-wrap items-center gap-6 rounded-3xl bg-white p-8 ${B} ${S}`}>
          <span className={`grid size-16 shrink-0 place-items-center rounded-full bg-[#BDE3FF] text-3xl ${B}`}>🌸</span>
          <div>
            <p className="text-xl font-black">“{copy.testimonial.quote}”</p>
            <p className="mt-2 text-xs font-bold lowercase">{copy.testimonial.name} — {copy.testimonial.role}</p>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-3xl font-black lowercase">{copy.pricingHeading}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {copy.plans.map((p, i) => (
              <div
                key={p.name}
                className={`relative rounded-2xl bg-white p-7 ${B} ${S}`}
                style={{ transform: `rotate(${[1, -1, 0.5][i % 3]}deg)` }}
              >
                {p.popular && (
                  <span className={`absolute -top-3 -right-2 -rotate-6 rounded-lg bg-[#F9C74F] px-2.5 py-1 text-[10px] font-black lowercase ${B}`}>
                    most popular ★
                  </span>
                )}
                <p className="text-xs font-black tracking-widest lowercase">{p.name}</p>
                <p className="mt-3 text-4xl font-black">
                  {p.price}
                  <span className="text-sm font-bold">{p.period}</span>
                </p>
                <p className="mt-2 text-xs font-bold">{p.desc}</p>
                <span className={`mt-5 block rounded-full py-2.5 text-center text-xs font-black lowercase ${B} ${p.popular ? "bg-[#FFD1DC]" : "bg-white"}`}>
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] font-bold lowercase">{copy.pricingNote} ✦</p>
        </section>

        {/* Footer */}
        <footer className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-full bg-white px-5 py-4 text-xs font-bold lowercase sm:px-6 ${B} ${S}`}>
          <span>{copy.copyright}</span>
          <div className="flex gap-4">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l} ↗</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
