import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

const HUD = "#3CFF8F";
const AMBER = "#FFB454";
const clip = { clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" };

/** Instrument frame with corner brackets */
function Frame({ children, glow, className = "" }: { children: React.ReactNode; glow?: boolean; className?: string }) {
  const c = glow ? HUD : "rgba(60,255,143,0.35)";
  return (
    <div className={`relative border ${glow ? "" : "border-[#3CFF8F]/30"} bg-[#0A1410]/85 p-6 backdrop-blur ${className}`} style={{ ...clip, borderColor: c }}>
      <span aria-hidden className="absolute -top-px -left-px size-3 border-t-2 border-l-2" style={{ borderColor: c }} />
      <span aria-hidden className="absolute -top-px -right-px size-3 border-t-2 border-r-2" style={{ borderColor: c }} />
      <span aria-hidden className="absolute -bottom-px -left-px size-3 border-b-2 border-l-2" style={{ borderColor: c }} />
      <span aria-hidden className="absolute -right-px -bottom-px size-3 border-b-2 border-r-2" style={{ borderColor: c }} />
      {children}
    </div>
  );
}

function Gauge({ value, label }: { value: number; label: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-5">
      <div className="relative size-[4.5rem]">
        <svg viewBox="0 0 84 84" className="size-full -rotate-90">
          <circle cx="42" cy="42" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
          <circle
            cx="42"
            cy="42"
            r={r}
            fill="none"
            stroke={HUD}
            strokeWidth="7"
            strokeDasharray={`${(value / 100) * c} ${c}`}
            strokeLinecap="butt"
            style={{ filter: "drop-shadow(0 0 6px rgba(60,255,143,0.7))" }}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[13px] font-bold" style={{ color: HUD }}>
          {value}%
        </span>
      </div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#9DEBC4]/70">{label}</p>
    </div>
  );
}

export default function CyberpunkHudDemo({ copy }: { copy: Landing }) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#05080A] p-5 font-mono text-[#CFE8DA]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            `linear-gradient(${HUD}44 1px, transparent 1px), linear-gradient(90deg, ${HUD}44 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-5xl space-y-5">
        {/* Status strip */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#3CFF8F]/25 px-3 py-2 text-[10px] tracking-[0.25em] uppercase">
          <span className="flex items-center gap-2">
            <span className="size-2 animate-pulse" style={{ background: HUD }} /> SYS:OK
          </span>
          <span className="text-[#9DEBC4]/60">CPU 12% ┊ NET 42ms ┊ GPS:LOCK ┊ ENV SAFE</span>
          <span style={{ color: AMBER }}>REC ● 00:14:22</span>
        </div>

        {/* Nav */}
        <Frame className="p-0!">
          <nav className="flex items-center justify-between px-4 py-2.5 text-[11px] tracking-[0.25em] uppercase">
            <span className="font-bold" style={{ color: HUD }}>{copy.product}_HUD</span>
            <div className="flex items-center gap-5 text-[#9DEBC4]/80">
              {copy.navLinks.map((l, i) => (
                <span key={l} className="hidden sm:inline">
                  F{i + 1}·{l}
                </span>
              ))}
              <span className="px-3 py-1 font-bold" style={{ background: "rgba(60,255,143,0.12)", color: HUD }}>
                START ▸
              </span>
            </div>
          </nav>
        </Frame>

        {/* Hero */}
        <section className="grid gap-5 md:grid-cols-5">
          <Frame className="md:col-span-3" glow>
            <p className="text-[10px] tracking-[0.35em] uppercase" style={{ color: AMBER }}>
              ▚ {copy.eyebrow} ▞
            </p>
            <h1
              className="mt-4 text-3xl leading-tight font-bold uppercase"
              style={{ color: HUD, textShadow: "0 0 16px rgba(60,255,143,0.7)" }}
            >
              {copy.heroTitle}
            </h1>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-[#9DEBC4]/80">{copy.heroSubtitle}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <span className="px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#04140C]" style={{ background: HUD, boxShadow: "0 0 22px rgba(60,255,143,0.5)" }}>
                {copy.ctaPrimary} ▸
              </span>
              <span className="border px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ borderColor: AMBER, color: AMBER }}>
                {copy.ctaSecondary}
              </span>
            </div>
          </Frame>
          <Frame className="md:col-span-2">
            <p className="mb-4 text-[10px] tracking-[0.3em] uppercase text-[#9DEBC4]/70">SYSTEM DIAGNOSTIC</p>
            <Gauge value={98} label="canvas uptime" />
            <div className="mt-5 space-y-3">
              {[
                ["SYNC", 86], ["AI LOAD", 63], ["EXPORT", 94],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <div className="flex justify-between text-[9px] tracking-[0.2em] uppercase text-[#9DEBC4]/60">
                    <span>{k}</span>
                    <span style={{ color: HUD }}>{v}%</span>
                  </div>
                  <div className="mt-1 h-1 bg-white/10">
                    <div className="h-full" style={{ width: `${v}%`, background: HUD, boxShadow: "0 0 8px rgba(60,255,143,0.6)" }} />
                  </div>
                </div>
              ))}
            </div>
          </Frame>
        </section>

        {/* Features */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <Frame key={f.title} glow={i === 0}>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#9DEBC4]/60">MOD_0{i + 1}</p>
              <h3 className="mt-2 text-sm font-bold uppercase" style={{ color: HUD }}>{f.title}</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#9DEBC4]/75">{f.desc}</p>
              <div className="mt-3 h-0.5 bg-white/10">
                <div className="h-full" style={{ width: ["92%", "78%", "88%"][i], background: [HUD, AMBER, HUD][i] }} />
              </div>
            </Frame>
          ))}
        </section>

        {/* Testimonial */}
        <Frame>
          <p className="text-base leading-relaxed text-white/90" style={{ textShadow: "0 0 10px rgba(60,255,143,0.4)" }}>
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-[#9DEBC4]/70">
            LOGGED ▸ {copy.testimonial.name} :: {copy.testimonial.role}
          </p>
        </Frame>

        {/* Pricing */}
        <section className="grid gap-5 sm:grid-cols-3">
          {copy.plans.map((p, i) => (
            <Frame key={p.name} glow={p.popular}>
              {p.popular && (
                <span className="float-right px-1.5 py-0.5 text-[9px] font-bold uppercase" style={{ background: AMBER, color: "#3A2500" }}>
                  recommend
                </span>
              )}
              <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: p.popular ? HUD : "#9DEBC4/70" }}>
                PKG_0{i + 1} · {p.name}
              </p>
              <p className="mt-2 text-3xl font-bold" style={{ color: p.popular ? HUD : "#CFE8DA" }}>
                {p.price}
                <span className="text-xs text-[#9DEBC4]/60">{p.period}</span>
              </p>
              <p className="mt-1 text-[11px] text-[#9DEBC4]/70">{p.desc}</p>
              <span
                className={`mt-5 block py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] ${
                  p.popular ? "text-[#04140C]" : "border"
                }`}
                style={
                  p.popular
                    ? { background: HUD }
                    : { borderColor: "rgba(60,255,143,0.4)", color: HUD }
                }
              >
                {p.cta} ▸
              </span>
            </Frame>
          ))}
        </section>
        <p className="text-center text-[9px] tracking-[0.3em] uppercase text-[#9DEBC4]/50">{copy.pricingNote}</p>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border border-[#3CFF8F]/20 bg-[#0A1410]/85 px-4 py-3 text-[9px] tracking-[0.25em] uppercase text-[#9DEBC4]/60 text-center" style={clip}>
          <span className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse" style={{ background: HUD }} /> LINK STABLE
          </span>
          <span>{copy.copyright}</span>
          <span className="flex gap-3" style={{ color: AMBER }}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l.toUpperCase()}</span>
            ))}
          </span>
        </footer>
      </div>
    </div>
  );
}
