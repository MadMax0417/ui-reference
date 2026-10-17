import type { landing } from "@/data/landingCopy";
type Landing = typeof landing;

export default function SkeuomorphismDemo({ copy }: { copy: Landing }) {
  return (
    <div
      className="min-h-full p-6 font-sans text-[#3A3A3C]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #4A4A4E 0%, #333336 55%, #232326 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Toolbar nav */}
        <nav
          className="flex items-center justify-between rounded-xl px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #E8EAED 0%, #C9CCD3 50%, #B4B8C0 100%)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.7) inset, 0 -1px 2px rgba(0,0,0,0.25) inset, 0 6px 14px rgba(0,0,0,0.45)",
            border: "1px solid #8E9299",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="grid size-7 place-items-center rounded-lg text-sm"
              style={{
                background: "linear-gradient(180deg, #A7C7E7 0%, #5B8FCB 100%)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              L
            </span>
            <span className="text-sm font-bold text-[#38393D]">{copy.product}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#55565C]">
            {copy.navLinks.map((l) => (
              <span key={l} className="hidden sm:inline">{l}</span>
            ))}
            <span
              className="rounded-md px-4 py-1.5 text-xs font-bold text-white"
              style={{
                background: "linear-gradient(180deg, #6FB1F5 0%, #1B66C9 50%, #0F4FA8 100%)",
                border: "1px solid #0B3D85",
                boxShadow:
                  "inset 0 1px 1px rgba(255,255,255,0.55), 0 2px 4px rgba(0,0,0,0.35)",
              }}
            >
              Start free
            </span>
          </div>
        </nav>

        {/* Hero plate */}
        <section
          className="rounded-2xl px-5 py-12 text-center sm:px-10 sm:py-16"
          style={{
            background:
              "linear-gradient(180deg, #FBFBFD 0%, #EDEFF4 60%, #DDE1EA 100%)",
            border: "1px solid #A7ABB4",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.8) inset, 0 -1px 1px rgba(0,0,0,0.08) inset, 0 12px 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Brushed metal edge */}
          <div
            className="mx-auto mb-8 h-2 w-32 rounded-full"
            style={{
              background: "repeating-linear-gradient(90deg, #9DA2AC 0 2px, #B9BEC8 2px 4px)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
            }}
          />
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#8A8D94] uppercase">
            {copy.eyebrow}
          </p>
          <h1
            className="mx-auto mt-3 max-w-xl text-4xl font-bold text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #6B6D73 0%, #2F3033 55%, #17181A 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {copy.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#7A7D85]">
            {copy.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <span
              className="rounded-full px-8 py-3.5 text-sm font-bold text-white"
              style={{
                background: "linear-gradient(180deg, #7FBAF7 0%, #2B7DE1 45%, #1A5FB8 100%)",
                border: "1px solid #14508F",
                boxShadow:
                  "inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -6px 10px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.35)",
                textShadow: "0 -1px 0 rgba(0,0,0,0.35)",
              }}
            >
              {copy.ctaPrimary}
            </span>
            <span
              className="rounded-full px-8 py-3.5 text-sm font-bold text-[#4A4B50]"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #D8DBE2 100%)",
                border: "1px solid #A7ABB4",
                boxShadow:
                  "inset 0 1px 1px rgba(255,255,255,0.9), 0 3px 6px rgba(0,0,0,0.25)",
              }}
            >
              {copy.ctaSecondary}
            </span>
          </div>
        </section>

        {/* Feature cards — paper with stitching */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.featureCards.map((f, i) => (
            <article
              key={f.title}
              className="p-7"
              style={{
                background: "linear-gradient(180deg, #FFFDF7 0%, #F4EFE3 100%)",
                border: "1px solid #C9C2B2",
                borderRadius: "6px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.6)",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0 6px, rgba(0,0,0,0.02) 6px 7px)",
              }}
            >
              {/* Stitched dashed frame */}
              <div className="rounded-[4px] border border-dashed border-[#B9B29E] p-5">
                <span
                  className="grid size-11 place-items-center rounded-full text-lg text-white"
                  style={{
                    background: [
                      "radial-gradient(circle at 30% 25%, #E8A6A6, #B23B3B 70%)",
                      "radial-gradient(circle at 30% 25%, #A8C6A0, #4C7A43 70%)",
                      "radial-gradient(circle at 30% 25%, #A7BFE4, #2F5A9E 70%)",
                    ][i % 3],
                    boxShadow:
                      "inset 0 2px 3px rgba(255,255,255,0.55), inset 0 -3px 5px rgba(0,0,0,0.35), 0 2px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  {["✓", "✦", "⬆"][i % 3]}
                </span>
                <h3
                  className="mt-4 text-sm font-bold"
                  style={{ textShadow: "0 1px 0 rgba(255,255,255,0.8)" }}
                >
                  {f.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E6A5E]">{f.desc}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Testimonial — leather plate */}
        <section
          className="rounded-2xl px-5 py-12 text-center sm:px-10"
          style={{
            background: "linear-gradient(180deg, #4E3B30 0%, #3A2C24 100%)",
            border: "1px solid #2A1F19",
            boxShadow: "0 10px 24px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.12)",
          }}
        >
          <p
            className="text-xl leading-relaxed"
            style={{
              color: "#E8DCC8",
              textShadow: "0 1px 1px rgba(0,0,0,0.6)",
            }}
          >
            “{copy.testimonial.quote}”
          </p>
          <p className="mt-4 text-xs font-semibold tracking-widest uppercase" style={{ color: "#B49A76" }}>
            {copy.testimonial.name} — {copy.testimonial.role}
          </p>
        </section>

        {/* Pricing — brushed aluminum plates */}
        <section className="grid gap-6 sm:grid-cols-3">
          {copy.plans.map((p) => (
            <div
              key={p.name}
              className="rounded-xl p-7"
              style={{
                background:
                  "repeating-linear-gradient(180deg, #DDDFE4 0 2px, #E7E9EE 2px 4px, #E1E3E8 4px 6px)",
                border: "1px solid #A7ABB4",
                boxShadow:
                  "0 8px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.08)",
              }}
            >
              <p
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: "#6E7178", textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
              >
                {p.name}
              </p>
              <p
                className="mt-3 text-4xl font-bold text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #7A7D84 0%, #232427 60%, #3E4045 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                {p.price}
                <span className="text-sm text-[#8A8D94] [-webkit-text-fill-color:#8A8D94]">
                  {p.period}
                </span>
              </p>
              <p className="mt-1 text-xs text-[#6E7178]">{p.desc}</p>
              <span
                className="mt-6 block rounded-full py-2.5 text-center text-xs font-bold text-white"
                style={{
                  background: "linear-gradient(180deg, #67696F 0%, #3A3B3F 50%, #2A2B2E 100%)",
                  border: "1px solid #1D1E21",
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -4px 7px rgba(0,0,0,0.3), 0 3px 6px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.4)",
                  textShadow: "0 -1px 0 rgba(0,0,0,0.5)",
                }}
              >
                {p.cta}
              </span>
            </div>
          ))}
        </section>

        {/* Footer — dark rubber bar */}
        <footer
          className="flex items-center justify-between rounded-xl px-6 py-4 text-xs text-[#9A9CA3]"
          style={{
            background: "linear-gradient(180deg, #3A3A3E 0%, #242427 100%)",
            border: "1px solid #17171A",
            boxShadow: "0 6px 14px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1)",
          }}
        >
          <span>{copy.copyright}</span>
          <div className="flex gap-5" style={{ color: "#BFC6D2" }}>
            {copy.footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
