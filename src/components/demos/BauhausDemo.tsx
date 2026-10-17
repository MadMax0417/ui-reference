import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const RED = "#E2574C";
const BLUE = "#2B5FAB";
const YELLOW = "#F4B41A";
const INK = "#1B1B1B";

export default function BauhausDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#F7F5F0] p-4 font-sans sm:p-8" style={{ color: INK }}>
      <div className="mx-auto max-w-5xl">
        {/* Nav: thick black rule */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-lg font-bold lowercase tracking-tight">
            {copy.product}<span style={{ color: RED }}>.</span>
          </span>
          <div className="flex items-center gap-7 text-xs font-bold lowercase tracking-wide">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden sm:inline">{l}</span>
            ))}
            <span className="px-5 py-2 text-xs font-bold lowercase text-white" style={{ background: BLUE }}>
              {copy.ctaPrimary}
            </span>
          </div>
        </nav>
        <div className="border-t-4 border-[#1B1B1B]" />

        {/* Hero — pure geometric composition */}
        <section className="relative grid min-h-[26rem] items-center gap-10 py-14 md:grid-cols-2">
          <div className="relative z-10 px-2">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: RED }}>
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-[0.98] font-bold lowercase tracking-tight sm:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed font-medium text-[#3E3C38]">
              {copy.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-8 py-3.5 text-xs font-bold lowercase text-white" style={{ background: INK }}>
                {copy.ctaPrimary} <span className="inline-block size-2.5 rounded-full" style={{ background: YELLOW }} />
              </span>
              <span className="px-8 py-3.5 text-xs font-bold lowercase" style={{ border: `2px solid ${INK}` }}>
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          {/* Composition: circle, quarter arc, bar */}
          <div className="relative h-72 md:h-80">
            <span aria-hidden className="absolute right-24 top-4 size-40 rounded-full" style={{ background: RED }} />
            <span aria-hidden className="absolute bottom-6 left-10 h-24 w-44 rounded-t-full" style={{ background: BLUE }} />
            <span aria-hidden className="absolute bottom-10 right-2 h-10 w-36 rotate-[-8deg]" style={{ background: YELLOW }} />
            <span aria-hidden className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px]" style={{ borderColor: INK, background: "#F7F5F0" }} />
            <svg aria-hidden viewBox="0 0 280 280" className="absolute inset-0 h-full w-full" fill="none">
              <path d="M0 270 L280 240" stroke={INK} strokeWidth="2" />
              <path d="M20 40 C 120 10, 220 60, 275 20" stroke={INK} strokeWidth="2" />
            </svg>
          </div>
        </section>
        <div className="border-t-4 border-[#1B1B1B]" />

        {/* Features — governed by the grid */}
        <section className="grid sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className={`p-9 sm:border-l-2 ${i === 0 ? "sm:border-l-0" : ""}`}
              style={{ borderColor: INK, borderTop: i === 1 ? `4px solid ${[RED, BLUE, YELLOW][i]}` : undefined }}
            >
              <span aria-hidden className={`block h-2 w-14 ${i !== 2 ? "" : ""}`} style={{ background: [RED, BLUE, YELLOW][i] }} />
              <div className="mt-6 flex items-center gap-3">
                <span aria-hidden className="size-7 rounded-full" style={{ background: [RED, BLUE, YELLOW][i] }} />
                <span aria-hidden className="size-7" style={{ background: INK }} />
                <span aria-hidden className="size-0 border-l-[14px] border-b-[24px] border-l-transparent" style={{ borderBottomColor: [RED, BLUE, YELLOW][i] }} />
              </div>
              <h3 className="mt-6 text-base font-bold lowercase">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed font-medium text-[#3E3C38]">{f.desc}</p>
            </article>
          ))}
        </section>
        <div className="border-t-4 border-[#1B1B1B]" />

        {/* Testimonial */}
        <section className="py-16 text-center">
          <span aria-hidden className="mx-auto block size-12 rounded-full" style={{ background: RED }} />
          <blockquote className="mx-auto mt-7 max-w-2xl text-2xl leading-snug font-bold lowercase">
            “{copy.testimonial.quote}”
          </blockquote>
          <p className="mt-5 inline-block px-3 py-1 text-xs font-bold lowercase" style={{ background: YELLOW }}>
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>
        <div className="border-t-4 border-[#1B1B1B]" />

        {/* Pricing — primary blocks */}
        <section className="grid sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <div
              key={p.name}
              className={`p-9 sm:border-l-2 ${i === 0 ? "sm:border-l-0" : ""}`}
              style={{ borderColor: INK, background: p.popular ? BLUE : "transparent", color: p.popular ? "#F7F5F0" : INK }}
            >
              <span aria-hidden className="grid size-8 place-items-center rounded-full text-xs font-bold" style={{ background: p.popular ? YELLOW : INK, color: p.popular ? INK : "#F7F5F0" }}>
                {["▲", "●", "■"][i]}
              </span>
              <p className="mt-6 text-xs font-bold lowercase tracking-[0.25em] uppercase">{p.name}</p>
              <p className="mt-3 text-4xl font-bold lowercase">
                {p.price}
                <span className="text-sm">{p.period}</span>
              </p>
              <p className={`mt-2 text-xs font-medium ${p.popular ? "text-[#F7F5F0]/80" : "text-[#3E3C38]"}`}>{p.desc}</p>
              <span
                className={`mt-7 block py-3 text-center text-xs font-bold lowercase ${p.popular ? "" : "border-2"}`}
                style={p.popular ? { background: INK, color: "#F7F5F0" } : { borderColor: INK }}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <div className="border-t-4 border-[#1B1B1B]" />

        {/* Footer + shape strip */}
        <footer className="py-6">
          <div className="flex items-center justify-between text-xs font-bold lowercase">
            <span>{copy.copyright}</span>
            <div className="flex gap-6">
              {copy.footerLinks.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
          <div aria-hidden className="mt-5 flex items-center justify-between">
            <span className="size-4 rounded-full" style={{ background: RED }} />
            <span className="h-1 w-24" style={{ background: INK }} />
            <span className="size-4" style={{ background: BLUE }} />
            <span className="h-1 w-24" style={{ background: INK }} />
            <span className="size-0 border-x-[10px] border-b-[18px] border-x-transparent" style={{ borderBottomColor: YELLOW }} />
            <span className="h-1 w-24" style={{ background: INK }} />
            <span className="size-4 rounded-full" style={{ background: RED }} />
          </div>
        </footer>
      </div>
    </div>
  );
}
