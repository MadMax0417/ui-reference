import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function FlatDesignDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#F6F6F6] font-sans text-[#2B2B2B]">
      {/* Nav */}
      <nav className="flex items-center justify-between bg-[#3477F6] px-8 py-4 text-white">
        <span className="text-sm font-bold">{copy.product}</span>
        <div className="flex items-center gap-6 text-xs font-semibold">
          {copy.navLinks.map((l) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()} className="hidden hover:underline sm:inline">
              {l}
            </a>
          ))}
          <span className="rounded bg-white px-3.5 py-1.5 font-bold text-[#3477F6]">Start free</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid items-center gap-12 px-8 py-20 sm:grid-cols-2 sm:px-16">
        <div>
          <p className="mb-4 inline-block bg-[#FFC94D] px-3 py-1 text-[11px] font-bold text-[#2B2B2B]">
            {copy.eyebrow.toUpperCase()}
          </p>
          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed font-medium text-[#5A6472]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-8 flex gap-4">
            <span className="bg-[#2B2B2B] px-6 py-3 text-xs font-bold text-white">
              {copy.ctaPrimary.toUpperCase()}
            </span>
            <span className="border-2 border-[#2B2B2B] px-6 py-3 text-xs font-bold">
              {copy.ctaSecondary.toUpperCase()}
            </span>
          </div>
        </div>
        {/* Flat illustration block */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid h-40 place-items-center bg-[#FF6B6B] text-4xl text-white">◆</div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-[#3477F6]" />
            <div className="bg-[#FFC94D]" />
          </div>
          <div className="col-span-2 flex h-20 items-center justify-between bg-[#2EC4B6] px-6 text-white">
            <span className="text-xs font-bold">DESIGN · SYNC · EXPORT</span>
            <span className="text-2xl">▲ ● ■</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-16 sm:px-16">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">
          {copy.featuresHeading}
        </h2>
        <div className="mt-4 h-1 w-16 bg-[#FF6B6B] mx-auto" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article key={f.title} className="bg-white p-8">
              <div
                className={`mb-6 grid size-14 place-items-center text-2xl font-bold text-white ${
                  ["bg-[#3477F6]", "bg-[#FF6B6B]", "bg-[#FFC94D]"][i % 3]
                }`}
              >
                {["01", "02", "03"][i % 3]}
              </div>
              <h3 className="text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed font-medium text-[#5A6472]">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#3477F6] px-8 py-16 text-center text-white sm:px-16">
        <p className="mx-auto max-w-2xl text-xl font-bold">“{copy.testimonial.quote}”</p>
        <p className="mt-4 text-xs font-semibold opacity-80">
          {copy.testimonial.name} — {copy.testimonial.role}
        </p>
      </section>

      {/* Pricing */}
      <section className="px-8 py-16 sm:px-16">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">
          {copy.pricingHeading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <div
              key={p.name}
              className={`bg-white p-8 ${p.popular ? "bg-[#2B2B2B] text-white" : ""}`}
            >
              <p className="text-xs font-bold uppercase">{p.name}</p>
              <p className="mt-3 text-4xl font-extrabold">
                {p.price}
                <span className={`text-sm ${p.popular ? "opacity-70" : "text-[#5A6472]"}`}>
                  {p.period}
                </span>
              </p>
              <p
                className={`mt-2 text-xs font-medium ${
                  p.popular ? "opacity-80" : "text-[#5A6472]"
                }`}
              >
                {p.desc}
              </p>
              <span
                className={`mt-6 block py-2.5 text-center text-xs font-bold ${
                  p.popular ? "bg-[#FFC94D] text-[#2B2B2B]" : "bg-[#3477F6] text-white"
                }`}
              >
                {p.cta.toUpperCase()}
              </span>
              {p.popular && (
                <p className="mt-2 text-center text-[10px] font-bold text-[#FFC94D]">
                  MOST POPULAR · {["", "", ""][i]}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] font-semibold text-[#5A6472]">
          {copy.pricingNote}
        </p>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1 bg-[#2B2B2B] px-8 py-6 text-xs font-semibold text-white sm:px-16">
        <span>{copy.copyright}</span>
        <div className="flex gap-6">
          {copy.footerLinks.map((l) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()}>
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
