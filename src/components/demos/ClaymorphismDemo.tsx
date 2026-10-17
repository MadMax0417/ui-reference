import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const CLAY = {
  background: "linear-gradient(145deg, #ffffff 0%, #eef2ff 60%, #e0e7ff 100%)",
  boxShadow: "0 22px 40px -12px rgba(60, 80, 220, 0.35), inset 0 3px 8px rgba(255,255,255,0.9)",
};

export default function ClaymorphismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-gradient-to-b from-[#EEF2FF] via-[#FDF4FF] to-[#E0F2FE] p-6 font-sans text-[#3B3B58]">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Nav */}
        <nav className="flex items-center justify-between rounded-[2rem] bg-white/80 px-7 py-4 shadow-[0_18px_35px_-12px_rgba(99,102,241,0.35),inset_0_3px_6px_rgba(255,255,255,0.9)] backdrop-blur">
          <span className="text-sm font-extrabold text-[#4F46E5]">{copy.product}</span>
          <div className="flex items-center gap-2 text-xs font-bold text-[#5B5BD6]">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden rounded-full bg-white px-4 py-2 shadow-sm sm:inline-block">
                {l}
              </span>
            ))}
            <span className="rounded-full bg-[#4F46E5] px-5 py-2 text-white shadow-[0_10px_20px_-6px_rgba(79,70,229,0.6)]">
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="rounded-[2.5rem] px-5 py-12 text-center sm:px-10 sm:py-16" style={CLAY}>
          <div className="mx-auto grid size-24 place-items-center rounded-[2rem] bg-gradient-to-br from-[#818CF8] to-[#6366F1] text-4xl text-white shadow-[0_20px_35px_-10px_rgba(99,102,241,0.6),inset_0_4px_10px_rgba(255,255,255,0.45)]">
            🫧
          </div>
          <p className="mt-6 text-[11px] font-extrabold tracking-[0.25em] text-[#6366F1] uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-xl text-4xl leading-tight font-extrabold">
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed font-medium text-[#64748B]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-gradient-to-b from-[#6366F1] to-[#4F46E5] px-8 py-4 text-xs font-extrabold text-white shadow-[0_16px_30px_-8px_rgba(79,70,229,0.65),inset_0_3px_8px_rgba(255,255,255,0.4)]">
              {copy.ctaPrimary} ✦
            </span>
            <span className="rounded-full bg-white px-8 py-4 text-xs font-extrabold text-[#4F46E5] shadow-[0_14px_28px_-10px_rgba(99,102,241,0.4),inset_0_3px_8px_rgba(255,255,255,0.9)]">
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article
              key={f.title}
              className="rounded-[2rem] bg-white p-8 shadow-[0_20px_38px_-12px_rgba(99,102,241,0.35),inset_0_3px_8px_rgba(255,255,255,0.9)]"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#FBCFE8] to-[#F472B6] text-2xl shadow-[0_12px_22px_-8px_rgba(244,114,182,0.55),inset_0_3px_6px_rgba(255,255,255,0.5)]">
                ✿
              </div>
              <h3 className="mt-5 text-sm font-extrabold text-[#3B3B58]">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed font-medium text-[#64748B]">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section className="rounded-[2.5rem] bg-white px-10 py-12 text-center shadow-[0_22px_40px_-12px_rgba(99,102,241,0.35),inset_0_3px_8px_rgba(255,255,255,0.9)]">
          <p className="text-xl leading-relaxed font-bold text-[#3B3B58]">
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-xs font-bold text-[#6366F1]">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className="rounded-[2rem] bg-white p-8 shadow-[0_20px_38px_-12px_rgba(99,102,241,0.35),inset_0_3px_8px_rgba(255,255,255,0.9)]"
            >
              {p.popular && (
                <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-[#FB7185] to-[#F472B6] px-3 py-1 text-[10px] font-extrabold text-white uppercase shadow-[0_8px_16px_-6px_rgba(251,113,133,0.6)]">
                  Most popular
                </span>
              )}
              <p className="text-xs font-extrabold tracking-widest text-[#6366F1] uppercase">
                {p.name}
              </p>
              <p className="mt-2 text-3xl font-black text-[#3B3B58]">
                {p.price}
                <span className="text-sm text-[#94A3B8]">{p.period}</span>
              </p>
              <p className="mt-1 text-xs font-medium text-[#64748B]">{p.desc}</p>
              <span
                className={`mt-6 block rounded-full py-3 text-center text-xs font-extrabold ${
                  p.popular
                    ? "bg-gradient-to-b from-[#6366F1] to-[#4F46E5] text-white shadow-[0_12px_24px_-8px_rgba(79,70,229,0.6),inset_0_3px_8px_rgba(255,255,255,0.35)]"
                    : "bg-white text-[#4F46E5] shadow-[0_10px_20px_-8px_rgba(99,102,241,0.4),inset_0_3px_8px_rgba(255,255,255,0.9)]"
                }`}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] font-bold text-[#818CF8]">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-[2rem] bg-white/80 px-5 py-5 text-xs font-bold text-[#64748B] shadow-[0_14px_28px_-12px_rgba(99,102,241,0.3)] sm:px-7">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-[#4F46E5]">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
