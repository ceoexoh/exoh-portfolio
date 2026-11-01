"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

/** The mascot, tilting gently toward the pointer. No state, just CSS variables. */
export default function TiltAvatar() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 9).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 11).toFixed(2)}deg`);
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[17rem] sm:max-w-sm lg:max-w-none"
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="ring-spin absolute -inset-[5%] h-[110%] w-[110%] text-accent/70"
      >
        <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.6 2.2" />
        <circle cx="50" cy="1" r="1.1" fill="currentColor" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-ink/15"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      <div ref={ref} className="tilt absolute inset-[5%]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-panel ring-1 ring-rule">
          <Image
            src="/mascot.png"
            alt="Exoh's mascot: a cartoon character with locs, round glasses, headphones and a blue hoodie"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, 80vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
