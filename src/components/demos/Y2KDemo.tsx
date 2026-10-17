import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const GLOSS = "shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-10px_14px_rgba(86,116,154,0.35)]";

export default function Y2KDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full overflow-hidden bg-gradient-to-b from-[#D7E9F7] via-[#E4DCF2] to-[#F5D7E8] p-6 font-sans text-[#233A55]">
      <div className="relative mx-auto max-w-5xl space-y-6">
        {/* Floating sparkles */}
        <span aria-hidden className="absolute -top-4 left-10 text-2xl opacity-70">✦</span>
        <span aria-hidden className="absolute right-16 top-40 text-xl opacity-60">✧</span>
        <span aria-hidden className="absolute bottom-24 left-4 text-2xl opacity-60">✦</span>

        {/* Nav */}
        <nav className={`flex items-center justify-between rounded-full bg-white/70 border-2 border-white px-6 py-3 backdrop-blur ${GLOSS}`}>
          <span className="text-lg font-black italic tracking-tight">lumio<span className="text-[#FF70C2]">✌</span></span>
          <div className="flex items-center gap-4 text-xs font-bold">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden hover:text-[#FF70C2] sm:inline">{l}</span>
            ))}
            <span className={`rounded-full bg-gradient-to-b from-white to-[#BFD8F2] px-5 py-1.5 font-black text-[#23486E] border-2 border-white ${GLOSS}`}>
              START ★
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative grid items-center gap-8 px-6 py-14 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-1 text-[11px] font-black tracking-widest uppercase">
              ✦ {copy.eyebrow} ✦
            </p>
            <h1
              className="text-4xl leading-[0.95] font-black italic tracking-tight sm:text-6xl"
              style={{
                backgroundImage: "linear-gradient(180deg, #FDFEFF 0%, #9BB8D3 45%, #4A6B93 75%, #8FA9C4 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 2px 1px rgba(255,255,255,0.9))",
              }}
            >
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm font-bold text-[#3D5A7A]">{copy.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className={`rounded-full border-2 border-white bg-gradient-to-b from-[#9ED6FF] to-[#4C86D8] px-7 py-3.5 text-xs font-black text-white uppercase ${GLOSS} `}>
                {copy.ctaPrimary} ▷
              </span>
              <span className={`rounded-full border-2 border-white bg-white/70 px-7 py-3.5 text-xs font-black uppercase text-[#3D5A7A] ${GLOSS}`}>
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          <div className="relative mx-auto md:col-span-2">
            <div
              className="size-48 rounded-[2.6rem_1rem_2.6rem_1rem] border-4 border-white"
              style={{
                background: "linear-gradient(135deg, #FDFEFF 0%, #A7C5E8 50%, #5A7FA9 100%)",
                boxShadow: "inset 0 4px 12px rgba(255,255,255,0.95), 0 18px 30px rgba(58,88,125,0.35)",
              }}
            />
            <span className="absolute -top-5 -right-4 rotate-12 rounded-full border-2 border-white bg-[#FF9EDE] px-3 py-1 text-[10px] font-black uppercase shadow">
              free 30 days ★
            </span>
            <span className="absolute bottom-2 left-1/2 mt-2 -translate-x-1/2 text-center text-[10px] font-bold">
              № 12 · THE FUTURE, 1999
            </span>
          </div>
        </section>

        {/* Features — bubbly mismatched radii */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className="border-2 border-white bg-white/70 p-7 backdrop-blur-sm"
              style={{
                borderRadius: ["3rem_1rem_1.8rem_2.6rem", "1.2rem_2.8rem_1rem_2rem", "2rem_1.2rem_2.8rem_1rem"][i % 3],
                boxShadow: "inset 0 2px 8px rgba(255,255,255,0.9), 0 10px 22px rgba(58,88,125,0.18)",
                transform: `rotate(${[-1, 1.5, -0.8][i % 3]}deg)`,
              }}
            >
              <div
                className={`grid size-12 place-items-center rounded-full border-2 border-white text-xl ${GLOSS}`}
                style={{ background: ["linear-gradient(135deg,#FFE0EE,#FF70C2)", "linear-gradient(135deg,#DDF0FF,#6FA7E8)", "linear-gradient(135deg,#FFF2B8,#E8C84A)"][i % 3] }}
              >
                {["⭐", "💿", "✨"][i % 3]}
              </div>
              <h3 className="mt-4 text-sm font-black italic">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed font-bold text-[#3D5A7A]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section
          className="relative mx-auto max-w-2xl border-4 border-white bg-white/70 p-10 text-center backdrop-blur"
          style={{ borderRadius: "3rem", boxShadow: "inset 0 2px 8px rgba(255,255,255,0.9), 0 14px 30px rgba(58,88,125,0.2)" }}
        >
          <p className="text-xl font-black italic">“{copy.testimonial.quote}”</p>
          <p className="mt-4 text-xs font-bold text-[#3D5A7A]">
            ～ {copy.testimonial.name} · {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-center text-3xl font-black italic tracking-tight">
            <span className="text-[#4C86D8]">{copy.pricingHeading}</span>
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div
                key={p.name}
                className="border-2 border-white bg-white/70 p-7 backdrop-blur"
                style={{
                  borderRadius: p.popular ? "1rem 3rem 1rem 3rem" : "2.4rem 1rem 1.2rem 2rem",
                  boxShadow: p.popular
                    ? "inset 0 2px 10px rgba(255,255,255,0.95), 0 16px 34px rgba(58,88,125,0.28)"
                    : "inset 0 2px 8px rgba(255,255,255,0.9), 0 10px 22px rgba(58,88,125,0.18)",
                  background: p.popular
                    ? "linear-gradient(135deg, #FDFEFF 0%, #B8C9DD 55%, #7E97B5 100%)"
                    : undefined,
                }}
              >
                {p.popular && (
                  <p className="mb-2 text-center text-[10px] font-black uppercase tracking-widest text-[#4A6B93]">
                    ★ millennium pick ★
                  </p>
                )}
                <p className="text-xs font-black uppercase tracking-widest">{p.name}</p>
                <p className="mt-3 text-4xl font-black italic">
                  {p.price}
                  <span className="text-sm">{p.period}</span>
                </p>
                <p className="mt-2 text-xs font-bold text-[#3D5A7A]">{p.desc}</p>
                <span className={`mt-6 block rounded-full border-2 border-white py-2.5 text-center text-xs font-black uppercase text-white ${GLOSS}`} style={{ background: p.popular ? "linear-gradient(180deg,#FF9EDE,#E755AF)" : "linear-gradient(180deg,#9ED6FF,#4C86D8)" }}>
                  {p.cta} ▷
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] font-bold text-[#3D5A7A]">{copy.pricingNote} ✧</p>
        </section>

        {/* Footer */}
        <footer className={`flex flex-wrap items-center justify-between gap-x-5 gap-y-1 rounded-full bg-white/70 border-2 border-white px-5 py-3.5 text-xs font-bold sm:px-6 ${GLOSS}`}>
          <span>{copy.copyright}</span>
          <div className="flex gap-4 text-[#3D5A7A]">
            {copy.footerLinks.map((l) => (
              <span key={l}>
                {l} <span className="text-[#FF70C2]">♪</span>
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
