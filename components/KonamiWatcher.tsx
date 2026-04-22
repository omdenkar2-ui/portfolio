"use client";

import { useEffect, useState } from "react";

const seq = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiWatcher() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let idx = 0;
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const expected = seq[idx];
      const key = expected.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === expected) {
        idx += 1;
        if (idx === seq.length) {
          const on = !document.documentElement.classList.contains("crt");
          document.documentElement.classList.toggle("crt", on);
          setActive(on);
          idx = 0;
        }
      } else {
        idx = key === seq[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!active) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 10000,
        padding: "8px 12px",
        background: "var(--ink)",
        color: "var(--paper)",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        border: "2px solid var(--sky)",
        boxShadow: "3px 3px 0 var(--sky)",
      }}
    >
      ▲▲▼▼ CRT MODE
    </div>
  );
}
