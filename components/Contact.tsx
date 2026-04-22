export default function Contact() {
  return (
    <section className="sec" id="contact" style={{ paddingBottom: 48 }}>
      <div className="page">
        <div className="sec-label">
          <span className="chip">§ V / Contact</span>
          <span className="mono-label mute">NEW GAME</span>
        </div>

        <div className="press-start reveal">
          <h2>
            PRESS <span className="accent">START</span>
          </h2>
          <p>
            If you&apos;re hiring for research, quant, or AI-agent engineering internships —
            or just want to talk about building — drop a line.
          </p>
          <div className="cta-row">
            <a href="mailto:om.denkar_bsc2029@tetr.com" className="brut-btn brut-btn--lg">
              ✉ Email →
            </a>
            <a
              href="https://www.linkedin.com/in/om-denkar-506470272/"
              target="_blank"
              rel="noreferrer"
              className="brut-btn brut-btn--lg brut-btn--ink"
            >
              ⚡ LinkedIn →
            </a>
          </div>
        </div>

        <div className="contact-lines">
          <div className="contact-line">
            <span className="l">Email</span>
            <a href="mailto:om.denkar_bsc2029@tetr.com" className="v link">
              om.denkar_bsc2029@tetr.com
            </a>
          </div>
          <div className="contact-line">
            <span className="l">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/om-denkar-506470272/"
              target="_blank"
              rel="noreferrer"
              className="v link"
            >
              /in/om-denkar
            </a>
          </div>
          <div className="contact-line">
            <span className="l">Napkin</span>
            <a href="https://usenapkin.com" target="_blank" rel="noreferrer" className="v link">
              usenapkin.com
            </a>
          </div>
          <div className="contact-line">
            <span className="l">Location</span>
            <span className="v">Lonavla, IN · GMT+5:30</span>
          </div>
        </div>
      </div>

      <footer className="colophon">
        <span>© 2026 Om Denkar</span>
        <span>Built with Next.js · Space Grotesk</span>
        <span>
          <a href="#top" className="link">↑ Back to top</a>
        </span>
      </footer>
    </section>
  );
}
