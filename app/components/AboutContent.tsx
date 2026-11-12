import { about, profile } from "../content";

export default function AboutContent() {
  return (
    <div className="item" style={{ borderTop: "none" }}>
      <div className="item-left">
        Backend first
        <br />
        <br />
        {profile.location}
      </div>

      <div>
        <h3 className="item-title">Measured, not demoed.</h3>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="item-body" style={i > 0 ? { marginTop: 12 } : undefined}>
            {p}
          </p>
        ))}
        <p className="item-body" style={{ marginTop: 12 }}>
          <a
            href={about.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ext"
          >
            {about.paperNote} ↗
          </a>
        </p>
      </div>

      <div className="item-right">
        <div className="label">Highlights</div>
        <ul className="hl-list">
          {about.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
