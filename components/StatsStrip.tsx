type TickerCard = {
  year: string;
  title: string;
  hook: string;
  rare?: boolean;
};

const items: TickerCard[] = [
  {
    year: "2021",
    title: "UNESCO · Global Finalist",
    hook: "Top of 460+ entries from 87 countries.",
    rare: true,
  },
  {
    year: "2024",
    title: "IOQM · Round 2",
    hook: "Cleared the national math-olympiad filter.",
    rare: true,
  },
  {
    year: "2014 — 20",
    title: "13+ Olympiad Medals",
    hook: "NCO · NSO · IMO · IEO · IGKO · TERI GREEN.",
  },
  {
    year: "2024",
    title: "NMTC · Round 2",
    hook: "AMTI's talent contest — advanced to round 2.",
    rare: true,
  },
  {
    year: "2023",
    title: "ICSE · School Rank 1",
    hook: "96%. School topper. Seven-year GP holder.",
  },
  {
    year: "2015 — 22",
    title: "7 yrs General Proficiency",
    hook: "Top academic standing. Every. Single. Year.",
  },
  {
    year: "2025",
    title: "TiHAN IIT Hyderabad",
    hook: "Top 1%ile · AIML + Drone Tech.",
  },
  {
    year: "2024",
    title: "CruxlyTech · First Revenue",
    hook: "4 US sales. Zero ad spend. Hard lesson.",
  },
  {
    year: "2025 →",
    title: "Napkin · Shipping",
    hook: "Multi-agent backend · 75 / 0 tests · live.",
  },
];

function Card({ year, title, hook, rare }: TickerCard) {
  return (
    <div className="ticker-item ticker-card" role="listitem">
      <div className="ticker-card__head">
        <span className="ticker-card__year">{year}</span>
        {rare && <span className="ticker-card__rare">★ RARE</span>}
      </div>
      <div className="ticker-card__title">{title}</div>
      <div className="ticker-card__hook">{hook}</div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <div className="stats-strip" aria-label="Achievement ticker">
      <div className="ticker">
        <div className="ticker__track" role="list">
          {items.map((it, i) => (
            <Card key={`a-${i}`} {...it} />
          ))}
          <div className="ticker__dup" aria-hidden="true">
            {items.map((it, i) => (
              <Card key={`b-${i}`} {...it} />
            ))}
          </div>
        </div>
        <div className="ticker__fade ticker__fade--l" aria-hidden="true" />
        <div className="ticker__fade ticker__fade--r" aria-hidden="true" />
      </div>
    </div>
  );
}
