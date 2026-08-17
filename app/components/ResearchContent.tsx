import { research } from "../content";

export default function ResearchContent() {
  return (
    <>
      {research.map((r, i) => (
        <article key={i} className="item">
          <div className="item-left">{r.date}</div>

          <div>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ext"
              style={{ border: "none", padding: 0 }}
            >
              <h3 className="item-title" style={{ display: "inline" }}>
                {r.title}
              </h3>
            </a>
            <p className="item-body">{r.blurb}</p>
          </div>

          <div className="item-right">
            <div className="label">{r.venue}</div>
            <p className="meta" style={{ marginTop: 8 }}>
              {r.category}
            </p>
            <div className="links-col" style={{ marginTop: 16 }}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ext"
              >
                read paper ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
