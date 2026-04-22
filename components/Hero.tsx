import TypedTagline from "./TypedTagline";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid bg-dot-grid" aria-hidden />
      <div className="page">
        <div className="hero-layout">
          <div className="player-card fadeup" style={{ animationDelay: "0.05s" }}>
            <div className="player-head">
              <span className="brut-tag brut-tag--ink">PLAYER 01</span>
              <span className="brut-tag">Class · AI Engineer</span>
              <span className="brut-tag brut-tag--white">LV. 18</span>
              <span className="brut-tag brut-tag--pale">Lonavla, IN</span>
            </div>

            <h1 className="gamertag">
              Om <span className="accent">Denkar.</span>
            </h1>

            <TypedTagline />

            <div className="player-stats">
              <div className="stat-cell">
                <div className="v">4</div>
                <div className="k">Products shipped</div>
              </div>
              <div className="stat-cell">
                <div className="v">13+</div>
                <div className="k">Olympiad medals</div>
              </div>
              <div className="stat-cell">
                <div className="v">IOQM</div>
                <div className="k">R2 qualifier · &apos;24</div>
              </div>
              <div className="stat-cell">
                <div className="v">T1%</div>
                <div className="k">TiHAN IIT-H AIML</div>
              </div>
            </div>
          </div>

          <aside className="hero-side">
            <div className="hud-card fadeup" style={{ animationDelay: "0.2s" }}>
              <h4>Now Playing</h4>
              <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 6 }}>
                Co-founder · Engineering <span className="mute">at</span>{" "}
                <a href="https://usenapkin.com" target="_blank" rel="noreferrer" className="link">Napkin</a>
              </div>
              <div className="mono" style={{ fontSize: 12, color: "var(--mute)" }}>
                Multi-agent backend · FastAPI · Supabase · Claude
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                <span className="brut-tag brut-tag--pale">● live</span>
                <span className="brut-tag brut-tag--white">75 / 0 tests</span>
              </div>
            </div>

            <div className="hud-card fadeup" style={{ animationDelay: "0.35s" }}>
              <h4>Looking For</h4>
              <div style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 12 }}>
                AI / ML / quant internships. Places where math does real labor — or where agents
                have to ship in production.
              </div>
              <a href="#contact" className="brut-btn" style={{ width: "100%", justifyContent: "center" }}>
                Ping me →
              </a>
            </div>

            <div className="hud-card fadeup" style={{ animationDelay: "0.5s" }}>
              <h4>Controls</h4>
              <div className="kbd-hint">
                <span>Command palette</span>
                <span className="keys"><span className="kbd">⌘</span><span className="kbd">K</span></span>
              </div>
              <div className="kbd-hint">
                <span>Go to Work</span>
                <span className="keys"><span className="kbd">G</span><span className="kbd">W</span></span>
              </div>
              <div className="kbd-hint">
                <span>Toggle theme</span>
                <span className="keys"><span className="kbd">T</span></span>
              </div>
              <div className="kbd-hint">
                <span className="mute">Find the easter egg</span>
                <span className="keys"><span className="kbd">↑↑↓↓</span></span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
