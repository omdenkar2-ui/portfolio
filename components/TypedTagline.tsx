"use client";

import { useEffect, useState } from "react";

const lines = [
  "Building AI agents.",
  "Shipping multi-agent backends.",
  "Teaching math with classical AI.",
  "Studying intelligence.",
];

export default function TypedTagline() {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[idx];
    let delay = deleting ? 28 : 55;
    if (!deleting && sub === full.length) delay = 1400;
    if (deleting && sub === 0) delay = 240;

    const t = setTimeout(() => {
      if (!deleting && sub === full.length) {
        setDeleting(true);
      } else if (deleting && sub === 0) {
        setDeleting(false);
        setIdx((i) => (i + 1) % lines.length);
      } else {
        setSub((s) => s + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [sub, deleting, idx]);

  return (
    <p className="subtag" aria-live="polite">
      {lines[idx].slice(0, sub)}
      <span className="cursor">&nbsp;</span>
    </p>
  );
}
