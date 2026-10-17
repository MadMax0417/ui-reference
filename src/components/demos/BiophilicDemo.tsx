import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const MOSS = "#4F7A52";
const SAND = "#F3F0E4";

export default function BiophilicDemo({ copy }: { copy: Landing }) {
  const leafCard = "rounded-[3rem_1.2rem_3rem_1.2rem]";
  return (
    <div className="min-h-full p-6 font-sans" style={{ background: SAND, color: "#2F3B2F" }}>
      <div className="mx-auto max-w-5xl space-y-7">
        {/* Nav — soft floating seed */}
        <nav className={`mx-auto flex w-fit items-center gap-8 rounded-full bg-[#FBFAF2] px-8 py-3.5 shadow-[0_10px_30px_rgba(79,122,82,0.12)]`}>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid size-8 place-items-center rounded-full bg-[#E4EDD8] text-base">🌱</span>
            {copy.product}
          </span>
          <div className="flex gap-6 text-xs font-medium text-[#5C685A]">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <span
            className="rounded-full px-5 py-2 text-xs font-semibold text-white"
            style={{ background: MOSS }}
          >
            {copy.ctaPrimary}
          </span>
        </nav>

        {/* Hero — breathing space + leaf blob */}
        <section className="grid items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: MOSS }}>
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl leading-[1.1] font-semibold tracking-tight">
              {copy.heroTitle}
              <span className="text-[#A3B896]">.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-loose text-[#5C685A]">{copy.heroSubtitle}</p>
            <div className="mt-9 flex gap-4">
              <span className="rounded-full px-8 py-4 text-xs font-semibold text-white" style={{ background: MOSS }}>
                {copy.ctaPrimary} 🍃
              </span>
              <span className="rounded-full border border-[#4F7A52]/35 px-8 py-4 text-xs font-semibold text-[#4F7A52]">
                {copy.ctaSecondary}
              </span>
            </div>
          </div>
          <div className="relative">
            <div
              className={`h-80 ${leafCard}`}
              style={{
                background: "linear-gradient(150deg, #CBDDB4 0%, #94B77F 55%, #6B9A67 100%)",
                boxShadow: "0 30px 60px rgba(79,122,82,0.25)",
              }}
            />
            <div className={`absolute -bottom-4 -left-4 h-28 w-28 rounded-[3rem_0.5rem_3rem_0.5rem] bg-[#E4EDD8]`} />
            <span aria-hidden className="animate-[float-slow_8s_ease-in-out_infinite] absolute -top-8 right-8 text-4xl">🪴</span>
          </div>
        </section>

        {/* Features — alternating leaf radii */}
        <section>
          <h2 className="text-center text-3xl font-semibold tracking-tight">{copy.featuresHeading}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {copy.featureCards.map((f, i) => (
              <article
                key={f.title}
                className={`bg-[#FBFAF2] p-8 shadow-[0_18px_40px_rgba(79,122,82,0.14)] ${
                  i % 2 ? "rounded-[1.2rem_3rem_1.2rem_3rem]" : leafCard
                }`}
              >
                <span
                  className={`grid size-12 place-items-center bg-[#E4EDD8] text-xl ${i % 2 ? "rounded-[1rem_2rem_1rem_2rem]" : "rounded-[2rem_1rem_2rem_1rem]"}`}
                >
                  {["🌿", "🪷", "🍃"][i % 3]}
                </span>
                <h3 className="mt-5 text-sm font-semibold">{f.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#5C685A]">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className={`mx-auto max-w-3xl rounded-[2rem_3.5rem_2rem_3.5rem] bg-[#FBFAF2] px-12 py-12 text-center shadow-[0_22px_50px_rgba(79,122,82,0.15)]`}>
          <p className="text-xl leading-relaxed font-medium">“{copy.testimonial.quote}”</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className={`grid size-10 place-items-center rounded-full bg-[#E4EDD8] text-sm`}>🌿</span>
            <p className="text-xs text-[#5C685A]">
              <span className="font-semibold">{copy.testimonial.name}</span> — {copy.testimonial.role}
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-center text-3xl font-semibold tracking-tight">{copy.pricingHeading}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {copy.plans.map((p, i) => (
              <div
                key={p.name}
                className={`bg-[#FBFAF2] p-8 shadow-[0_16px_36px_rgba(79,122,82,0.13)] ${
                  i % 2 ? "rounded-[2.5rem_1rem_1rem_2.5rem]" : leafCard
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: MOSS }}>
                  {p.name} {p.popular && "🌱"}
                </p>
                <p className="mt-3 text-4xl font-semibold">
                  {p.price}
                  <span className="text-sm text-[#5C685A]">{p.period}</span>
                </p>
                <p className="mt-2 text-xs text-[#5C685A]">{p.desc}</p>
                <span
                  className={`mt-6 block rounded-full py-3 text-center text-xs font-semibold ${
                    p.popular ? "text-white" : "text-[#4F7A52] border border-[#4F7A52]/30"
                  }`}
                  style={p.popular ? { background: MOSS } : undefined}
                >
                  {p.cta}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-[11px] text-[#5C685A]">{copy.pricingNote} 🌳</p>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between px-4 py-5 text-xs text-[#5C685A]">
          <span>{copy.copyright}</span>
          <div className="flex gap-5">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span aria-hidden>🌾 🌿 🪶</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
