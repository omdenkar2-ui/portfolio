type Skill = { cat: string; items: Array<{ name: string; starred?: boolean }> };

const skills: Skill[] = [
  {
    cat: "Languages",
    items: [
      { name: "Python", starred: true },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    cat: "AI / Agents",
    items: [
      { name: "Claude API", starred: true },
      { name: "Multi-agent orchestration", starred: true },
      { name: "Prompt engineering" },
      { name: "Classical AI" },
      { name: "Adaptive systems" },
    ],
  },
  {
    cat: "Backend",
    items: [
      { name: "FastAPI", starred: true },
      { name: "Supabase" },
      { name: "APScheduler" },
      { name: "Railway" },
    ],
  },
  {
    cat: "Data & Math",
    items: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Linear algebra", starred: true },
      { name: "Probability", starred: true },
      { name: "Olympiad math", starred: true },
    ],
  },
];

export default function Education() {
  return (
    <section className="sec">
      <div className="page">
        <div className="sec-label">
          <span className="chip">§ IV / Loadout</span>
          <span className="mono-label mute">Education &amp; Skills</span>
        </div>
        <h2 className="sec-title">Foundations.</h2>

        <div className="edu-grid">
          <div className="edu-card reveal">
            <h3>Tetr College of Business</h3>
            <div className="deg">BSc AI · 2025 — 2029</div>
            <p>
              In partnership with Illinois Institute of Technology. Linear algebra,
              macroeconomics, systems thinking, and AI-driven ventures across 7 countries.
            </p>
          </div>
          <div className="edu-card reveal">
            <h3>Ryewood International School</h3>
            <div className="deg">ICSE · Class X · 2023</div>
            <p>School rank 1 — 96%. Seven-year General Proficiency holder.</p>
          </div>
        </div>

        <div className="sec-label" style={{ marginTop: 32 }}>
          <span className="mono-label mute">★ = primary</span>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.cat} className="skill-card reveal">
              <div className="cat">{s.cat}</div>
              <div className="items">
                {s.items.map((i) => (
                  <span key={i.name} className={i.starred ? "starred" : ""}>
                    {i.starred && "★ "}
                    {i.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
