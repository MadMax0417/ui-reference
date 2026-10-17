import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function BentoGridDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#0B0B0F] p-3 font-sans text-white sm:p-5">
      <div className="space-y-5">
        {/* Nav */}
        <nav className="flex items-center justify-between rounded-2xl bg-[#16161D] px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-lg bg-white text-xs font-black text-black">
              L
            </span>
            <span className="text-sm font-semibold">{copy.product}</span>
          </div>
          <div className="hidden items-center gap-5 text-xs text-zinc-400 sm:flex">
            {copy.navLinks.map((l) => (
              <span key={l} className="hover:text-white">
                {l}
              </span>
            ))}
            <span className="rounded-full bg-white px-4 py-1.5 font-semibold text-black">
              Start free
            </span>
          </div>
          <span className="rounded-full bg-white px-3.5 py-1.5 font-semibold text-black text-xs sm:hidden">
            Start free
          </span>
        </nav>

        {/* Hero tile */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1C1C26] to-[#101018] px-6 py-14 text-center sm:px-10 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          <p className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-zinc-400">{copy.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-xl bg-white px-6 py-3 text-xs font-semibold text-black">
              {copy.ctaPrimary}
            </span>
            <span className="rounded-xl border border-zinc-700 px-6 py-3 text-xs text-zinc-300">
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Bento grid */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(14rem,auto))]">
          {/* Big quote tile */}
          <article className="flex flex-col justify-between rounded-3xl bg-[#16161D] p-8 sm:col-span-2">
            <p className="text-xl leading-relaxed font-medium text-zinc-200">
              “{copy.testimonial.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-xs font-bold text-black">
                MC
              </span>
              <p className="text-xs text-zinc-400">
                <span className="font-semibold text-zinc-200">{copy.testimonial.name}</span> ·{" "}
                {copy.testimonial.role}
              </p>
            </div>
          </article>

          {/* Stat tile */}
          <article className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#2E1A47] to-[#1B1030] p-8">
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-violet-300 uppercase">
              Live stat
            </span>
            <div>
              <p className="text-5xl font-semibold text-white">50 ms</p>
              <p className="mt-1 text-xs text-violet-300/80">sync latency, global median</p>
            </div>
          </article>

          {/* 3 feature tiles */}
          {copy.featureCards.map((f, i) => (
            <article key={f.title} className="rounded-3xl bg-[#16161D] p-8">
              <div
                className={`grid size-11 place-items-center rounded-xl text-lg ${
                  ["bg-[#1B2A4A] text-sky-300", "bg-[#2A1B33] text-fuchsia-300", "bg-[#1B2A21] text-emerald-300"][i % 3]
                }`}
              >
                {["◧", "✦", "⇪"][i % 3]}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-zinc-100">{f.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* Pricing strip */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className={`flex items-center justify-between rounded-2xl bg-[#16161D] px-6 py-5 ${
                p.popular ? "ring-1 ring-white/20" : ""
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
                  {p.name}
                  {p.popular && <span className="ml-2 text-white">★</span>}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{p.desc}</p>
              </div>
              <p className="text-2xl font-semibold text-zinc-100">
                {p.price}
                <span className="text-[10px] text-zinc-500">{p.period}</span>
              </p>
            </div>
          ))}
        </section>
        <p className="text-center text-[11px] text-zinc-600">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-2xl bg-[#16161D] px-4 py-4 text-[11px] text-zinc-500 sm:px-6">
          <span>{copy.copyright}</span>
          <div className="flex flex-wrap gap-5">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
