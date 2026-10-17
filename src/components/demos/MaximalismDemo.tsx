import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function MaximalismDemo({ copy }: { copy: Landing }) {
  return (
    <div
      className="relative min-h-full overflow-hidden p-6 font-sans text-[#1D1145]"
      style={{
        background:
          "repeating-linear-gradient(135deg, rgba(255,62,181,0.08) 0 14px, rgba(122,111,240,0.08) 14px 28px),#FFF6F2",
      }}
    >
      {/* Floating emoji confetti */}
      {["✿", "★", "✦", "✌", "❋", "⚡", "♥", "☎"].map((e, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-3xl"
          style={{
            top: [4, 14, 30, 46, 8, 24, 55, 70][i] + "%",
            left: [6, 78, 14, 88, 45, 62, 26, 70][i] + "%",
            transform: `rotate(${[20, -14, 8, -8, 24, 30, -20, 10][i]}deg)`,
            opacity: 0.75,
          }}
        >
          {e}
        </span>
      ))}

      <div className="relative mx-auto max-w-5xl space-y-8">
        {/* Over-dressed nav */}
        <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-7 py-5 border-4 border-[#1D1145]" style={{ boxShadow: "10px 10px 0 #FF3EB5, 20px 20px 0 #F9C74F" }}>
          <span className="text-3xl font-black italic tracking-tight" style={{ fontFamily: "serif" }}>
            Lumio<span className="text-[#FF3EB5]">✦</span>
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase">
            {copy.navLinks.map((l, i) => (
              <span
                key={l}
                className="px-3 py-2 border-2 border-[#1D1145]"
                style={{
                  background: ["#F9C74F", "#B8F1D9", "#FFC2E3"][i % 3],
                  borderRadius: i % 2 ? "2rem 0 2rem 0" : "0 2rem 0 2rem",
                  borderStyle: ["solid", "dashed"][i % 2],
                }}
              >
                {l}
              </span>
            ))}
            <span className="px-5 py-2 border-2 border-[#1D1145] text-white" style={{ background: "#7A6FF0", boxShadow: "4px 4px 0 #FF3EB5", borderRadius: "2rem 0 2rem 0" }}>
              {copy.ctaPrimary} ★
            </span>
          </div>
        </nav>

        {/* Stacked type hero */}
        <section className="relative z-10 pt-14 pb-10 text-center">
          <p className="mx-auto w-fit px-4 py-1.5 text-[11px] font-black tracking-[0.35em] uppercase bg-[#1D1145] text-[#F9C74F]">
            ✿ {copy.eyebrow} ✿
          </p>
          <h1 className="mt-4 leading-[0.86]">
            <span className="block text-6xl font-black text-[#7A6FF0] italic">turn messy</span>
            <span className="-mt-2 block text-7xl font-black text-[#FF3EB5]">ideas into</span>
            <span className="-mt-3 block text-6xl font-black text-[#1D1145]" style={{ fontFamily: "serif", fontStyle: "italic" }}>
              finished designs
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-md bg-white border-2 border-[#1D1145] px-5 py-3 text-sm font-bold rotate-[-1deg]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-5">
            <span className="px-9 py-4 text-xs font-black uppercase border-2 border-[#1D1145] text-white" style={{ background: "#FF3EB5", boxShadow: "6px 6px 0 #1D1145", borderRadius: "0 2rem 0 2rem" }}>
              {copy.ctaPrimary} ★
            </span>
            <span className="px-9 py-4 text-xs font-black uppercase border-2 border-[#1D1145] bg-white" style={{ boxShadow: "6px 6px 0 #7A6FF0", borderRadius: "2rem 0 2rem 0" }}>
              {copy.ctaSecondary} ☞
            </span>
          </div>
        </section>

        {/* Clash-of-patterns features */}
        <section className="grid gap-7 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className={`p-7 border-4 border-[#1D1145] ${["-rotate-2", "rotate-1", "-rotate-1"][i]}`}
              style={{
                background: [
                  "repeating-linear-gradient(45deg, #FFD93D 0 10px, #FF6B6B 10px 20px)",
                  "repeating-linear-gradient(0deg, #F6D6FD 0 12px, #90E1EF 12px 24px)",
                  "repeating-linear-gradient(90deg, #B8F1D9 0 16px, #F9C74F 16px 32px)",
                ][i],
                boxShadow: ["8px 8px 0 #1D1145", "-8px 8px 0 #FF3EB5", "10px -6px 0 #7A6FF0"][i],
                borderRadius: ["0 0 2.5rem 0", "2.5rem 0 0 2.5rem", "0 2.5rem 0 2.5rem"][i],
              }}
            >
              <span className="inline-block bg-white border-2 border-[#1D1145] px-4 py-2 text-3xl">{["✺", "❋", "✦"][i]}</span>
              <h3 className="mt-4 text-base font-black uppercase" style={{ fontFamily: i === 1 ? "serif" : undefined }}>
                {f.title}
              </h3>
              <p className="mt-2 bg-white/85 border-2 border-[#1D1145]/60 p-2 text-xs leading-relaxed font-bold">
                {f.desc}
              </p>
            </article>
          ))}
        </section>

        {/* Everything everywhere testimonial */}
        <section className="relative mx-auto max-w-3xl border-4 border-[#1D1145] bg-white p-10 text-center" style={{ boxShadow: "0 0 0 6px #F9C74F, 0 0 0 12px #FF3EB5" }}>
          <p className="text-2xl font-black italic leading-snug" style={{ fontFamily: "serif" }}>
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 inline-block px-3 py-1 text-xs font-black uppercase bg-[#1D1145] text-[#90E1EF]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Rainbow pricing */}
        <section className="grid gap-7 sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative border-4 bg-white p-8 ${["rotate-1", "-rotate-1", "rotate-1"][i]}`}
              style={{ borderColor: ["#FF3EB5", "#7A6FF0", "#1D1145"][i], boxShadow: ["8px 8px 0 #F9C74F", "8px 8px 0 #FF6B6B", "8px 8px 0 #90E1EF"][i], borderRadius: ["0 2.5rem 0 2.5rem", "2.5rem 0 0 2.5rem", "0 0 0 2.5rem"][i] }}
            >
              {p.popular && (
                <p className="absolute -top-4 left-6 -rotate-3 px-3 py-1 text-[10px] font-black uppercase border-2 border-[#1D1145] bg-[#F9C74F]">
                  THE ONE ★
                </p>
              )}
              <p className="text-xs font-black uppercase tracking-widest" style={{ color: ["#FF3EB5", "#7A6FF0", "#1D1145"][i] }}>
                {p.name}
              </p>
              <p className="mt-3 text-5xl font-black" style={{ background: "linear-gradient(120deg,#FF3EB5,#7A6FF0 50%,#F9C74F)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                {p.price}
                <span className="text-base">{p.period}</span>
              </p>
              <p className="mt-2 text-xs font-bold">{p.desc}</p>
              <span
                className="mt-6 block border-2 border-[#1D1145] py-3 text-center text-xs font-black uppercase text-white"
                style={{ background: ["#7A6FF0", "#FF3EB5", "#1D1145"][i], borderRadius: i % 2 ? "0 1.5rem 0 1.5rem" : "1.5rem 0 1.5rem 0" }}
              >
                {p.cta} ✿
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] font-black uppercase tracking-widest border-y-4 border-dashed border-[#FF3EB5] py-2">{copy.pricingNote} ★ ✦ ✿</p>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t-4 border-[#1D1145] bg-white px-6 py-4 text-xs font-black uppercase">
          <span>{copy.copyright}</span>
          <div className="flex gap-4">
            {copy.footerLinks.map((l, i) => (
              <span key={l} className="px-2 py-1 border-2 border-[#1D1145]" style={{ background: ["#F9C74F", "#90E1EF", "#FFC2E3"][i], borderRadius: "0 1rem 0 1rem" }}>
                {l}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
