"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Item = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
  keywords?: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setOpen(false);
  }, []);

  const openUrl = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }, []);

  const items: Item[] = [
    { id: "top", label: "→ Top", hint: "Home", action: () => scrollTo("top"), keywords: "home top hero" },
    { id: "work", label: "→ Work / Quests", hint: "Projects", action: () => scrollTo("work"), keywords: "work projects quests napkin lydoo" },
    { id: "achievements", label: "→ Achievements", hint: "Trophies", action: () => scrollTo("achievements"), keywords: "achievements medals olympiad" },
    { id: "about", label: "→ About", hint: "Bio", action: () => scrollTo("about") },
    { id: "contact", label: "→ Contact", hint: "Press start", action: () => scrollTo("contact"), keywords: "contact email linkedin" },
    { id: "theme", label: "⌁ Toggle theme", hint: "Dark / light", action: toggleTheme, keywords: "dark light theme mode" },
    { id: "email", label: "✉ Email me", hint: "mailto", action: () => { window.location.href = "mailto:om.denkar_bsc2029@tetr.com"; setOpen(false); } },
    { id: "linkedin", label: "⚡ LinkedIn", hint: "external", action: () => openUrl("https://www.linkedin.com/in/om-denkar-506470272/") },
    { id: "napkin", label: "⚡ Napkin", hint: "external", action: () => openUrl("https://usenapkin.com") },
  ];

  const filtered = query
    ? items.filter((i) =>
        (i.label + " " + (i.keywords ?? "")).toLowerCase().includes(query.toLowerCase()),
      )
    : items;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA";

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }

      if (e.key === "Escape" && open) {
        setOpen(false);
        return;
      }

      if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          filtered[activeIdx]?.action();
        }
        return;
      }

      if (typing) return;

      if (e.key.toLowerCase() === "t") {
        e.preventDefault();
        toggleTheme();
      }
    };

    const openHandler = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", openHandler);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", openHandler);
    };
  }, [open, filtered, activeIdx, toggleTheme]);

  // Vim-ish g-prefix shortcuts: gw, ga, gc, gh
  useEffect(() => {
    let gPressed = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || open) return;

      if (e.key === "g" && !gPressed) {
        gPressed = true;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => { gPressed = false; }, 800);
        return;
      }

      if (gPressed) {
        const map: Record<string, string> = {
          w: "work",
          a: "achievements",
          b: "about",
          c: "contact",
          h: "top",
        };
        const dest = map[e.key.toLowerCase()];
        if (dest) {
          e.preventDefault();
          scrollTo(dest);
        }
        gPressed = false;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, scrollTo]);

  useEffect(() => {
    if (open) {
      setActiveIdx(0);
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => { setActiveIdx(0); }, [query]);

  if (!open) return null;

  return (
    <div
      className="palette-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="palette">
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Type to search · napkin, work, theme…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="palette-list">
          {filtered.length === 0 ? (
            <div className="palette-empty">No matches — try &quot;work&quot; or &quot;napkin&quot;.</div>
          ) : (
            filtered.map((it, i) => (
              <div
                key={it.id}
                className={`palette-item ${i === activeIdx ? "active" : ""}`}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => it.action()}
              >
                <span>{it.label}</span>
                <span className="hint">{it.hint}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
