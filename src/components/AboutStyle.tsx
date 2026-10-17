import type { DesignStyle } from "@/data/designStyles";

export default function AboutStyle({ style }: { style: DesignStyle }) {
  return (
    <div className="border-b border-zinc-800 bg-zinc-900/50 px-6 py-4">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h2 className="text-base font-semibold tracking-tight text-white">{style.name}</h2>
        <div className="flex flex-wrap gap-1.5">
          {style.traits.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2 py-0.5 text-[11px] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-2 max-w-3xl text-xs leading-relaxed text-zinc-400">
        {style.description}{" "}
        <span className="text-zinc-500">
          Seen in: <span className="italic">{style.usage}</span>
        </span>
      </p>
    </div>
  );
}
