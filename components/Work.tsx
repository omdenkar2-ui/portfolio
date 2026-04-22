import DemoReveal from "./DemoReveal";

type Project = {
  id: string;
  status: "active" | "completed";
  year: string;
  role: string;
  link?: { href: string; label: string };
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  video?: string;
  award?: string;
};

const projects: Project[] = [
  {
    id: "napkin",
    status: "active",
    year: "2025 — present",
    role: "Co-founder · Engineering",
    link: { href: "https://usenapkin.com", label: "usenapkin.com ↗" },
    title: "Napkin",
    summary:
      "AI product intelligence. Turns raw user feedback into evidence-backed specs, pattern cards, and prompts ready for coding agents.",
    details: [
      "Multi-agent pipeline on FastAPI + Supabase, orchestrated with Claude.",
      "Four ingestion scrapers (Gmail, WhatsApp, GitHub Issues, Intercom) into a unified store.",
      "APScheduler for auto-sync, weekly briefs, GitHub checker, auto-pipeline.",
      "Replaced brittle hard-gate synthesis with a tiered strategy; 75 / 0 tests passing.",
    ],
    stack: ["FastAPI", "Supabase", "Claude API", "APScheduler", "Python", "Railway"],
  },
  {
    id: "lydoo",
    status: "completed",
    year: "2024 — 2025",
    role: "Founder · Engineering",
    title: "Lydoo",
    summary:
      "Adaptive math learning platform for college students. Interactive exercises paired with an AI tutor that learns from mistakes.",
    details: [
      "Adaptivity engine that picks the next exercise from prior performance.",
      "Classical-AI tutor that explains, hints, and re-derives — without hallucinating arithmetic.",
      "Public beta shipped with a deliberate low-friction learning loop.",
    ],
    stack: ["Python", "Classical AI", "Adaptive systems", "Frontend"],
  },
  {
    id: "cruxly",
    status: "completed",
    year: "2024",
    role: "Founder",
    title: "CruxlyTech",
    summary:
      "D2C smart-gadgets store. Four US sales with zero ad spend — the lesson was distribution economics, not revenue.",
    details: [
      "Sourced inventory, built storefront, ran organic acquisition end-to-end.",
      "Learned why margins, CAC, and creative quality compound before scale.",
    ],
    stack: ["Shopify", "Organic growth", "Supplier ops"],
    video: "/cruxly-demo.mp4",
  },
  {
    id: "watergator",
    status: "completed",
    year: "2020 — 2022",
    role: "Builder, age 14",
    title: "Water Gator",
    summary:
      "Miniature remote-operated lily-pad cleaning robot, built from a toy car during lockdown. Top candidate at INSEF 2022 — the Indian Science & Engineering Fair — in its online prototype-video round.",
    details: [
      "Solved buoyancy, remote control, and pad collection with what was in the house.",
      "Submitted a prototype operation video to INSEF 2022 and placed among the top candidates nationally — did not win, but reached the final shortlist.",
      "Bathtub demo cleaned twigs in real time; earliest lesson in shipping to a deadline.",
    ],
    stack: ["Mechanical", "RC electronics", "Improvisation"],
    video: "/water-gator.mp4",
    award: "INSEF 2022 · Top Candidate",
  },
];

export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="page">
        <div className="sec-label">
          <span className="chip">§ II / Selected Work</span>
          <span className="mono-label mute">Quests completed &amp; active</span>
        </div>
        <h2 className="sec-title">Things I&apos;ve built.</h2>

        <div className="quest-grid">
          {projects.map((p) => (
            <article key={p.id} className={`quest reveal ${p.status === "active" ? "active" : ""}`}>
              <div className="quest-head">
                <span className={`brut-tag ${p.status === "active" ? "" : "brut-tag--white"}`}>
                  {p.status === "active" ? "● ACTIVE QUEST" : "✓ COMPLETED"}
                </span>
                <span className="brut-tag brut-tag--pale">{p.year}</span>
                {p.award && <span className="brut-tag brut-tag--ink">★ {p.award}</span>}
              </div>

              <h3 className="quest-title">{p.title}</h3>
              <p className="quest-summary">{p.summary}</p>

              {p.video && <DemoReveal src={p.video} />}

              <div className="quest-meta">
                <span>
                  <strong>ROLE</strong> · {p.role}
                </span>
              </div>

              <ul className="quest-details">
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <div className="stack-row">
                {p.stack.map((s) => (
                  <span key={s} className="stack-chip">
                    {s}
                  </span>
                ))}
              </div>

              {p.link && (
                <div className="quest-foot">
                  <span className="mono-label mute">External</span>
                  <a href={p.link.href} target="_blank" rel="noreferrer" className="quest-link">
                    {p.link.label}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
