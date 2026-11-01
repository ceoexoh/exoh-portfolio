"use client";

import { useEffect, useState } from "react";
import { nav } from "../_data/site";

export default function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-rule bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Exoh, back to top">
          <span className="display text-2xl leading-none">EXOH</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-accent sm:block" aria-hidden="true" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={active === item.id ? "true" : undefined}
                className={`rounded-md px-3 py-2 font-mono text-[13px] transition-colors ${
                  active === item.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className={active === item.id ? "text-accent" : "text-faint"}>/</span>
                {item.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all duration-200 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-rule md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {nav.map((item, i) => (
              <li key={item.id} className="border-b border-rule/60 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 text-lg font-medium"
                >
                  {item.label}
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
