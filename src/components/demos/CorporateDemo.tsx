import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const NAVY = "#0F3C5C";
const BLUE = "#1D6FB8";

export default function CorporateDemo({ copy }: { copy: Landing }) {
  return (
    <div className="min-h-full bg-[#F5F7FA] font-sans text-[#212934]">
      {/* Top utility bar */}
      <div className="flex items-center justify-between bg-[#0B2E47] px-4 py-1.5 text-[11px] text-white/70 sm:px-6">
        <span>For teams of 10 → 10,000</span>
        <div className="hidden gap-5 sm:flex">
          <span>Status: <span className="text-emerald-300">● Operational</span></span>
          <span>Docs</span>
          <span>Support: +1 800 DESIGN</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between bg-white px-4 py-3.5 shadow-sm sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded bg-[#1D6FB8] text-sm font-bold text-white">L</span>
          <span className="text-sm font-bold">{copy.product} <span className="font-normal text-[#6B7480]">Enterprise</span></span>
        </div>
        <div className="hidden items-center gap-7 text-xs font-medium text-[#4A5563] md:flex">
          {copy.navLinks.map((l) => (
            <span key={l}>{l}</span>
          ))}
          <span>Solutions</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="hidden text-[#0F3C5C] sm:inline">Sign in</span>
          <span className="hidden rounded-md border border-[#0F3C5C]/30 px-4 py-2 text-[#0F3C5C] sm:inline">Book demo</span>
          <span className="rounded-md bg-[#0F3C5C] px-4 py-2 text-white">Start free</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid items-center gap-12 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BLUE }}>
            {copy.eyebrow} · Enterprise-ready
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight" style={{ color: NAVY }}>
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#4A5563]">{copy.heroSubtitle}</p>
          <div className="mt-8 flex gap-4">
            <span className="rounded-md px-7 py-3 text-xs font-bold text-white" style={{ background: NAVY }}>
              Get team plan →
            </span>
            <span className="rounded-md border px-7 py-3 text-xs font-semibold" style={{ borderColor: "#C6CFD9" }}>
              Talk to sales
            </span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Compliance chips */}
            {["SOC 2 Type II", "GDPR Ready", "ISO 27001", "SSO / SAML"].map((c) => (
              <span key={c} className="rounded border border-[#D5DCE4] bg-white px-3 py-1.5 text-[11px] font-medium text-[#5B6572]">
                ✓ {c}
              </span>
            ))}
          </div>
        </div>

        {/* Product screenshot mock */}
        <div className="overflow-hidden rounded-lg border border-[#D5DCE4] bg-white shadow-[0_18px_50px_rgba(15,60,92,0.12)]">
          <div className="flex items-center gap-1.5 border-b border-[#E8ECF1] bg-[#F0F3F7] px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-[#E1736B]" />
            <span className="size-2.5 rounded-full bg-[#E5B355]" />
            <span className="size-2.5 rounded-full bg-[#6EC388]" />
            <span className="ml-4 rounded bg-white px-3 py-1 text-[10px] text-[#8A93A0]">app.lumio.com/teams</span>
          </div>
          <div className="grid grid-cols-[5rem_1fr]">
            <div className="border-r border-[#E8ECF1] p-3">
              {["Home", "Canvas", "Assets", "Teams", "Reports", "Admin"].map((o, i) => (
                <p key={o} className={`rounded px-2 py-1.5 text-[10px] font-medium ${i === 4 ? "bg-[#E3EEF9] text-[#1D6FB8]" : "text-[#6B7480]"}`}>
                  {o}
                </p>
              ))}
            </div>
            <div className="p-4">
              <div className="flex items-end justify-between">
                <span className="text-[11px] font-semibold text-[#212934]">Quarterly design velocity</span>
                <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">+48.2%</span>
              </div>
              <div className="mt-3 flex h-24 items-end gap-2">
                {[38, 55, 42, 68, 58, 74, 62, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 7 ? "#1D6FB8" : "#D9E4EF" }} />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[["Editors", "148"], ["Assets", "2.3k"], ["SLA", "99.9%"]].map(([k, v]) => (
                  <div key={k} className="rounded border border-[#E8ECF1] p-2 text-center">
                    <p className="text-[9px] text-[#8A93A0]">{k}</p>
                    <p className="text-[11px] font-bold text-[#212934]">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-y border-[#E1E7EE] bg-white px-5 py-6 sm:px-10">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-[#8A93A0]">
          Trusted by 4,000+ teams worldwide
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-10 text-sm font-bold text-[#9AA3AF]">
          <span>ACME CORP</span>
          <span>Northwind</span>
          <span className="uppercase tracking-widest">vertex</span>
          <span>Kappa&Co</span>
          <span>MODUS</span>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-12 sm:px-10 sm:py-14">
        <h2 className="text-center text-2xl font-bold" style={{ color: NAVY }}>{copy.featuresHeading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f) => (
            <article key={f.title} className="rounded-lg border border-[#E1E7EE] bg-white p-7 shadow-sm">
              <span className="grid size-9 place-items-center rounded-md text-sm text-white" style={{ background: NAVY }}>
                ⬛
              </span>
              <h3 className="mt-4 text-sm font-bold" style={{ color: NAVY }}>{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4A5563]">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold" style={{ color: BLUE }}>
                Learn more →
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-5 py-10 sm:px-10">
        <div className="grid items-center gap-6 rounded-lg border border-[#E1E7EE] bg-white p-9 sm:grid-cols-[auto_1fr]">
          <span className="grid size-16 place-items-center rounded-full text-lg font-bold text-white" style={{ background: NAVY }}>
            MC
          </span>
          <div>
            <p className="text-lg font-medium leading-relaxed">“{copy.testimonial.quote}”</p>
            <p className="mt-2 text-xs text-[#6B7480]">
              <span className="font-semibold text-[#212934]">{copy.testimonial.name}</span> — {copy.testimonial.role}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-5 pb-16 sm:px-10">
        <h2 className="text-center text-2xl font-bold" style={{ color: NAVY }}>{copy.pricingHeading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div key={p.name} className={`rounded-lg border bg-white p-7 ${p.popular ? "shadow-[0_12px_30px_rgba(15,60,92,0.12)]" : "border-[#E1E7EE]"}`} style={p.popular ? { borderColor: NAVY } : undefined}>
              <p className="flex items-center justify-between text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>
                {p.name}
                {p.popular && <span className="rounded-full bg-[#E3EEF9] px-2 py-0.5 text-[9px] text-[#1D6FB8]">Most popular</span>}
              </p>
              <p className="mt-4 text-3xl font-bold" style={{ color: NAVY }}>
                {p.price}
                <span className="text-xs font-normal text-[#8A93A0]">{p.period}</span>
              </p>
              <p className="mt-2 text-xs text-[#4A5563]">{p.desc}</p>
              <span
                className="mt-6 block rounded-md py-2.5 text-center text-xs font-bold"
                style={p.popular ? { background: NAVY, color: "white" } : { border: "1px solid #C6CFD9", color: NAVY }}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-[#8A93A0]">{copy.pricingNote}</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E1E7EE] bg-white px-5 py-10 sm:px-10" style={{ borderTopWidth: 4, borderColor: NAVY }}>
        <div className="grid gap-8 sm:grid-cols-4">
          <div>
            <p className="text-sm font-bold" style={{ color: NAVY }}>{copy.product}</p>
            <p className="mt-2 text-xs text-[#6B7480]">Enterprise design infrastructure.</p>
          </div>
          {[
            ["Products", copy.navLinks],
            ["Company", ["About", "Careers", "Newsroom", "Trust"]],
            ["Resources", ["Docs", "Status", "Security", "Contact"]],
          ].map(([h, items]) => (
            <div key={h as string}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>{h}</p>
              <ul className="mt-2 space-y-1 text-xs text-[#6B7480]">
                {(items as string[]).map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[11px] text-[#8A93A0]">{copy.copyright}</p>
      </footer>
    </div>
  );
}
