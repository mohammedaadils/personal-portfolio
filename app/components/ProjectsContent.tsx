import Link from "next/link";
import { projects } from "../projects-data";

export default function ProjectsContent() {
  return (
    <>
      {projects.map((p) => (
        <article key={p.slug} className="item">
          <div className="item-left">{p.category}</div>

          <div>
            <h3 className="item-title">
              {p.title}
              {p.company && <span className="at"> @{p.company}</span>}
            </h3>
            <p className="item-body">{p.summary}</p>
          </div>

          <div className="item-right">
            <div className="label">Stack</div>
            <div className="stack">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <div className="label mt24">Links</div>
            <div className="links-col">
              <Link href={`/projects/${p.slug}`} className="ext">
                case study →
              </Link>
              {p.links.github && p.links.github !== "#" && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext"
                >
                  github ↗
                </a>
              )}
              {p.links.live && p.links.live !== "#" && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext"
                >
                  live ↗
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
