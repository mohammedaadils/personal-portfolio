import { experience } from "../content";

export default function ExperienceContent() {
  return (
    <>
      {experience.map((job, i) => (
        <article key={i} className="item">
          <div className="item-left">{job.period}</div>

          <div>
            <h3 className="item-title">
              {job.role} <span className="at">@{job.company}</span>
            </h3>
            <p className="item-body">{job.body}</p>
          </div>

          <div className="item-right">
            <div className="label">Stack</div>
            <div className="stack">
              {job.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
