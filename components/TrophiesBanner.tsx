export default function TrophiesBanner() {
  return (
    <section className="trophies-banner" aria-label="Trophy shelf">
      <img
        src="/photos/trophies.png"
        alt="Trophy shelf spanning 2014–2023 — academic, olympiad, and inter-school awards"
        loading="lazy"
      />
      <div className="trophies-banner__overlay" aria-hidden="true" />
      <span className="trophies-banner__caption">Trophy shelf · 2014 — 2023</span>
      <p className="trophies-banner__tagline">
        <span className="display-italic">Keep</span> winning.
      </p>
    </section>
  );
}
