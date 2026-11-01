"use client";

import { useState } from "react";
import { toolGroups } from "../_data/site";

const ALL = "all";

/**
 * Every tool is always on screen; choosing a group dims the rest instead of
 * removing them, so the layout never jumps.
 */
export default function Toolkit() {
  const [selected, setSelected] = useState<string>(ALL);
  const group = toolGroups.find((g) => g.id === selected);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tools by category">
        {[{ id: ALL, title: "Everything" }, ...toolGroups].map((g) => {
          const isOn = selected === g.id;
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={isOn}
              onClick={() => setSelected(g.id)}
              className={`rounded-full border px-4 py-2 font-mono text-[13px] transition-colors ${
                isOn
                  ? "border-accent bg-accent text-white"
                  : "border-rule text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {g.title}
            </button>
          );
        })}
      </div>

      <p className="mt-5 min-h-6 font-mono text-[13px] text-muted" aria-live="polite">
        <span className="text-accent">&gt;</span>{" "}
        {group ? group.note : "Tools I use, or am actively learning. Pick a category to focus."}
      </p>

      <ul className="mt-8 flex flex-wrap gap-2.5">
        {toolGroups.flatMap((g) =>
          g.items.map((item) => {
            const dimmed = selected !== ALL && selected !== g.id;
            return (
              <li
                key={`${g.id}-${item}`}
                className={`rounded-lg border px-3.5 py-2.5 text-[15px] transition-all duration-300 ${
                  dimmed
                    ? "border-rule/50 text-faint opacity-35"
                    : "border-rule bg-panel text-ink hover:-translate-y-0.5 hover:border-accent/70"
                }`}
              >
                {item}
              </li>
            );
          }),
        )}
      </ul>
    </div>
  );
}
