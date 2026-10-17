import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function VaporwaveDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden font-sans text-white">
      {/* Sunset sky */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[62%]"
        style={{
          background:
            "linear-gradient(180deg, #1A0533 0%, #4A0F6B 30%, #8B2A8F 55%, #E2467C 78%, #FF8A5C 100%)",
        }}
      />
      {/* Sun */}
      <div
        aria-hidden
        className="absolute top-[8%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{
          background: "linear-gradient(180deg, #FFE259 0%, #FFA751 60%, #FF5E7E 100%)",
          boxShadow: "0 0 90px 30px rgba(255,138,92,0.55)",
          maskImage: "repeating-linear-gradient(180deg, #000 0 22px, transparent 22px 30px)",
          WebkitMaskImage: "repeating-linear-gradient(180deg, #000 0 22px, transparent 22px 30px)",
        }}
      />
      {/* Perspective grid floor */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          background: "#12021F",
          perspective: "300px",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-[-60%]"
          style={{
            transform: "rotateX(62deg)",
            backgroundImage:
              "linear-gradient(rgba(255,63,164,0.9) 2.5px, transparent 2.5px), linear-gradient(90deg, rgba(255,63,164,0.9) 2.5px, transparent 2.5px)",
            backgroundSize: "46px 46px",
            boxShadow: "0 0 40px rgba(255,63,164,0.45) inset",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl space-y-6 p-6">
        {/* Nav */}
        <nav className="flex items-center justify-between border border-fuchsia-300/40 bg-[#2A0A45]/55 px-6 py-4 backdrop-blur-md">
          <span
            className="text-sm font-black tracking-[0.25em] uppercase"
            style={{
              backgroundImage: "linear-gradient(90deg, #79F0FF, #FF6FD8)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {copy.product}
          </span>
          <div className="flex items-center gap-5 text-[11px] font-bold tracking-[0.2em] text-fuchsia-100/80 uppercase">
            {copy.navLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span className="rounded border border-cyan-300/70 bg-cyan-300/10 px-4 py-1.5 text-cyan-200 shadow-[0_0_14px_rgba(121,240,255,0.35)]">
              Start free
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-14 pb-4 text-center">
          <p
            className="text-xs font-black tracking-[0.5em] text-cyan-200 uppercase"
            style={{ textShadow: "0 0 14px rgba(121,240,255,0.7)" }}
          >
            {copy.eyebrow}
          </p>
          <h1
            className="mt-4 text-5xl font-black tracking-tight sm:text-6xl"
            style={{
              backgroundImage: "linear-gradient(180deg, #FFF6BF 0%, #FF9AE0 55%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 0 22px rgba(255,110,220,0.45))",
            }}
          >
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-fuchsia-50/85">
            {copy.heroSubtitle}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span
              className="px-8 py-3.5 text-xs font-black tracking-widest text-white uppercase"
              style={{
                background: "linear-gradient(90deg, #FF2E9A, #8B5CF6)",
                boxShadow: "0 0 28px rgba(255,46,154,0.55)",
              }}
            >
              {copy.ctaPrimary}
            </span>
            <span className="border border-cyan-300/80 px-8 py-3.5 text-xs font-black tracking-widest text-cyan-200 uppercase shadow-[0_0_18px_rgba(121,240,255,0.3)]">
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article
              key={f.title}
              className="border border-fuchsia-300/35 bg-[#2A0A45]/55 p-7 backdrop-blur-md"
            >
              <h3
                className="text-sm font-black tracking-widest text-cyan-200 uppercase"
                style={{ textShadow: "0 0 12px rgba(121,240,255,0.6)" }}
              >
                {f.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-fuchsia-50/70">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Testimonial */}
        <section className="border border-fuchsia-300/35 bg-[#2A0A45]/55 px-10 py-10 text-center backdrop-blur-md">
          <p
            className="text-xl font-semibold text-white"
            style={{ textShadow: "0 0 18px rgba(255,110,220,0.6)" }}
          >
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-cyan-200/80 uppercase">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className={`border p-7 backdrop-blur-md ${
                p.popular
                  ? "border-fuchsia-400/80 bg-[#3A0F5E]/70 shadow-[0_0_30px_rgba(255,46,154,0.35)]"
                  : "border-fuchsia-300/35 bg-[#2A0A45]/55"
              }`}
            >
              <p
                className="text-[11px] font-black tracking-[0.25em] uppercase"
                style={
                  p.popular
                    ? { color: "#F9C74F", textShadow: "0 0 10px rgba(249,199,79,0.8)" }
                    : { color: "#79F0FF" }
                }
              >
                {p.name} {p.popular && "★"}
              </p>
              <p
                className="mt-2 text-4xl font-black"
                style={{
                  backgroundImage: "linear-gradient(180deg, #FFE259, #FF6FD8)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {p.price}
                <span className="text-sm [-webkit-text-fill-color:#FFB8E0]">{p.period}</span>
              </p>
              <p className="mt-1.5 text-xs text-fuchsia-50/70">{p.desc}</p>
              <span
                className="mt-6 block py-2.5 text-center text-[11px] font-black tracking-widest uppercase text-white"
                style={{ background: "linear-gradient(90deg, #FF2E9A, #8B5CF6)" }}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] font-bold tracking-widest text-cyan-200/70 uppercase">
          {copy.pricingNote}
        </p>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-fuchsia-300/35 px-2 py-5 text-[11px] font-bold tracking-widest text-fuchsia-100/70 uppercase">
          <span>{copy.copyright}</span>
          <div className="flex gap-5 text-cyan-200/80">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
