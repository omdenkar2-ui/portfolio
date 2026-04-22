export default function About() {
  return (
    <section className="sec" id="about">
      <div className="page">
        <div className="sec-label">
          <span className="chip">§ I / About</span>
          <span className="mono-label mute">PLAYER BIO</span>
        </div>
        <h2 className="sec-title">I&apos;d rather ship than read about shipping.</h2>

        <div className="about-grid">
          <div className="about-prose reveal">
            <p>
              First-year <span className="hl">BSc AI</span> at Tetr College of Business.
              I build things at the intersection of AI, mathematics, and product — the best
              way to understand a system is still to build it.
            </p>
            <p>
              Currently co-founding <span className="hl">Napkin</span> — a multi-agent backend
              that turns raw user feedback into evidence-backed specs. Before that:{" "}
              <span className="hl">Lydoo</span> (adaptive math tutor, classical AI core) and{" "}
              <span className="hl">CruxlyTech</span> (D2C smart gadgets, four US sales with no
              ad spend — the lesson was distribution, not revenue).
            </p>
            <p>
              Looking for AI / ML / quant internships. Or anywhere agents ship to production
              and math actually does labor.
            </p>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="traits">
              <div className="trait">
                <div className="t">Origin</div>
                <div className="v">Lonavla, IN</div>
              </div>
              <div className="trait">
                <div className="t">Age</div>
                <div className="v">18</div>
              </div>
              <div className="trait">
                <div className="t">School</div>
                <div className="v">Tetr + IIT</div>
              </div>
              <div className="trait">
                <div className="t">Caffeine</div>
                <div className="v">Filter coffee</div>
              </div>
            </div>

            <div className="hud-card">
              <h4>Currently reading</h4>
              <div className="mono" style={{ fontSize: 13, lineHeight: 1.8 }}>
                <div>→ Probability · Jaynes</div>
                <div>→ LLM agent eval papers</div>
                <div>→ Market microstructure notes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
