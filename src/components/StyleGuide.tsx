"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { getStyle } from "@/data/designStyles";
import { landing } from "@/data/landingCopy";
import Sidebar from "@/components/Sidebar";
import AboutStyle from "@/components/AboutStyle";
import { demoRegistry, fallbackDemo } from "@/components/demos";

export default function StyleGuide({ initialStyle }: { initialStyle?: string }) {
  const [slug, setSlug] = useState<string>(getStyle(initialStyle).slug);

  // Keep the UI in sync with browser back/forward navigation.
  useEffect(() => {
    const syncFromUrl = () =>
      setSlug(getStyle(new URLSearchParams(window.location.search).get("style")).slug);
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const style = useMemo(() => getStyle(slug), [slug]);
  const Demo = demoRegistry[style.slug] ?? fallbackDemo;

  const selectStyle = useCallback((next: string) => {
    setSlug(next);
    const url = new URL(window.location.href);
    url.searchParams.set("style", next);
    window.history.replaceState({}, "", url);
  }, []);

  return (
    <div className="flex h-dvh overflow-hidden bg-zinc-950 text-zinc-100">
      <Sidebar current={style.slug} onSelect={selectStyle} />
      <main className="flex min-w-0 flex-1 flex-col">
        <AboutStyle style={style} />
        <section key={style.slug} className="demo-enter min-h-0 flex-1 overflow-y-auto">
          <Demo copy={landing} />
        </section>
      </main>
    </div>
  );
}
