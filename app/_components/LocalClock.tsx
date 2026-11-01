"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 1000);
  return () => window.clearInterval(id);
}

function getSnapshot() {
  return formatter.format(new Date());
}

function getServerSnapshot() {
  return "--:--";
}

/** Live local time in Benin City (WAT). Renders a placeholder on the server. */
export default function LocalClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <span className="tabular-nums">
      {time} <span className="text-faint">WAT</span>
    </span>
  );
}
