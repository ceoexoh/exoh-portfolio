"use client";

import { useEffect, useState } from "react";

type TypeState = { index: number; text: string; deleting: boolean };

/**
 * Types out and erases a list of phrases. The first phrase is rendered fully
 * typed so the server HTML is meaningful; with reduced motion it never changes.
 */
export default function Typewriter({ words }: { words: string[] }) {
  const [state, setState] = useState<TypeState>({
    index: 0,
    text: words[0] ?? "",
    deleting: false,
  });

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[state.index];
    const finishedTyping = !state.deleting && state.text === word;
    const finishedDeleting = state.deleting && state.text === "";

    const delay = finishedTyping ? 1900 : finishedDeleting ? 350 : state.deleting ? 28 : 60;

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setState((s) => ({ ...s, deleting: true }));
      } else if (finishedDeleting) {
        setState({ index: (state.index + 1) % words.length, text: "", deleting: false });
      } else if (state.deleting) {
        setState((s) => ({ ...s, text: s.text.slice(0, -1) }));
      } else {
        setState((s) => ({ ...s, text: word.slice(0, s.text.length + 1) }));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [state, words]);

  return (
    <span>
      {state.text}
      <span aria-hidden="true" className="caret" />
    </span>
  );
}
