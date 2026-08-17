import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../projects-data";
import { profile } from "../../content";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <main className="wrap" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <Link href="/#projects" className="ext" style={{ border: "none", padding: 0 }}>
          ← back to projects
        </Link>

        <div className="label" style={{ marginTop: 44 }}>
          {project.category} · {project.year}
        </div>
        <h1
          className="hero-name"
          style={{ fontSize: "clamp(38px, 8vw, 72px)", marginTop: 10 }}
        >
          {project.title}
          <span className="accent">.</span>
        </h1>
        <p className="hero-sub" style={{ marginTop: 14 }}>{project.tagline}</p>

        <div className="stack" style={{ marginTop: 24 }}>
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="links-col" style={{ flexDirection: "row", gap: 20, marginTop: 24 }}>
          {project.links.github && project.links.github !== "#" && (
            <a href={project.links.github} className="ext" target="_blank" rel="noopener noreferrer">
              github ↗
            </a>
          )}
          {project.links.live && project.links.live !== "#" && (
            <a href={project.links.live} className="ext" target="_blank" rel="noopener noreferrer">
              live ↗
            </a>
          )}
        </div>

        <div style={{ borderTop: "1px solid var(--line)", marginTop: 40, paddingTop: 36 }}>
          <div className="label">Overview</div>
          <p className="item-body" style={{ maxWidth: 680, marginTop: 12 }}>
            {project.overview}
          </p>

          <div className="label" style={{ marginTop: 36 }}>Highlights</div>
          <ul className="hl-list" style={{ marginTop: 12 }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ maxWidth: 680, fontSize: 14 }}>{h}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
