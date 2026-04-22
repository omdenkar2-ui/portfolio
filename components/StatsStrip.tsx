const stats = [
  { v: "4+", k: "Agents shipped" },
  { v: "2024", k: "IOQM + NMTC R2" },
  { v: "96%", k: "ICSE · rank 1" },
  { v: "7 yrs", k: "Gen. Proficiency" },
  { v: "460+", k: "UNESCO — finalist of" },
  { v: "87", k: "Countries beaten" },
  { v: "1%ile", k: "TiHAN IIT-H" },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip" aria-label="Career stats">
      <div className="stats-strip-inner">
        {stats.map((s, i) => (
          <div key={i} className="stats-strip-item">
            <div className="v">{s.v}</div>
            <div className="k">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
