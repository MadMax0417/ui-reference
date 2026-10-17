import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function EditorialDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#FBF7EF] p-4 font-serif text-[#211E19] sm:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Masthead */}
        <header className="pt-6 pb-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8B8377]">
            The Tools Issue · Vol. IV
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[0.12em] uppercase sm:text-6xl">Lumio</h1>
          <div className="mx-auto mt-4 w-full border-y-4 border-double border-[#211E19] py-1">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-[#8B8377]">
              <span>Design · Tools · Taste</span>
              <span>October 2026</span>
              <span>No. 12</span>
            </div>
          </div>
        </header>

        {/* Hero spread */}
        <section className="grid gap-8 py-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#8B8377]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl leading-[1.05] font-semibold sm:text-5xl">
              {copy.heroTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-[0.8] first-letter:font-semibold first-letter:text-[#A63A2B]">
              {copy.heroSubtitle}
            </p>
          </div>
          <aside className="md:col-span-4 md:border-l md:border-[#211E19]/20 md:pl-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B8377]">In this issue</p>
            <ul className="mt-4 space-y-3 text-sm">
              {copy.featureCards.map((f, i) => (
                <li key={f.title} className="flex gap-3 border-b border-dotted border-[#211E19]/25 pb-3">
                  <span className="font-semibold text-[#A63A2B]">{["I", "II", "III"][i]}.</span>
                  <span>{f.title} — <span className="text-[#8B8377]">p.{i + 12}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs italic text-[#8B8377]">
              “{copy.testimonial.quote}” — {copy.testimonial.name}
            </p>
          </aside>
        </section>
        <div className="h-px bg-[#211E19]/30" />

        {/* Features as magazine columns */}
        <section className="grid grid-flow-row gap-10 py-12 sm:grid-cols-3 sm:gap-8">
          {copy.featureCards.map((f, i) => (
            <article key={f.title}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A63A2B]">
                {["I", "II", "III"][i]}
              </p>
              <h3 className="mt-3 text-xl leading-tight font-semibold">{f.title}</h3>
              <div className="my-3 h-px bg-[#211E19]/30" />
              <p className="text-sm leading-relaxed text-[#3A362F]">{f.desc}</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#8B8377]">
                Continued on p.{i + 3}
              </p>
            </article>
          ))}
        </section>
        <div className="h-px bg-[#211E19]/30" />

        {/* Pull quote */}
        <section className="py-14 text-center">
          <p className="text-6xl leading-[0] text-[#A63A2B]">“</p>
          <blockquote className="mx-auto max-w-2xl text-2xl leading-relaxed italic">
            {copy.testimonial.quote}
          </blockquote>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#8B8377]">
            — {copy.testimonial.name}, {copy.testimonial.role}
          </p>
        </section>
        <div className="h-px bg-[#211E19]/30" />

        {/* Subscriptions */}
        <section className="py-12">
          <p className="text-center text-[11px] font-medium tracking-[0.35em] uppercase text-[#8B8377]">
            {copy.pricingHeading}
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {copy.plans.map((p) => (
              <div key={p.name} className="text-center">
                <p className="text-lg font-semibold italic">{p.name}</p>
                <p className="mt-2 text-4xl font-semibold">
                  {p.price}
                  <span className="text-sm text-[#8B8377]">{p.period}</span>
                </p>
                <div className="mx-auto my-3 w-10 border-b-2 border-[#A63A2B]" />
                <p className="text-xs italic text-[#8B8377]">{p.desc}</p>
                <p className="mt-4 text-xs font-medium tracking-[0.2em] uppercase">
                  {p.cta} →
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-[10px] uppercase tracking-[0.25em] text-[#8B8377]">
            {copy.pricingNote}
          </p>
        </section>

        {/* Colophon */}
        <footer className="border-t-4 border-double border-[#211E19] py-6 text-center">
          <p className="text-xs text-[#8B8377]">{copy.copyright}</p>
          <div className="mt-2 flex justify-center gap-6 text-[10px] uppercase tracking-[0.3em]">
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="mt-2 text-[10px] italic text-[#B0A99B]">Printed in HTML, set in a serif.</p>
        </footer>
      </div>
    </div>
  );
}
