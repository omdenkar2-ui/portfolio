type TickerItem =
  | {
      kind: "card";
      year: string;
      title: string;
      hook: string;
      rare?: boolean;
    }
  | {
      kind: "photo";
      src: string;
      alt: string;
      caption: string;
      focus?: string;
    };

const items: TickerItem[] = [
  {
    kind: "card",
    year: "2021",
    title: "UNESCO · Global Finalist",
    hook: "Top of 460+ entries from 87 countries.",
    rare: true,
  },
  {
    kind: "card",
    year: "2024",
    title: "IOQM · Round 2",
    hook: "Cleared the national math-olympiad filter.",
    rare: true,
  },
  {
    kind: "photo",
    src: "/photos/medals.png",
    alt: "Collection of SOF NCO, NSO, IMO, IEO olympiad medals",
    caption: "OLYMPIADS · 13+ medals",
    focus: "50% 50%",
  },
  {
    kind: "card",
    year: "2014 — 20",
    title: "13+ Olympiad Medals",
    hook: "NCO · NSO · IMO · IEO · IGKO · TERI GREEN.",
  },
  {
    kind: "card",
    year: "2024",
    title: "NMTC · Round 2",
    hook: "AMTI's talent contest — advanced to round 2.",
    rare: true,
  },
  {
    kind: "photo",
    src: "/photos/om-certs.jpg",
    alt: "Om Denkar holding Ryewood International School certificates",
    caption: "RYEWOOD · class topper",
    focus: "50% 35%",
  },
  {
    kind: "card",
    year: "2023",
    title: "ICSE · School Rank 1",
    hook: "96%. School topper. Seven-year GP holder.",
  },
  {
    kind: "card",
    year: "2015 — 22",
    title: "7 yrs General Proficiency",
    hook: "Top academic standing. Every. Single. Year.",
  },
  {
    kind: "photo",
    src: "/photos/trophies.png",
    alt: "Trophy shelf — academic and co-curricular awards",
    caption: "TROPHY SHELF · 2014–23",
    focus: "50% 40%",
  },
  {
    kind: "card",
    year: "2025",
    title: "TiHAN IIT Hyderabad",
    hook: "Top 1%ile · AIML + Drone Tech.",
  },
  {
    kind: "card",
    year: "2024",
    title: "CruxlyTech · First Revenue",
    hook: "4 US sales. Zero ad spend. Hard lesson.",
  },
  {
    kind: "card",
    year: "2025 →",
    title: "Napkin · Shipping",
    hook: "Multi-agent backend · 75 / 0 tests · live.",
  },
];

function Card(item: Extract<TickerItem, { kind: "card" }>) {
  return (
    <div className="ticker-item ticker-card" role="listitem">
      <div className="ticker-card__head">
        <span className="ticker-card__year">{item.year}</span>
        {item.rare && <span className="ticker-card__rare">★ RARE</span>}
      </div>
      <div className="ticker-card__title">{item.title}</div>
      <div className="ticker-card__hook">{item.hook}</div>
    </div>
  );
}

function Photo(item: Extract<TickerItem, { kind: "photo" }>) {
  return (
    <div className="ticker-item ticker-photo" role="listitem">
      <img
        src={item.src}
        alt={item.alt}
        style={{ objectPosition: item.focus ?? "50% 50%" }}
        loading="lazy"
      />
      <span className="ticker-photo__caption">{item.caption}</span>
    </div>
  );
}

export default function StatsStrip() {
  const render = (it: TickerItem, key: string) =>
    it.kind === "card" ? <Card key={key} {...it} /> : <Photo key={key} {...it} />;

  return (
    <div className="stats-strip" aria-label="Achievement ticker">
      <div className="ticker">
        <div className="ticker__track" role="list">
          {items.map((it, i) => render(it, `a-${i}`))}
          <div className="ticker__dup" aria-hidden="true">
            {items.map((it, i) => render(it, `b-${i}`))}
          </div>
        </div>
        <div className="ticker__fade ticker__fade--l" aria-hidden="true" />
        <div className="ticker__fade ticker__fade--r" aria-hidden="true" />
      </div>
    </div>
  );
}
