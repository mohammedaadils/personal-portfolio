import { skills } from "../content";

export default function SkillsContent() {
  return (
    <>
      {skills.map((group) => (
        <article key={group.label} className="skill-item">
          <div className="item-left">{group.label}</div>
          <div className="stack" style={{ marginTop: 2 }}>
            {group.items.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </article>
      ))}
    </>
  );
}
