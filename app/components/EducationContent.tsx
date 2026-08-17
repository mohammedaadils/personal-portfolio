import { education } from "../content";

export default function EducationContent() {
  return (
    <>
      {education.map((e, i) => (
        <article key={i} className="item">
          <div className="item-left">{e.year}</div>

          <div>
            <h3 className="item-title">
              {e.degree} <span className="at">@{e.school}</span>
            </h3>
            <p className="blue-sub">{e.subtitle}</p>

            {e.coursework.length > 0 && (
              <>
                <div className="label mt24">Coursework</div>
                <p className="meta" style={{ marginTop: 8 }}>
                  {e.coursework.join("  ·  ")}
                </p>
              </>
            )}
          </div>

          <div className="item-right">
            <div className="label">Highlights</div>
            <ul className="hl-list">
              {e.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}
