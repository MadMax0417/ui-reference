"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { getStyle } from "@/data/designStyles";
import { landing } from "@/data/landingCopy";
import Sidebar from "@/components/Sidebar";
import AboutStyle from "@/components/AboutStyle";
import { demoRegistry, fallbackDemo } from "@/components/demos";

export default function StyleGuide({ initialStyle }: { initialStyle?: string }) {
  const [slug, setSlug] = useState<string>(getStyle(initialStyle).slug);
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep the UI in sync with browser back/forward navigation.
  useEffect(() => {
    const syncFromUrl = () =>
      setSlug(getStyle(new URLSearchParams(window.location.search).get("style")).slug);
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  // Reset the drawer state when graduating to the inline desktop sidebar.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Escape closes the mobile drawer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const style = useMemo(() => getStyle(slug), [slug]);
  const Demo = demoRegistry[style.slug] ?? fallbackDemo;

  const selectStyle = useCallback((next: string) => {
    setSlug(next);
    setMenuOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.set("style", next);
    window.history.replaceState({}, "", url);
  }, []);

  return (
    <div className="flex h-dvh overflow-hidden bg-zinc-950 text-zinc-100">
      <Sidebar
        current={style.slug}
        onSelect={selectStyle}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <div className="flex h-full min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900/80 px-3 py-2.5 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open style menu"
            aria-expanded={menuOpen}
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 hover:bg-zinc-800"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden>
              <path
                d="M2 4h12M2 8h12M2 12h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-sm">
            ✦
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight">{style.name}</p>
            <p className="text-[11px] text-zinc-500">UI Style Guide</p>
          </div>
        </header>
        <main className="flex min-h-0 min-w-0 flex-1 flex-col">
          <AboutStyle style={style} />
          <section key={style.slug} className="demo-enter min-h-0 flex-1 overflow-y-auto">
            <Demo copy={landing} />
          </section>
        </main>
      </div>
    </div>
  );
}
