"use client";

export default function CmdKButton() {
  const open = () => {
    window.dispatchEvent(new Event("palette:open"));
  };
  return (
    <button
      type="button"
      onClick={open}
      className="brut-btn brut-btn--ghost"
      aria-label="Open command palette"
      style={{ gap: 8 }}
    >
      <span>Search</span>
      <span className="kbd">⌘K</span>
    </button>
  );
}
