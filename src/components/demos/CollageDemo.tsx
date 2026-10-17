import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

/** Torn-paper edges via irregular clip-paths */
const TORN_A = "polygon(0% 4%, 6% 0%, 38% 3%, 70% 0%, 100% 5%, 97% 38%, 100% 66%, 96% 100%, 64% 96%, 30% 100%, 4% 97%, 2% 70%)";
const TORN_B = "polygon(0% 0%, 55% 2%, 100% 0%, 98% 50%, 100% 95%, 55% 97%, 15% 100%, 2% 94%, 0% 55%)";
const TORN_C = "polygon(3% 0%, 100% 3%, 96% 40%, 100% 80%, 94% 100%, 40% 96%, 0% 100%, 4% 55%)";

function Tape({ className, color = "#E9DAB4" }: { className?: string; color?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-7 w-24 ${className}`}
      style={{ background: color, opacity: 0.85, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
    />
  );
}

export default function CollageDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full overflow-hidden p-8" style={{ background: "#EFE3D3", fontFamily: "ui-sans-serif" }}>
      <div className="relative mx-auto max-w-5xl">
        {/* Photo scraps floating */}
        <div aria-hidden className="absolute -top-6 right-10 h-24 w-40 rotate-6" style={{ background: "linear-gradient(120deg,#94B7C6,#5E7E90)", clipPath: TORN_B, opacity: 0.8 }} />
        <div aria-hidden className="absolute -bottom-8 -left-2 h-28 w-36 -rotate-6" style={{ background: "linear-gradient(120deg,#D8A47F,#B06B4A)", clipPath: TORN_C, opacity: 0.75 }} />

        {/* Nav — scraps taped to the wall */}
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div className="relative bg-white px-7 py-4 shadow-md rotate-[-1deg]" style={{ clipPath: TORN_A }}>
            <span className="text-2xl tracking-tight" style={{ fontFamily: "ui-serif, Georgia" }}>
              Lumio<span className="text-[#B06B4A]">&</span>
            </span>
            <Tape className="-top-3 left-6 -rotate-3" />
          </div>
          <div className="relative flex gap-2">
            {copy.navLinks.map((l, i) => (
              <span
                key={l}
                className="relative bg-[#FBF7EE] px-4 py-2.5 text-xs font-bold shadow-md"
                style={{ clipPath: TORN_B, transform: `rotate(${[1.5, -1, 2][i]}deg)`, fontFamily: "ui-monospace" }}
              >
                {l}
              </span>
            ))}
            <span
              className="relative bg-[#B06B4A] px-4 py-2.5 text-xs font-bold text-white shadow-md"
              style={{ clipPath: TORN_C, transform: "rotate(-2deg)" }}
            >
              {copy.ctaPrimary} →
            </span>
          </div>
        </div>

        {/* Hero — words on separate scraps + taped photo */}
        <section className="relative mt-14 grid gap-10 py-8 md:grid-cols-2">
          <div className="relative">
            <h1 className="relative leading-[1.02]">
              <span className="relative inline-block bg-white px-5 py-3 text-5xl font-bold shadow-lg rotate-[-1.5deg]" style={{ clipPath: TORN_A, fontFamily: "ui-serif, Georgia" }}>
                turn messy
              </span>
              <br />
              <span className="relative inline-block -mt-2 bg-[#B06B4A] px-5 py-3 text-5xl font-bold text-[#FBF7EE] shadow-lg rotate-[1.2deg]" style={{ clipPath: TORN_B, fontFamily: "ui-monospace" }}>
                ideas into
              </span>
              <br />
              <span className="relative inline-block -mt-2 bg-white px-5 py-3 text-5xl font-bold shadow-lg rotate-[-1deg]" style={{ clipPath: TORN_C, fontFamily: "ui-serif, Georgia" }}>
                finished designs
              </span>
            </h1>
            <div className="relative mt-8 max-w-md bg-[#FBF7EE] p-5 shadow-md rotate-[0.8deg]" style={{ clipPath: TORN_B }}>
              <Tape className="-top-3.5 left-10 rotate-2" />
              <p className="text-sm leading-relaxed text-[#4A3F35]">{copy.heroSubtitle}</p>
            </div>
            <div className="mt-8 flex gap-5">
              <span className="relative bg-[#1E1B16] px-7 py-3.5 text-xs font-bold text-[#FBF7EE] shadow-md rotate-[-1deg]" style={{ clipPath: TORN_C }}>
                {copy.ctaPrimary} ✂
              </span>
              <span className="relative bg-white px-7 py-3.5 text-xs font-bold shadow-md rotate-[1deg]" style={{ clipPath: TORN_A }}>
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          {/* Taped photo stack */}
          <div className="relative mx-auto w-72">
            <div className="relative h-64 w-full rotate-[2deg] shadow-xl" style={{ background: "linear-gradient(135deg,#94B7C6,#4E6E80)", clipPath: TORN_A }}>
              <Tape className="-top-3.5 left-1/2 -translate-x-1/2 -rotate-2" />
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-widest text-white/80" style={{ fontFamily: "ui-monospace" }}>
                fig. 01 — the idea
              </p>
            </div>
            <div className="absolute inset-x-10 top-2 h-52 w-60 rotate-[-4deg] shadow-lg" style={{ background: "linear-gradient(135deg,#D8A47F,#98522F)", clipPath: TORN_B }}>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/80" style={{ fontFamily: "ui-monospace" }}>
                fig. 02 — after lumio
              </p>
            </div>
          </div>
        </section>

        {/* Features — torn zine clippings */}
        <section className="relative mt-14 grid gap-9 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className="relative bg-white p-7 pt-10 shadow-md"
              style={{
                clipPath: [TORN_A, TORN_B, TORN_C][i],
                transform: `rotate(${[-1.8, 1.2, -0.9][i]}deg)`,
                background: ["#FFFFFF", "#FBF7EE", "#FFF6E3"][i],
              }}
            >
              <Tape className={i % 2 ? "-top-3 right-6 rotate-3" : "-top-3 left-6 -rotate-2"} color={["#E9DAB4", "#FFC4DC", "#A8D8D0"][i]} />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B06B4A]" style={{ fontFamily: "ui-monospace" }}>
                clipping № 0{i + 1}
              </p>
              <h3 className="mt-2 text-lg font-bold" style={{ fontFamily: "ui-serif, Georgia" }}>
                {f.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4A3F35]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial — lined notebook scrap */}
        <section className="relative mx-auto mt-16 max-w-2xl bg-white p-9 pb-8 shadow-lg rotate-[-1deg]" style={{ clipPath: TORN_C }}>
          <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
          <p
            className="text-lg leading-[2.2]"
            style={{
              fontFamily: "ui-serif, Georgia",
              backgroundImage: "repeating-linear-gradient(0deg, transparent 0 29px, rgba(176,107,74,0.35) 29px 30px)",
            }}
          >
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-3 text-xs font-bold text-[#4A3F35]" style={{ fontFamily: "ui-monospace" }}>
            — {copy.testimonial.name} · {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — cardstock cutouts */}
        <section className="mt-16 grid gap-9 sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative p-8 pt-10 shadow-lg ${p.popular ? "" : "bg-[#FBF7EE]"}`}
              style={{
                clipPath: [TORN_B, TORN_A, TORN_C][i],
                transform: `rotate(${[1.5, -1.2, 1][i]}deg)`,
                background: p.popular ? "#B06B4A" : undefined,
                color: p.popular ? "#FBF7EE" : "#1E1B16",
              }}
            >
              <Tape className="-top-3 left-8 rotate-1" color={p.popular ? "#FFC4DC" : "#E9DAB4"} />
              {p.popular && (
                <p className="mb-3 inline-block bg-white px-2 py-0.5 text-[10px] font-bold uppercase" style={{ clipPath: TORN_C, fontFamily: "ui-monospace" }}>
                  the zine picks it
                </p>
              )}
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: "ui-monospace", color: p.popular ? "#FFE0C6" : "#B06B4A" }}>
                {p.name}
              </p>
              <p className="mt-3 text-4xl font-bold" style={{ fontFamily: "ui-serif, Georgia" }}>
                {p.price}
                <span className="text-sm opacity-70">{p.period}</span>
              </p>
              <p className="mt-2 text-xs" style={{ color: p.popular ? "#FFE0C6" : "#4A3F35" }}>
                {p.desc}
              </p>
              <span
                className="mt-6 inline-block border-2 border-dashed px-5 py-2 text-xs font-bold"
                style={{ borderColor: p.popular ? "#FFE0C6" : "#1E1B16" }}
              >
                {p.cta} ✂
              </span>
            </div>
          ))}
        </section>
        <p className="mt-10 text-center text-[10px] uppercase tracking-widest text-[#4A3F35]" style={{ fontFamily: "ui-monospace" }}>
          {copy.pricingNote} — cut along dotted lines
        </p>

        {/* Footer */}
        <footer className="mt-14 flex items-center justify-between text-xs text-[#4A3F35]">
          <span className="bg-white px-4 py-2 shadow-md rotate-[-1deg]" style={{ clipPath: TORN_B }}>
            {copy.copyright}
          </span>
          <div className="flex gap-6 font-bold" style={{ fontFamily: "ui-monospace" }}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l} ✂</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
