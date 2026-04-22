type Achievement = {
  year: string;
  title: string;
  body: string;
  points: number;
  rare?: boolean;
};

const items: Achievement[] = [
  {
    year: "2024",
    title: "IOQM · Round 2 Qualifier",
    body:
      "Indian Olympiad Qualifier in Mathematics — cleared Round 1 to advance to Round 2.",
    points: 250,
    rare: true,
  },
  {
    year: "2024",
    title: "NMTC · Round 2 Qualifier",
    body: "National Mathematics Talent Contest (AMTI) — cleared Round 1 to advance.",
    points: 200,
    rare: true,
  },
  {
    year: "2025",
    title: "TiHAN IIT Hyderabad · Top 1%ile",
    body: "Specialized program in AI & Machine Learning with Drone Tech.",
    points: 200,
  },
  {
    year: "2021",
    title: "UNESCO Worldwide Youth · Global Finalist",
    body:
      "Top finalist of 460+ entries across 87 countries. Scholarship to Builders of the Universe, Hood College MD.",
    points: 300,
    rare: true,
  },
  {
    year: "2023",
    title: "ICSE · School Rank 1",
    body: "96% overall. Maths 97, Science 91, Home Science 99. Ryewood International School.",
    points: 150,
  },
  {
    year: "2015 — 22",
    title: "General Proficiency Holder · 7 years",
    body: "Awarded every year for top overall academic standing.",
    points: 140,
  },
  {
    year: "2014 — 20",
    title: "13+ Olympiad Medals",
    body:
      "SOF NCO, NSO, IMO, IEO, IGKO, TERI GREEN. Multiple class-topper rank-1 medals.",
    points: 130,
  },
  {
    year: "2024",
    title: "First revenue · CruxlyTech",
    body: "Four US sales with zero ad spend. Learned distribution economics the hard way.",
    points: 90,
  },
];

export default function Achievements() {
  const total = items.reduce((s, a) => s + a.points, 0);

  return (
    <section className="sec" id="achievements">
      <div className="page">
        <div className="sec-label">
          <span className="chip">§ III / Achievements</span>
          <span className="mono-label mute">Unlocked</span>
        </div>
        <h2 className="sec-title">Trophy case.</h2>

        <div className="ach-header">
          <div className="ach-total">
            <span className="n">{total.toLocaleString()}</span>
            <span className="l">Total · {items.length} unlocked</span>
          </div>
          <div className="ach-medals">
            <img
              src="/photos/medals.png"
              alt="Collection of 13+ olympiad medals: SOF NCO, NSO, IMO, IEO, IGKO, TERI GREEN"
              loading="lazy"
            />
            <span className="ach-medals__caption">
              13+ Medals · NCO · NSO · IMO · IEO · IGKO
            </span>
          </div>
        </div>

        <div className="ach-grid">
          {items.map((a, i) => (
            <div key={i} className="ach-card reveal">
              {a.rare && <span className="unlocked">● Rare</span>}
              <div className="year">{a.year}</div>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
              <div className="points">+ {a.points} pts</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
