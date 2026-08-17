import { profile } from "../content";

const linkKeys = [
  { key: "linkedin" as const, label: "linkedin" },
  { key: "github" as const, label: "github" },
  { key: "medium" as const, label: "medium" },
  { key: "resume" as const, label: "resume" },
];

export default function ContactContent() {
  return (
    <div className="item" style={{ borderTop: "none" }}>
      <div className="item-left">
        Say hello
        <br />
        <br />
        {profile.location}
      </div>

      <div>
        <h3 className="item-title">Let&apos;s connect.</h3>
        <p className="item-body">{profile.availability}</p>
        <p className="item-body" style={{ marginTop: 12 }}>
          Please reach out to{" "}
          <a href={`mailto:${profile.email}`} className="ext">
            {profile.email}
          </a>
        </p>
      </div>

      <div className="item-right">
        <div className="label">Links</div>
        <div className="links-col">
          {linkKeys.map((l) => (
            <a
              key={l.key}
              href={profile.socials[l.key]}
              target="_blank"
              rel="noopener noreferrer"
              className="ext"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
