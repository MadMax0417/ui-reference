import type { landing } from "@/data/landingCopy";

type Landing = typeof landing;

function Section({
  kicker,
  title,
  light,
  dark,
  children,
}: {
  kicker?: string;
  title?: string;
  light?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  const wrap = light ? "bg-white" : dark ? "bg-[#111111]" : "";
  const head = light ? "text-left mx-auto max-w-4xl px-6" : "mx-auto max-w-4xl px-6 text-left";
  const tone = dark ? "text-white" : "text-black";
  return (
    <section className={`${wrap} ${tone} px-6 py-28`}>
      <div className={head}>
        {kicker && (
          <p className="mb-3 text-xs font-medium tracking-[0.2em] uppercase opacity-40">{kicker}</p>
        )}
        {title && <h2 className="text-4xl font-light tracking-tight">{title}</h2>}
      </div>
      <div className={head}>{children}</div>
    </section>
  );
}

export default function MinimalismDemo({ copy }: { copy: Landing }) {
  return (
    <div className="mx-auto min-h-full max-w-5xl bg-white font-sans text-black">
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-neutral-200 px-8 py-5">
        <span className="text-sm font-semibold tracking-tight">{copy.product}</span>
        <div className="flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
          {copy.navLinks.map((l) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()} className="hover:text-black">
              {l}
            </a>
          ))}
          <span className="rounded-full border border-neutral-300 px-3.5 py-1.5 text-black">
            Start free
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-40 text-center">
        <p className="mb-5 text-[11px] font-medium tracking-[0.3em] text-neutral-400 uppercase">
          {copy.eyebrow}
        </p>
        <h1 className="mx-auto max-w-2xl text-5xl leading-[1.08] font-extralight tracking-tight">
          {copy.heroTitle}.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed font-light text-neutral-500">
          {copy.heroSubtitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="rounded-full bg-black px-6 py-3 text-xs font-medium tracking-wide text-white">
            {copy.ctaPrimary}
          </span>
          <span className="text-xs font-medium tracking-wide text-neutral-500 underline underline-offset-4">
            {copy.ctaSecondary}
          </span>
        </div>
        <div className="mx-auto mt-6 max-w-3xl">
          <div className="h-px w-full bg-neutral-200" />
        </div>
      </section>

      {/* Features */}
      <Section light kicker={copy.featuresHeading} title="Designed to disappear">
        <div className="mt-14 grid gap-px bg-neutral-200 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article key={f.title} className="bg-white p-8">
              <h3 className="text-sm font-medium">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed font-light text-neutral-500">{f.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <section className="border-y border-neutral-200 px-8 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-2xl leading-snug font-light italic">“{copy.testimonial.quote}”</p>
          <p className="mt-6 text-xs tracking-wide text-neutral-400">
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <Section title={copy.pricingHeading} />
      <section className="px-8 pb-16">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div key={p.name} className="border-t border-neutral-200 pt-6">
              <p className="text-xs tracking-widest text-neutral-400 uppercase">{p.name}</p>
              <p className="mt-4 text-4xl font-extralight">
                {p.price}
                <span className="text-sm text-neutral-400">{p.period}</span>
              </p>
              <p className="mt-3 text-xs font-light text-neutral-500">{p.desc}</p>
              <p className="mt-6 text-xs font-medium underline underline-offset-4">{p.cta}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-[11px] text-neutral-400">{copy.pricingNote}</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-8 py-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between text-xs text-neutral-400">
          <span>{copy.copyright}</span>
          <div className="flex gap-6">
            {copy.footerLinks.map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
