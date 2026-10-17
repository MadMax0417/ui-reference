"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { designStyles } from "@/data/designStyles";

type Props = {
  current: string;
  onSelect: (slug: string) => void;
};

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-3.5" aria-hidden>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 5.5v-2A1.5 1.5 0 0 0 9 2H4.5A1.5 1.5 0 0 0 3 3.5V9a1.5 1.5 0 0 0 1.5 1.5h1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Sidebar({ current, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ⌘K / Ctrl+K focuses the search box
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return designStyles;
    return designStyles.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.signature.toLowerCase().includes(q),
    );
  }, [query]);

  const copyName = (e: React.MouseEvent, name: string, slug: string) => {
    e.stopPropagation();
    navigator.clipboard
      .writeText(name)
      .then(() => {
        setCopied(slug);
        window.setTimeout(() => setCopied((c) => (c === slug ? null : c)), 2000);
      })
      .catch(() => {});
  };

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col border-r border-zinc-800 bg-zinc-900/80">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-sm">
            ✦
          </span>
          <div>
            <h1 className="text-sm font-semibold tracking-tight">UI Style Guide</h1>
            <p className="text-[11px] text-zinc-500">{designStyles.length} landing page styles</p>
          </div>
        </div>
        <div className="relative mt-3">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-zinc-500"
            aria-hidden
          >
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m10.5 10.5 2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search styles…"
            aria-label="Search styles"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-1.5 pr-8 pl-8 text-xs text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none"
          />
          <kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[10px] text-zinc-600">
            ⌘K
          </kbd>
        </div>
      </div>
      <div className="px-5 pb-2">
        <div className="h-px bg-zinc-800" />
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto px-3 pt-2 pb-4">
        <ul className="flex flex-col gap-1">
          {filtered.map((s, i) => {
            const active = s.slug === current;
            return (
              <li key={s.slug} className="group relative">
                <button
                  type="button"
                  onClick={() => onSelect(s.slug)}
                  aria-current={active ? "true" : undefined}
                  className={`flex h-full w-full items-start gap-3 rounded-xl px-3 py-2 pr-9 text-left transition-colors ${
                    active ? "bg-zinc-800" : "hover:bg-zinc-800/50"
                  }`}
                >
                  <span
                    className="mt-1 size-3 shrink-0 rounded-full ring-1 ring-black/10 ring-inset"
                    style={{ background: s.swatch }}
                  />
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-2">
                      <span
                        className={`text-sm font-medium ${
                          active ? "text-white" : "text-zinc-200 group-hover:text-white"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span className="text-[10px] text-zinc-600 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-zinc-500">
                      {s.signature}
                    </span>
                  </span>
                </button>

                {/* Copy-name button */}
                <button
                  type="button"
                  onClick={(e) => copyName(e, s.name, s.slug)}
                  aria-label={`Copy "${s.name}"`}
                  title={`Copy "${s.name}"`}
                  className={`absolute top-1.5 right-1.5 z-10 rounded-md p-1.5 transition-all ${
                    copied === s.slug
                      ? "text-emerald-400 opacity-100"
                      : "text-zinc-500 opacity-0 hover:bg-zinc-700/70 hover:text-zinc-200 focus-visible:opacity-100 group-hover:opacity-100"
                  }`}
                >
                  {copied === s.slug ? (
                    <svg viewBox="0 0 16 16" fill="none" className="size-3.5" aria-hidden>
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <CopyIcon />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        {filtered.length === 0 && (
          <p className="px-4 py-8 text-center text-xs text-zinc-500">
            No styles match “{query}”
          </p>
        )}
      </nav>

      <div className="border-t border-zinc-800 px-5 py-3 text-[11px] text-zinc-600">
        Same content · {designStyles.length} visual styles · ⌘K to search
      </div>
    </aside>
  );
}
