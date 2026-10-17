import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const GREEN = "#58C24F";
const RED = "#E15A4E";
const EDGE = { border: "2px solid #0B0B0B" };

/** Tiny pixel-bitmap icons built from CSS grid cells */
function PixIcon({ bits, size = 4 }: { bits: boolean[][]; size?: number }) {
  return (
    <div className="grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${size}, 6px)` }}>
      {bits.flat().map((on, i) => (
        <div key={i} className="size-[6px]" style={{ background: on ? GREEN : "transparent" }} />
      ))}
    </div>
  );
}

const HEART = [
  [false, true, true, false, true, true, false],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [false, true, true, true, true, true, false],
  [false, false, true, true, true, false, false],
  [false, false, false, true, false, false, false],
];
const BOLT = [
  [false, false, true, true],
  [false, true, true, false],
  [true, true, true, true],
  [true, false, true, false],
  [false, false, true, false],
];
const BOX = [
  [true, true, true, true],
  [true, false, false, true],
  [true, false, false, true],
  [true, true, true, true],
];

export default function PixelArtDemo({ copy }: { copy: Landing }) {
  return (
    <div
      className="min-h-full p-7 font-mono text-[#EAEAEA]"
      style={{
        background:
          "linear-gradient(45deg, rgba(255,255,255,0.025) 25%, transparent 25% 75%, rgba(255,255,255,0.025) 75%), #101014",
        backgroundSize: "8px 8px, 100% 100%",
      }}
    >
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-widest" style={{ ...EDGE, boxShadow: "4px 4px 0 #000" }}>
          <span>★ {copy.product} — PRESS START ★</span>
          <span className="text-[#58C24F]">1UP READY</span>
        </div>

        {/* Nav */}
        <nav className="grid grid-cols-6 text-[11px] font-bold uppercase tracking-wider">
          {[
            { label: copy.product, wide: true },
            ...copy.navLinks.map((l) => ({ label: l, wide: false })),
            { label: copy.ctaPrimary, wide: true },
          ].map((item, i) => (
            <span
              key={i}
              className={`px-4 py-3 text-center ${i === 0 || item.wide ? "col-span-2" : "col-span-1"}`}
              style={{
                ...EDGE,
                marginLeft: -2,
                marginTop: -2,
                background: i === 5 ? GREEN : i === 0 ? "#0B0B0B" : "transparent",
                color: i === 5 ? "#101014" : "#EAEAEA",
                boxShadow: "3px 3px 0 #000",
              }}
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* Hero */}
        <section className="grid items-center gap-8 px-4 py-14 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#58C24F]">
              &gt; LOAD {copy.eyebrow}.exe
            </p>
            <h1 className="mt-4 text-4xl leading-[1.15] font-bold uppercase" style={{ textShadow: "3px 3px 0 #000" }}>
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-[#B9B9C2]">{copy.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-7 py-3.5 text-xs font-bold uppercase" style={{ ...EDGE, background: GREEN, color: "#101014", boxShadow: "5px 5px 0 #000" }}>
                {copy.ctaPrimary} ▶
              </span>
              <span className="px-7 py-3.5 text-xs font-bold uppercase" style={{ ...EDGE, boxShadow: "5px 5px 0 #000" }}>
                {copy.ctaSecondary}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#B9B9C2]">
              lives: <PixIcon bits={HEART} size={7} /> <PixIcon bits={HEART} size={7} /> <PixIcon bits={HEART} size={7} />
            </div>
          </div>
          <div className="grid place-items-center rounded-none" style={{ ...EDGE, boxShadow: "6px 6px 0 #000", background: "#0B0B0B" }}>
            <div className="grid grid-cols-4 gap-[2px] p-6" style={{ gridTemplateColumns: "repeat(4, 20px)" }}>
              {[
                [0, 0, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 1],
                [1, 1, 0, 1, 1, 1, 0, 1],
                [0, 1, 0, 0, 0, 1, 1, 0],
              ]
                .flat()
                .map((on, i) => (
                  <div
                    key={i}
                    style={{ width: 20, height: 20, background: on ? [GREEN, RED, "#F0D44C"][Math.floor(i / 4)] : "#000", outline: "1px solid #000" }}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="border-b-2 border-[#58C24F] pb-2 text-lg font-bold uppercase tracking-wider" style={{ textShadow: "2px 2px 0 #000" }}>
            {copy.featuresHeading}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article key={f.title} className="p-7" style={{ ...EDGE, boxShadow: "5px 5px 0 #000", background: "#0B0B0B" }}>
                <PixIcon bits={[HEART, BOLT, BOX][i % 3]} size={[7, 4, 4][i % 3]} />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider" style={{ color: GREEN }}>{f.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#B9B9C2]">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-8 py-10" style={{ ...EDGE, boxShadow: "6px 6px 0 #000", background: "#0B0B0B" }}>
          <p className="text-lg leading-relaxed">“{copy.testimonial.quote}”</p>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-[#58C24F]">
            ★ PLAYER_ONE: {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="border-b-2 border-[#E15A4E] pb-2 text-lg font-bold uppercase tracking-wider" style={{ textShadow: "2px 2px 0 #000" }}>
            {copy.pricingHeading}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div key={p.name} className="p-7" style={{ ...EDGE, background: p.popular ? GREEN : "#0B0B0B", color: p.popular ? "#101014" : "#EAEAEA", boxShadow: "5px 5px 0 #000" }}>
                {p.popular && (
                  <p className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase" style={{ border: "2px solid #101014", background: "#F0D44C" }}>
                    ★ BEST SCORE
                  </p>
                )}
                <p className="mt-3 text-xs font-bold uppercase tracking-widest">{p.name}</p>
                <p className="mt-2 text-4xl font-bold">
                  {p.price}
                  <span className="text-sm opacity-70">{p.period}</span>
                </p>
                <p className={`mt-2 text-xs ${p.popular ? "opacity-80" : "text-[#B9B9C2]"}`}>{p.desc}</p>
                <span className="mt-6 block px-4 py-2.5 text-center text-xs font-bold uppercase" style={{ ...EDGE, background: p.popular ? "#101014" : GREEN, color: p.popular ? "#EAEAEA" : "#101014", boxShadow: "3px 3px 0 rgba(255,255,255,0.15)" }}>
                  {p.cta} ▶
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-[#B9B9C2]">{copy.pricingNote}</p>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between px-2 pb-2 text-[10px] uppercase tracking-widest text-[#B9B9C2]">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-[#58C24F]">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l.toUpperCase()}</span>
            ))}
          </div>
          <span>GAME OVER? TRY ANOTHER STYLE ▼</span>
        </footer>
      </div>
    </div>
  );
}
