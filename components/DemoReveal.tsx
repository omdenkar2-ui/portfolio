"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  label?: string;
  tag?: string;
};

export default function DemoReveal({ src, label = "Watch demo", tag = "▶ DEMO" }: Props) {
  const [revealed, setRevealed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const reveal = () => {
    setRevealed(true);
    // Attempt to play once the video element mounts
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* autoplay blocked — user can hit play manually */
      });
    });
  };

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); reveal(); }}
        className="demo-reveal"
      >
        <span className="demo-reveal__icon">▶</span>
        <span className="demo-reveal__label">{label}</span>
        <span className="demo-reveal__hint">~7s · muted</span>
      </button>
    );
  }

  return (
    <div className="quest-video" onClick={(e) => e.stopPropagation()}>
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        preload="metadata"
      />
      <span className="quest-video-tag">{tag}</span>
    </div>
  );
}
